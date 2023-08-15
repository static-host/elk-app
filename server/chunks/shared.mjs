import { $fetch } from 'ofetch';
import { a as useStorage } from './nitro/node-server.mjs';

const env = "canary";

const APP_NAME = "Elk";

const storage = useStorage();
function getRedirectURI(origin, server) {
  origin = origin.replace(/\?.*$/, "");
  return `${origin}/api/${server}/oauth/${encodeURIComponent(origin)}`;
}
async function fetchAppInfo(origin, server) {
  const app = await $fetch(`https://${server}/api/v1/apps`, {
    method: "POST",
    body: {
      client_name: APP_NAME + (` (${env})` ),
      website: "https://elk.zone",
      redirect_uris: getRedirectURI(origin, server),
      scopes: "read write follow push"
    }
  });
  return app;
}
async function getApp(origin, server) {
  const host = origin.replace(/^https?:\/\//, "").replace(/[^\w\d]/g, "-").replace(/\?.*$/, "");
  const key = `servers:v3:${server}:${host}.json`.toLowerCase();
  try {
    if (await storage.hasItem(key))
      return storage.getItem(key, {});
    const appInfo = await fetchAppInfo(origin, server);
    await storage.setItem(key, appInfo);
    return appInfo;
  } catch {
    return null;
  }
}
async function deleteApp(server) {
  const keys = await storage.getKeys(`servers:v3:${server}:`);
  for (const key of keys)
    await storage.removeItem(key);
}
async function listServers() {
  const keys = await storage.getKeys("servers:v3:");
  const servers = /* @__PURE__ */ new Set();
  for await (const key of keys) {
    const id = key.split(":")[2];
    if (id)
      servers.add(id.toLocaleLowerCase());
  }
  return Array.from(servers).sort();
}

export { getRedirectURI as a, deleteApp as d, getApp as g, listServers as l };
