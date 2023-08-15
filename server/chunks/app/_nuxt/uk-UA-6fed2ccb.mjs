const ukUA = {
  "a11y": {
    "loading_page": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438, \u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0430\u0447\u0435\u043A\u0430\u0439\u0442\u0435"]);
    },
    "loading_titled_page": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 ", _interpolate(_list(0)), ", \u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0430\u0447\u0435\u043A\u0430\u0439\u0442\u0435"]);
    },
    "locale_changed": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u041C\u043E\u0432\u0443 \u0437\u043C\u0456\u043D\u0435\u043D\u043E \u043D\u0430 ", _interpolate(_list(0))]);
    },
    "locale_changing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u043C\u0456\u043D\u0430 \u043C\u043E\u0432\u0438, \u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0430\u0447\u0435\u043A\u0430\u0439\u0442\u0435"]);
    },
    "route_loaded": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0430 ", _interpolate(_list(0)), " \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u0430"]);
    }
  },
  "account": {
    "avatar_description": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0410\u0432\u0430\u0442\u0430\u0440 ", _interpolate(_list(0))]);
    },
    "blocked_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0438 \u0437\u0430\u0431\u043B\u043E\u043A\u043E\u0432\u0430\u043D\u0456 \u0446\u0438\u043C \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0435\u043C."]);
    },
    "blocked_domains": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u0431\u043B\u043E\u043A\u043E\u0432\u0430\u043D\u0456 \u0434\u043E\u043C\u0435\u043D\u0438"]);
    },
    "blocked_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u0431\u043B\u043E\u043A\u043E\u0432\u0430\u043D\u0456 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456"]);
    },
    "blocking": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u0431\u043B\u043E\u043A\u043E\u0432\u0430\u043D\u0456"]);
    },
    "bot": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0411\u041E\u0422"]);
    },
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0423\u043B\u044E\u0431\u043B\u0435\u043D\u0456"]);
    },
    "follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0456\u0434\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F"]);
    },
    "follow_back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0456\u0434\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F"]);
    },
    "follow_requested": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u043F\u0438\u0442\u0438"]);
    },
    "followers": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0456\u0434\u043F\u0438\u0441\u043D\u0438\u043A\u0438"]);
    },
    "followers_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_list(0)), " \u043F\u0456\u0434\u043F\u0438\u0441\u043D\u0438\u043A\u0456\u0432"]), _normalize([_interpolate(_list(0)), " \u043F\u0456\u0434\u043F\u0438\u0441\u043D\u0438\u043A"]), _normalize([_interpolate(_list(0)), " \u043F\u0456\u0434\u043F\u0438\u0441\u043D\u0438\u043A\u0438"]), _normalize([_interpolate(_list(0)), " \u043F\u0456\u0434\u043F\u0438\u0441\u043D\u0438\u043A\u0456\u0432"])]);
    },
    "following": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0456\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0439"]);
    },
    "following_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u043F\u0456\u0434\u043F\u0438\u0441\u043E\u043A"]);
    },
    "follows_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0456\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0439 \u043D\u0430 \u0432\u0430\u0441"]);
    },
    "go_to_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043E \u043F\u0440\u043E\u0444\u0456\u043B\u044E"]);
    },
    "joined": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043E\u0432\u0430\u043D\u043E"]);
    },
    "moved_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0432\u043A\u0430\u0437\u0430\u0432, \u0449\u043E \u0439\u043E\u0433\u043E \u043D\u043E\u0432\u0438\u0439 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0438\u0439 \u0437\u0430\u043F\u0438\u0441 \u0442\u0435\u043F\u0435\u0440:"]);
    },
    "muted_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u043D\u0456 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456"]);
    },
    "muting": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u043D\u043E"]);
    },
    "mutuals": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0437\u0430\u0454\u043C\u043D\u043E"]);
    },
    "pinned": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u043A\u0440\u0456\u043F\u043B\u0435\u043D\u0456 \u0434\u043E\u043F\u0438\u0441\u0438"]);
    },
    "posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u043F\u0438\u0441\u0438"]);
    },
    "posts_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_list(0)), " \u0434\u043E\u043F\u0438\u0441\u0456\u0432"]), _normalize([_interpolate(_list(0)), " \u0434\u043E\u043F\u0438\u0441"]), _normalize([_interpolate(_list(0)), " \u0434\u043E\u043F\u0438\u0441\u0438"]), _normalize([_interpolate(_list(0)), " \u0434\u043E\u043F\u0438\u0441\u0456\u0432"])]);
    },
    "profile_description": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043F\u0440\u043E\u0444\u0456\u043B\u044E ", _interpolate(_list(0))]);
    },
    "profile_unavailable": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0440\u043E\u0444\u0456\u043B\u044C \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0439"]);
    },
    "unblock": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0420\u043E\u0437\u0431\u043B\u043E\u043A\u0443\u0432\u0430\u0442\u0438"]);
    },
    "unfollow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0456\u0434\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F"]);
    },
    "unmute": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438"]);
    }
  },
  "action": {
    "apply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u0442\u0438"]);
    },
    "bookmark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u0434\u0430\u0442\u0438 \u0432 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438"]);
    },
    "bookmarked": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u0434\u0430\u043D\u043E \u0437 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438"]);
    },
    "boost": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u0448\u0438\u0440\u0438\u0442\u0438"]);
    },
    "boost_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "boosted": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u0448\u0438\u0440\u0435\u043D\u043E"]);
    },
    "clear_upload_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u043F\u043E\u043C\u0438\u043B\u043A\u0438 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F"]);
    },
    "close": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u043A\u0440\u0438\u0442\u0438"]);
    },
    "compose": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u0438"]);
    },
    "confirm": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438"]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"]);
    },
    "enter_app": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043E \u0434\u043E\u0434\u0430\u0442\u043A\u0443"]);
    },
    "favourite": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u043F\u043E\u0434\u043E\u0431\u0430\u0442\u0438"]);
    },
    "favourite_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "favourited": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u0434\u043E\u0431\u0430\u0454\u0442\u044C\u0441\u044F"]);
    },
    "more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0411\u0456\u043B\u044C\u0448\u0435"]);
    },
    "next": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439"]);
    },
    "prev": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439"]);
    },
    "publish": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u043F\u0443\u0431\u043B\u0456\u043A\u0443\u0432\u0430\u0442\u0438"]);
    },
    "reply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0441\u0442\u0438"]);
    },
    "reply_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "reset": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u043A\u0438\u043D\u0443\u0442\u0438"]);
    },
    "save": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"]);
    },
    "save_changes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0437\u043C\u0456\u043D\u0438"]);
    },
    "sign_in": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0423\u0432\u0456\u0439\u0442\u0438"]);
    },
    "switch_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0438\u0439 \u0437\u0430\u043F\u0438\u0441"]);
    },
    "vote": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0413\u043E\u043B\u043E\u0441\u0443\u0432\u0430\u0442\u0438"]);
    }
  },
  "app_desc_short": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["\u0421\u043F\u0440\u0438\u0442\u043D\u0438\u0439 \u0432\u0435\u0431-\u043A\u043B\u0456\u0454\u043D\u0442 \u0434\u043B\u044F Mastodon"]);
  },
  "app_logo": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Elk \u043B\u043E\u0433\u043E"]);
  },
  "app_name": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Elk"]);
  },
  "attachment": {
    "edit_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u043F\u0438\u0441"]);
    },
    "remove_label": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0432\u043A\u043B\u0430\u0434\u0435\u043D\u043D\u044F"]);
    }
  },
  "command": {
    "activate": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0410\u043A\u0442\u0438\u0432\u0443\u0432\u0430\u0442\u0438"]);
    },
    "complete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0438\u0431\u0440\u0430\u0442\u0438"]);
    },
    "compose_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u0438 \u043D\u043E\u0432\u0438\u0439 \u0434\u043E\u043F\u0438\u0441"]);
    },
    "n-people-in-the-past-n-days": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432 \u0437\u0430 \u043E\u0441\u0442\u0430\u043D\u043D\u0456 ", _interpolate(_list(1)), " \u0434\u043D\u0456\u0432"]);
    },
    "select_lang": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043C\u043E\u0432\u0443"]);
    },
    "sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u0434\u0430\u0442\u0438 \u0456\u0441\u043D\u0443\u044E\u0447\u0438\u0439 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0438\u0439 \u0437\u0430\u043F\u0438\u0441"]);
    },
    "switch_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0438\u0439 \u0437\u0430\u043F\u0438\u0441 \u043D\u0430 ", _interpolate(_list(0))]);
    },
    "switch_account_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0430\u043A\u0442\u0438\u0432\u043D\u0438\u0439 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0438\u0439 \u0437\u0430\u043F\u0438\u0441"]);
    },
    "toggle_dark_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0435\u0440\u0435\u043C\u043A\u043D\u0443\u0442\u0438 \u0442\u0435\u043C\u043D\u0438\u0439 \u0440\u0435\u0436\u0438\u043C"]);
    },
    "toggle_zen_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0435\u0440\u0435\u043C\u043A\u043D\u0443\u0442\u0438 \u0440\u0435\u0436\u0438\u043C Zen"]);
    }
  },
  "common": {
    "end_of_list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041A\u0456\u043D\u0435\u0446\u044C \u0441\u043F\u0438\u0441\u043A\u0443"]);
    },
    "error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u041E\u041C\u0418\u041B\u041A\u0410"]);
    },
    "in": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0432"]);
    },
    "not_found": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["404 \u041D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"]);
    },
    "offline_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u0445\u043E\u0436\u0435, \u0432\u0438 \u0432\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0456 \u0432\u0456\u0434 \u043C\u0435\u0440\u0435\u0436\u0456. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0432\u0430\u0448\u0435 \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F \u0434\u043E \u043C\u0435\u0440\u0435\u0436\u0456."]);
    }
  },
  "compose": {
    "draft_title": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0427\u0435\u0440\u043D\u0435\u0442\u043A\u0430 ", _interpolate(_list(0))]);
    },
    "drafts": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0427\u0435\u0440\u043D\u0435\u0442\u043A\u0438 (", _interpolate(_named("v")), ")"]);
    }
  },
  "confirm": {
    "common": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0422\u0430\u043A"]);
      }
    },
    "delete_posts": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0446\u0435\u0439 \u0434\u043E\u043F\u0438\u0441?"]);
      }
    }
  },
  "conversation": {
    "with": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0437"]);
    }
  },
  "error": {
    "account_not_found": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u041E\u0431\u043B\u0456\u043A\u043E\u0432\u0438\u0439 \u0437\u0430\u043F\u0438\u0441 ", _interpolate(_list(0)), " \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"]);
    },
    "explore-list-empty": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u0440\u0430\u0437 \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0432 \u0442\u0440\u0435\u043D\u0434\u0456. \u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043F\u0456\u0437\u043D\u0456\u0448\u0435!"]);
    },
    "file_size_cannot_exceed_n_mb": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0420\u043E\u0437\u043C\u0456\u0440 \u0444\u0430\u0439\u043B\u0443 \u043D\u0435 \u043C\u043E\u0436\u0435 \u043F\u0435\u0440\u0435\u0432\u0438\u0449\u0443\u0432\u0430\u0442\u0438 ", _interpolate(_list(0)), " \u041C\u0431"]);
    },
    "sign_in_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0438\u0441\u044F \u0434\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u0430."]);
    },
    "status_not_found": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u043F\u0438\u0441 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"]);
    },
    "unsupported_file_format": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0435\u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u043D\u0438\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0444\u0430\u0439\u043B\u0443"]);
    }
  },
  "help": {
    "desc_highlight": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0447\u0456\u043A\u0443\u0439\u0442\u0435 \u0434\u0435\u044F\u043A\u0456 \u043F\u043E\u043C\u0438\u043B\u043A\u0438 \u0442\u0430 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456 \u0444\u0443\u043D\u043A\u0446\u0456\u0457 \u0442\u0443\u0442 \u0456 \u0442\u0430\u043C."]);
    },
    "desc_para1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u044F\u043A\u0443\u0454\u043C\u043E \u0437\u0430 \u0432\u0430\u0448 \u0456\u043D\u0442\u0435\u0440\u0435\u0441 \u0434\u043E \u0432\u0438\u043F\u0440\u043E\u0431\u0443\u0432\u0430\u043D\u043D\u044F Elk, \u043D\u0430\u0448\u043E\u0433\u043E \u0443\u043D\u0456\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043B\u0456\u0454\u043D\u0442\u0430 Mastodon, \u044F\u043A\u0438\u0439 \u0449\u0435 \u0443 \u0440\u043E\u0437\u0440\u043E\u0431\u0446\u0456!"]);
    },
    "desc_para2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041C\u0438 \u043D\u0430\u043F\u043E\u043B\u0435\u0433\u043B\u0438\u0432\u043E \u043F\u0440\u0430\u0446\u044E\u0454\u043C\u043E \u043D\u0430\u0434 \u0440\u043E\u0437\u0440\u043E\u0431\u043A\u043E\u044E \u0442\u0430 \u0432\u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u044E\u0454\u043C\u043E \u0439\u043E\u0433\u043E. \u041C\u0438 \u0432\u0456\u0434\u043A\u0440\u0438\u0454\u043C\u043E \u0432\u0438\u0445\u0456\u0434\u043D\u0438\u0439 \u043A\u043E\u0434, \u043A\u043E\u043B\u0438 \u0432\u0456\u043D \u0431\u0443\u0434\u0435 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0434\u043B\u044F \u0437\u0430\u0433\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F."]);
    },
    "desc_para3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0429\u043E\u0431 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438 \u043F\u0440\u0438\u0441\u043A\u043E\u0440\u0438\u0442\u0438 \u0440\u043E\u0437\u0440\u043E\u0431\u043A\u0443, \u0432\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043F\u043E\u043D\u0441\u043E\u0440\u0443\u0432\u0430\u0442\u0438 \u0447\u043B\u0435\u043D\u0456\u0432 \u043D\u0430\u0448\u043E\u0457 \u043A\u043E\u043C\u0430\u043D\u0434\u0438 \u0437\u0430 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F\u043C\u0438 \u043D\u0438\u0436\u0447\u0435. \u0421\u043F\u043E\u0434\u0456\u0432\u0430\u0454\u043C\u043E\u0441\u044F, \u0432\u0430\u043C \u0441\u043F\u043E\u0434\u043E\u0431\u0430\u0454\u0442\u044C\u0441\u044F Elk!"]);
    },
    "desc_para4": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E \u0446\u044C\u043E\u0433\u043E, \u044F\u043A\u0449\u043E \u0432\u0438 \u0445\u043E\u0447\u0435\u0442\u0435 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438 \u0437 \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u043C, \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438 \u0432\u0456\u0434\u0433\u0443\u043A \u0430\u0431\u043E \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u0432\u043D\u0435\u0441\u043E\u043A,"]);
    },
    "desc_para5": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0437\u0432\u2019\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043D\u0430\u043C\u0438 \u043D\u0430 GitHub"]);
    },
    "desc_para6": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0456 \u0434\u043E\u043B\u0443\u0447\u0456\u0442\u044C\u0441\u044F."]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk \u0443 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u043C\u0443 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0456!"]);
    }
  },
  "language": {
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u0448\u0443\u043A"]);
    }
  },
  "menu": {
    "block_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0417\u0430\u0431\u043B\u043E\u043A\u0443\u0432\u0430\u0442\u0438 ", _interpolate(_list(0))]);
    },
    "block_domain": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0417\u0430\u0431\u043B\u043E\u043A\u0443\u0432\u0430\u0442\u0438 \u0434\u043E\u043C\u0435\u043D ", _interpolate(_list(0))]);
    },
    "copy_link_to_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u0446\u0435\u0439 \u0434\u043E\u043F\u0438\u0441"]);
    },
    "delete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"]);
    },
    "delete_and_redraft": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0456 \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u0442\u0438"]);
    },
    "direct_message_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u041F\u0440\u044F\u043C\u0435 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F ", _interpolate(_list(0))]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"]);
    },
    "mention_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0417\u0433\u0430\u0434\u0430\u0442\u0438 ", _interpolate(_list(0))]);
    },
    "mute_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 ", _interpolate(_list(0))]);
    },
    "mute_conversation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0406\u0433\u043D\u043E\u0440\u0443\u0432\u0430\u0442\u0438 \u0446\u0435\u0439 \u0434\u043E\u043F\u0438\u0441"]);
    },
    "open_in_original_site": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043D\u0430 \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u0441\u0430\u0439\u0442\u0456"]);
    },
    "pin_on_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u043A\u0440\u0456\u043F\u0438\u0442\u0438 \u043D\u0430 \u043F\u0440\u043E\u0444\u0456\u043B\u0456"]);
    },
    "share_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u0434\u0456\u043B\u0456\u0442\u044C\u0441\u044F \u0446\u0438\u043C \u0434\u043E\u043F\u0438\u0441\u043E\u043C"]);
    },
    "show_untranslated": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0443"]);
    },
    "toggle_theme": {
      "dark": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0423\u0432\u0456\u043C\u043A\u043D\u0443\u0442\u0438 \u0442\u0435\u043C\u043D\u0438\u0439 \u0440\u0435\u0436\u0438\u043C"]);
      },
      "light": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0423\u0432\u0456\u043C\u043A\u043D\u0443\u0442\u0438 \u0441\u0432\u0456\u0442\u043B\u0438\u0439 \u0440\u0435\u0436\u0438\u043C"]);
      }
    },
    "translate_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0435\u0440\u0435\u043A\u043B\u0430\u0441\u0442\u0438 \u0434\u043E\u043F\u0438\u0441"]);
    },
    "unblock_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0420\u043E\u0437\u0431\u043B\u043E\u043A\u0443\u0432\u0430\u0442\u0438 ", _interpolate(_list(0))]);
    },
    "unblock_domain": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0420\u043E\u0437\u0431\u043B\u043E\u043A\u0443\u0432\u0430\u0442\u0438 \u0434\u043E\u043C\u0435\u043D ", _interpolate(_list(0))]);
    },
    "unmute_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u041D\u0435 \u043F\u0440\u0438\u0445\u043E\u0432\u0443\u0432\u0430\u0442\u0438 ", _interpolate(_list(0))]);
    },
    "unmute_conversation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0435 \u0456\u0433\u043D\u043E\u0440\u0443\u0432\u0430\u0442\u0438 \u0446\u0435\u0439 \u0434\u043E\u043F\u0438\u0441"]);
    },
    "unpin_on_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0456\u0434\u043A\u0440\u0456\u043F\u0438\u0442\u0438 \u0437 \u043F\u0440\u043E\u0444\u0456\u043B\u044E"]);
    }
  },
  "nav": {
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0430\u0437\u0430\u0434"]);
    },
    "blocked_domains": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u0431\u043B\u043E\u043A\u043E\u0432\u0430\u043D\u0456 \u0434\u043E\u043C\u0435\u043D\u0438"]);
    },
    "blocked_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u0431\u043B\u043E\u043A\u043E\u0432\u0430\u043D\u0456 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456"]);
    },
    "bookmarks": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0438"]);
    },
    "built_at": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E ", _interpolate(_list(0))]);
    },
    "conversations": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0440\u044F\u043C\u0456 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F"]);
    },
    "explore": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u0433\u043B\u044F\u0434"]);
    },
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u043F\u043E\u0434\u043E\u0431\u0430\u043D\u0435"]);
    },
    "federated": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u0430"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0413\u043E\u043B\u043E\u0432\u043D\u0430"]);
    },
    "local": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041B\u043E\u043A\u0430\u043B\u044C\u043D\u0430"]);
    },
    "muted_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u043D\u0456 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456"]);
    },
    "notifications": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u043D\u044F"]);
    },
    "profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0440\u043E\u0444\u0456\u043B\u044C"]);
    },
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u0448\u0443\u043A"]);
    },
    "select_feature_flags": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0444\u0443\u043D\u043A\u0446\u0456\u0439"]);
    },
    "select_font_size": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0440\u043E\u0437\u043C\u0456\u0440 \u0448\u0440\u0438\u0444\u0442\u0443"]);
    },
    "select_language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u043C\u043E\u0432\u0443"]);
    },
    "settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F"]);
    },
    "show_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0456\u043D\u0442\u0440\u043E"]);
    },
    "toggle_theme": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0442\u0435\u043C\u0443"]);
    },
    "zen_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Zen-\u0440\u0435\u0436\u0438\u043C"]);
    }
  },
  "notification": {
    "favourited_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0434\u043E\u0434\u0430\u043B\u0438 \u0432\u0430\u0448\u0438\u0439 \u0434\u043E\u043F\u0438\u0441 \u0434\u043E \u0432\u0438\u0431\u0440\u0430\u043D\u043E\u0433\u043E"]);
    },
    "followed_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u043F\u0456\u0434\u043F\u0438\u0441\u0430\u043B\u0438\u0441\u044C \u043D\u0430 \u0432\u0430\u0441"]);
    },
    "followed_you_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_list(0)), " \u043B\u044E\u0434\u0435\u0439 \u043F\u0456\u0434\u043F\u0438\u0441\u0430\u043B\u0438\u0441\u044F \u043D\u0430 \u0432\u0430\u0441"]), _normalize([_interpolate(_list(0)), " \u043B\u044E\u0434\u0438\u043D\u0430 \u043F\u0456\u0434\u043F\u0438\u0441\u0430\u043B\u0438\u0441\u044F \u043D\u0430 \u0432\u0430\u0441"]), _normalize([_interpolate(_list(0)), " \u043B\u044E\u0434\u0438\u043D\u0438 \u043F\u0456\u0434\u043F\u0438\u0441\u0430\u043B\u0438\u0441\u044F \u043D\u0430 \u0432\u0430\u0441"]), _normalize([_interpolate(_list(0)), " \u043B\u044E\u0434\u0435\u0439 \u043F\u0456\u0434\u043F\u0438\u0441\u0430\u043B\u0438\u0441\u044F \u043D\u0430 \u0432\u0430\u0441"])]);
    },
    "missing_type": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0406\u0414\u0421\u0423\u0422\u041D\u0406\u0419 notification.type:"]);
    },
    "reblogged_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u043F\u043E\u0448\u0438\u0440\u0438\u043B\u0438 \u0432\u0430\u0448 \u0434\u043E\u043F\u0438\u0441"]);
    },
    "request_to_follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u043F\u043E\u043F\u0440\u043E\u0441\u0438\u043B\u0438 \u043F\u0456\u0434\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F \u043D\u0430 \u0432\u0430\u0441"]);
    },
    "signed_up": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u043B\u0438\u0441\u044F"]);
    },
    "update_status": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u043E\u043D\u043E\u0432\u0438\u043B\u0438 \u0441\u0432\u043E\u044E \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u044E"]);
    }
  },
  "placeholder": {
    "content_warning": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u0432\u0430\u0448\u0435 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u0436\u0435\u043D\u043D\u044F \u0442\u0443\u0442"]);
    },
    "default_1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0429\u043E \u0443 \u0432\u0430\u0441 \u043D\u0430 \u0434\u0443\u043C\u0446\u0456?"]);
    },
    "reply_to_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0441\u0442\u0438 ", _interpolate(_list(0))]);
    },
    "replying": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C"]);
    }
  },
  "pwa": {
    "dismiss": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u043A\u0440\u0438\u0442\u0438"]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u043D\u043E\u0432\u0430 \u0432\u0435\u0440\u0441\u0456\u044F Elk!"]);
    },
    "update": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u043D\u043E\u0432\u0438\u0442\u0438"]);
    },
    "update_available_short": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E\u043D\u043E\u0432\u0438\u0442\u0438 Elk"]);
    }
  },
  "search": {
    "search_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u0448\u0443\u043A \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432 \u0442\u0430 \u0445\u0435\u0448\u0442\u0435\u0491\u0456\u0432"]);
    },
    "search_empty": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u043D\u0430\u0439\u0442\u0438 \u043D\u0456\u0447\u043E\u0433\u043E, \u0449\u043E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454 \u0446\u0438\u043C \u043F\u043E\u0448\u0443\u043A\u043E\u0432\u0438\u043C \u0442\u0435\u0440\u043C\u0456\u043D\u0430\u043C"]);
    }
  },
  "settings": {
    "about": {
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041F\u0440\u043E \u043D\u0430\u0441"]);
      }
    },
    "account_settings": {
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0412\u0456\u0434\u0440\u0435\u0434\u0430\u0433\u0443\u0439\u0442\u0435 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0447\u0438 \u0456\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 Mastodon"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0443"]);
      }
    },
    "interface": {
      "color_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041A\u043E\u043B\u044C\u043E\u0440\u043E\u0432\u0430 \u0442\u0435\u043C\u0430"]);
      },
      "dark_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0422\u0435\u043C\u043D\u0430"]);
      },
      "default": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize([" (\u0437\u0430 \u0437\u0430\u043C\u043E\u0432\u0447\u0443\u0432\u0430\u043D\u043D\u044F\u043C)"]);
      },
      "font_size": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0420\u043E\u0437\u043C\u0456\u0440 \u0448\u0440\u0438\u0444\u0442\u0430"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0406\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441"]);
      },
      "light_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0421\u0432\u0456\u0442\u043B\u0430"]);
      }
    },
    "language": {
      "display_language": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041C\u043E\u0432\u0430 \u0456\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041C\u043E\u0432\u0430"]);
      }
    },
    "notifications": {
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0421\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u043D\u044F"]);
      },
      "notifications": {
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u044C"]);
        }
      },
      "push_notifications": {
        "alerts": {
          "favourite": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0412\u043F\u043E\u0434\u043E\u0431\u0430\u043D\u043D\u044F"]);
          },
          "follow": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041D\u043E\u0432\u0456 \u043F\u0456\u0434\u043F\u0438\u0441\u043D\u0438\u043A\u0438"]);
          },
          "mention": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0417\u0433\u0430\u0434\u043A\u0438"]);
          },
          "poll": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041E\u043F\u0438\u0442\u0443\u0432\u0430\u043D\u043D\u044F"]);
          },
          "reblog": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041F\u043E\u0448\u0438\u0440\u0435\u043D\u043D\u044F \u0432\u0430\u0448\u043E\u0433\u043E \u0434\u043E\u043F\u0438\u0441\u0443"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u042F\u043A\u0456 \u0441\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u043D\u044F \u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438?"]);
          }
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041E\u0442\u0440\u0438\u043C\u0443\u0439\u0442\u0435 \u0441\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u043D\u044F, \u043D\u0430\u0432\u0456\u0442\u044C \u044F\u043A\u0449\u043E \u0432\u0438 \u043D\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u0435 Elk."]);
        },
        "instructions": (ctx) => {
          const { normalize: _normalize, linked: _linked, type: _type } = ctx;
          return _normalize(['\u041D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C\u0442\u0435 \u0437\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0437\u043C\u0456\u043D\u0438 \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u043A\u043D\u043E\u043F\u043A\u0438 "', _linked("settings.notifications.push_notifications.save_settings", void 0, _type), '"', "!"]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F push-\u0441\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u044C"]);
        },
        "policy": {
          "all": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0412\u0456\u0434 \u0431\u0443\u0434\u044C-\u043A\u043E\u0433\u043E"]);
          },
          "followed": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041B\u044E\u0434\u0435\u0439, \u0437\u0430 \u044F\u043A\u0438\u043C\u0438 \u044F \u0441\u0442\u0435\u0436\u0443"]);
          },
          "follower": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041B\u044E\u0434\u0435\u0439, \u044F\u043A\u0456 \u0441\u043B\u0456\u0434\u043A\u0443\u044E\u0442\u044C \u0437\u0430 \u043C\u043D\u043E\u044E"]);
          },
          "none": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041D\u0456 \u0432\u0456\u0434 \u043A\u043E\u0433\u043E"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0412\u0456\u0434 \u043A\u043E\u0433\u043E \u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438 \u0441\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u043D\u044F?"]);
          }
        },
        "save_settings": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F"]);
        },
        "subscription_error": {
          "clear_error": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u043F\u043E\u043C\u0438\u043B\u043A\u0443"]);
          },
          "permission_denied": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0423 \u0434\u043E\u0437\u0432\u043E\u043B\u0456 \u0432\u0456\u0434\u043C\u043E\u0432\u043B\u0435\u043D\u043E: \u0443\u0432\u0456\u043C\u043A\u043D\u0456\u0442\u044C \u0441\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u043D\u044F \u0443 \u0441\u0432\u043E\u0454\u043C\u0443 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0456."]);
          },
          "request_error": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041F\u0456\u0434 \u0447\u0430\u0441 \u0437\u0430\u043F\u0438\u0442\u0443 \u043D\u0430 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0443 \u0441\u0442\u0430\u043B\u0430\u0441\u044F \u043F\u043E\u043C\u0438\u043B\u043A\u0430. \u041F\u043E\u0432\u0442\u043E\u0440\u0456\u0442\u044C \u0441\u043F\u0440\u043E\u0431\u0443, \u0430 \u044F\u043A\u0449\u043E \u043F\u043E\u043C\u0438\u043B\u043A\u0430 \u043D\u0435 \u0437\u043D\u0438\u043A\u043D\u0435, \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u0442\u0435 \u043F\u0440\u043E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443 \u0432 \u0440\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0456\u0439 Elk."]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u043F\u0456\u0434\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F \u043D\u0430 push-\u0441\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u043D\u044F"]);
          }
        },
        "undo_settings": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0437\u043C\u0456\u043D\u0438"]);
        },
        "unsubscribe": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0412\u0438\u043C\u043A\u043D\u0443\u0442\u0438 push-\u0441\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u043D\u044F"]);
        },
        "unsupported": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454 push-\u0441\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u043D\u044F."]);
        },
        "warning": {
          "enable_close": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0417\u0430\u043A\u0440\u0438\u0442\u0438"]);
          },
          "enable_description": (ctx) => {
            const { normalize: _normalize, linked: _linked, type: _type } = ctx;
            return _normalize(['\u0429\u043E\u0431 \u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438 \u0441\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u043D\u044F, \u043A\u043E\u043B\u0438 Elk \u043D\u0435 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u043E, \u0443\u0432\u0456\u043C\u043A\u043D\u0456\u0442\u044C push-\u0441\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u043D\u044F. \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044E\u0432\u0430\u0442\u0438, \u044F\u043A\u0456 \u0441\u0430\u043C\u0435 \u0442\u0438\u043F\u0438 \u0441\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u044C \u0433\u0435\u043D\u0435\u0440\u0443\u044E\u0442\u044C push-\u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F, \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u043A\u043D\u043E\u043F\u043A\u0438 "', _linked("settings.notifications.show_btn", void 0, _type), '"', " \u043F\u0456\u0441\u043B\u044F \u0432\u0432\u0456\u043C\u043A\u043D\u0435\u043D\u043D\u044F."]);
          },
          "enable_desktop": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0423\u0432\u0456\u043C\u043A\u043D\u0443\u0442\u0438 push-\u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F"]);
          },
          "enable_title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u041D\u0456\u043A\u043E\u043B\u0438 \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0439\u0442\u0435"]);
          },
          "re_auth": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0417\u0434\u0430\u0454\u0442\u044C\u0441\u044F, \u0432\u0430\u0448 \u0441\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454 push-\u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F. \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0432\u0438\u0439\u0442\u0438 \u0442\u0430 \u0443\u0432\u0456\u0439\u0442\u0438 \u0437\u043D\u043E\u0432\u0443, \u044F\u043A\u0449\u043E \u0446\u0435 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u0432\u0441\u0435 \u043E\u0434\u043D\u043E \u0437\u2019\u044F\u0432\u043B\u044F\u0454\u0442\u044C\u0441\u044F, \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430 \u0441\u0432\u043E\u0433\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u0430."]);
          }
        }
      },
      "show_btn": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043E \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u044C \u0441\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u044C"]);
      }
    },
    "notifications_settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u043D\u044F"]);
    },
    "preferences": {
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F"]);
      }
    },
    "profile": {
      "appearance": {
        "bio": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041F\u0440\u043E \u0412\u0430\u0441"]);
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0430\u0432\u0430\u0442\u0430\u0440, \u0456\u043C'\u044F, \u043F\u0440\u043E\u0444\u0456\u043B\u044C, \u0442\u043E\u0449\u043E."]);
        },
        "display_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0406\u043C'\u044F"]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0412\u0438\u0433\u043B\u044F\u0434"]);
        },
        "profile_metadata": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041C\u0435\u0442\u0430\u0434\u0430\u043D\u0456 \u043F\u0440\u043E\u0444\u0456\u043B\u044E"]);
        },
        "profile_metadata_desc": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0423 \u0432\u0430\u0448\u043E\u043C\u0443 \u043F\u0440\u043E\u0444\u0456\u043B\u0456 \u043C\u043E\u0436\u043D\u0430 \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u0438 \u0434\u043E 4 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432 \u0443 \u0432\u0438\u0433\u043B\u044F\u0434\u0456 \u0442\u0430\u0431\u043B\u0438\u0446\u0456"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043F\u0440\u043E\u0444\u0456\u043B\u044C"]);
        }
      },
      "featured_tags": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456 \u043C\u043E\u0436\u0443\u0442\u044C \u0444\u0456\u043B\u044C\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u0432\u0430\u0448\u0456 \u0437\u0430\u0433\u0430\u043B\u044C\u043D\u043E\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0456 \u0434\u043E\u043F\u0438\u0441\u0438 \u0437\u0430 \u0446\u0438\u043C\u0438 \u0445\u0435\u0448\u0442\u0435\u0491\u0430\u043C\u0438."]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043D\u0456 \u0445\u0435\u0448\u0442\u0435\u0491\u0438"]);
        }
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041F\u0440\u043E\u0444\u0456\u043B\u044C"]);
      }
    },
    "select_a_settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F"]);
    },
    "users": {
      "export": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0415\u043A\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0442\u043E\u043A\u0435\u043D\u0438 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432"]);
      },
      "import": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0406\u043C\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0442\u043E\u043A\u0435\u043D\u0438 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456"]);
      }
    }
  },
  "state": {
    "attachments_exceed_server_limit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0432\u043A\u043B\u0430\u0434\u0435\u043D\u0438\u0445 \u0444\u0430\u0439\u043B\u0456\u0432 \u043F\u0435\u0440\u0435\u0432\u0438\u0449\u0438\u043B\u0430 \u043B\u0456\u043C\u0456\u0442 \u043D\u0430 \u0434\u043E\u043F\u0438\u0441."]);
    },
    "attachments_limit_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0435\u0440\u0435\u0432\u0438\u0449\u0435\u043D\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0432\u043A\u043B\u0430\u0434\u0435\u043D\u044C"]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["(\u0412\u0456\u0434\u0440\u0435\u0434\u0430\u0433\u043E\u0432\u0430\u043D\u043E)"]);
    },
    "editing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F"]);
    },
    "loading": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F..."]);
    },
    "upload_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F"]);
    },
    "uploading": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F..."]);
    }
  },
  "status": {
    "edited": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0420\u0435\u0434\u0430\u0433\u043E\u0432\u0430\u043D\u043E ", _interpolate(_list(0))]);
    },
    "filter_hidden_phrase": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0456\u0434\u0444\u0456\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u043D\u043E"]);
    },
    "filter_show_anyway": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0432\u0441\u0435 \u043E\u0434\u043D\u043E"]);
    },
    "img_alt": {
      "desc": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u041E\u043F\u0438\u0441 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F"]);
      },
      "dismiss": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0417\u0430\u043A\u0440\u0438\u0442\u0438"]);
      }
    },
    "poll": {
      "count": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
        return _plural([_normalize([_interpolate(_list(0)), " \u0433\u043E\u043B\u043E\u0441\u0456\u0432"]), _normalize([_interpolate(_list(0)), " \u0433\u043E\u043B\u043E\u0441"]), _normalize([_interpolate(_list(0)), " \u0433\u043E\u043B\u043E\u0441\u0438"]), _normalize([_interpolate(_list(0)), " \u0433\u043E\u043B\u043E\u0441\u0456\u0432"])]);
      },
      "ends": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0437\u0430\u0432\u0435\u0440\u0448\u0443\u0454\u0442\u044C\u0441\u044F ", _interpolate(_list(0))]);
      },
      "finished": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0437\u0435\u0432\u0435\u0440\u0448\u0438\u043B\u043E\u0441\u044C ", _interpolate(_list(0))]);
      }
    },
    "replying_to": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454 ", _interpolate(_list(0))]);
    },
    "show_full_thread": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u043F\u043E\u0442\u0456\u043A \u0434\u043E\u043F\u0438\u0441\u0456\u0432"]);
    },
    "someone": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u043A\u043E\u043C\u0443\u0441\u044C"]);
    },
    "spoiler_show_less": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u043C\u0435\u043D\u0448\u0435"]);
    },
    "spoiler_show_more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0431\u0456\u043B\u044C\u0448\u0435"]);
    },
    "try_original_site": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u0430\u0439\u0442"]);
    }
  },
  "status_history": {
    "created": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E ", _interpolate(_list(0))]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0440\u0435\u0434\u0430\u0433\u043E\u0432\u0430\u043D\u043E ", _interpolate(_list(0))]);
    }
  },
  "tab": {
    "for_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043B\u044F \u0432\u0430\u0441"]);
    },
    "hashtags": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0425\u0435\u0448\u0442\u0435\u0491\u0438"]);
    },
    "media": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041C\u0435\u0434\u0456\u0430"]);
    },
    "news": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u043E\u0432\u0438\u043D\u0438"]);
    },
    "notifications_all": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0423\u0441\u0456"]);
    },
    "notifications_mention": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u0433\u0430\u0434\u043A\u0438"]);
    },
    "posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u043F\u0438\u0441\u0438"]);
    },
    "posts_with_replies": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u043F\u0438\u0441\u0438 \u0442\u0430 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0456"]);
    }
  },
  "tag": {
    "follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u0442\u0435\u0436\u0438\u0442\u0438"]);
    },
    "follow_label": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0421\u0442\u0435\u0436\u0438\u0442\u0438 \u0437\u0430 \u0445\u0435\u0448\u0442\u0435\u0491\u043E\u043C ", _interpolate(_list(0))]);
    },
    "unfollow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0435 \u0441\u0442\u0435\u0436\u0438\u0442\u0438"]);
    },
    "unfollow_label": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u041D\u0435 \u0441\u0442\u0435\u0436\u0438\u0442\u0438 \u0437\u0430 \u0445\u0435\u0448\u0442\u0435\u0491\u043E\u043C ", _interpolate(_list(0))]);
    }
  },
  "time_ago_options": {
    "day_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0434\u043D\u0456\u0432"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0434\u0435\u043D\u044C"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0434\u043D\u0456"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0434\u043D\u0456\u0432"])]);
    },
    "day_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_named("n")), " \u0434\u043D\u0456\u0432 \u0442\u043E\u043C\u043E"]), _normalize([_interpolate(_named("n")), " \u0434\u0435\u043D\u044C \u0442\u043E\u043C\u0443"]), _normalize([_interpolate(_named("n")), " \u0434\u043D\u0456 \u0442\u043E\u043C\u0443"]), _normalize([_interpolate(_named("n")), " \u0434\u043D\u0456\u0432 \u0442\u043E\u043C\u0443"])]);
    },
    "hour_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0433\u043E\u0434\u0438\u043D"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0433\u043E\u0434\u0438\u043D\u0443"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0433\u043E\u0434\u0438\u043D\u0438"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0433\u043E\u0434\u0438\u043D"])]);
    },
    "hour_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_named("n")), " \u0433\u043E\u0434\u0438\u043D \u0442\u043E\u043C\u0443"]), _normalize([_interpolate(_named("n")), " \u0433\u043E\u0434\u0438\u043D\u0443 \u0442\u043E\u043C\u0443"]), _normalize([_interpolate(_named("n")), " \u0433\u043E\u0434\u0438\u043D\u0438 \u0442\u043E\u043C\u0443"]), _normalize([_interpolate(_named("n")), " \u0433\u043E\u0434\u0438\u043D \u0442\u043E\u043C\u0443"])]);
    },
    "just_now": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0442\u0456\u043B\u044C\u043A\u0438 \u0449\u043E"]);
    },
    "minute_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0445\u0432\u0438\u043B\u0438\u043D"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0445\u0432\u0438\u043B\u0438\u043D\u0443"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0445\u0432\u0438\u043B\u0438\u043D\u0438"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0445\u0432\u0438\u043B\u0438\u043D"])]);
    },
    "minute_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_named("n")), " \u0445\u0432\u0438\u043B\u0438\u043D \u0442\u043E\u043C\u0443"]), _normalize([_interpolate(_named("n")), " \u0445\u0432\u0438\u043B\u0438\u043D\u0443 \u0442\u043E\u043C\u0443"]), _normalize([_interpolate(_named("n")), " \u0445\u0432\u0438\u043B\u0438\u043D\u0438 \u0442\u043E\u043C\u0443"]), _normalize([_interpolate(_named("n")), " \u0445\u0432\u0438\u043B\u0438\u043D \u0442\u043E\u043C\u0443"])]);
    },
    "month_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u043C\u0456\u0441\u044F\u0446\u0456\u0432"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u043C\u0456\u0441\u044F\u0446\u044C"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u043C\u0456\u0441\u044F\u0446\u0456"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u043C\u0456\u0441\u044F\u0446\u0456\u0432"])]);
    },
    "month_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_named("n")), " \u043C\u0456\u0441\u044F\u0446\u0456\u0432 \u0442\u043E\u043C\u0443"]), _normalize([_interpolate(_named("n")), " \u043C\u0456\u0441\u044F\u0446\u044C \u0442\u043E\u043C\u0443"]), _normalize([_interpolate(_named("n")), " \u043C\u0456\u0441\u044F\u0446\u0456 \u0442\u043E\u043C\u0443"]), _normalize([_interpolate(_named("n")), " \u043C\u0456\u0441\u044F\u0446\u0456\u0432 \u0442\u043E\u043C\u0443"])]);
    },
    "second_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0442\u0456\u043B\u044C\u043A\u0438 \u0449\u043E"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0441\u0435\u043A\u0443\u043D\u0434\u0443"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0441\u0435\u043A\u0443\u043D\u0434\u0438"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0441\u0435\u043A\u0443\u043D\u0434"])]);
    },
    "second_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0442\u0456\u043B\u044C\u043A\u0438 \u0449\u043E"]), _normalize([_interpolate(_named("n")), " \u0441\u0435\u043A\u0443\u043D\u0434\u0443 \u0442\u043E\u043C\u0443"]), _normalize([_interpolate(_named("n")), " \u0441\u0435\u043A\u0443\u043D\u0434\u0438 \u0442\u043E\u043C\u0443"]), _normalize([_interpolate(_named("n")), " \u0441\u0435\u043A\u0443\u043D\u0434 \u0442\u043E\u043C\u0443"])]);
    },
    "short_day_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), "\u0434\u043D"]);
    },
    "short_day_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u0434\u043D"]);
    },
    "short_hour_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), "\u0433\u043E\u0434"]);
    },
    "short_hour_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u0433\u043E\u0434"]);
    },
    "short_minute_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), "\u0445\u0432"]);
    },
    "short_minute_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u0445\u0432"]);
    },
    "short_month_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), "\u043C\u0456\u0441"]);
    },
    "short_month_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u043C\u0456\u0441"]);
    },
    "short_second_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), "\u0441\u0435\u043A"]);
    },
    "short_second_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u0441\u0435\u043A"]);
    },
    "short_week_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), "\u0442\u0438\u0436"]);
    },
    "short_week_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u0442\u0438\u0436"]);
    },
    "short_year_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), "\u0440"]);
    },
    "short_year_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u0440"]);
    },
    "week_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0442\u0438\u0436\u043D\u0456\u0432"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0442\u0438\u0436\u0434\u0435\u043D\u044C"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0442\u0438\u0436\u043D\u0456"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0442\u0438\u0436\u043D\u0456\u0432"])]);
    },
    "week_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_named("n")), " \u0442\u0438\u0436\u043D\u0456\u0432 \u0442\u043E\u043C\u0443"]), _normalize([_interpolate(_named("n")), " \u0442\u0438\u0436\u0434\u0435\u043D\u044C \u0442\u043E\u043C\u0443"]), _normalize([_interpolate(_named("n")), " \u0442\u0438\u0436\u043D\u0456 \u0442\u043E\u043C\u0443"]), _normalize([_interpolate(_named("n")), " \u0442\u0438\u0436\u043D\u0456\u0432 \u0442\u043E\u043C\u0443"])]);
    },
    "year_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0440\u043E\u043A\u0456\u0432"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0440\u0456\u043A"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0440\u043E\u043A\u0438"]), _normalize(["\u0447\u0435\u0440\u0435\u0437 ", _interpolate(_named("n")), " \u0440\u043E\u043A\u0456\u0432"])]);
    },
    "year_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_named("n")), " \u0440\u043E\u043A\u0456\u0432 \u0442\u043E\u043C\u0443"]), _normalize([_interpolate(_named("n")), " \u0440\u0456\u043A \u0442\u043E\u043C\u0443"]), _normalize([_interpolate(_named("n")), " \u0440\u043E\u043A\u0438 \u0442\u043E\u043C\u0443"]), _normalize([_interpolate(_named("n")), " \u0440\u043E\u043A\u0456\u0432 \u0442\u043E\u043C\u0443"])]);
    }
  },
  "timeline": {
    "show_new_items": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 ", _interpolate(_named("v")), " \u043D\u043E\u0432\u0438\u0445 \u0434\u043E\u043F\u0438\u0441\u0456\u0432"]), _normalize(["\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 ", _interpolate(_named("v")), " \u043D\u043E\u0432\u0438\u0439 \u0434\u043E\u043F\u0438\u0441"]), _normalize(["\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 ", _interpolate(_named("v")), " \u043D\u043E\u0432\u0438\u0445 \u0434\u043E\u043F\u0438\u0441\u0438"]), _normalize(["\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 ", _interpolate(_named("v")), " \u043D\u043E\u0432\u0438\u0445 \u0434\u043E\u043F\u0438\u0441\u0456\u0432"])]);
    },
    "view_older_posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u0442\u0430\u0440\u0456\u0448\u0456 \u0434\u043E\u043F\u0438\u0441\u0438 \u0437 \u0456\u043D\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0456\u0432 \u043C\u043E\u0436\u0443\u0442\u044C \u043D\u0435 \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u0438\u0441\u044F."]);
    }
  },
  "title": {
    "federated_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u0430 \u0441\u0442\u0440\u0456\u0447\u043A\u0430"]);
    },
    "local_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041B\u043E\u043A\u0430\u043B\u044C\u043D\u0430 \u0441\u0442\u0440\u0456\u0447\u043A\u0430"]);
    }
  },
  "tooltip": {
    "add_content_warning": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u0436\u0435\u043D\u043D\u044F \u043F\u0440\u043E \u0432\u043C\u0456\u0441\u0442"]);
    },
    "add_media": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u0434\u0430\u0442\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F, \u0432\u0456\u0434\u0435\u043E \u0430\u0431\u043E \u0430\u0443\u0434\u0456\u043E"]);
    },
    "change_content_visibility": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0432\u0438\u0434\u0438\u043C\u0456\u0441\u0442\u044C \u0432\u043C\u0456\u0441\u0442\u0443"]);
    },
    "change_language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043C\u043E\u0432\u0443"]);
    },
    "emoji": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0415\u043C\u043E\u0434\u0436\u0456"]);
    },
    "explore_links_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0426\u0456 \u043D\u043E\u0432\u0438\u043D\u0438 \u0440\u043E\u0437\u043F\u043E\u0432\u0456\u0434\u0430\u044E\u0442\u044C \u0456\u0441\u0442\u043E\u0440\u0456\u0457 \u043F\u0440\u043E \u043B\u044E\u0434\u0435\u0439 \u043D\u0430 \u0446\u0438\u0445 \u0442\u0430 \u0456\u043D\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445 \u0434\u0435\u0446\u0435\u043D\u0442\u0440\u0430\u043B\u0456\u0437\u043E\u0432\u0430\u043D\u043E\u0457 \u043C\u0435\u0440\u0435\u0436\u0456 \u043F\u0440\u044F\u043C\u043E \u0437\u0430\u0440\u0430\u0437."]);
    },
    "explore_posts_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0426\u0456 \u0434\u043E\u043F\u0438\u0441\u0438 \u0437 \u0446\u044C\u043E\u0433\u043E \u0442\u0430 \u0456\u043D\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0456\u0432 \u0434\u0435\u0446\u0435\u043D\u0442\u0440\u0430\u043B\u0456\u0437\u043E\u0432\u0430\u043D\u043E\u0457 \u043C\u0435\u0440\u0435\u0436\u0456 \u0437\u0430\u0440\u0430\u0437 \u043D\u0430\u0431\u0438\u0440\u0430\u044E\u0442\u044C \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u0456 \u043D\u0430 \u0446\u044C\u043E\u043C\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u0456."]);
    },
    "explore_tags_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0426\u0456 \u0445\u0435\u0448\u0442\u0435\u0491\u0438 \u0437\u0430\u0440\u0430\u0437 \u043D\u0430\u0431\u0438\u0440\u0430\u044E\u0442\u044C \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u0456 \u0441\u0435\u0440\u0435\u0434 \u043B\u044E\u0434\u0435\u0439 \u043D\u0430 \u0446\u044C\u043E\u043C\u0443 \u0442\u0430 \u0456\u043D\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445 \u0434\u0435\u0446\u0435\u043D\u0442\u0440\u0430\u043B\u0456\u0437\u043E\u0432\u0430\u043D\u043E\u0457 \u043C\u0435\u0440\u0435\u0436\u0456."]);
    },
    "toggle_code_block": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0411\u043B\u043E\u043A \u043A\u043E\u0434\u0443"]);
    }
  },
  "user": {
    "add_existing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u043E\u0434\u0430\u0442\u0438 \u0430\u043A\u043A\u0430\u0443\u043D\u0442"]);
    },
    "server_address_label": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0410\u0434\u0440\u0435\u0441\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0443 Mastodon"]);
    },
    "sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0423\u0432\u0456\u0439\u0434\u0456\u0442\u044C, \u0449\u043E\u0431 \u0441\u043B\u0456\u0434\u043A\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u043F\u0440\u043E\u0444\u0456\u043B\u044F\u043C\u0438 \u0430\u0431\u043E \u0445\u0435\u0448\u0442\u0435\u0491\u0430\u043C\u0438, \u0434\u043E\u0434\u0430\u0432\u0430\u0442\u0438 \u0434\u043E \u043E\u0431\u0440\u0430\u043D\u043E\u0433\u043E, \u0440\u043E\u0437\u043F\u043E\u0432\u0441\u044E\u0434\u0436\u0443\u0432\u0430\u0442\u0438 \u0456 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u043D\u0430 \u0434\u043E\u043F\u0438\u0441\u0438, \u0430\u0431\u043E \u0432\u0437\u0430\u0454\u043C\u043E\u0434\u0456\u044F\u0442\u0438 \u0437 \u0432\u0430\u0448\u043E\u0433\u043E \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0443 \u043D\u0430 \u0456\u043D\u0448\u043E\u043C\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u0456."]);
    },
    "sign_in_notice_title": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u0434 \u043F\u0443\u0431\u043B\u0456\u0447\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 ", _interpolate(_list(0))]);
    },
    "sign_out_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0412\u0438\u0439\u0442\u0438 \u0437 ", _interpolate(_list(0))]);
    },
    "tip_no_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u042F\u043A\u0449\u043E \u0443 \u0432\u0430\u0441 \u0449\u0435 \u043D\u0435\u043C\u0430\u0454 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0443 Mastodon, ", _interpolate(_list(0)), "."]);
    },
    "tip_register_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u043E\u0431\u0435\u0440\u0456\u0442\u044C \u0441\u0435\u0440\u0432\u0435\u0440 \u0456 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0439\u0442\u0435\u0441\u044C"]);
    }
  },
  "visibility": {
    "direct": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041B\u0438\u0448\u0435 \u0437\u0433\u0430\u0434\u0430\u043D\u0456 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456"]);
    },
    "direct_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u043B\u0438\u0448\u0435 \u0437\u0433\u0430\u0434\u0430\u043D\u0438\u043C \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430\u043C"]);
    },
    "private": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0422\u0456\u043B\u044C\u043A\u0438 \u0434\u043B\u044F \u043F\u0456\u0434\u043F\u0438\u0441\u043D\u0438\u043A\u0456\u0432"]);
    },
    "private_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u043B\u0438\u0448\u0435 \u043F\u0456\u0434\u043F\u0438\u0441\u043D\u0438\u043A\u0430\u043C"]);
    },
    "public": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0443\u0431\u043B\u0456\u0447\u043D\u043E"]);
    },
    "public_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0438\u0434\u0438\u043C\u0438\u0439 \u0434\u043B\u044F \u0432\u0441\u0456\u0445"]);
    },
    "unlisted": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u043D\u0438\u0439"]);
    },
    "unlisted_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u0438\u0434\u0438\u043C\u0438\u0439 \u0434\u043B\u044F \u0432\u0441\u0456\u0445, \u0430\u043B\u0435 \u043D\u0435 \u0447\u0435\u0440\u0435\u0437 \u043C\u043E\u0436\u043B\u0438\u0432\u043E\u0441\u0442\u0456 \u0432\u0438\u044F\u0432\u043B\u0435\u043D\u043D\u044F"]);
    }
  }
};

export { ukUA as default };
