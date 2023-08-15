import { reactive, toRef, watch, computed } from 'vue';
import { h as currentUser, m as useMasto, b2 as onHydrated, k as isHydrated, b3 as until } from '../server.mjs';

const notifications = reactive({});
function useNotifications() {
  const id = currentUser.value?.account.id;
  const __$temp_1 = useMasto(), client = toRef(__$temp_1, "client"), canStreaming = toRef(__$temp_1, "canStreaming");
  async function clearNotifications() {
    if (!id || !notifications[id])
      return;
    const lastReadId = notifications[id][1][0];
    notifications[id][1] = [];
    if (lastReadId) {
      await client.value.v1.markers.create({
        notifications: { lastReadId }
      });
    }
  }
  async function connect() {
    if (!isHydrated.value || !id || notifications[id] || !currentUser.value?.token)
      return;
    let resolveStream;
    const stream = new Promise((resolve) => resolveStream = resolve);
    notifications[id] = [stream, []];
    await until(canStreaming).toBe(true);
    client.value.v1.stream.streamUser().then(resolveStream);
    stream.then((s) => s.on("notification", (n) => {
      if (notifications[id])
        notifications[id][1].unshift(n.id);
    }));
    const position = await client.value.v1.markers.fetch({ timeline: ["notifications"] });
    const paginator = client.value.v1.notifications.list({ limit: 30 });
    do {
      const result = await paginator.next();
      if (!result.done && result.value.length) {
        for (const notification of result.value) {
          if (notification.id === position.notifications.lastReadId)
            return;
          notifications[id][1].push(notification.id);
        }
      } else {
        break;
      }
    } while (true);
  }
  function disconnect() {
    if (!id || !notifications[id])
      return;
    notifications[id][0].then((stream) => stream.disconnect());
    notifications[id] = void 0;
  }
  watch(currentUser, disconnect);
  onHydrated(() => {
    connect();
  });
  return {
    notifications: computed(() => id ? notifications[id]?.[1].length ?? 0 : 0),
    disconnect,
    clearNotifications
  };
}

export { useNotifications as u };
