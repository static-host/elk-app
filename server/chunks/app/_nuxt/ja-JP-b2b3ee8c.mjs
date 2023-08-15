const jaJP = {
  "a11y": {
    "loading_page": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30DA\u30FC\u30B8\u306E\u8AAD\u307F\u8FBC\u307F\u4E2D\u3002\u3057\u3070\u3089\u304F\u304A\u5F85\u3061\u304F\u3060\u3055\u3044"]);
    },
    "loading_titled_page": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\u30DA\u30FC\u30B8\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u3002\u3057\u3070\u3089\u304F\u304A\u5F85\u3061\u304F\u3060\u3055\u3044"]);
    },
    "locale_changed": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u8A00\u8A9E\u3092", _interpolate(_list(0)), "\u306B\u5909\u66F4\u3057\u307E\u3057\u305F"]);
    },
    "locale_changing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8A00\u8A9E\u306E\u5909\u66F4\u4E2D\u3002\u3057\u3070\u3089\u304F\u304A\u5F85\u3061\u304F\u3060\u3055\u3044"]);
    },
    "route_loaded": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u30DA\u30FC\u30B8", _interpolate(_list(0)), "\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3057\u305F"]);
    }
  },
  "account": {
    "avatar_description": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\u3055\u3093\u306E\u30A2\u30D0\u30BF\u30FC"]);
    },
    "blocked_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u3042\u306A\u305F\u306F\u3053\u306E\u30E6\u30FC\u30B6\u30FC\u304B\u3089\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]);
    },
    "blocked_domains": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D6\u30ED\u30C3\u30AF\u3057\u305F\u30C9\u30E1\u30A4\u30F3"]);
    },
    "blocked_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D6\u30ED\u30C3\u30AF\u3057\u305F\u30E6\u30FC\u30B6\u30FC"]);
    },
    "blocking": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D6\u30ED\u30C3\u30AF\u4E2D"]);
    },
    "bot": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["BOT"]);
    },
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u304A\u6C17\u306B\u5165\u308A"]);
    },
    "follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D5\u30A9\u30ED\u30FC\u3059\u308B"]);
    },
    "follow_back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D5\u30A9\u30ED\u30FC\u30D0\u30C3\u30AF\u3059\u308B"]);
    },
    "follow_requested": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30EA\u30AF\u30A8\u30B9\u30C8\u6E08\u307F"]);
    },
    "followers": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D5\u30A9\u30ED\u30EF\u30FC"]);
    },
    "followers_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u30D5\u30A9\u30ED\u30EF\u30FC"]);
    },
    "following": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D5\u30A9\u30ED\u30FC\u4E2D"]);
    },
    "following_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u30D5\u30A9\u30ED\u30FC"]);
    },
    "follows_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D5\u30A9\u30ED\u30FC\u3055\u308C\u3066\u3044\u307E\u3059"]);
    },
    "go_to_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u306B\u79FB\u52D5"]);
    },
    "joined": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u767B\u9332\u65E5"]);
    },
    "moved_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u3055\u3093\u306E\u65B0\u3057\u3044\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u73FE\u5728\u306E\u3053\u3061\u3089\u3067\u3059"]);
    },
    "muted_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30DF\u30E5\u30FC\u30C8\u3057\u305F\u30E6\u30FC\u30B6\u30FC"]);
    },
    "muting": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30DF\u30E5\u30FC\u30C8\u6E08\u307F"]);
    },
    "mutuals": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u76F8\u4E92\u30D5\u30A9\u30ED\u30FC"]);
    },
    "notifications_on_post_disable": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("username")), "\u3055\u3093\u304C\u6295\u7A3F\u3057\u305F\u3068\u304D\u306E\u901A\u77E5\u3092\u505C\u6B62\u3059\u308B"]);
    },
    "notifications_on_post_enable": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("username")), "\u3055\u3093\u304C\u6295\u7A3F\u3057\u305F\u3068\u304D\u306B\u901A\u77E5\u3059\u308B"]);
    },
    "pinned": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u56FA\u5B9A\u3057\u305F\u6295\u7A3F"]);
    },
    "posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6295\u7A3F"]);
    },
    "posts_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u6295\u7A3F"]);
    },
    "profile_description": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\u3055\u3093\u306E\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u30D8\u30C3\u30C0\u30FC"]);
    },
    "profile_personal_note": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u500B\u4EBA\u30E1\u30E2"]);
    },
    "profile_unavailable": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u304C\u5229\u7528\u3067\u304D\u307E\u305B\u3093"]);
    },
    "request_follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D5\u30A9\u30ED\u30FC\u3092\u30EA\u30AF\u30A8\u30B9\u30C8"]);
    },
    "unblock": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D6\u30ED\u30C3\u30AF\u89E3\u9664"]);
    },
    "unfollow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D5\u30A9\u30ED\u30FC\u89E3\u9664"]);
    },
    "unmute": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30DF\u30E5\u30FC\u30C8\u89E3\u9664"]);
    },
    "view_other_followers": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4ED6\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u304B\u3089\u306E\u30D5\u30A9\u30ED\u30EF\u30FC\u306F\u8868\u793A\u3055\u308C\u306A\u3044\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002"]);
    },
    "view_other_following": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4ED6\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u304B\u3089\u306E\u30D5\u30A9\u30ED\u30FC\u306F\u8868\u793A\u3055\u308C\u306A\u3044\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002"]);
    }
  },
  "action": {
    "apply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9069\u7528\u3059\u308B"]);
    },
    "bookmark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF"]);
    },
    "bookmarked": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u6E08\u307F"]);
    },
    "boost": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D6\u30FC\u30B9\u30C8"]);
    },
    "boost_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "boosted": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D6\u30FC\u30B9\u30C8\u6E08\u307F"]);
    },
    "clear_publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6295\u7A3F\u30A8\u30E9\u30FC\u3092\u30AF\u30EA\u30A2"]);
    },
    "clear_save_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4FDD\u5B58\u30A8\u30E9\u30FC\u3092\u30AF\u30EA\u30A2"]);
    },
    "clear_upload_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D5\u30A1\u30A4\u30EB\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u30A8\u30E9\u30FC\u3092\u30AF\u30EA\u30A2"]);
    },
    "close": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9589\u3058\u308B"]);
    },
    "compose": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6295\u7A3F"]);
    },
    "confirm": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u78BA\u8A8D"]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7DE8\u96C6\u3059\u308B"]);
    },
    "enter_app": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4F7F\u3044\u59CB\u3081\u308B"]);
    },
    "favourite": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u304A\u6C17\u306B\u5165\u308A"]);
    },
    "favourite_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "favourited": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u304A\u6C17\u306B\u5165\u308A\u6E08\u307F"]);
    },
    "more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u3055\u3089\u306B\u8868\u793A"]);
    },
    "next": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6B21\u3078"]);
    },
    "prev": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u524D\u3078"]);
    },
    "publish": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6295\u7A3F"]);
    },
    "reply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8FD4\u4FE1"]);
    },
    "reply_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "reset": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30EA\u30BB\u30C3\u30C8"]);
    },
    "save": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4FDD\u5B58\u3059\u308B"]);
    },
    "save_changes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5909\u66F4\u3092\u4FDD\u5B58"]);
    },
    "sign_in": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30B5\u30A4\u30F3\u30A4\u30F3"]);
    },
    "sign_in_to": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\u306B\u30B5\u30A4\u30F3\u30A4\u30F3"]);
    },
    "switch_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u5207\u308A\u66FF\u3048"]);
    },
    "vote": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6295\u7968"]);
    }
  },
  "app_desc_short": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["\u8EFD\u5FEB\u306AMastodon\u30A6\u30A7\u30D6\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8"]);
  },
  "app_logo": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Elk\u306E\u30ED\u30B4"]);
  },
  "app_name": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Elk"]);
  },
  "attachment": {
    "edit_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8AAC\u660E\u6587"]);
    },
    "remove_label": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6DFB\u4ED8\u3092\u524A\u9664"]);
    }
  },
  "command": {
    "activate": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6709\u52B9\u5316"]);
    },
    "complete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5B8C\u4E86\u3059\u308B"]);
    },
    "compose_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u65B0\u3057\u3044\u6295\u7A3F\u3092\u66F8\u304F"]);
    },
    "n-people-in-the-past-n-days": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u904E\u53BB", _interpolate(_list(1)), "\u65E5\u306E\u30E6\u30FC\u30B6\u30FC\u6570: ", _interpolate(_list(0))]);
    },
    "select_lang": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8A00\u8A9E\u3092\u9078\u629E\u3059\u308B"]);
    },
    "sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u65E2\u5B58\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u8FFD\u52A0\u3059\u308B"]);
    },
    "switch_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u306B\u5207\u308A\u66FF\u3048\u308B"]);
    },
    "switch_account_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4ED6\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u5207\u308A\u66FF\u3048\u308B"]);
    },
    "toggle_dark_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9\u306B\u5207\u308A\u66FF\u3048\u308B"]);
    },
    "toggle_zen_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7985\u30E2\u30FC\u30C9\u3092\u5207\u308A\u66FF\u3048\u308B"]);
    }
  },
  "common": {
    "end_of_list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30EA\u30B9\u30C8\u306E\u6700\u5F8C\u3067\u3059"]);
    },
    "error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["ERROR"]);
    },
    "fetching": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u53D6\u5F97\u4E2D..."]);
    },
    "in": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["in"]);
    },
    "no_bookmarks": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u3055\u308C\u305F\u6295\u7A3F\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093"]);
    },
    "no_favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u304A\u6C17\u306B\u5165\u308A\u3055\u308C\u305F\u6295\u7A3F\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093"]);
    },
    "not_found": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["404 Not Found"]);
    },
    "offline_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u73FE\u5728\u30AA\u30D5\u30E9\u30A4\u30F3\u306E\u3088\u3046\u3067\u3059\u3002\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u63A5\u7D9A\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]);
    }
  },
  "compose": {
    "draft_title": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u4E0B\u66F8\u304D ", _interpolate(_list(0))]);
    },
    "drafts": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u4E0B\u66F8\u304D (", _interpolate(_named("v")), ")"]);
    }
  },
  "confirm": {
    "block_account": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30AD\u30E3\u30F3\u30BB\u30EB"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30D6\u30ED\u30C3\u30AF"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize([_interpolate(_list(0)), "\u3055\u3093\u3092\u672C\u5F53\u306B\u30DF\u30E5\u30FC\u30C8\u3057\u305F\u3044\u3067\u3059\u304B\uFF1F"]);
      }
    },
    "block_domain": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30AD\u30E3\u30F3\u30BB\u30EB"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30D6\u30ED\u30C3\u30AF"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize([_interpolate(_list(0)), "\u3055\u3093\u3092\u672C\u5F53\u306B\u30D6\u30ED\u30C3\u30AF\u3057\u305F\u3044\u3067\u3059\u304B\uFF1F"]);
      }
    },
    "common": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u3044\u3044\u3048"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u306F\u3044"]);
      }
    },
    "delete_list": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30AD\u30E3\u30F3\u30BB\u30EB"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u524A\u9664"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(['\u30EA\u30B9\u30C8 "', _interpolate(_list(0)), '" \u3092\u672C\u5F53\u306B\u524A\u9664\u3057\u305F\u3044\u3067\u3059\u304B\uFF1F']);
      }
    },
    "delete_posts": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30AD\u30E3\u30F3\u30BB\u30EB"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u524A\u9664"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u3053\u306E\u6295\u7A3F\u3092\u672C\u5F53\u306B\u524A\u9664\u3057\u305F\u3044\u3067\u3059\u304B\uFF1F"]);
      }
    },
    "mute_account": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30AD\u30E3\u30F3\u30BB\u30EB"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30DF\u30E5\u30FC\u30C8"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize([_interpolate(_list(0)), "\u3055\u3093\u3092\u672C\u5F53\u306B\u30DF\u30E5\u30FC\u30C8\u3057\u305F\u3044\u3067\u3059\u304B\uFF1F"]);
      }
    },
    "show_reblogs": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30AD\u30E3\u30F3\u30BB\u30EB"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u8868\u793A"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize([_interpolate(_list(0)), "\u3055\u3093\u306E\u30D6\u30FC\u30B9\u30C8\u3092\u672C\u5F53\u306B\u8868\u793A\u3057\u305F\u3044\u3067\u3059\u304B\uFF1F"]);
      }
    },
    "unfollow": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30AD\u30E3\u30F3\u30BB\u30EB"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30D5\u30A9\u30ED\u30FC\u89E3\u9664"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u672C\u5F53\u306B\u30D5\u30A9\u30ED\u30FC\u89E3\u9664\u3057\u305F\u3044\u3067\u3059\u304B\uFF1F"]);
      }
    }
  },
  "conversation": {
    "with": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["with"]);
    }
  },
  "custom_cards": {
    "stackblitz": {
      "lines": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Lines ", _interpolate(_list(0))]);
      },
      "open": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Open"]);
      },
      "snippet_from": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Snippet from ", _interpolate(_list(0))]);
      }
    }
  },
  "error": {
    "account_not_found": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u30A2\u30AB\u30A6\u30F3\u30C8 ", _interpolate(_list(0)), " \u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093"]);
    },
    "explore-list-empty": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u73FE\u5728\u30C8\u30EC\u30F3\u30C9\u306B\u306F\u4F55\u3082\u3042\u308A\u307E\u305B\u3093\u3002\u3042\u3068\u3067\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\uFF01"]);
    },
    "file_size_cannot_exceed_n_mb": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u30D5\u30A1\u30A4\u30EB\u30B5\u30A4\u30BA\u306F", _interpolate(_list(0)), "MB\u3092\u8D85\u3048\u3066\u306F\u3044\u3051\u307E\u305B\u3093"]);
    },
    "sign_in_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30B5\u30FC\u30D0\u30FC\u306B\u63A5\u7D9A\u3067\u304D\u307E\u305B\u3093\u3002"]);
    },
    "status_not_found": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6295\u7A3F\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093"]);
    },
    "unsupported_file_format": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5BFE\u5FDC\u3057\u3066\u3044\u306A\u3044\u30D5\u30A1\u30A4\u30EB\u5F62\u5F0F\u3067\u3059"]);
    }
  },
  "help": {
    "build_preview": {
      "desc1": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u3042\u306A\u305F\u306F\u73FE\u5728\u3001\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u304B\u3089\u63D0\u4F9B\u3055\u308C\u305F\u30D7\u30EC\u30D3\u30E5\u30FC\u7248\u306EElk\u3092\u8868\u793A\u3057\u3066\u3044\u307E\u3059 - ", _interpolate(_list(0)), "\u3002"]);
      },
      "desc2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u307E\u3060\u30EC\u30D3\u30E5\u30FC\u3055\u308C\u3066\u3044\u306A\u3044\u5909\u66F4\u3084\u3001\u5BB3\u304C\u3042\u308B\u5909\u66F4\u304C\u542B\u307E\u308C\u3066\u3044\u308B\u53EF\u80FD\u6027\u3082\u3042\u308A\u307E\u3059\u3002"]);
      },
      "desc3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u5B9F\u969B\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u3067\u306F\u6C7A\u3057\u3066\u30ED\u30B0\u30A4\u30F3\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30D7\u30EC\u30D3\u30E5\u30FC\u30C7\u30D7\u30ED\u30A4"]);
      }
    },
    "desc_highlight": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u3044\u304F\u3064\u304B\u306E\u30D0\u30B0\u3084\u8DB3\u308A\u306A\u3044\u6A5F\u80FD\u304C\u3044\u308D\u3044\u308D\u306A\u3068\u3053\u308D\u306B\u3042\u308B\u3053\u3068\u304C\u671F\u5F85\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]);
    },
    "desc_para1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u958B\u767A\u4E2D\u306EMastodon\u30A6\u30A7\u30D6\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u306EElk\u306B\u8208\u5473\u3092\u6301\u3063\u3066\u8A66\u3057\u3066\u304F\u308C\u3066\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01"]);
    },
    "desc_para2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u79C1\u305F\u3061\u306F\u6642\u9593\u3092\u304B\u3051\u3066\u958B\u767A\u3068\u6539\u5584\u306B\u52AA\u3081\u3066\u3044\u307E\u3059\u3002"]);
    },
    "desc_para3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u958B\u767A\u3092\u9032\u3081\u308B\u305F\u3081\u306B\u3001GitHub\u30B9\u30DD\u30F3\u30B5\u30FC\u3067\u30C1\u30FC\u30E0\u3092\u30B5\u30DD\u30FC\u30C8\u3067\u304D\u307E\u3059\u3002Elk\u3092\u697D\u3057\u3093\u3067\u304F\u308C\u308B\u3053\u3068\u3092\u9858\u3063\u3066\u3044\u307E\u3059\uFF01"]);
    },
    "desc_para4": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk\u306F\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9\u3067\u3059\u3002\u30C6\u30B9\u30C8\u3001\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u306E\u63D0\u4F9B\u3001\u30B3\u30F3\u30C8\u30EA\u30D3\u30E5\u30FC\u30B7\u30E7\u30F3\u3067\u958B\u767A\u3092\u52A9\u3051\u305F\u3044\u5834\u5408\u306F"]);
    },
    "desc_para5": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["GitHub\u3067\u9023\u7D61\u3092\u3068\u308A"]);
    },
    "desc_para6": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u53C2\u52A0\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]);
    },
    "footer_team": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk \u30C1\u30FC\u30E0"]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk\u306F\u30D7\u30EC\u30D3\u30E5\u30FC\u7248\u3067\u3059\uFF01"]);
    }
  },
  "language": {
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u691C\u7D22"]);
    }
  },
  "list": {
    "add_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u30EA\u30B9\u30C8\u306B\u8FFD\u52A0"]);
    },
    "cancel_edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7DE8\u96C6\u3092\u30AD\u30E3\u30F3\u30BB\u30EB"]);
    },
    "clear_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30A8\u30E9\u30FC\u3092\u30AF\u30EA\u30A2"]);
    },
    "create": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4F5C\u6210"]);
    },
    "delete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30EA\u30B9\u30C8\u3092\u524A\u9664"]);
    },
    "delete_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30EA\u30B9\u30C8\u306E\u524A\u9664\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F"]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30EA\u30B9\u30C8\u3092\u7DE8\u96C6"]);
    },
    "edit_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30EA\u30B9\u30C8\u306E\u66F4\u65B0\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F"]);
    },
    "error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30EA\u30B9\u30C8\u306E\u4F5C\u6210\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F"]);
    },
    "error_prefix": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30A8\u30E9\u30FC: "]);
    },
    "list_title_placeholder": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30EA\u30B9\u30C8\u306E\u30BF\u30A4\u30C8\u30EB"]);
    },
    "modify_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u3053\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u3067\u30EA\u30B9\u30C8\u3092\u7DE8\u96C6"]);
    },
    "remove_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u30EA\u30B9\u30C8\u304B\u3089\u524A\u9664"]);
    },
    "save": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5909\u66F4\u3092\u4FDD\u5B58"]);
    }
  },
  "magic_keys": {
    "dialog_header": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30AD\u30FC\u30DC\u30FC\u30C9\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8"]);
    },
    "groups": {
      "actions": {
        "boost": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u30D6\u30FC\u30B9\u30C8"]);
        },
        "command_mode": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u30B3\u30DE\u30F3\u30C9\u30E2\u30FC\u30C9"]);
        },
        "compose": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u6295\u7A3F"]);
        },
        "favourite": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u304A\u6C17\u306B\u5165\u308A"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u30A2\u30AF\u30B7\u30E7\u30F3"]);
        }
      },
      "media": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u30E1\u30C7\u30A3\u30A2"]);
        }
      },
      "navigation": {
        "go_to_home": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u30DB\u30FC\u30E0"]);
        },
        "go_to_notifications": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u901A\u77E5"]);
        },
        "next_status": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u6B21\u306E\u6295\u7A3F"]);
        },
        "previous_status": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u524D\u306E\u6295\u7A3F"]);
        },
        "shortcut_help": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u306E\u30D8\u30EB\u30D7"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3"]);
        }
      }
    },
    "sequence_then": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u306E\u5F8C\u306B"]);
    }
  },
  "menu": {
    "add_personal_note": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u306B\u500B\u4EBA\u30E1\u30E2\u3092\u8FFD\u52A0"]);
    },
    "block_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\u3055\u3093\u3092\u30D6\u30ED\u30C3\u30AF"]);
    },
    "block_domain": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\u3092\u30C9\u30E1\u30A4\u30F3\u30D6\u30ED\u30C3\u30AF"]);
    },
    "copy_link_to_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u3053\u306E\u6295\u7A3F\u3078\u306E\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC"]);
    },
    "copy_original_link_to_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u3053\u306E\u6295\u7A3F\u3078\u306E\u30AA\u30EA\u30B8\u30CA\u30EB\u306E\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC"]);
    },
    "delete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u524A\u9664"]);
    },
    "delete_and_redraft": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u524A\u9664\u3057\u3066\u4E0B\u66F8\u304D\u306B\u623B\u3059"]);
    },
    "direct_message_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\u3055\u3093\u306B\u30C0\u30A4\u30EC\u30AF\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8"]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7DE8\u96C6"]);
    },
    "hide_reblogs": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u304B\u3089\u306E\u30D6\u30FC\u30B9\u30C8\u3092\u96A0\u3059"]);
    },
    "mention_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\u3055\u3093\u306B\u30E1\u30F3\u30B7\u30E7\u30F3"]);
    },
    "mute_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\u3055\u3093\u3092\u30DF\u30E5\u30FC\u30C8"]);
    },
    "mute_conversation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6295\u7A3F\u3092\u30DF\u30E5\u30FC\u30C8"]);
    },
    "open_in_original_site": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5143\u306E\u30B5\u30A4\u30C8\u3067\u958B\u304F"]);
    },
    "pin_on_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u306B\u56FA\u5B9A"]);
    },
    "remove_personal_note": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u304B\u3089\u500B\u4EBA\u30E1\u30E2\u3092\u524A\u9664"]);
    },
    "share_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u3053\u306E\u6295\u7A3F\u3092\u5171\u6709"]);
    },
    "show_favourited_and_boosted_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u304A\u6C17\u306B\u5165\u308A\u30FB\u30D6\u30FC\u30B9\u30C8\u3057\u305F\u30E6\u30FC\u30B6\u30FC\u3092\u8868\u793A"]);
    },
    "show_reblogs": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u304B\u3089\u306E\u30D6\u30FC\u30B9\u30C8\u3092\u8868\u793A"]);
    },
    "show_untranslated": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7FFB\u8A33\u524D\u306E\u6587\u7AE0\u3092\u8868\u793A"]);
    },
    "toggle_theme": {
      "dark": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9\u306B\u5207\u308A\u66FF\u3048"]);
      },
      "light": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30E9\u30A4\u30C8\u30E2\u30FC\u30C9\u306B\u5207\u308A\u66FF\u3048"]);
      }
    },
    "translate_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6295\u7A3F\u3092\u7FFB\u8A33"]);
    },
    "unblock_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\u3055\u3093\u306E\u30D6\u30ED\u30C3\u30AF\u3092\u89E3\u9664"]);
    },
    "unblock_domain": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\u306E\u30C9\u30E1\u30A4\u30F3\u30D6\u30ED\u30C3\u30AF\u3092\u89E3\u9664"]);
    },
    "unmute_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\u3055\u3093\u306E\u30DF\u30E5\u30FC\u30C8\u3092\u89E3\u9664"]);
    },
    "unmute_conversation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6295\u7A3F\u306E\u30DF\u30E5\u30FC\u30C8\u3092\u89E3\u9664"]);
    },
    "unpin_on_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3078\u306E\u56FA\u5B9A\u3092\u89E3\u9664"]);
    }
  },
  "modals": {
    "aria_label_close": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9589\u3058\u308B"]);
    }
  },
  "nav": {
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u623B\u308B"]);
    },
    "blocked_domains": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D6\u30ED\u30C3\u30AF\u3057\u305F\u30C9\u30E1\u30A4\u30F3"]);
    },
    "blocked_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D6\u30ED\u30C3\u30AF\u3057\u305F\u30E6\u30FC\u30B6\u30FC"]);
    },
    "bookmarks": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF"]);
    },
    "built_at": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u30D3\u30EB\u30C9 ", _interpolate(_list(0))]);
    },
    "compose": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6295\u7A3F"]);
    },
    "conversations": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4F1A\u8A71"]);
    },
    "explore": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8A71\u984C\u306E\u6295\u7A3F"]);
    },
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u304A\u6C17\u306B\u5165\u308A"]);
    },
    "federated": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9023\u5408"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30DB\u30FC\u30E0"]);
    },
    "list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30EA\u30B9\u30C8"]);
    },
    "lists": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30EA\u30B9\u30C8"]);
    },
    "local": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30ED\u30FC\u30AB\u30EB"]);
    },
    "muted_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30DF\u30E5\u30FC\u30C8\u3057\u305F\u30E6\u30FC\u30B6\u30FC"]);
    },
    "notifications": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u901A\u77E5"]);
    },
    "privacy": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC"]);
    },
    "profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB"]);
    },
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u691C\u7D22"]);
    },
    "select_feature_flags": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5B9F\u9A13\u7684\u6A5F\u80FD\u3092\u5207\u308A\u66FF\u3048"]);
    },
    "select_font_size": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA"]);
    },
    "select_language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8A00\u8A9E\u3092\u9078\u629E"]);
    },
    "settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8A2D\u5B9A"]);
    },
    "show_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30A4\u30F3\u30C8\u30ED\u3092\u8868\u793A"]);
    },
    "toggle_theme": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30C6\u30FC\u30DE\u3092\u5207\u308A\u66FF\u3048"]);
    },
    "zen_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7985\u30E2\u30FC\u30C9"]);
    }
  },
  "notification": {
    "favourited_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u3055\u3093\u304C\u3042\u306A\u305F\u306E\u6295\u7A3F\u304A\u6C17\u306B\u5165\u308A\u767B\u9332\u3057\u307E\u3057\u305F"]);
    },
    "followed_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u3055\u3093\u304C\u3042\u306A\u305F\u3092\u30D5\u30A9\u30ED\u30FC\u3057\u307E\u3057\u305F"]);
    },
    "followed_you_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\u4EBA\u306E\u30E6\u30FC\u30B6\u30FC\u304C\u3042\u306A\u305F\u3092\u30D5\u30A9\u30ED\u30FC\u3057\u307E\u3057\u305F"]);
    },
    "missing_type": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["MISSING notification.type:"]);
    },
    "reblogged_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u3055\u3093\u304C\u3042\u306A\u305F\u306E\u6295\u7A3F\u3092\u30D6\u30FC\u30B9\u30C8\u3057\u307E\u3057\u305F"]);
    },
    "reported": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\u3055\u3093\u304C", _interpolate(_list(1)), "\u3092\u5831\u544A\u3057\u307E\u3057\u305F"]);
    },
    "request_to_follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u3055\u3093\u304C\u3042\u306A\u305F\u3078\u30D5\u30A9\u30ED\u30FC\u3092\u30EA\u30AF\u30A8\u30B9\u30C8\u3057\u307E\u3057\u305F"]);
    },
    "signed_up": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30B5\u30A4\u30F3\u30A2\u30C3\u30D7"]);
    },
    "update_status": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u3055\u3093\u304C\u6295\u7A3F\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F"]);
    }
  },
  "placeholder": {
    "content_warning": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u3053\u3053\u306B\u8B66\u544A\u3092\u8A18\u5165"]);
    },
    "default_1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4ECA\u306A\u306B\u3057\u3066\u308B\uFF1F"]);
    },
    "reply_to_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\u3055\u3093\u306B\u8FD4\u4FE1"]);
    },
    "replying": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8FD4\u4FE1\u3059\u308B"]);
    }
  },
  "pwa": {
    "dismiss": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9589\u3058\u308B"]);
    },
    "install": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"]);
    },
    "install_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u65B0\u3057\u3044Elk\u306E\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u304C\u5229\u7528\u3067\u304D\u307E\u3059\uFF01"]);
    },
    "update": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8"]);
    },
    "update_available_short": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk\u3092\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8"]);
    },
    "webmanifest": {
      "canary": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u8EFD\u5FEB\u306AMastodon\u30A6\u30A7\u30D6\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8 (canary)"]);
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
          return _normalize(["\u8EFD\u5FEB\u306AMastodon\u30A6\u30A7\u30D6\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8 (dev)"]);
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
          return _normalize(["\u8EFD\u5FEB\u306AMastodon\u30A6\u30A7\u30D6\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8 (preview)"]);
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
          return _normalize(["\u8EFD\u5FEB\u306AMastodon\u30A6\u30A7\u30D6\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8"]);
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
  "search": {
    "search_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30E6\u30FC\u30B6\u30FC\u3084\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u3092\u691C\u7D22\u3057\u307E\u3059"]);
    },
    "search_empty": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u3053\u306E\u691C\u7D22\u30AD\u30FC\u30EF\u30FC\u30C9\u3067\u306F\u4F55\u3082\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F"]);
    }
  },
  "settings": {
    "about": {
      "built_at": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30D3\u30EB\u30C9"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Elk\u306B\u3064\u3044\u3066"]);
      },
      "meet_the_team": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30C1\u30FC\u30E0\u7D39\u4ECB"]);
      },
      "sponsor_action": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u304F\u3060\u3055\u3044"]);
      },
      "sponsor_action_desc": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Elk\u3092\u958B\u767A\u3057\u3066\u3044\u308B\u30C1\u30FC\u30E0\u3092\u652F\u63F4\u3059\u308B"]);
      },
      "sponsors": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30B9\u30DD\u30F3\u30B5\u30FC"]);
      },
      "sponsors_body_1": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Elk\u306F\u4EE5\u4E0B\u306E\u5BDB\u5927\u306A\u30B9\u30DD\u30F3\u30B5\u30FC"]);
      },
      "sponsors_body_2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u305D\u3057\u3066\u3001Elk\u306E\u30C1\u30FC\u30E0\u3068\u30E1\u30F3\u30D0\u30FC\u3092\u652F\u63F4\u3057\u3066\u304F\u308C\u3066\u3044\u308B\u3059\u3079\u3066\u306E\u4F01\u696D\u3068\u500B\u4EBA\u306E\u304A\u304B\u3052\u3067\u5B9F\u73FE\u3057\u307E\u3057\u305F\u3002"]);
      },
      "sponsors_body_3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u3082\u3057\u30A2\u30D7\u30EA\u3092\u697D\u3057\u3093\u3067\u304F\u308C\u3066\u3044\u308B\u306A\u3089\u3001\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u3053\u3068\u3092\u8003\u3048\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002"]);
      },
      "version": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30D0\u30FC\u30B8\u30E7\u30F3"]);
      }
    },
    "account_settings": {
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Mastodon UI\u3067\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u8A2D\u5B9A\u3092\u7DE8\u96C6\u3057\u307E\u3059"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30A2\u30AB\u30A6\u30F3\u30C8\u8A2D\u5B9A"]);
      }
    },
    "interface": {
      "color_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30AB\u30E9\u30FC\u30E2\u30FC\u30C9"]);
      },
      "dark_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9"]);
      },
      "default": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize([" (\u30C7\u30D5\u30A9\u30EB\u30C8)"]);
      },
      "font_size": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30A4\u30B9"]);
      },
      "light_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30E9\u30A4\u30C8\u30E2\u30FC\u30C9"]);
      },
      "system_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30B7\u30B9\u30C6\u30E0"]);
      },
      "theme_color": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30C6\u30FC\u30DE\u30AB\u30E9\u30FC"]);
      }
    },
    "language": {
      "display_language": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u8868\u793A\u8A00\u8A9E"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u8A00\u8A9E"]);
      },
      "status": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u7FFB\u8A33\u72B6\u6CC1: ", _interpolate(_list(0)), "/", _interpolate(_list(1)), " (", _interpolate(_list(2)), "%)"]);
      },
      "translations": {
        "add": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u8FFD\u52A0"]);
        },
        "choose_language": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u8A00\u8A9E\u3092\u9078\u629E"]);
        },
        "heading": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u7FFB\u8A33"]);
        },
        "hide_specific": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u7279\u5B9A\u306E\u7FFB\u8A33\u3092\u96A0\u3059"]);
        },
        "remove": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u524A\u9664"]);
        }
      }
    },
    "notifications": {
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u901A\u77E5"]);
      },
      "notifications": {
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u901A\u77E5\u306E\u8A2D\u5B9A"]);
        }
      },
      "push_notifications": {
        "alerts": {
          "favourite": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u304A\u6C17\u306B\u5165\u308A"]);
          },
          "follow": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u65B0\u3057\u3044\u30D5\u30A9\u30ED\u30EF\u30FC"]);
          },
          "mention": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u30E1\u30F3\u30B7\u30E7\u30F3"]);
          },
          "poll": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u6295\u7968"]);
          },
          "reblog": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u6295\u7A3F\u306E\u30EA\u30D6\u30ED\u30B0"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u3069\u306E\u901A\u77E5\u3092\u53D7\u3051\u53D6\u308A\u307E\u3059\u304B\uFF1F"]);
          }
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk\u3092\u4F7F\u7528\u3057\u3066\u3044\u306A\u3044\u3068\u304D\u3067\u3082\u901A\u77E5\u3092\u53D7\u3051\u53D6\u308A\u307E\u3059\u3002"]);
        },
        "instructions": (ctx) => {
          const { normalize: _normalize, linked: _linked, type: _type } = ctx;
          return _normalize([_linked("settings.notifications.push_notifications.save_settings", void 0, _type), " \u30DC\u30BF\u30F3\u3067\u8A2D\u5B9A\u3092\u4FDD\u5B58\u3059\u308B\u306E\u3092\u5FD8\u308C\u306A\u3044\u3088\u3046\u6C17\u3092\u3064\u3051\u3066\u304F\u3060\u3055\u3044\uFF01"]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u30D7\u30C3\u30B7\u30E5\u901A\u77E5\u306E\u8A2D\u5B9A"]);
        },
        "policy": {
          "all": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u8AB0\u304B\u3089\u3067\u3082\u53D7\u3051\u53D6\u308B"]);
          },
          "followed": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u30D5\u30A9\u30ED\u30FC\u3057\u3066\u3044\u308B\u30E6\u30FC\u30B6\u30FC\u304B\u3089\u53D7\u3051\u53D6\u308B"]);
          },
          "follower": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u30D5\u30A9\u30ED\u30EF\u30FC\u304B\u3089\u53D7\u3051\u53D6\u308B"]);
          },
          "none": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u8AB0\u304B\u3089\u3082\u53D7\u3051\u53D6\u3089\u306A\u3044"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u901A\u77E5\u3092\u53D7\u3051\u53D6\u308B\u30E6\u30FC\u30B6\u30FC"]);
          }
        },
        "save_settings": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u8A2D\u5B9A\u3092\u4FDD\u5B58"]);
        },
        "subscription_error": {
          "clear_error": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u30A8\u30E9\u30FC\u306E\u30AF\u30EA\u30A2"]);
          },
          "error_hint": (ctx) => {
            const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
            return _normalize(["\u554F\u984C\u3092\u89E3\u6C7A\u3059\u308B\u305F\u3081\u306B\u3001\u3088\u304F\u3042\u308B\u8CEA\u554F\u306E\u4E00\u89A7\u3092\u53C2\u7167\u3067\u304D\u307E\u3059: ", _interpolate(_list(0))]);
          },
          "invalid_vapid_key": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["VAPID\u516C\u958B\u9375\u304C\u7121\u52B9\u306A\u3088\u3046\u3067\u3059\u3002"]);
          },
          "permission_denied": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u30D1\u30FC\u30DF\u30C3\u30B7\u30E7\u30F3\u62D2\u5426: \u30D6\u30E9\u30A6\u30B6\u3067\u901A\u77E5\u3092\u6709\u52B9\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]);
          },
          "repo_link": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Elk\u306EGitHub\u30EA\u30DD\u30B8\u30C8\u30EA"]);
          },
          "request_error": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u8CFC\u8AAD\u306E\u30EA\u30AF\u30A8\u30B9\u30C8\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u518D\u8A66\u884C\u3057\u3066\u30A8\u30E9\u30FC\u304C\u7D9A\u304F\u304B\u3069\u3046\u304B\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u3082\u3057\u30A8\u30E9\u30FC\u304C\u89E3\u6D88\u3057\u306A\u3044\u5834\u5408\u3001Elk\u30EA\u30DD\u30B8\u30C8\u30EA\u306Bissue\u3092\u5831\u544A\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u30D7\u30C3\u30B7\u30E5\u901A\u77E5\u3092\u8CFC\u8AAD\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F"]);
          },
          "too_many_registrations": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u30D6\u30E9\u30A6\u30B6\u30FC\u306E\u5236\u9650\u306B\u3088\u308A\u3001Elk\u306F\u7570\u306A\u308B\u30B5\u30FC\u30D0\u30FC\u4E0A\u306E\u8907\u6570\u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u5BFE\u3057\u3066\u30D7\u30C3\u30B7\u30E5\u901A\u77E5\u30B5\u30FC\u30D3\u30B9\u3092\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002\u4ED6\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u30D7\u30C3\u30B7\u30E5\u901A\u77E5\u306E\u8CFC\u8AAD\u3092\u89E3\u9664\u3057\u3066\u3001\u518D\u8CFC\u8AAD\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]);
          },
          "vapid_not_supported": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u306FWeb Push\u901A\u77E5\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u305B\u3093\u304C\u3001VAPID\u30D7\u30ED\u30C8\u30B3\u30EB\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u308B\u3088\u3046\u3067\u3059\u3002"]);
          }
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u30D7\u30C3\u30B7\u30E5\u901A\u77E5\u306E\u8A2D\u5B9A"]);
        },
        "undo_settings": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u5909\u66F4\u3092\u5143\u306B\u623B\u3059"]);
        },
        "unsubscribe": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u30D7\u30C3\u30B7\u30E5\u901A\u77E5\u3092\u7121\u52B9\u5316\u3059\u308B"]);
        },
        "unsupported": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u3042\u306A\u305F\u306E\u30D6\u30E9\u30A6\u30B6\u306F\u30D7\u30C3\u30B7\u30E5\u901A\u77E5\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u307E\u305B\u3093\u3002"]);
        },
        "warning": {
          "enable_close": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u9589\u3058\u308B"]);
          },
          "enable_description": (ctx) => {
            const { normalize: _normalize, linked: _linked, type: _type } = ctx;
            return _normalize(['Elk\u3092\u958B\u3044\u3066\u3044\u306A\u3044\u3068\u304D\u306B\u3082\u901A\u77E5\u3092\u53D7\u3051\u53D6\u308B\u306B\u306F\u3001\u30D7\u30C3\u30B7\u30E5\u901A\u77E5\u3092\u6709\u52B9\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u4E00\u5EA6\u6709\u52B9\u5316\u3059\u308B\u3068\u3001\u4E0A\u306E"', _linked("settings.notifications.show_btn", void 0, _type), '"', "\u30DC\u30BF\u30F3\u3067\u3001\u30D7\u30C3\u30B7\u30E5\u901A\u77E5\u3092\u884C\u3046\u7A2E\u985E\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u7D30\u304B\u304F\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3067\u304D\u307E\u3059\u3002"]);
          },
          "enable_description_desktop": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(['Elk\u3092\u958B\u3044\u3066\u3044\u306A\u3044\u3068\u304D\u306B\u3082\u901A\u77E5\u3092\u53D7\u3051\u53D6\u308B\u306B\u306F\u3001\u30D7\u30C3\u30B7\u30E5\u901A\u77E5\u3092\u6709\u52B9\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u4E00\u5EA6\u6709\u52B9\u5316\u3059\u308B\u3068\u3001"\u8A2D\u5B9A > \u901A\u77E5 > \u30D7\u30C3\u30B7\u30E5\u901A\u77E5\u306E\u8A2D\u5B9A" \u304B\u3089\u3001\u30D7\u30C3\u30B7\u30E5\u901A\u77E5\u3092\u884C\u3046\u7A2E\u985E\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u7D30\u304B\u304F\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3067\u304D\u307E\u3059\u3002']);
          },
          "enable_description_mobile": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(['\u307E\u305F\u3001\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3\u30E1\u30CB\u30E5\u30FC "\u8A2D\u5B9A > \u901A\u77E5 > \u30D7\u30C3\u30B7\u30E5\u901A\u77E5\u306E\u8A2D\u5B9A" \u3092\u4F7F\u7528\u3057\u3066\u8A2D\u5B9A\u3092\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002']);
          },
          "enable_description_settings": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Elk\u3092\u958B\u3044\u3066\u3044\u306A\u3044\u3068\u304D\u306B\u3082\u901A\u77E5\u3092\u53D7\u3051\u53D6\u308B\u306B\u306F\u3001\u30D7\u30C3\u30B7\u30E5\u901A\u77E5\u3092\u6709\u52B9\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u4E00\u5EA6\u6709\u52B9\u5316\u3059\u308B\u3068\u3001\u540C\u3058\u3053\u306E\u753B\u9762\u4E0A\u3067\u30D7\u30C3\u30B7\u30E5\u901A\u77E5\u3092\u884C\u3046\u7A2E\u985E\u306E\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u7D30\u304B\u304F\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u3067\u304D\u307E\u3059\u3002"]);
          },
          "enable_desktop": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u30D7\u30C3\u30B7\u30E5\u901A\u77E5\u3092\u6709\u52B9\u306B\u3059\u308B"]);
          },
          "enable_title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Never miss anything"]);
          },
          "re_auth": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u3042\u306A\u305F\u306E\u30B5\u30FC\u30D0\u30FC\u306F\u30D7\u30C3\u30B7\u30E5\u901A\u77E5\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u306A\u3044\u3088\u3046\u3067\u3059\u3002\u3082\u3057\u30B5\u30A4\u30F3\u30A2\u30A6\u30C8\u3068\u30B5\u30A4\u30F3\u30A4\u30F3\u3092\u3084\u308A\u76F4\u3057\u3066\u3082\u3053\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u307E\u3060\u8868\u793A\u3055\u308C\u308B\u5834\u5408\u306F\u3001\u30B5\u30FC\u30D0\u30FC\u7BA1\u7406\u8005\u306B\u9023\u7D61\u3057\u3066\u304F\u3060\u3055\u3044\u3002"]);
          }
        }
      },
      "show_btn": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u901A\u77E5\u8A2D\u5B9A\u306B\u79FB\u52D5"]);
      },
      "under_construction": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u5DE5\u4E8B\u4E2D"]);
      }
    },
    "notifications_settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u901A\u77E5"]);
    },
    "preferences": {
      "enable_autoplay": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u81EA\u52D5\u518D\u751F\u3092\u6709\u52B9\u5316"]);
      },
      "enable_data_saving": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30C7\u30FC\u30BF\u30BB\u30FC\u30D0\u30FC\u3092\u6709\u52B9\u306B\u3059\u308B"]);
      },
      "enable_data_saving_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u6DFB\u4ED8\u306E\u81EA\u52D5\u8AAD\u307F\u8FBC\u307F\u3092\u9632\u6B62\u3057\u3066\u30C7\u30FC\u30BF\u3092\u7BC0\u7D04\u3057\u307E\u3059\u3002"]);
      },
      "enable_pinch_to_zoom": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30D4\u30F3\u30C1\u306B\u3088\u308B\u30BA\u30FC\u30E0\u3092\u6709\u52B9\u306B\u3059\u308B"]);
      },
      "github_cards": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["GitHub\u30AB\u30FC\u30C9"]);
      },
      "grayscale_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB\u30E2\u30FC\u30C9"]);
      },
      "hide_account_hover_card": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u30DB\u30D0\u30FC\u30AB\u30FC\u30C9\u3092\u96A0\u3059"]);
      },
      "hide_alt_indi_on_posts": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u6295\u7A3F\u4E0A\u306Ealt\u8868\u793A\u3092\u96A0\u3059"]);
      },
      "hide_boost_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30D6\u30FC\u30B9\u30C8\u306E\u6570\u3092\u96A0\u3059"]);
      },
      "hide_favorite_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u304A\u6C17\u306B\u5165\u308A\u306E\u6570\u3092\u96A0\u3059"]);
      },
      "hide_follower_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30D5\u30A9\u30ED\u30EF\u30FC\u306E\u6570\u3092\u96A0\u3059"]);
      },
      "hide_news": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30CB\u30E5\u30FC\u30B9\u3092\u96A0\u3059"]);
      },
      "hide_reply_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30EA\u30D7\u30E9\u30A4\u306E\u6570\u3092\u96A0\u3059"]);
      },
      "hide_translation": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u7FFB\u8A33\u3092\u96A0\u3059"]);
      },
      "hide_username_emojis": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30E6\u30FC\u30B6\u30FC\u540D\u306E\u7D75\u6587\u5B57\u3092\u96A0\u3059"]);
      },
      "hide_username_emojis_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u4E0A\u3067\u30E6\u30FC\u30B6\u30FC\u540D\u306B\u542B\u307E\u308C\u308B\u7D75\u6587\u5B57\u3092\u96A0\u3057\u307E\u3059\u3002\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3067\u306F\u7D75\u6587\u5B57\u306F\u5F15\u304D\u7D9A\u304D\u8868\u793A\u3055\u308C\u307E\u3059\u3002"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u74B0\u5883\u8A2D\u5B9A"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u5B9F\u9A13\u7684\u6A5F\u80FD"]);
      },
      "use_star_favorite_icon": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u661F\u306E\u304A\u6C17\u306B\u5165\u308A\u30A2\u30A4\u30B3\u30F3\u3092\u4F7F\u7528\u3059\u308B"]);
      },
      "user_picker": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30E6\u30FC\u30B6\u30FC\u30D4\u30C3\u30AB\u30FC"]);
      },
      "virtual_scroll": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u4EEE\u60F3\u30B9\u30AF\u30ED\u30FC\u30EB"]);
      },
      "wellbeing": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30A6\u30A7\u30EB\u30D3\u30FC\u30A4\u30F3\u30B0"]);
      },
      "zen_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u7985\u30E2\u30FC\u30C9"]);
      },
      "zen_mode_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30DE\u30A6\u30B9\u30AB\u30FC\u30BD\u30EB\u3092\u4E0A\u306B\u8F09\u305B\u306A\u3044\u9650\u308A\u3001\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u96A0\u3057\u307E\u3059\u3002\u307E\u305F\u3001\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306E\u4E00\u90E8\u306E\u8981\u7D20\u3082\u96A0\u3057\u307E\u3059\u3002"]);
      }
    },
    "profile": {
      "appearance": {
        "bio": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB"]);
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u30A2\u30D0\u30BF\u30FC\u3001\u30E6\u30FC\u30B6\u30FC\u540D\u3001\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u306A\u3069\u3092\u7DE8\u96C6\u3057\u307E\u3059"]);
        },
        "display_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u8868\u793A\u540D"]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u5916\u89B3"]);
        },
        "profile_metadata": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u306E\u30E1\u30BF\u30C7\u30FC\u30BF"]);
        },
        "profile_metadata_desc": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
          return _normalize(["\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u306E\u30C6\u30FC\u30D6\u30EB\u306B\u306F\u6700\u5927", _interpolate(_list(0)), "\u9805\u76EE\u307E\u3067\u8868\u793A\u3067\u304D\u307E\u3059"]);
        },
        "profile_metadata_label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u30E9\u30D9\u30EB"]);
        },
        "profile_metadata_value": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u30B3\u30F3\u30C6\u30F3\u30C4"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u7DE8\u96C6"]);
        }
      },
      "featured_tags": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u4ED6\u306E\u30E6\u30FC\u30B6\u30FC\u306F\u3053\u308C\u3089\u306E\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u3067\u3042\u306A\u305F\u306E\u516C\u958B\u6295\u7A3F\u3092\u95B2\u89A7\u3067\u304D\u307E\u3059\u3002"]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u6CE8\u76EE\u306E\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0"]);
        }
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB"]);
      }
    },
    "select_a_settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8A2D\u5B9A\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044"]);
    },
    "users": {
      "export": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30E6\u30FC\u30B6\u30FC\u30C8\u30FC\u30AF\u30F3\u306E\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8"]);
      },
      "import": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30E6\u30FC\u30B6\u30FC\u30C8\u30FC\u30AF\u30F3\u306E\u30A4\u30F3\u30DD\u30FC\u30C8"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u30ED\u30B0\u30A4\u30F3\u30E6\u30FC\u30B6\u30FC"]);
      }
    }
  },
  "share-target": {
    "description": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk\u306F\u4ED6\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304B\u3089\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u5171\u6709\u3067\u304D\u308B\u3088\u3046\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u5171\u6709\u3059\u308B\u306B\u306F\u3001Elk\u3092\u30C7\u30D0\u30A4\u30B9\u3084\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u30B5\u30A4\u30F3\u30A4\u30F3\u3057\u307E\u3059\u3002"]);
    },
    "hint": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk\u3067\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u5171\u6709\u3059\u308B\u306B\u306F\u3001Elk\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3001\u30B5\u30A4\u30F3\u30A4\u30F3\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk\u3067\u5171\u6709\u3059\u308B"]);
    }
  },
  "state": {
    "attachments_exceed_server_limit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6DFB\u4ED8\u306E\u6570\u304C\u6295\u7A3F\u3054\u3068\u306E\u4E0A\u9650\u3092\u8D85\u3048\u3066\u3044\u307E\u3059\u3002"]);
    },
    "attachments_limit_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6295\u7A3F\u3054\u3068\u306E\u4E0A\u9650\u3092\u8D85\u3048\u3066\u3044\u307E\u3059"]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["(\u7DE8\u96C6\u6E08\u307F)"]);
    },
    "editing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7DE8\u96C6\u4E2D"]);
    },
    "loading": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8AAD\u8FBC\u4E2D..."]);
    },
    "publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6295\u7A3F\u306B\u5931\u6557\u3057\u307E\u3057\u305F"]);
    },
    "publishing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6295\u7A3F\u4E2D"]);
    },
    "save_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4FDD\u5B58\u306B\u5931\u6557\u3057\u307E\u3057\u305F"]);
    },
    "upload_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306B\u5931\u6557\u3057\u307E\u3057\u305F"]);
    },
    "uploading": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u66F4\u65B0\u4E2D..."]);
    }
  },
  "status": {
    "account": {
      "suspended_message": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u3053\u306E\u6295\u7A3F\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u30B5\u30B9\u30DA\u30F3\u30C9\u3055\u308C\u307E\u3057\u305F\u3002"]);
      },
      "suspended_show": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u305D\u308C\u3067\u3082\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u8868\u793A\u3057\u307E\u3059\u304B\uFF1F"]);
      }
    },
    "boosted_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D6\u30FC\u30B9\u30C8\u3057\u305F\u30E6\u30FC\u30B6\u30FC"]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u7DE8\u96C6\u6E08\u307F ", _interpolate(_list(0))]);
    },
    "favourited_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u304A\u6C17\u306B\u5165\u308A\u3057\u305F\u30E6\u30FC\u30B6\u30FC"]);
    },
    "filter_hidden_phrase": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D5\u30A3\u30EB\u30BF\u30FC"]);
    },
    "filter_show_anyway": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u3068\u306B\u304B\u304F\u8868\u793A"]);
    },
    "img_alt": {
      "ALT": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["ALT"]);
      },
      "desc": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u8AAC\u660E\u6587"]);
      },
      "dismiss": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u9589\u3058\u308B"]);
      },
      "read": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize([_interpolate(_list(0)), " \u306E\u8AAC\u660E\u6587\u3092\u8AAD\u3080"]);
      }
    },
    "poll": {
      "count": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize([_interpolate(_list(0)), " \u7968"]);
      },
      "ends": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize([_interpolate(_list(0)), "\u306B\u7D42\u4E86"]);
      },
      "finished": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize([_interpolate(_list(0)), "\u306B\u5B8C\u4E86"]);
      }
    },
    "replying_to": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\u3055\u3093\u3078\u306E\u8FD4\u4FE1"]);
    },
    "show_full_thread": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30B9\u30EC\u30C3\u30C9\u5168\u4F53\u3092\u8868\u793A"]);
    },
    "someone": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8AB0\u304B"]);
    },
    "spoiler_show_less": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u96A0\u3059"]);
    },
    "spoiler_show_more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8868\u793A\u3059\u308B"]);
    },
    "thread": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30B9\u30EC\u30C3\u30C9"]);
    },
    "try_original_site": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5143\u306E\u30B5\u30A4\u30C8\u3092\u8A66\u3059"]);
    }
  },
  "status_history": {
    "created": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\u306B\u6295\u7A3F"]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\u306B\u7DE8\u96C6"]);
    }
  },
  "tab": {
    "accounts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30A2\u30AB\u30A6\u30F3\u30C8"]);
    },
    "for_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["For you"]);
    },
    "hashtags": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0"]);
    },
    "list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30EA\u30B9\u30C8"]);
    },
    "media": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30E1\u30C7\u30A3\u30A2"]);
    },
    "news": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30CB\u30E5\u30FC\u30B9"]);
    },
    "notifications_all": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u3059\u3079\u3066"]);
    },
    "notifications_mention": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30E1\u30F3\u30B7\u30E7\u30F3"]);
    },
    "posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6295\u7A3F"]);
    },
    "posts_with_replies": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6295\u7A3F\u3068\u8FD4\u4FE1"]);
    }
  },
  "tag": {
    "follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D5\u30A9\u30ED\u30FC"]);
    },
    "follow_label": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u30BF\u30B0\u306E\u30D5\u30A9\u30ED\u30FC"]);
    },
    "unfollow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D5\u30A9\u30ED\u30FC\u89E3\u9664"]);
    },
    "unfollow_label": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u30BF\u30B0\u306E\u30D5\u30A9\u30ED\u30FC\u89E3\u9664"]);
    }
  },
  "time_ago_options": {
    "day_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0\u65E5\u5F8C"]), _normalize(["\u660E\u65E5"]), _normalize([_interpolate(_named("n")), "\u65E5\u5F8C"])]);
    },
    "day_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0\u65E5\u524D"]), _normalize(["\u6628\u65E5"]), _normalize([_interpolate(_named("n")), "\u65E5\u524D"])]);
    },
    "hour_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0\u6642\u9593\u5F8C"]), _normalize(["1\u6642\u9593\u5F8C"]), _normalize([_interpolate(_named("n")), "\u6642\u9593\u5F8C"])]);
    },
    "hour_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0\u6642\u9593\u524D"]), _normalize(["1\u6642\u9593\u524D"]), _normalize([_interpolate(_named("n")), "\u6642\u9593\u524D"])]);
    },
    "just_now": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u305F\u3063\u305F\u4ECA"]);
    },
    "minute_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0\u5206\u5F8C"]), _normalize(["1\u5206\u5F8C"]), _normalize([_interpolate(_named("n")), "\u5206\u5F8C"])]);
    },
    "minute_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0\u5206\u524D"]), _normalize(["1\u5206\u524D"]), _normalize([_interpolate(_named("n")), "\u5206\u524D"])]);
    },
    "month_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0\u30F6\u6708\u5F8C"]), _normalize(["\u6765\u6708"]), _normalize([_interpolate(_named("n")), "\u30F6\u6708\u5F8C"])]);
    },
    "month_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0\u30F6\u6708\u524D"]), _normalize(["\u5148\u6708"]), _normalize([_interpolate(_named("n")), "\u30F6\u6708\u524D"])]);
    },
    "second_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u305F\u3063\u305F\u4ECA"]), _normalize([_interpolate(_named("n")), "\u79D2\u5F8C"]), _normalize([_interpolate(_named("n")), "\u79D2\u5F8C"])]);
    },
    "second_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u305F\u3063\u305F\u4ECA"]), _normalize([_interpolate(_named("n")), "\u79D2\u524D"]), _normalize([_interpolate(_named("n")), "\u79D2\u524D"])]);
    },
    "short_day_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u65E5\u5F8C"]);
    },
    "short_day_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u65E5"]);
    },
    "short_hour_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u6642\u9593\u5F8C"]);
    },
    "short_hour_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u6642\u9593"]);
    },
    "short_minute_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u5206\u5F8C"]);
    },
    "short_minute_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u5206"]);
    },
    "short_month_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["in ", _interpolate(_named("n")), "\u30F6\u6708\u5F8C"]);
    },
    "short_month_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u30F6\u6708"]);
    },
    "short_second_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u79D2\u5F8C"]);
    },
    "short_second_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u79D2"]);
    },
    "short_week_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u9031\u9593\u5F8C"]);
    },
    "short_week_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u9031\u9593"]);
    },
    "short_year_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u5E74\u5F8C"]);
    },
    "short_year_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u5E74"]);
    },
    "week_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0\u9031\u9593\u5F8C"]), _normalize(["\u6765\u9031"]), _normalize([_interpolate(_named("n")), "\u9031\u9593\u5F8C"])]);
    },
    "week_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0\u9031\u9593\u524D"]), _normalize(["\u5148\u9031"]), _normalize([_interpolate(_named("n")), "\u9031\u9593\u524D"])]);
    },
    "year_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0\u5E74\u5F8C"]), _normalize(["\u6765\u5E74"]), _normalize([_interpolate(_named("n")), "\u5E74\u5F8C"])]);
    },
    "year_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0\u5E74\u524D"]), _normalize(["\u53BB\u5E74"]), _normalize([_interpolate(_named("n")), "\u5E74\u524D"])]);
    }
  },
  "timeline": {
    "show_new_items": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("v")), "\u4EF6\u306E\u65B0\u3057\u3044\u6295\u7A3F"]);
    },
    "view_older_posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4ED6\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306E\u53E4\u3044\u6295\u7A3F\u306F\u8868\u793A\u3055\u308C\u306A\u3044\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002"]);
    }
  },
  "title": {
    "federated_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9023\u5408\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3"]);
    },
    "local_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30ED\u30FC\u30AB\u30EB\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3"]);
    }
  },
  "tooltip": {
    "add_content_warning": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8B66\u544A\u3092\u8FFD\u52A0"]);
    },
    "add_emojis": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7D75\u6587\u5B57\u3092\u8FFD\u52A0"]);
    },
    "add_media": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u753B\u50CF\u3001\u52D5\u753B\u3001\u97F3\u58F0\u30D5\u30A1\u30A4\u30EB\u3092\u8FFD\u52A0"]);
    },
    "add_publishable_content": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u516C\u958B\u3059\u308B\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u8FFD\u52A0"]);
    },
    "change_content_visibility": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u516C\u958B\u7BC4\u56F2\u3092\u5909\u66F4"]);
    },
    "change_language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8A00\u8A9E\u3092\u5909\u66F4"]);
    },
    "emoji": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7D75\u6587\u5B57"]);
    },
    "explore_links_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u3053\u308C\u3089\u306E\u30CB\u30E5\u30FC\u30B9\u8A18\u4E8B\u306F\u3001\u5206\u6563\u578B\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4E0A\u306E\u3053\u306E\u30B5\u30FC\u30D0\u30FC\u3084\u4ED6\u306E\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u73FE\u5728\u8A71\u984C\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002"]);
    },
    "explore_posts_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u3053\u308C\u3089\u306E\u6295\u7A3F\u306F\u3001\u5206\u6563\u578B\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4E0A\u306E\u3053\u306E\u30B5\u30FC\u30D0\u30FC\u3084\u4ED6\u306E\u30B5\u30FC\u30D0\u30FC\u4E0A\u306B\u3042\u308A\u3001\u73FE\u5728\u3053\u306E\u30B5\u30FC\u30D0\u30FC\u4E0A\u3067\u6CE8\u76EE\u3092\u96C6\u3081\u3066\u3044\u307E\u3059\u3002"]);
    },
    "explore_tags_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u3053\u308C\u3089\u306E\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u306F\u3001\u5206\u6563\u578B\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u4E0A\u306E\u3053\u306E\u30B5\u30FC\u30D0\u30FC\u3084\u4ED6\u306E\u30B5\u30FC\u30D0\u30FC\u306B\u3044\u308B\u30E6\u30FC\u30B6\u30FC\u306E\u9593\u3067\u73FE\u5728\u6CE8\u76EE\u3092\u96C6\u3081\u3066\u3044\u307E\u3059\u3002"]);
    },
    "open_editor_tools": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30A8\u30C7\u30A3\u30BF\u30C4\u30FC\u30EB"]);
    },
    "pick_an_icon": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30A2\u30A4\u30B3\u30F3\u306E\u9078\u629E"]);
    },
    "publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6295\u7A3F\u306E\u518D\u516C\u958B\u6642\u306B\u30A8\u30C7\u30A3\u30BF\u4E0A\u90E8\u306E\u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9589\u3058\u308B"]);
    },
    "toggle_bold": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u592A\u5B57\u3092\u5207\u308A\u66FF\u3048\u308B"]);
    },
    "toggle_code_block": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30B3\u30FC\u30C9\u30D6\u30ED\u30C3\u30AF\u3092\u5207\u308A\u66FF\u3048\u308B"]);
    },
    "toggle_italic": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30A4\u30BF\u30EA\u30C3\u30AF\u3092\u5207\u308A\u66FF\u3048\u308B"]);
    }
  },
  "user": {
    "add_existing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u65E2\u5B58\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u8FFD\u52A0\u3059\u308B"]);
    },
    "server_address_label": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mastodon\u30B5\u30FC\u30D0\u30FC\u306E\u30A2\u30C9\u30EC\u30B9"]);
    },
    "sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30B5\u30A4\u30F3\u30A4\u30F3\u3059\u308B\u3068\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u3084\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u306E\u30D5\u30A9\u30ED\u30FC\u3001\u304A\u6C17\u306B\u5165\u308A\u306E\u8FFD\u52A0\u3001\u6295\u7A3F\u306E\u5171\u6709\u3001\u6295\u7A3F\u3078\u306E\u8FD4\u4FE1\u306E\u307B\u304B\u3001\u7570\u306A\u308B\u30B5\u30FC\u30D0\u30FC\u4E0A\u306E\u3042\u306A\u305F\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u304B\u3089\u4EA4\u6D41\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002"]);
    },
    "sign_in_notice_title": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\u306E\u516C\u958B\u30C7\u30FC\u30BF\u3092\u8868\u793A\u3057\u3066\u3044\u307E\u3059"]);
    },
    "sign_out_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\u304B\u3089\u30B5\u30A4\u30F3\u30A2\u30A6\u30C8"]);
    },
    "single_instance_sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30B5\u30A4\u30F3\u30A4\u30F3\u3059\u308B\u3068\u3001\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\u3084\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u306E\u30D5\u30A9\u30ED\u30FC\u3001\u6295\u7A3F\u306E\u304A\u6C17\u306B\u5165\u308A\u3001\u5171\u6709\u3001\u8FD4\u4FE1\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002"]);
    },
    "tip_no_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u307E\u3060Mastodon\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u6301\u3063\u3066\u3044\u306A\u3044\u5834\u5408\u306F\u3001", _interpolate(_list(0)), "\u3057\u307E\u3057\u3087\u3046\u3002"]);
    },
    "tip_register_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30B5\u30FC\u30D0\u30FC\u3092\u9078\u3093\u3067\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u767B\u9332"]);
    }
  },
  "visibility": {
    "direct": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30C0\u30A4\u30EC\u30AF\u30C8"]);
    },
    "direct_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30E1\u30F3\u30B7\u30E7\u30F3\u3055\u308C\u305F\u30E6\u30FC\u30B6\u30FC\u306E\u307F\u95B2\u89A7\u53EF\u80FD"]);
    },
    "private": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D5\u30A9\u30ED\u30EF\u30FC\u306E\u307F"]);
    },
    "private_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30D5\u30A9\u30ED\u30EF\u30FC\u306E\u307F\u95B2\u89A7\u53EF\u80FD"]);
    },
    "public": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u516C\u958B"]);
    },
    "public_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8AB0\u3067\u3082\u95B2\u89A7\u53EF\u80FD"]);
    },
    "unlisted": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u975E\u63B2\u8F09"]);
    },
    "unlisted_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8AB0\u3067\u3082\u95B2\u89A7\u53EF\u80FD\u3001\u691C\u7D22\u6A5F\u80FD\u304B\u3089\u306F\u30AA\u30D7\u30C8\u30A2\u30A6\u30C8\u3059\u308B"]);
    }
  }
};

export { jaJP as default };
