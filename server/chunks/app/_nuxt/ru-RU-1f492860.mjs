const ruRU = {
  "a11y": {
    "loading_page": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435"]);
    },
    "loading_titled_page": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B ", _interpolate(_list(0)), ", \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435"]);
    },
    "locale_changed": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u042F\u0437\u044B\u043A \u0438\u0437\u043C\u0435\u043D\u0435\u043D \u043D\u0430 ", _interpolate(_list(0))]);
    },
    "locale_changing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u044F\u0437\u044B\u043A\u0430, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435"]);
    },
    "route_loaded": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ", _interpolate(_list(0)), " \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u0430"]);
    }
  },
  "account": {
    "avatar_description": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0410\u0432\u0430\u0442\u0430\u0440 ", _interpolate(_list(0))]);
    },
    "blocked_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u044B \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u044D\u0442\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C."]);
    },
    "blocked_domains": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0434\u043E\u043C\u0435\u043D\u044B"]);
    },
    "blocked_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"]);
    },
    "blocking": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D"]);
    },
    "bot": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0411\u041E\u0422"]);
    },
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"]);
    },
    "follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0427\u0438\u0442\u0430\u0442\u044C"]);
    },
    "follow_back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0427\u0438\u0442\u0430\u0442\u044C"]);
    },
    "follow_requested": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0438"]);
    },
    "followers": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0427\u0438\u0442\u0430\u0442\u0435\u043B\u0438"]);
    },
    "followers_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_list(0)), " \u0427\u0438\u0442\u0430\u0442\u0435\u043B\u044C"]), _normalize([_interpolate(_list(0)), " \u0427\u0438\u0442\u0430\u0442\u0435\u043B\u044F"]), _normalize([_interpolate(_list(0)), " \u0427\u0438\u0442\u0430\u0442\u0435\u043B\u0435\u0439"]), _normalize([_interpolate(_list(0)), " \u0427\u0438\u0442\u0430\u0442\u0435\u043B\u0435\u0439"])]);
    },
    "following": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0427\u0438\u0442\u0430\u044E"]);
    },
    "following_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u0432 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0445"]);
    },
    "follows_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0427\u0438\u0442\u0430\u0435\u0442 \u0432\u0430\u0441"]);
    },
    "go_to_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043F\u0440\u043E\u0444\u0438\u043B\u044E"]);
    },
    "joined": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"]);
    },
    "moved_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0442\u0435\u043F\u0435\u0440\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0434\u0440\u0443\u0433\u0443\u044E \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C:"]);
    },
    "muted_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0418\u0433\u043D\u043E\u0440\u0438\u0440\u0443\u0435\u043C\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"]);
    },
    "muting": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u044B \u0438\u0433\u043D\u043E\u0440\u0438\u0440\u0443\u0435\u0442\u0435"]);
    },
    "mutuals": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0437\u0430\u0438\u043C\u043D\u043E \u0447\u0438\u0442\u0430\u044E"]);
    },
    "notifications_on_post_disable": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u041D\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u044F\u0442\u044C \u043E \u043F\u043E\u0441\u0442\u0430\u0445 ", _interpolate(_named("username"))]);
    },
    "notifications_on_post_enable": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u044F\u0442\u044C \u043E \u043F\u043E\u0441\u0442\u0430\u0445 ", _interpolate(_named("username"))]);
    },
    "pinned": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043D\u044B\u0435 \u043F\u043E\u0441\u0442\u044B"]);
    },
    "posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u0441\u0442\u044B"]);
    },
    "posts_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_list(0)), " \u041F\u043E\u0441\u0442"]), _normalize([_interpolate(_list(0)), " \u041F\u043E\u0441\u0442\u0430"]), _normalize([_interpolate(_list(0)), " \u041F\u043E\u0441\u0442\u043E\u0432"]), _normalize([_interpolate(_list(0)), " \u041F\u043E\u0441\u0442\u043E\u0432"])]);
    },
    "profile_description": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043F\u0440\u043E\u0444\u0438\u043B\u044F ", _interpolate(_list(0))]);
    },
    "profile_personal_note": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u043C\u0435\u0442\u043A\u0430 \u043A \u043F\u0440\u043E\u0444\u0438\u043B\u044E"]);
    },
    "profile_unavailable": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D"]);
    },
    "request_follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443"]);
    },
    "unblock": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0435\u0440\u0435\u0441\u0442\u0430\u0442\u044C \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C"]);
    },
    "unfollow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0435\u0440\u0435\u0441\u0442\u0430\u0442\u044C \u0447\u0438\u0442\u0430\u0442\u044C"]);
    },
    "unmute": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0435\u0440\u0435\u0441\u0442\u0430\u0442\u044C \u0438\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C"]);
    },
    "view_other_followers": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u0438 \u0441 \u0434\u0440\u0443\u0433\u0438\u0445 \u0438\u043D\u0441\u0442\u0430\u043D\u0441\u043E\u0432 \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u044B"]);
    },
    "view_other_following": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0438 \u0441 \u0434\u0440\u0443\u0433\u0438\u0445 \u0438\u043D\u0441\u0442\u0430\u043D\u0441\u043E\u0432 \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u044B."]);
    }
  },
  "action": {
    "apply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C"]);
    },
    "bookmark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438"]);
    },
    "bookmarked": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438"]);
    },
    "boost": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0440\u0435\u043F\u043E\u0441\u0442"]);
    },
    "boost_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "boosted": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0420\u0435\u043F\u043E\u0441\u0442 \u0441\u0434\u0435\u043B\u0430\u043D"]);
    },
    "clear_publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0435 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438"]);
    },
    "clear_upload_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0444\u0430\u0439\u043B\u043E\u0432"]);
    },
    "close": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u043A\u0440\u044B\u0442\u044C"]);
    },
    "compose": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C"]);
    },
    "confirm": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u0430"]);
    },
    "done": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0413\u043E\u0442\u043E\u0432\u043E"]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"]);
    },
    "enter_app": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044E"]);
    },
    "favourite": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"]);
    },
    "favourite_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "favourited": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"]);
    },
    "more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0411\u043E\u043B\u044C\u0448\u0435"]);
    },
    "next": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u0430\u043B\u0435\u0435"]);
    },
    "prev": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435"]);
    },
    "publish": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C"]);
    },
    "reply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C"]);
    },
    "reply_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "reset": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"]);
    },
    "save": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"]);
    },
    "save_changes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"]);
    },
    "sign_in": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u043E\u0439\u0442\u0438"]);
    },
    "sign_in_to": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0412\u043E\u0439\u0442\u0438 \u0432 ", _interpolate(_list(0))]);
    },
    "switch_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C"]);
    },
    "vote": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C"]);
    }
  },
  "app_desc_short": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0432\u0435\u0431-\u043A\u043B\u0438\u0435\u043D\u0442 \u0434\u043B\u044F Mastodon"]);
  },
  "app_logo": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["\u041B\u043E\u0433\u043E\u0442\u0438\u043F Elk"]);
  },
  "app_name": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Elk"]);
  },
  "attachment": {
    "edit_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"]);
    },
    "remove_label": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u0430\u0439\u043B"]);
    }
  },
  "command": {
    "activate": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0410\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C"]);
    },
    "complete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C"]);
    },
    "compose_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043F\u043E\u0441\u0442"]);
    },
    "n-people-in-the-past-n-days": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u043B\u044E\u0434\u0435\u0439 \u0437\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 ", _interpolate(_list(1)), " \u0434"]);
    },
    "select_lang": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u044F\u0437\u044B\u043A"]);
    },
    "sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0443\u044E \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C"]);
    },
    "switch_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043D\u0430 ", _interpolate(_list(0))]);
    },
    "switch_account_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043D\u0430 \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C"]);
    },
    "toggle_dark_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0435\u043C\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C"]);
    },
    "toggle_zen_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0440\u0435\u0436\u0438\u043C \u0434\u0437\u0435\u043D"]);
    }
  },
  "common": {
    "end_of_list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041A\u043E\u043D\u0435\u0446 \u0441\u043F\u0438\u0441\u043A\u0430"]);
    },
    "error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0428\u0418\u0411\u041A\u0410"]);
    },
    "fetching": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435"]);
    },
    "in": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0432"]);
    },
    "no_bookmarks": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0435\u0442 \u0437\u0430\u043A\u043B\u0430\u0434\u043E\u043A"]);
    },
    "no_favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0435\u0442 \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u0432\u0448\u0438\u0445\u0441\u044F \u043F\u043E\u0441\u0442\u043E\u0432"]);
    },
    "not_found": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["404 - \u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"]);
    },
    "offline_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u0445\u043E\u0436\u0435, \u0432\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0435\u0441\u044C \u0432 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0432\u0430\u0448\u0435 \u0441\u0435\u0442\u0435\u0432\u043E\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435."]);
    }
  },
  "compose": {
    "draft_title": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A ", _interpolate(_list(0))]);
    },
    "drafts": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A\u0438 (", _interpolate(_named("v")), ")"]);
    }
  },
  "confirm": {
    "block_account": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041E\u0442\u043C\u0435\u043D\u0430"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C ", _interpolate(_list(0)), "?"]);
      }
    },
    "block_domain": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041E\u0442\u043C\u0435\u043D\u0430"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C ", _interpolate(_list(0)), "?"]);
      }
    },
    "common": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041D\u0435\u0442"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0414\u0430"]);
      }
    },
    "delete_list": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041E\u0442\u043C\u0435\u043D\u0430"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0423\u0434\u0430\u043B\u0438\u0442\u044C"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(['\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A "', _interpolate(_list(0)), '"?']);
      }
    },
    "delete_posts": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041E\u0442\u043C\u0435\u043D\u0430"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0423\u0434\u0430\u043B\u0438\u0442\u044C"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u043F\u043E\u0441\u0442?"]);
      }
    },
    "mute_account": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041E\u0442\u043C\u0435\u043D\u0430"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0421\u043A\u0440\u044B\u0442\u044C"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u043A\u0440\u044B\u0442\u044C ", _interpolate(_list(0)), "?"]);
      }
    },
    "show_reblogs": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041D\u0435\u0442"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0414\u0430"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u043D\u043E\u0432\u0430 \u0432\u0438\u0434\u0435\u0442\u044C \u0440\u0435\u043F\u043E\u0441\u0442\u044B \u043E\u0442 ", _interpolate(_list(0)), "?"]);
      }
    },
    "unfollow": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041D\u0435\u0442"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0414\u0430"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0442\u044C \u0447\u0438\u0442\u0430\u0442\u044C \u044D\u0442\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F?"]);
      }
    }
  },
  "conversation": {
    "with": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0430 \u0441"]);
    }
  },
  "custom_cards": {
    "stackblitz": {
      "lines": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0421\u0442\u0440\u043E\u043A\u0438 ", _interpolate(_list(0))]);
      },
      "open": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041E\u0442\u043A\u0440\u044B\u0442\u044C"]);
      },
      "snippet_from": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0421\u043D\u0438\u043F\u043F\u0435\u0442 \u043E\u0442 ", _interpolate(_list(0))]);
      }
    }
  },
  "error": {
    "account_not_found": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0423\u0447\u0435\u0442\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C ", _interpolate(_list(0)), " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430"]);
    },
    "explore-list-empty": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u0435\u0439\u0447\u0430\u0441 \u0442\u0440\u0435\u043D\u0434\u044B \u043F\u0443\u0441\u0442\u044B. \u0417\u0430\u0433\u043B\u044F\u043D\u0438\u0442\u0435 \u043F\u043E\u043F\u043E\u0437\u0436\u0435!"]);
    },
    "file_size_cannot_exceed_n_mb": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C ", _interpolate(_list(0)), " \u041C\u0431\u0430\u0439\u0442"]);
    },
    "sign_in_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0435 \u0443\u0434\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443."]);
    },
    "status_not_found": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u0441\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"]);
    },
    "unsupported_file_format": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0435\u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0444\u0430\u0439\u043B\u0430"]);
    }
  },
  "help": {
    "build_preview": {
      "desc1": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0412\u044B \u0441\u0435\u0439\u0447\u0430\u0441 \u043F\u0440\u043E\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442\u0435 \u043F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E Elk \u043E\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 - ", _interpolate(_list(0)), "."]);
      },
      "desc2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041E\u043D\u0430 \u043C\u043E\u0436\u0435\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043D\u0435\u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0435 \u0438 \u0434\u0430\u0436\u0435 \u0432\u0440\u0435\u0434\u043E\u043D\u043E\u0441\u043D\u044B\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F."]);
      },
      "desc3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041D\u0435 \u0432\u0445\u043E\u0434\u0438\u0442\u0435 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0441\u0432\u043E\u0435\u0439 \u0443\u0447\u0451\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438."]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0441\u0431\u043E\u0440\u043A\u0430"]);
      }
    },
    "desc_highlight": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u043C\u043E\u0436\u0435\u0442 \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0430\u0442\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u0439, \u0437\u0430\u0442\u043E \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043F\u0430\u0434\u0430\u0442\u044C\u0441\u044F \u0431\u0430\u0433\u0438."]);
    },
    "desc_para1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 Elk, \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0433\u043E \u0432\u0435\u0431-\u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0434\u043B\u044F Mastodon!"]);
    },
    "desc_para2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041C\u044B \u0443\u0441\u0435\u0440\u0434\u043D\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043D\u0430\u0434 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435\u043C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0438 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0435\u0433\u043E \u0443\u043B\u0443\u0447\u0448\u0430\u0435\u043C."]);
    },
    "desc_para3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0410 \u0435\u0449\u0435 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443, \u0441\u0442\u0430\u0432 \u0441\u043F\u043E\u043D\u0441\u043E\u0440\u043E\u043C \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u043D\u0430 GitHub Sponsors. \u041C\u044B \u043D\u0430\u0434\u0435\u0435\u043C\u0441\u044F, \u0447\u0442\u043E \u0432\u0430\u043C \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F Elk!"]);
    },
    "desc_para4": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u043C \u043A\u043E\u0434\u043E\u043C. \u0415\u0441\u043B\u0438 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u043E\u043C\u043E\u0447\u044C \u0441 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435\u043C, \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u044C\u044E \u0438\u043B\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u043E\u0439,"]);
    },
    "desc_para5": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0435 \u043A \u043D\u0430\u043C \u043D\u0430 GitHub"]);
    },
    "desc_para6": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0438 \u043F\u0440\u0438\u043C\u0438\u0442\u0435 \u0443\u0447\u0430\u0441\u0442\u0438\u0435."]);
    },
    "footer_team": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041A\u043E\u043C\u0430\u043D\u0434\u0430 Elk"]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u043F\u0440\u0435\u0432\u044C\u044E!"]);
    }
  },
  "language": {
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u0438\u0441\u043A"]);
    }
  },
  "list": {
    "add_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0432 \u0441\u043F\u0438\u0441\u043E\u043A"]);
    },
    "cancel_edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"]);
    },
    "clear_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0447\u0438\u0441\u0442\u043A\u0438"]);
    },
    "create": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u043E\u0437\u0434\u0430\u0442\u044C"]);
    },
    "delete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A"]);
    },
    "delete_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0438 \u0441\u043F\u0438\u0441\u043A\u0430"]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A"]);
    },
    "edit_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u0441\u043F\u0438\u0441\u043A\u0430"]);
    },
    "error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0441\u043F\u0438\u0441\u043A\u0430"]);
    },
    "error_prefix": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0448\u0438\u0431\u043A\u0430: "]);
    },
    "list_title_placeholder": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u043F\u0438\u0441\u043A\u0430"]);
    },
    "modify_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0432 \u0441\u043F\u0438\u0441\u043E\u043A"]);
    },
    "remove_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430"]);
    },
    "save": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"]);
    }
  },
  "magic_keys": {
    "dialog_header": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0413\u043E\u0440\u044F\u0447\u0438\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438"]);
    },
    "groups": {
      "actions": {
        "boost": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0440\u0435\u043F\u043E\u0441\u0442"]);
        },
        "command_mode": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041A\u043E\u043C\u0430\u043D\u0434\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C"]);
        },
        "compose": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C"]);
        },
        "favourite": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"]);
        }
      },
      "media": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041C\u0435\u0434\u0438\u0430"]);
        }
      },
      "navigation": {
        "go_to_home": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0413\u043B\u0430\u0432\u043D\u0430\u044F"]);
        },
        "go_to_notifications": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"]);
        },
        "next_status": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0441\u0442\u0430\u0442\u0443\u0441"]);
        },
        "previous_status": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u0441\u0442\u0430\u0442\u0443\u0441"]);
        },
        "shortcut_help": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041F\u043E\u043C\u043E\u0449\u044C \u043F\u043E \u0433\u043E\u0440\u044F\u0447\u0438\u043C \u043A\u043B\u0430\u0432\u0438\u0448\u0430\u043C"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F"]);
        }
      }
    },
    "sequence_then": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["then"]);
    }
  },
  "menu": {
    "add_personal_note": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043C\u0435\u0442\u043A\u0443 \u043A \u043F\u0440\u043E\u0444\u0438\u043B\u044E ", _interpolate(_list(0))]);
    },
    "block_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C ", _interpolate(_list(0))]);
    },
    "block_domain": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u043E\u043C\u0435\u043D ", _interpolate(_list(0))]);
    },
    "copy_link_to_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u044D\u0442\u043E\u0442 \u043F\u043E\u0441\u0442"]);
    },
    "copy_original_link_to_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043F\u043E\u0441\u0442 \u043D\u0430 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u043C \u0441\u0430\u0439\u0442\u0435"]);
    },
    "delete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0423\u0434\u0430\u043B\u0438\u0442\u044C"]);
    },
    "delete_and_redraft": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438 \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u0442\u044C"]);
    },
    "direct_message_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u041E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u043B\u0438\u0447\u043D\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 ", _interpolate(_list(0))]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"]);
    },
    "hide_reblogs": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0421\u043A\u0440\u044B\u0442\u044C \u0440\u0435\u043F\u043E\u0441\u0442\u044B \u043E\u0442 ", _interpolate(_list(0))]);
    },
    "mention_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0423\u043F\u043E\u043C\u044F\u043D\u0443\u0442\u044C ", _interpolate(_list(0))]);
    },
    "mute_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0418\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C ", _interpolate(_list(0))]);
    },
    "mute_conversation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0418\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u0441\u0442"]);
    },
    "open_in_original_site": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u043C \u0441\u0430\u0439\u0442\u0435"]);
    },
    "pin_on_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0432 \u043F\u0440\u043E\u0444\u0438\u043B\u0435"]);
    },
    "remove_personal_note": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043C\u0435\u0442\u043A\u0443 \u043A \u043F\u0440\u043E\u0444\u0438\u043B\u044E ", _interpolate(_list(0))]);
    },
    "report_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 ", _interpolate(_list(0))]);
    },
    "share_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u044D\u0442\u0438\u043C \u043F\u043E\u0441\u0442\u043E\u043C"]);
    },
    "show_favourited_and_boosted_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041A\u0442\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u043B \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435 \u0438 \u0441\u0434\u0435\u043B\u0430\u043B \u0440\u0435\u043F\u043E\u0441\u0442"]);
    },
    "show_reblogs": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0440\u0435\u043F\u043E\u0441\u0442\u044B \u043E\u0442 ", _interpolate(_list(0))]);
    },
    "show_untranslated": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B"]);
    },
    "toggle_theme": {
      "dark": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0435\u043C\u043D\u0443\u044E \u0442\u0435\u043C\u0443"]);
      },
      "light": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0432\u0435\u0442\u043B\u0443\u044E \u0442\u0435\u043C\u0443"]);
      }
    },
    "translate_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u043F\u043E\u0441\u0442"]);
    },
    "unblock_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0420\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C ", _interpolate(_list(0))]);
    },
    "unblock_domain": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0420\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u043E\u043C\u0435\u043D ", _interpolate(_list(0))]);
    },
    "unfollow_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u041F\u0435\u0440\u0435\u0441\u0442\u0430\u0442\u044C \u0447\u0438\u0442\u0430\u0442\u044C ", _interpolate(_list(0))]);
    },
    "unmute_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u041D\u0435 \u0438\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C ", _interpolate(_list(0))]);
    },
    "unmute_conversation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0435 \u0438\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u043E\u0442 \u043F\u043E\u0441\u0442"]);
    },
    "unpin_on_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u043E\u0442 \u043F\u0440\u043E\u0444\u0438\u043B\u044F"]);
    }
  },
  "modals": {
    "aria_label_close": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u043A\u0440\u044B\u0442\u044C"]);
    }
  },
  "nav": {
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0430\u0437\u0430\u0434"]);
    },
    "blocked_domains": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0434\u043E\u043C\u0435\u043D\u044B"]);
    },
    "blocked_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"]);
    },
    "bookmarks": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0438"]);
    },
    "built_at": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0411\u0438\u043B\u0434 \u0441\u043E\u0431\u0440\u0430\u043D ", _interpolate(_list(0))]);
    },
    "compose": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C"]);
    },
    "conversations": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F"]);
    },
    "explore": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0431\u0437\u043E\u0440"]);
    },
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"]);
    },
    "federated": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0441\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0413\u043B\u0430\u0432\u043D\u0430\u044F"]);
    },
    "list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u043F\u0438\u0441\u043E\u043A"]);
    },
    "lists": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u043F\u0438\u0441\u043A\u0438"]);
    },
    "local": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u042D\u0442\u043E\u0442 \u0441\u0435\u0440\u0432\u0435\u0440"]);
    },
    "muted_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u043A\u0440\u044B\u0442\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"]);
    },
    "notifications": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"]);
    },
    "privacy": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0441\u0442\u044C"]);
    },
    "profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0440\u043E\u0444\u0438\u043B\u044C"]);
    },
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u0438\u0441\u043A"]);
    },
    "select_feature_flags": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0444\u043B\u0430\u0433\u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u0439"]);
    },
    "select_font_size": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0420\u0430\u0437\u043C\u0435\u0440 \u0442\u0435\u043A\u0441\u0442\u0430"]);
    },
    "select_language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u042F\u0437\u044B\u043A \u0441\u0430\u0439\u0442\u0430"]);
    },
    "settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"]);
    },
    "show_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0438\u043D\u0442\u0440\u043E"]);
    },
    "toggle_theme": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0435\u043C\u0443"]);
    },
    "zen_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(['\u0420\u0435\u0436\u0438\u043C "\u0414\u0437\u0435\u043D"']);
    }
  },
  "notification": {
    "favourited_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438 \u0432\u0430\u0448 \u043F\u043E\u0441\u0442 \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"]);
    },
    "followed_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0442\u0435\u043F\u0435\u0440\u044C \u0447\u0438\u0442\u0430\u0435\u0442 \u0432\u0430\u0441"]);
    },
    "followed_you_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_list(0)), " \u0447\u0438\u0442\u0430\u0442\u0435\u043B\u044C"]), _normalize([_interpolate(_list(0)), " \u0447\u0438\u0442\u0430\u0442\u0435\u043B\u044F"]), _normalize([_interpolate(_list(0)), " \u0447\u0438\u0442\u0430\u0442\u0435\u043B\u0435\u0439"]), _normalize([_interpolate(_list(0)), " \u0447\u0438\u0442\u0430\u0442\u0435\u043B\u0435\u0439"])]);
    },
    "missing_type": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0422\u0421\u0423\u0422\u0421\u0422\u0412\u0423\u0415\u0422 notification.type:"]);
    },
    "reblogged_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0441\u0434\u0435\u043B\u0430\u043B\u0438 \u0440\u0435\u0431\u043B\u043E\u0433 \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u043E\u0441\u0442\u0430"]);
    },
    "reported": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u043B\u0441\u044F \u043D\u0430 ", _interpolate(_list(1))]);
    },
    "request_to_follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0437\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u0447\u0442\u0435\u043D\u0438\u0435"]);
    },
    "signed_up": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043B\u0438\u0441\u044C"]);
    },
    "update_status": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u043E\u0431\u043D\u043E\u0432\u0438\u043B\u0438 \u0441\u0432\u043E\u0439 \u043F\u043E\u0441\u0442"]);
    }
  },
  "placeholder": {
    "content_warning": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435..."]);
    },
    "default_1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0427\u0442\u043E \u0443 \u0432\u0430\u0441 \u043D\u043E\u0432\u043E\u0433\u043E?"]);
    },
    "reply_to_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C ", _interpolate(_list(0))]);
    },
    "replying": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 \u043E\u0442\u0432\u0435\u0442"]);
    }
  },
  "polls": {
    "allow_multiple": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432\u044B\u0431\u043E\u0440 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432"]);
    },
    "cancel": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0442\u043C\u0435\u043D\u0430"]);
    },
    "create": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u043F\u0440\u043E\u0441"]);
    },
    "disallow_multiple": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432\u044B\u0431\u043E\u0440 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432"]);
    },
    "expiration": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u0435 \u043E\u043F\u0440\u043E\u0441\u0430"]);
    },
    "hide_votes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u043A\u0440\u044B\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0433\u043E\u043B\u043E\u0441\u043E\u0432 \u0434\u043E \u043A\u043E\u043D\u0446\u0430 \u043E\u043F\u0440\u043E\u0441\u0430"]);
    },
    "option_placeholder": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0412\u0430\u0440\u0438\u0430\u043D\u0442 \u043E\u0442\u0432\u0435\u0442\u0430 ", _interpolate(_named("current")), "/", _interpolate(_named("max"))]);
    },
    "remove_option": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u043E\u0442\u0432\u0435\u0442\u0430"]);
    },
    "settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043E\u043F\u0440\u043E\u0441\u0430"]);
    },
    "show_votes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0433\u043E\u043B\u043E\u0441\u043E\u0432"]);
    }
  },
  "pwa": {
    "dismiss": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C"]);
    },
    "install": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C"]);
    },
    "install_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C Elk"]);
    },
    "screenshots": {
      "dark": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442 Elk \u0441 \u0442\u0451\u043C\u043D\u043E\u0439 \u0442\u0435\u043C\u043E\u0439"]);
      },
      "light": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442 Elk \u0441\u043E \u0441\u0432\u0435\u0442\u043B\u043E\u0439 \u0442\u0435\u043C\u043E\u0439"]);
      }
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u043D\u043E\u0432\u043E\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 Elk!"]);
    },
    "update": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435"]);
    },
    "update_available_short": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C Elk"]);
    },
    "webmanifest": {
      "canary": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0432\u0435\u0431-\u043A\u043B\u0438\u0435\u043D\u0442 \u0434\u043B\u044F Mastodon (canary)"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (canary)"]);
        },
        "short_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (canary)"]);
        }
      },
      "dev": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0432\u0435\u0431-\u043A\u043B\u0438\u0435\u043D\u0442 \u0434\u043B\u044F Mastodon (dev)"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (dev)"]);
        },
        "short_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (dev)"]);
        }
      },
      "preview": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0432\u0435\u0431-\u043A\u043B\u0438\u0435\u043D\u0442 \u0434\u043B\u044F Mastodon (preview)"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (preview)"]);
        },
        "short_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (preview)"]);
        }
      },
      "release": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0432\u0435\u0431-\u043A\u043B\u0438\u0435\u043D\u0442 \u0434\u043B\u044F Mastodon"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk"]);
        },
        "short_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk"]);
        }
      }
    }
  },
  "report": {
    "additional_comments": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438"]);
    },
    "another_server": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0432\u044B \u0436\u0430\u043B\u0443\u0435\u0442\u0435\u0441\u044C, \u0441 \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u0430"]);
    },
    "anything_else": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0415\u0441\u0442\u044C \u0447\u0442\u043E-\u0442\u043E \u0435\u0449\u0435, \u043E \u0447\u0435\u043C \u043C\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0437\u043D\u0430\u0442\u044C?"]);
    },
    "block_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u044B \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u043F\u043E\u0441\u0442\u044B \u043E\u0442 \u044D\u0442\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F. \u041E\u043D \u043D\u0435 \u0441\u043C\u043E\u0436\u0435\u0442 \u0432\u0438\u0434\u0435\u0442\u044C \u0432\u0430\u0448\u0438 \u043F\u043E\u0441\u0442\u044B \u0438\u043B\u0438 \u0431\u044B\u0442\u044C \u0447\u0438\u0442\u0430\u0442\u0435\u043B\u0435\u043C. \u041E\u043D \u0431\u0443\u0434\u0435\u0442 \u0437\u043D\u0430\u0442\u044C, \u0447\u0442\u043E \u0432\u044B \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043B\u0438 \u0435\u0433\u043E."]);
    },
    "dontlike": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041C\u043D\u0435 \u044D\u0442\u043E \u043D\u0435 \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F"]);
    },
    "dontlike_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u042D\u0442\u043E \u043D\u0435 \u0442\u043E, \u0447\u0442\u043E \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u0438\u0434\u0435\u0442\u044C"]);
    },
    "forward": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0414\u0430, \u043F\u0435\u0440\u0435\u0441\u043B\u0430\u0442\u044C \u044D\u0442\u0443 \u0436\u0430\u043B\u043E\u0431\u0443 \u043D\u0430 ", _interpolate(_list(0))]);
    },
    "forward_question": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0425\u043E\u0442\u0438\u0442\u0435 \u043B\u0438 \u0432\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0430\u043D\u043E\u043D\u0438\u043C\u043D\u0443\u044E \u043A\u043E\u043F\u0438\u044E \u044D\u0442\u043E\u0439 \u0436\u0430\u043B\u043E\u0431\u044B \u0442\u0430\u043A\u0436\u0435 \u043D\u0430 \u044D\u0442\u043E\u0442 \u0441\u0435\u0440\u0432\u0435\u0440?"]);
    },
    "further_actions": {
      "limit": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0412\u043E\u0442 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0442\u0435\u043C, \u0447\u0442\u043E \u0432\u044B \u0432\u0438\u0434\u0438\u0442\u0435:"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041D\u0435 \u0445\u043E\u0442\u0438\u0442\u0435 \u044D\u0442\u043E \u0432\u0438\u0434\u0435\u0442\u044C?"]);
        }
      },
      "report": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041F\u043E\u043A\u0430 \u043C\u044B \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u043C \u0436\u0430\u043B\u043E\u0431\u0443, \u0432\u043E\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u044F\u0442\u044C:"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0421\u043F\u0430\u0441\u0438\u0431\u043E, \u0447\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0438\u043B\u0438, \u043C\u044B \u0438\u0437\u0443\u0447\u0438\u043C \u044D\u0442\u043E\u0442 \u0432\u043E\u043F\u0440\u043E\u0441."]);
        }
      }
    },
    "limiting": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F ", _interpolate(_list(0))]);
    },
    "mute_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u044B \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u043F\u043E\u0441\u0442\u044B \u043E\u0442 \u044D\u0442\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F. \u041E\u043D \u043F\u043E-\u043F\u0440\u0435\u0436\u043D\u0435\u043C\u0443 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0432\u0430\u0448\u0438\u043C \u0447\u0438\u0442\u0430\u0442\u0435\u043B\u0435\u043C \u0438 \u0432\u0438\u0434\u0435\u0442\u044C \u0432\u0430\u0448\u0438 \u043F\u043E\u0441\u0442\u044B. \u041E\u043D \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u043D\u0430\u0442\u044C, \u0447\u0442\u043E \u0432\u044B \u0438\u0433\u043D\u043E\u0440\u0438\u0440\u0443\u0435\u0442\u0435 \u0435\u0433\u043E."]);
    },
    "other": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u042D\u0442\u043E \u043D\u0435\u0447\u0442\u043E \u0434\u0440\u0443\u0433\u043E\u0435"]);
    },
    "other_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u043D\u0435 \u043F\u043E\u0434\u043F\u0430\u0434\u0430\u0435\u0442 \u043F\u043E\u0434 \u0434\u0440\u0443\u0433\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"]);
    },
    "reporting": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0416\u0430\u043B\u043E\u0431\u0430 \u043D\u0430 ", _interpolate(_list(0))]);
    },
    "select_many": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u044B\u0431\u0435\u0440\u0435\u0442\u0435 \u0432\u0441\u0435, \u0447\u0442\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442:"]);
    },
    "select_one": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442:"]);
    },
    "select_posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0415\u0441\u0442\u044C \u043B\u0438 \u043A\u0430\u043A\u0438\u0435-\u043B\u0438\u0431\u043E \u043F\u043E\u0441\u0442\u044B, \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E\u0449\u0438\u0435 \u044D\u0442\u0443 \u0436\u0430\u043B\u043E\u0431\u0443?"]);
    },
    "select_posts_other": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0415\u0441\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u043F\u043E\u0441\u0442\u044B, \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E\u0449\u0438\u0435 \u044D\u0442\u0443 \u0436\u0430\u043B\u043E\u0431\u0443?"]);
    },
    "spam": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u042D\u0442\u043E \u0441\u043F\u0430\u043C"]);
    },
    "spam_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0440\u0435\u0434\u043E\u043D\u043E\u0441\u043D\u044B\u0435 \u0441\u0441\u044B\u043B\u043A\u0438, \u0444\u0430\u043B\u044C\u0448\u0438\u0432\u044B\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u044E\u0449\u0438\u0435\u0441\u044F \u043E\u0442\u0432\u0435\u0442\u044B"]);
    },
    "submit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0436\u0430\u043B\u043E\u0431\u0443"]);
    },
    "unfollow_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u044B \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u0431\u0443\u0434\u0435\u0442\u0435 \u0432\u0438\u0434\u0435\u0442\u044C \u043F\u043E\u0441\u0442\u044B \u044D\u0442\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0432 \u0441\u0432\u043E\u0435\u0439 \u043B\u0435\u043D\u0442\u0435. \u0412\u044B \u0432\u0441\u0435 \u0435\u0449\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u0438\u0434\u0435\u0442\u044C \u0435\u0433\u043E \u043F\u043E\u0441\u0442\u044B \u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u043C\u0435\u0441\u0442\u0430\u0445."]);
    },
    "violation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0430\u0440\u0443\u0448\u0430\u0435\u0442 \u043E\u0434\u043D\u043E \u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0430\u0432\u0438\u043B \u0441\u0435\u0440\u0432\u0435\u0440\u0430"]);
    },
    "whats_wrong_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0430\u043C, \u0447\u0442\u043E \u043D\u0435 \u0442\u0430\u043A \u0441 \u044D\u0442\u0438\u043C \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u043E\u043C"]);
    },
    "whats_wrong_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u0430\u043C, \u0447\u0442\u043E \u043D\u0435 \u0442\u0430\u043A \u0441 \u044D\u0442\u0438\u043C \u043F\u043E\u0441\u0442\u043E\u043C"]);
    }
  },
  "search": {
    "search_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u0438\u0441\u043A \u043B\u044E\u0434\u0435\u0439 \u0438 \u0445\u044D\u0448\u0442\u0435\u0433\u043E\u0432"]);
    },
    "search_empty": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0430\u0439\u0442\u0438 \u043D\u0438\u0447\u0435\u0433\u043E \u043F\u043E \u044D\u0442\u043E\u043C\u0443 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u043E\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443"]);
    }
  },
  "settings": {
    "about": {
      "built_at": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0411\u0438\u043B\u0434 \u0441\u043E\u0431\u0440\u0430\u043D"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041E Elk"]);
      },
      "meet_the_team": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430"]);
      },
      "sponsor_action": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0421\u0442\u0430\u043D\u044C\u0442\u0435 \u0441\u043F\u043E\u043D\u0441\u043E\u0440\u043E\u043C"]);
      },
      "sponsor_action_desc": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0427\u0442\u043E\u0431\u044B \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u0443, \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E\u0449\u0443\u044E Elk"]);
      },
      "sponsors": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0421\u043F\u043E\u043D\u0441\u043E\u0440\u044B"]);
      },
      "sponsors_body_1": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Elk \u0441\u0442\u0430\u043B \u0432\u043E\u0437\u043C\u043E\u0436\u0435\u043D \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0441\u043F\u043E\u043D\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u0438 \u043F\u043E\u043C\u043E\u0449\u0438:"]);
      },
      "sponsors_body_2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0410 \u0442\u0430\u043A\u0436\u0435 \u0432\u0441\u0435\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0438 \u0447\u0430\u0441\u0442\u043D\u044B\u0445 \u043B\u0438\u0446, \u0441\u043F\u043E\u043D\u0441\u0438\u0440\u0443\u044E\u0449\u0438\u0445 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 Elk \u0438 \u0435\u0435 \u0447\u043B\u0435\u043D\u043E\u0432."]);
      },
      "sponsors_body_3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0415\u0441\u043B\u0438 \u0432\u0430\u043C \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0432\u044B \u0437\u0430\u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u044C \u043D\u0430\u0448\u0438\u043C \u0441\u043F\u043E\u043D\u0441\u043E\u0440\u043E\u043C:"]);
      },
      "version": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0412\u0435\u0440\u0441\u0438\u044F"]);
      }
    },
    "account_settings": {
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0441\u0432\u043E\u0435\u0439 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438 \u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u043C \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435 Mastodon"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438"]);
      }
    },
    "interface": {
      "color_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0422\u0435\u043C\u0430"]);
      },
      "dark_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0422\u0435\u043C\u043D\u0430\u044F"]);
      },
      "default": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize([" (\u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E)"]);
      },
      "font_size": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0420\u0430\u0437\u043C\u0435\u0440 \u0442\u0435\u043A\u0441\u0442\u0430"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0418\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441"]);
      },
      "light_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0421\u0432\u0435\u0442\u043B\u0430\u044F"]);
      },
      "system_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u0430\u044F"]);
      },
      "theme_color": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0426\u0432\u0435\u0442"]);
      }
    },
    "language": {
      "display_language": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u042F\u0437\u044B\u043A \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u042F\u0437\u044B\u043A"]);
      },
      "status": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430: ", _interpolate(_list(0)), "/", _interpolate(_list(1)), " (", _interpolate(_list(2)), "%)"]);
      },
      "translations": {
        "add": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"]);
        },
        "choose_language": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u044F\u0437\u044B\u043A"]);
        },
        "heading": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041F\u0435\u0440\u0435\u0432\u043E\u0434\u044B"]);
        },
        "hide_specific": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0421\u043A\u0440\u044B\u0442\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0435 \u044F\u0437\u044B\u043A\u0438"]);
        },
        "remove": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0423\u0434\u0430\u043B\u0438\u0442\u044C"]);
        }
      }
    },
    "notifications": {
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"]);
      },
      "notifications": {
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439"]);
        }
      },
      "push_notifications": {
        "alerts": {
          "favourite": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"]);
          },
          "follow": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041D\u043E\u0432\u044B\u0435 \u0447\u0438\u0442\u0430\u0442\u0435\u043B\u0438"]);
          },
          "mention": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0423\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F"]);
          },
          "poll": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041E\u043F\u0440\u043E\u0441\u044B"]);
          },
          "reblog": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0420\u0435\u043F\u043E\u0441\u0442\u044B"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041A\u0430\u043A\u0438\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C?"]);
          }
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F, \u0434\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 Elk."]);
        },
        "instructions": (ctx) => {
          const { normalize: _normalize, linked: _linked, type: _type } = ctx;
          return _normalize(["\u041D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C\u0442\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0432\u043E\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u043A\u043D\u043E\u043F\u043A\u0443 ", _linked("settings.notifications.push_notifications.save_settings!", void 0, _type)]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 Push-\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439"]);
        },
        "policy": {
          "all": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041E\u0442 \u043A\u043E\u0433\u043E \u0443\u0433\u043E\u0434\u043D\u043E"]);
          },
          "followed": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041E\u0442 \u0442\u0435\u0445, \u043A\u043E\u0433\u043E \u044F \u0447\u0438\u0442\u0430\u044E"]);
          },
          "follower": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041E\u0442 \u0442\u0435\u0445, \u043A\u0442\u043E \u0447\u0438\u0442\u0430\u0435\u0442 \u043C\u0435\u043D\u044F"]);
          },
          "none": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041D\u0438 \u043E\u0442 \u043A\u043E\u0433\u043E"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041E\u0442 \u043A\u043E\u0433\u043E \u044F \u043C\u043E\u0433\u0443 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F?"]);
          }
        },
        "save_settings": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"]);
        },
        "subscription_error": {
          "clear_error": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043E\u0448\u0438\u0431\u043A\u0438"]);
          },
          "error_hint": (ctx) => {
            const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
            return _normalize(["\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u043A \u0441\u043F\u0438\u0441\u043A\u0443 \u0447\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0445 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043F\u044B\u0442\u0430\u0442\u044C\u0441\u044F \u0440\u0435\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443: ", _interpolate(_list(0)), "."]);
          },
          "invalid_vapid_key": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041F\u043E\u0445\u043E\u0436\u0435, \u0447\u0442\u043E \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u043A\u043B\u044E\u0447 VAPID \u043D\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u0435\u043D."]);
          },
          "permission_denied": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041E\u0448\u0438\u0431\u043A\u0430: \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u0432 \u0432\u0430\u0448\u0435\u043C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435."]);
          },
          "repo_link": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0420\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0439 Elk \u043D\u0430 GitHub"]);
          },
          "request_error": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041F\u0440\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438 \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437, \u0438 \u0435\u0441\u043B\u0438 \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0441\u044F, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u0435 \u043E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0435 \u0432 GitHub \u0440\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0439 Elk."]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 push-\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"]);
          },
          "too_many_registrations": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0418\u0437-\u0437\u0430 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, Elk \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0441\u043B\u0443\u0436\u0431\u0443 push-\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0443\u0447\u0435\u0442\u043D\u044B\u0445 \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u043D\u0430 \u0440\u0430\u0437\u043D\u044B\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445. \u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438 \u043D\u0430 push-\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430\u0445 \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u043F\u043E\u043F\u044B\u0442\u043A\u0443."]);
          },
          "vapid_not_supported": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 Web Push Notifications, \u043D\u043E, \u043F\u043E\u0445\u043E\u0436\u0435, \u043D\u0435 \u0440\u0435\u0430\u043B\u0438\u0437\u0443\u0435\u0442 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B VAPID."]);
          }
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 push-\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439"]);
        },
        "undo_settings": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"]);
        },
        "unsubscribe": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C push-\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"]);
        },
        "unsupported": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 push-\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F."]);
        },
        "warning": {
          "enable_close": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0417\u0430\u043A\u0440\u044B\u0442\u044C"]);
          },
          "enable_description": (ctx) => {
            const { normalize: _normalize, linked: _linked, type: _type } = ctx;
            return _normalize(['\u0427\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F, \u0434\u0430\u0436\u0435 \u043A\u043E\u0433\u0434\u0430 Elk \u0437\u0430\u043A\u0440\u044B\u0442, \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435 push-\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F. \u041F\u043E\u0441\u043B\u0435 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F, \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u043D\u043E\u043F\u043A\u0438 "', _linked("settings.notifications.show_btn", void 0, _type), '"', " \u0432\u044B\u0448\u0435, \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043A\u0430\u043A\u0438\u0435 \u0438\u043C\u0435\u043D\u043D\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u044E\u0442 push-\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F."]);
          },
          "enable_description_desktop": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(['\u0427\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F, \u0434\u0430\u0436\u0435 \u043A\u043E\u0433\u0434\u0430 Elk \u0437\u0430\u043A\u0440\u044B\u0442, \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435 push-\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F. \u041F\u043E\u0441\u043B\u0435 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F, \u0432 \u043C\u0435\u043D\u044E "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 > \u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F > \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 Push-\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439" \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043A\u0430\u043A\u0438\u0435 \u0438\u043C\u0435\u043D\u043D\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u044E\u0442 push-\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F.']);
          },
          "enable_description_mobile": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(['\u0412\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u043C \u0432 \u043C\u0435\u043D\u044E "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 > \u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F > \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 Push-\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439".']);
          },
          "enable_description_settings": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0427\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F, \u0434\u0430\u0436\u0435 \u043A\u043E\u0433\u0434\u0430 Elk \u0437\u0430\u043A\u0440\u044B\u0442, \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435 push-\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F. \u041F\u043E\u0441\u043B\u0435 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F, \u043D\u0430 \u044D\u0442\u043E\u043C \u044D\u043A\u0440\u0430\u043D\u0435 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043A\u0430\u043A\u0438\u0435 \u0438\u043C\u0435\u043D\u043D\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u044E\u0442 push-\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F."]);
          },
          "enable_desktop": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C push-\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"]);
          },
          "enable_title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041E\u0441\u0442\u0430\u0432\u0430\u0439\u0442\u0435\u0441\u044C \u0432 \u043A\u0443\u0440\u0441\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u0439"]);
          },
          "re_auth": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041F\u043E\u0445\u043E\u0436\u0435, \u0447\u0442\u043E \u0432\u0430\u0448 \u0441\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 push-\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0432\u044B\u0439\u0442\u0438 \u0438 \u0441\u043D\u043E\u0432\u0430 \u0432\u043E\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443, \u0435\u0441\u043B\u0438 \u044D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0432\u0441\u0435 \u0435\u0449\u0435 \u043F\u043E\u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443 \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u0430."]);
          }
        }
      },
      "show_btn": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439"]);
      },
      "under_construction": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0412 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435"]);
      }
    },
    "notifications_settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"]);
    },
    "preferences": {
      "enable_autoplay": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u0432\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435"]);
      },
      "enable_data_saving": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u044E \u0442\u0440\u0430\u0444\u0438\u043A\u0430"]);
      },
      "enable_data_saving_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u044F \u0442\u0440\u0430\u0444\u0438\u043A\u0430 \u0437\u0430 \u0441\u0447\u0451\u0442 \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u0439"]);
      },
      "enable_pinch_to_zoom": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u0432\u0443\u043C\u044F \u043F\u0430\u043B\u044C\u0446\u0430\u043C\u0438"]);
      },
      "github_cards": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["GitHub \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438"]);
      },
      "grayscale_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0420\u0435\u0436\u0438\u043C \u0441\u0435\u0440\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430"]);
      },
      "hide_account_hover_card": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0421\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430 \u043F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0438"]);
      },
      "hide_alt_indi_on_posts": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0421\u043A\u0440\u044B\u0442\u044C \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u043D\u0430 \u043F\u043E\u0441\u0442\u0430\u0445"]);
      },
      "hide_boost_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0421\u043A\u0440\u044B\u0442\u044C \u0441\u0447\u0435\u0442\u0447\u0438\u043A \u0440\u0435\u043F\u043E\u0441\u0442\u043E\u0432"]);
      },
      "hide_favorite_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0421\u043A\u0440\u044B\u0442\u044C \u0441\u0447\u0435\u0442\u0447\u0438\u043A \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E"]);
      },
      "hide_follower_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0421\u043A\u0440\u044B\u0442\u044C \u0441\u0447\u0435\u0442\u0447\u0438\u043A \u0447\u0438\u0442\u0430\u0442\u0435\u043B\u0435\u0439"]);
      },
      "hide_news": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0421\u043A\u0440\u044B\u0442\u044C \u043D\u043E\u0432\u043E\u0441\u0442\u0438"]);
      },
      "hide_reply_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0421\u043A\u0440\u044B\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u0432\u0435\u0442\u043E\u0432"]);
      },
      "hide_translation": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u0435\u0440\u0435\u0432\u043E\u0434"]);
      },
      "hide_username_emojis": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0421\u043A\u0440\u044B\u0442\u044C \u044D\u043C\u043E\u0434\u0437\u0438 \u0432 \u0438\u043C\u0435\u043D\u0430\u0445"]);
      },
      "hide_username_emojis_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0421\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u044D\u043C\u043E\u0434\u0437\u0438 \u0432 \u0438\u043C\u0435\u043D\u0430\u0445 \u0432 \u043B\u0435\u043D\u0442\u0435. \u042D\u043C\u043E\u0434\u0437\u0438 \u0432\u0441\u0451 \u0435\u0449\u0451 \u0431\u0443\u0434\u0443\u0442 \u0432\u0438\u0434\u043D\u044B \u0432 \u043F\u0440\u043E\u0444\u0438\u043B\u044F\u0445."]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u042D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438"]);
      },
      "use_star_favorite_icon": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(['\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0437\u043D\u0430\u0447\u043E\u043A \u0437\u0432\u0435\u0437\u0434\u044B \u0434\u043B\u044F \u043A\u043D\u043E\u043F\u043A\u0438 "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"']);
      },
      "user_picker": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u044C \u0443\u0447\u0435\u0442\u043D\u044B\u0445 \u0437\u0430\u043F\u0438\u0441\u0435\u0439"]);
      },
      "virtual_scroll": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0412\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u043A\u0440\u043E\u043B\u043B"]);
      },
      "wellbeing": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0411\u043B\u0430\u0433\u043E\u043F\u043E\u043B\u0443\u0447\u0438\u0435"]);
      },
      "zen_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(['\u0420\u0435\u0436\u0438\u043C "\u0414\u0437\u0435\u043D"']);
      },
      "zen_mode_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0421\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0431\u043E\u043A\u043E\u0432\u044B\u0435 \u0441\u0442\u043E\u0440\u043E\u043D\u044B, \u0435\u0441\u043B\u0438 \u043D\u0430 \u043D\u0438\u0445 \u043D\u0435 \u043D\u0430\u0432\u0435\u0434\u0451\u043D \u043A\u0443\u0440\u0441\u043E\u0440 \u043C\u044B\u0448\u0438. \u0422\u0430\u043A\u0436\u0435 \u0441\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0432 \u043B\u0435\u043D\u0442\u0435."]);
      }
    },
    "profile": {
      "appearance": {
        "bio": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041E \u0441\u0435\u0431\u0435"]);
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u0435 \u0430\u0432\u0430\u0442\u0430\u0440, \u043E\u0431\u043B\u043E\u0436\u043A\u0443, \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0438 \u0442.\u0434."]);
        },
        "display_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0418\u043C\u044F"]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C"]);
        },
        "profile_metadata": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044F"]);
        },
        "profile_metadata_desc": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
          return _normalize(["\u0412 \u0432\u0430\u0448\u0435\u043C \u043F\u0440\u043E\u0444\u0438\u043B\u0435 \u043C\u043E\u0436\u0435\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C\u0441\u044F \u0434\u043E ", _interpolate(_list(0)), " \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0432 \u0432\u0438\u0434\u0435 \u0442\u0430\u0431\u043B\u0438\u0446\u044B"]);
        },
        "profile_metadata_label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041F\u0443\u043D\u043A\u0442"]);
        },
        "profile_metadata_value": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"]);
        }
      },
      "featured_tags": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041B\u044E\u0434\u0438 \u043C\u043E\u0433\u0443\u0442 \u043F\u0440\u043E\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044C \u0432\u0430\u0448\u0438 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0435 \u043F\u043E\u0441\u0442\u044B \u043F\u043E\u0434 \u044D\u0442\u0438\u043C\u0438 \u0445\u044D\u0448\u0442\u0435\u0433\u0430\u043C\u0438."]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u044B\u0435 \u0445\u044D\u0448\u0442\u0435\u0433\u0438"]);
        }
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041F\u0440\u043E\u0444\u0438\u043B\u044C"]);
      }
    },
    "select_a_settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0443"]);
    },
    "users": {
      "export": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0442\u043E\u043A\u0435\u043D\u043E\u0432"]);
      },
      "import": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0418\u043C\u043F\u043E\u0440\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0442\u043E\u043A\u0435\u043D\u043E\u0432"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"]);
      }
    }
  },
  "share-target": {
    "description": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u0442\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C, \u0447\u0442\u043E\u0431\u044B \u0432\u044B \u043C\u043E\u0433\u043B\u0438 \u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u043E\u043C \u0438\u0437 \u0434\u0440\u0443\u0433\u0438\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439, \u043F\u0440\u043E\u0441\u0442\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 Elk \u043D\u0430 \u0441\u0432\u043E\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0438\u043B\u0438 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u0438 \u0432\u043E\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443."]);
    },
    "hint": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0427\u0442\u043E\u0431\u044B \u043F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u043E\u043C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Elk, \u0432\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C Elk \u0438 \u0432\u043E\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443."]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Elk"]);
    }
  },
  "state": {
    "attachments_exceed_server_limit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0445 \u0444\u0430\u0439\u043B\u043E\u0432 \u043F\u0440\u0435\u0432\u044B\u0441\u0438\u043B\u043E \u043B\u0438\u043C\u0438\u0442 \u043D\u0430 \u043E\u0434\u043D\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435."]);
    },
    "attachments_limit_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0440\u0435\u0432\u044B\u0448\u0435\u043D \u043B\u0438\u043C\u0438\u0442 \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0445 \u0444\u0430\u0439\u043B\u043E\u0432 \u043D\u0430 \u043E\u0434\u043D\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["(\u041E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E)"]);
    },
    "editing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"]);
    },
    "loading": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."]);
    },
    "publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438"]);
    },
    "publishing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044F..."]);
    },
    "upload_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0444\u0430\u0439\u043B\u043E\u0432"]);
    },
    "uploading": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."]);
    }
  },
  "status": {
    "account": {
      "suspended_message": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0410\u043A\u043A\u0430\u0443\u043D\u0442 \u0441 \u044D\u0442\u0438\u043C \u0441\u0442\u0430\u0442\u0443\u0441\u043E\u043C \u0431\u044B\u043B \u0437\u0430\u043C\u043E\u0440\u043E\u0436\u0435\u043D."]);
      },
      "suspended_show": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432 \u043B\u044E\u0431\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435?"]);
      }
    },
    "boosted_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u0434\u0435\u043B\u0430\u043B\u0438 \u0440\u0435\u043F\u043E\u0441\u0442"]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u041E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E ", _interpolate(_list(0))]);
    },
    "favourited_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u0431\u0430\u0432\u0438\u043B\u0438 \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"]);
    },
    "filter_hidden_phrase": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0442\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u043D\u043E \u043F\u043E"]);
    },
    "filter_show_anyway": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435 \u0440\u0430\u0432\u043D\u043E"]);
    },
    "img_alt": {
      "ALT": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["ALT"]);
      },
      "desc": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"]);
      },
      "dismiss": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0417\u0430\u043A\u0440\u044B\u0442\u044C"]);
      },
      "read": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u041F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ", _interpolate(_list(0))]);
      }
    },
    "poll": {
      "count": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
        return _plural([_normalize([_interpolate(_list(0)), " \u0433\u043E\u043B\u043E\u0441"]), _normalize([_interpolate(_list(0)), " \u0433\u043E\u043B\u043E\u0441\u0430"]), _normalize([_interpolate(_list(0)), " \u0433\u043E\u043B\u043E\u0441\u043E\u0432"]), _normalize([_interpolate(_list(0)), " \u0433\u043E\u043B\u043E\u0441\u043E\u0432"])]);
      },
      "ends": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0417\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044F ", _interpolate(_list(0))]);
      },
      "finished": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D ", _interpolate(_list(0))]);
      }
    },
    "replying_to": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u041E\u0442\u0432\u0435\u0442 \u043D\u0430 \u043F\u043E\u0441\u0442 ", _interpolate(_list(0))]);
    },
    "show_full_thread": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0435\u0441\u044C \u0442\u0440\u0435\u0434"]);
    },
    "someone": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u043A\u043E\u0433\u043E-\u0442\u043E"]);
    },
    "spoiler_media_hidden": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041A\u043E\u043D\u0442\u0435\u043D\u0442 \u0441\u043A\u0440\u044B\u0442"]);
    },
    "spoiler_show_less": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u043A\u0440\u044B\u0442\u044C"]);
    },
    "spoiler_show_more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C"]);
    },
    "thread": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0422\u0440\u0435\u0434"]);
    },
    "try_original_site": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043D\u0430 \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u043C \u0441\u0430\u0439\u0442\u0435"]);
    }
  },
  "status_history": {
    "created": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0441\u043E\u0437\u0434\u0430\u043D\u043E ", _interpolate(_list(0))]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E ", _interpolate(_list(0))]);
    }
  },
  "tab": {
    "accounts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0410\u043A\u043A\u0430\u0443\u043D\u0442\u044B"]);
    },
    "for_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043B\u044F \u0432\u0430\u0441"]);
    },
    "hashtags": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0425\u044D\u0448\u0442\u0435\u0433\u0438"]);
    },
    "list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u043F\u0438\u0441\u043E\u043A"]);
    },
    "media": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041C\u0435\u0434\u0438\u0430"]);
    },
    "news": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u043E\u0432\u043E\u0441\u0442\u0438"]);
    },
    "notifications_all": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0441\u0435"]);
    },
    "notifications_mention": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0423\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F"]);
    },
    "posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u0441\u0442\u044B"]);
    },
    "posts_with_replies": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u0441\u0442\u044B \u0438 \u043E\u0442\u0432\u0435\u0442\u044B"]);
    }
  },
  "tag": {
    "follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"]);
    },
    "follow_label": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0445\u044D\u0448\u0442\u0435\u0433 ", _interpolate(_list(0))]);
    },
    "unfollow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0442\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"]);
    },
    "unfollow_label": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u041E\u0442\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u0445\u044D\u0448\u0442\u0435\u0433\u0430 ", _interpolate(_list(0))]);
    }
  },
  "time_ago_options": {
    "day_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0434\u0435\u043D\u044C"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0434\u043D\u044F"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0434\u043D\u0435\u0439"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0434\u043D\u0435\u0439"])]);
    },
    "day_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_named("n")), " \u0434\u0435\u043D\u044C \u043D\u0430\u0437\u0430\u0434"]), _normalize([_interpolate(_named("n")), " \u0434\u043D\u044F \u043D\u0430\u0437\u0430\u0434"]), _normalize([_interpolate(_named("n")), " \u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434"]), _normalize([_interpolate(_named("n")), " \u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434"])]);
    },
    "hour_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0447\u0430\u0441"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0447\u0430\u0441\u0430"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0447\u0430\u0441\u043E\u0432"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0447\u0430\u0441\u043E\u0432"])]);
    },
    "hour_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_named("n")), " \u0447\u0430\u0441 \u043D\u0430\u0437\u0430\u0434"]), _normalize([_interpolate(_named("n")), " \u0447\u0430\u0441\u0430 \u043D\u0430\u0437\u0430\u0434"]), _normalize([_interpolate(_named("n")), " \u0447\u0430\u0441\u043E\u0432 \u043D\u0430\u0437\u0430\u0434"]), _normalize([_interpolate(_named("n")), " \u0447\u0430\u0441\u043E\u0432 \u043D\u0430\u0437\u0430\u0434"])]);
    },
    "just_now": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E"]);
    },
    "minute_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u043C\u0438\u043D\u0443\u0442\u0443"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u043C\u0438\u043D\u0443\u0442\u044B"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u043C\u0438\u043D\u0443\u0442"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u043C\u0438\u043D\u0443\u0442"])]);
    },
    "minute_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_named("n")), " \u043C\u0438\u043D\u0443\u0442\u0443 \u043D\u0430\u0437\u0430\u0434"]), _normalize([_interpolate(_named("n")), " \u043C\u0438\u043D\u0443\u0442\u044B \u043D\u0430\u0437\u0430\u0434"]), _normalize([_interpolate(_named("n")), " \u043C\u0438\u043D\u0443\u0442 \u043D\u0430\u0437\u0430\u0434"]), _normalize([_interpolate(_named("n")), " \u043C\u0438\u043D\u0443\u0442 \u043D\u0430\u0437\u0430\u0434"])]);
    },
    "month_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u043C\u0435\u0441\u044F\u0446"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u043C\u0435\u0441\u044F\u0446\u0430"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u043C\u0435\u0441\u044F\u0446\u0435\u0432"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u043C\u0435\u0441\u044F\u0446\u0435\u0432"])]);
    },
    "month_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_named("n")), " \u043C\u0435\u0441\u044F\u0446 \u043D\u0430\u0437\u0430\u0434"]), _normalize([_interpolate(_named("n")), " \u043C\u0435\u0441\u044F\u0446\u0430 \u043D\u0430\u0437\u0430\u0434"]), _normalize([_interpolate(_named("n")), " \u043C\u0435\u0441\u044F\u0446\u0435\u0432 \u043D\u0430\u0437\u0430\u0434"]), _normalize([_interpolate(_named("n")), " \u043C\u0435\u0441\u044F\u0446\u0435\u0432 \u043D\u0430\u0437\u0430\u0434"])]);
    },
    "second_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0441\u0435\u043A\u0443\u043D\u0434\u0443"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0441\u0435\u043A\u0443\u043D\u0434\u044B"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0441\u0435\u043A\u0443\u043D\u0434"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0441\u0435\u043A\u0443\u043D\u0434"])]);
    },
    "second_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_named("n")), " \u0441\u0435\u043A\u0443\u043D\u0434\u0443 \u043D\u0430\u0437\u0430\u0434"]), _normalize([_interpolate(_named("n")), " \u0441\u0435\u043A\u0443\u043D\u0434\u044B \u043D\u0430\u0437\u0430\u0434"]), _normalize([_interpolate(_named("n")), " \u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430\u0437\u0430\u0434"]), _normalize([_interpolate(_named("n")), " \u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430\u0437\u0430\u0434"])]);
    },
    "short_day_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0434"]);
    },
    "short_day_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " \u0434"]);
    },
    "short_hour_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0447"]);
    },
    "short_hour_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " \u0447"]);
    },
    "short_minute_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u043C\u0438\u043D"]);
    },
    "short_minute_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " \u043C\u0438\u043D"]);
    },
    "short_month_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u043C\u0435\u0441"]);
    },
    "short_month_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " \u043C\u0435\u0441"]);
    },
    "short_second_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0441\u0435\u043A"]);
    },
    "short_second_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " \u0441\u0435\u043A"]);
    },
    "short_week_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u043D\u0435\u0434"]);
    },
    "short_week_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " \u043D\u0435\u0434"]);
    },
    "short_year_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0433\u043E\u0434"]);
    },
    "short_year_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " \u0433\u043E\u0434"]);
    },
    "week_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u043D\u0435\u0434\u0435\u043B\u044E"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u043D\u0435\u0434\u0435\u043B\u0438"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u043D\u0435\u0434\u0435\u043B\u044C"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u043D\u0435\u0434\u0435\u043B\u044C"])]);
    },
    "week_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_named("n")), " \u043D\u0435\u0434\u0435\u043B\u044E \u043D\u0430\u0437\u0430\u0434"]), _normalize([_interpolate(_named("n")), " \u043D\u0435\u0434\u0435\u043B\u0438 \u043D\u0430\u0437\u0430\u0434"]), _normalize([_interpolate(_named("n")), " \u043D\u0435\u0434\u0435\u043B\u044C \u043D\u0430\u0437\u0430\u0434"]), _normalize([_interpolate(_named("n")), " \u043D\u0435\u0434\u0435\u043B\u044C \u043D\u0430\u0437\u0430\u0434"])]);
    },
    "year_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0433\u043E\u0434"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0433\u043E\u0434\u0430"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u043B\u0435\u0442"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u043B\u0435\u0442"])]);
    },
    "year_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_named("n")), " \u0433\u043E\u0434 \u043D\u0430\u0437\u0430\u0434"]), _normalize([_interpolate(_named("n")), " \u0433\u043E\u0434\u0430 \u043D\u0430\u0437\u0430\u0434"]), _normalize([_interpolate(_named("n")), " \u043B\u0435\u0442 \u043D\u0430\u0437\u0430\u0434"]), _normalize([_interpolate(_named("n")), " \u043B\u0435\u0442 \u043D\u0430\u0437\u0430\u0434"])]);
    }
  },
  "timeline": {
    "show_new_items": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C ", _interpolate(_named("v")), " \u043D\u043E\u0432\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442"]), _normalize(["\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C ", _interpolate(_named("v")), " \u043D\u043E\u0432\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430"]), _normalize(["\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C ", _interpolate(_named("v")), " \u043D\u043E\u0432\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"]), _normalize(["\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C ", _interpolate(_named("v")), " \u043D\u043E\u0432\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"])]);
    },
    "view_older_posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0411\u043E\u043B\u0435\u0435 \u0441\u0442\u0430\u0440\u044B\u0435 \u0437\u0430\u043F\u0438\u0441\u0438 \u0438\u0437 \u0434\u0440\u0443\u0433\u0438\u0445 \u0438\u043D\u0441\u0442\u0430\u043D\u0441\u043E\u0432 \u043C\u043E\u0433\u0443\u0442 \u043D\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C\u0441\u044F."]);
    }
  },
  "title": {
    "federated_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041B\u0435\u043D\u0442\u0430 \u0432\u0441\u0435\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u0432"]);
    },
    "local_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041B\u0435\u043D\u0442\u0430 \u044D\u0442\u043E\u0433\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u0430"]);
    }
  },
  "tooltip": {
    "add_content_warning": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435 \u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u043C"]);
    },
    "add_emojis": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044D\u043C\u043E\u0434\u0437\u0438"]);
    },
    "add_media": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F, \u0432\u0438\u0434\u0435\u043E \u0438\u043B\u0438 \u0430\u0443\u0434\u0438\u043E\u0444\u0430\u0439\u043B"]);
    },
    "add_publishable_content": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u0434\u043B\u044F \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438"]);
    },
    "change_content_visibility": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044E"]);
    },
    "change_language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u044F\u0437\u044B\u043A"]);
    },
    "emoji": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u042D\u043C\u043E\u0434\u0437\u0438"]);
    },
    "explore_links_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0431 \u044D\u0442\u0438\u0445 \u043D\u043E\u0432\u043E\u0441\u0442\u044F\u0445 \u0441\u0435\u0439\u0447\u0430\u0441 \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u044D\u0442\u043E\u0433\u043E \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u0432 \u0434\u0435\u0446\u0435\u043D\u0442\u0440\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u0441\u0435\u0442\u0438."]);
    },
    "explore_posts_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0434\u0435\u0441\u044C \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u044E\u0442\u0441\u044F \u043F\u043E\u0441\u0442\u044B \u0441 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u0432 \u0434\u0435\u0446\u0435\u043D\u0442\u0440\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u0441\u0435\u0442\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430\u0431\u0438\u0440\u0430\u044E\u0442 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u044C \u043D\u0430 \u044D\u0442\u043E\u043C \u0441\u0435\u0440\u0432\u0435\u0440\u0435."]);
    },
    "explore_tags_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0434\u0435\u0441\u044C \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u044E\u0442\u0441\u044F \u0445\u044D\u0448\u0442\u0435\u0433\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0430\u0431\u0438\u0440\u0430\u044E\u0442 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u044C \u0441\u0440\u0435\u0434\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u044D\u0442\u043E\u0433\u043E \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u0432 \u0434\u0435\u0446\u0435\u043D\u0442\u0440\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u0441\u0435\u0442\u0438."]);
    },
    "open_editor_tools": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0424\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0430"]);
    },
    "pick_an_icon": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u044B\u0431\u043E\u0440 \u0438\u043A\u043E\u043D\u043A\u0443"]);
    },
    "publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C"]);
    },
    "toggle_bold": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0416\u0438\u0440\u043D\u044B\u0439 \u0448\u0440\u0438\u0444\u0442"]);
    },
    "toggle_code_block": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041A\u043E\u0434\u043E\u0432\u044B\u0439 \u0431\u043B\u043E\u043A"]);
    },
    "toggle_italic": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041A\u0443\u0440\u0441\u0438\u0432"]);
    }
  },
  "user": {
    "add_existing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0443\u044E \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C"]);
    },
    "server_address_label": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0410\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 Mastodon"]);
    },
    "sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u043E\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u0440\u043E\u0444\u0438\u043B\u0438 \u0438 \u0445\u044D\u0448\u0442\u0435\u0433\u0438, \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435, \u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u043F\u043E\u0441\u0442\u0430\u043C\u0438 \u0438 \u043E\u0442\u0432\u0435\u0447\u0430\u0442\u044C \u043D\u0430 \u043D\u0438\u0445, \u0438\u043B\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0441\u0432\u043E\u044E \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C \u0441 \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u0430"]);
    },
    "sign_in_notice_title": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 ", _interpolate(_list(0))]);
    },
    "sign_out_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438 ", _interpolate(_list(0))]);
    },
    "single_instance_sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u043E\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0438 \u0445\u0435\u0448\u0442\u0435\u0433\u0438, \u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043B\u0430\u0439\u043A\u0438, \u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0438 \u043E\u0442\u0432\u0435\u0447\u0430\u0442\u044C \u043D\u0430 \u043F\u043E\u0441\u0442\u044B."]);
    },
    "tip_no_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0415\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043D\u0435\u0442 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438 Mastodon, ", _interpolate(_list(0)), "."]);
    },
    "tip_register_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0435\u0440\u0432\u0435\u0440 \u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C \u043D\u0430 \u043D\u0435\u043C"]);
    }
  },
  "visibility": {
    "direct": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0422\u043E\u043B\u044C\u043A\u043E \u0443\u043F\u043E\u043C\u044F\u043D\u0443\u0442\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"]);
    },
    "direct_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0438\u0434\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0443\u043F\u043E\u043C\u044F\u043D\u0443\u0442\u044B\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C"]);
    },
    "private": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0422\u043E\u043B\u044C\u043A\u043E \u0432\u0430\u0448\u0438 \u0447\u0438\u0442\u0430\u0442\u0435\u043B\u0438"]);
    },
    "private_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0438\u0434\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u0430\u0448\u0438\u043C \u0447\u0438\u0442\u0430\u0442\u0435\u043B\u044F\u043C"]);
    },
    "public": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0441\u0435"]);
    },
    "public_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0438\u0434\u0435\u043D \u0432\u0441\u0435\u043C"]);
    },
    "unlisted": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u043A\u0440\u044B\u0442\u044B\u0439"]);
    },
    "unlisted_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0438\u0434\u0435\u043D \u0432\u0441\u0435\u043C, \u043D\u043E \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043A\u0430\u0437\u0430\u043D \u0432 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0445 \u043B\u0435\u043D\u0442\u0430\u0445"]);
    }
  }
};

export { ruRU as default };
