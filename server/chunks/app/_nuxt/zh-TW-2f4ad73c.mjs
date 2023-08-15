const zhTW = {
  "a11y": {
    "loading_page": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9801\u9762\u8F09\u5165\u4E2D\uFF0C\u8ACB\u7A0D\u5F8C"]);
    },
    "loading_titled_page": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u8F09\u5165", _interpolate(_list(0)), "\u9801\u9762\u4E2D\uFF0C\u8ACB\u7A0D\u5F8C"]);
    },
    "locale_changed": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u8A9E\u8A00\u5DF2\u66F4\u6539\u70BA", _interpolate(_list(0))]);
    },
    "locale_changing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u66F4\u6539\u8A9E\u8A00\u4E2D\uFF0C\u8ACB\u7A0D\u5F8C"]);
    },
    "route_loaded": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u9801\u9762", _interpolate(_list(0)), "\u5DF2\u8F09\u5165"]);
    }
  },
  "account": {
    "avatar_description": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u7684\u5927\u982D\u8CBC"]);
    },
    "blocked_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u60A8\u5DF2\u88AB\u8A72\u4F7F\u7528\u8005\u5C01\u9396"]);
    },
    "blocked_domains": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5DF2\u5C01\u9396\u7684\u57DF\u540D"]);
    },
    "blocked_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5DF2\u5C01\u9396\u7684\u4F7F\u7528\u8005"]);
    },
    "blocking": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5DF2\u5C01\u9396"]);
    },
    "bot": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6A5F\u5668\u4EBA"]);
    },
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u559C\u6B61\u7684\u8CBC\u6587"]);
    },
    "follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8FFD\u8E64"]);
    },
    "follow_back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u56DE\u8FFD"]);
    },
    "follow_requested": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5DF2\u8981\u6C42\u8FFD\u8E64"]);
    },
    "followers": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7C89\u7D72"]);
    },
    "followers_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([" ", _interpolate(_list(0)), " \u4F4D\u7C89\u7D72"]);
    },
    "following": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6B63\u5728\u8FFD\u8E64"]);
    },
    "following_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u6B63\u5728\u8FFD\u8E64 ", _interpolate(_list(0)), " \u4EBA"]);
    },
    "follows_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5DF2\u8FFD\u8E64\u4F60"]);
    },
    "go_to_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8F49\u5230\u500B\u4EBA\u8CC7\u6599"]);
    },
    "joined": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5DF2\u52A0\u5165"]);
    },
    "moved_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7684\u65B0\u5E33\u865F\u662F\uFF1A"]);
    },
    "muted_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5DF2\u975C\u97F3\u7684\u4F7F\u7528\u8005"]);
    },
    "muting": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5DF2\u975C\u97F3"]);
    },
    "mutuals": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4E92\u76F8\u95DC\u6CE8"]);
    },
    "notifications_on_post_disable": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u7576 ", _interpolate(_named("username")), " \u767C\u5E03\u6642\uFF0C\u505C\u6B62\u901A\u77E5\u6211"]);
    },
    "notifications_on_post_enable": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u7576 ", _interpolate(_named("username")), " \u767C\u5E03\u6642\uFF0C\u901A\u77E5\u6211"]);
    },
    "pinned": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7F6E\u9802\u7684\u8CBC\u6587"]);
    },
    "posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8CBC\u6587"]);
    },
    "posts_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u5247\u8CBC\u6587"]);
    },
    "profile_description": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u7684\u500B\u4EBA\u8CC7\u6599\u5C01\u9762"]);
    },
    "profile_unavailable": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u500B\u4EBA\u8CC7\u6599\u4E0D\u53EF\u898B"]);
    },
    "request_follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8981\u6C42\u8FFD\u7E31"]);
    },
    "unblock": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u53D6\u6D88\u5C01\u9396"]);
    },
    "unfollow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u53D6\u6D88\u8FFD\u8E64"]);
    },
    "unmute": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u53D6\u6D88\u975C\u97F3"]);
    },
    "view_other_followers": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5176\u4ED6\u7AD9\u9EDE\u4E0A\u7684\u7C89\u7D72\u53EF\u80FD\u4E0D\u6703\u5728\u9019\u88E1\u986F\u793A\u3002"]);
    },
    "view_other_following": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5176\u4ED6\u7AD9\u9EDE\u4E0A\u6B63\u5728\u8FFD\u8E64\u7684\u4EBA\u53EF\u80FD\u4E0D\u6703\u5728\u9019\u88E1\u986F\u793A\u3002"]);
    }
  },
  "action": {
    "apply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5957\u7528"]);
    },
    "bookmark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6536\u85CF"]);
    },
    "bookmarked": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5DF2\u6536\u85CF"]);
    },
    "boost": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8F49\u767C"]);
    },
    "boost_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "boosted": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5DF2\u8F49\u767C"]);
    },
    "clear_publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6E05\u9664\u767C\u5E03\u5931\u6557\u7684\u8A0A\u606F"]);
    },
    "clear_upload_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6E05\u9664\u4E0A\u50B3\u5931\u6557"]);
    },
    "close": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u95DC\u9589"]);
    },
    "compose": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u64B0\u5BEB"]);
    },
    "confirm": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u78BA\u8A8D"]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7DE8\u8F2F"]);
    },
    "enter_app": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9032\u5165\u61C9\u7528\u7A0B\u5F0F"]);
    },
    "favourite": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u559C\u6B61"]);
    },
    "favourite_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "favourited": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5DF2\u559C\u6B61"]);
    },
    "more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u66F4\u591A"]);
    },
    "next": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4E0B\u4E00\u500B"]);
    },
    "prev": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4E0A\u4E00\u500B"]);
    },
    "publish": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u767C\u5E03"]);
    },
    "reply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u56DE\u8986"]);
    },
    "reply_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "reset": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u91CD\u8A2D"]);
    },
    "save": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5132\u5B58"]);
    },
    "save_changes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5132\u5B58\u66F4\u6539"]);
    },
    "sign_in": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u767B\u9E7F"]);
    },
    "switch_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5207\u63DB\u5E33\u865F"]);
    },
    "vote": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6295\u7968"]);
    }
  },
  "app_desc_short": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["\u4E00\u500B\u9748\u5DE7\u7684 Mastodon \u7528\u6236\u7AEF"]);
  },
  "app_logo": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["\u9E7F\u9CF4 Logo"]);
  },
  "app_name": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["\u9E7F\u9CF4"]);
  },
  "attachment": {
    "edit_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u63CF\u8FF0"]);
    },
    "remove_label": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u522A\u9664\u9644\u4EF6"]);
    }
  },
  "command": {
    "activate": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u57F7\u884C"]);
    },
    "complete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5B8C\u6210"]);
    },
    "compose_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5BEB\u4E00\u689D\u65B0\u8CBC\u6587"]);
    },
    "n-people-in-the-past-n-days": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u4EBA\u5728\u904E\u53BB ", _interpolate(_list(1)), " \u5929"]);
    },
    "select_lang": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9078\u64C7\u8A9E\u8A00"]);
    },
    "sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u52A0\u5165\u73FE\u6709\u5E33\u865F"]);
    },
    "switch_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u5207\u63DB\u5230 ", _interpolate(_list(0))]);
    },
    "switch_account_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5207\u63DB\u5230\u53E6\u4E00\u500B\u5E33\u865F"]);
    },
    "toggle_dark_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5207\u63DB\u6DF1\u8272\u6A21\u5F0F"]);
    },
    "toggle_zen_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5207\u63DB\u79AA\u6A21\u5F0F"]);
    }
  },
  "common": {
    "end_of_list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6E05\u55AE\u5230\u5E95\u4E86"]);
    },
    "error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u932F\u8AA4"]);
    },
    "in": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5728"]);
    },
    "not_found": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7121\u6CD5\u627E\u5230\u76F8\u95DC\u5167\u5BB9"]);
    },
    "offline_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u60A8\u76EE\u524D\u5DF2\u96E2\u7DDA\uFF0C\u8ACB\u6AA2\u67E5\u7DB2\u8DEF\u9023\u63A5\u3002"]);
    }
  },
  "compose": {
    "draft_title": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u8349\u7A3F ", _interpolate(_list(0))]);
    },
    "drafts": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u8349\u7A3F (", _interpolate(_named("v")), ")"]);
    }
  },
  "confirm": {
    "block_account": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u53D6\u6D88"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u5C01\u9396"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u4F60\u78BA\u5B9A\u8981\u5C01\u9396 ", _interpolate(_list(0)), " \u55CE\uFF1F"]);
      }
    },
    "block_domain": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u53D6\u6D88"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u5C01\u9396"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u4F60\u78BA\u5B9A\u8981\u5C01\u9396 ", _interpolate(_list(0)), " \u57DF\u540D\u55CE\uFF1F"]);
      }
    },
    "delete_list": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u53D6\u6D88"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u78BA\u8A8D"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(['\u4F60\u78BA\u5B9A\u8981\u522A\u9664 "', _interpolate(_list(0)), '" \u5217\u8868\u55CE\uFF1F']);
      }
    },
    "delete_posts": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u53D6\u6D88"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u522A\u9664"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u4F60\u78BA\u5B9A\u8981\u522A\u9664\u9019\u5247\u8CBC\u6587\u55CE\uFF1F"]);
      }
    },
    "mute_account": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u53D6\u6D88"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u975C\u97F3"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u4F60\u78BA\u5B9A\u8981\u975C\u97F3 ", _interpolate(_list(0)), " \u55CE\uFF1F"]);
      }
    },
    "show_reblogs": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u53D6\u6D88"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u986F\u793A"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u4F60\u78BA\u5B9A\u8981\u986F\u793A\u4F86\u81EA ", _interpolate(_list(0)), " \u7684\u8F49\u767C\u55CE\uFF1F"]);
      }
    },
    "unfollow": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u53D6\u6D88"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u53D6\u6D88\u8FFD\u8E64"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u4F60\u78BA\u5B9A\u8981\u53D6\u6D88\u8FFD\u8E64\u55CE\uFF1F"]);
      }
    }
  },
  "conversation": {
    "with": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8207"]);
    }
  },
  "custom_cards": {
    "stackblitz": {
      "lines": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u7B2C ", _interpolate(_list(0)), " \u884C"]);
      },
      "open": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u958B\u555F"]);
      },
      "snippet_from": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u53D6\u81EA ", _interpolate(_list(0)), " \u7684\u7247\u6BB5"]);
      }
    }
  },
  "error": {
    "account_not_found": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u672A\u627E\u5230\u4F7F\u7528\u8005 ", _interpolate(_list(0))]);
    },
    "explore-list-empty": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u76EE\u524D\u6C92\u6709\u71B1\u9580\u8A71\u984C\uFF0C\u7A0D\u5F8C\u518D\u4F86\u770B\u770B\u5427\uFF01"]);
    },
    "file_size_cannot_exceed_n_mb": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u6A94\u6848\u5927\u5C0F\u4E0D\u80FD\u8D85\u904E ", _interpolate(_list(0)), " MB"]);
    },
    "sign_in_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7121\u6CD5\u9023\u63A5\u4F3A\u670D\u5668"]);
    },
    "status_not_found": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u672A\u627E\u5230\u8CBC\u6587"]);
    },
    "unsupported_file_format": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4E0D\u652F\u63F4\u7684\u6A94\u6848\u683C\u5F0F"]);
    }
  },
  "help": {
    "build_preview": {
      "desc1": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u60A8\u7576\u524D\u6B63\u5728\u67E5\u770B\u4F86\u81EA\u958B\u6E90\u793E\u5340\u3001\u9810\u89BD\u7248\u7684\u9E7F\u9CF4 - ", _interpolate(_list(0)), "\u3002"]);
      },
      "desc2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u53EF\u80FD\u5305\u542B\u672B\u7D93\u5BE9\u67E5\u6216\u662F\u60E1\u610F\u4FEE\u6539\u7684\u5167\u5BB9\u3002"]);
      },
      "desc3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u8ACB\u4E0D\u8981\u4F7F\u7528\u771F\u5BE6\u7684\u5E33\u865F\u767B\u5165\u3002"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u9810\u89BD\u90E8\u7F72"]);
      }
    },
    "desc_highlight": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u53EF\u80FD\u6703\u5728\u67D0\u4E9B\u5730\u65B9\u51FA\u73FE\u4E00\u4E9B bug \u6216\u7F3A\u5C11\u7684\u529F\u80FD\u3002"]);
    },
    "desc_para1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u611F\u8B1D\u4F60\u6709\u8208\u8DA3\u5617\u8A66\u9E7F\u9CF4\uFF0C\u4E00\u500B\u6211\u5011\u6B63\u5728\u7A4D\u6975\u958B\u767C\u7684\u901A\u7528 Mastodon \u7528\u6236\u7AEF\u3002"]);
    },
    "desc_para2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6211\u5011\u6B63\u5728\u52AA\u529B\u958B\u767C\u4E2D\uFF0C\u4E26\u96A8\u8457\u6642\u9593\u7684\u63A8\u79FB\u4E0D\u65B7\u5B8C\u5584\u3002"]);
    },
    "desc_para3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u70BA\u4E86\u5E6B\u52A9\u4FC3\u9032\u958B\u767C\uFF0C\u4F60\u53EF\u4EE5\u901A\u904E\u4EE5\u4E0B\u9023\u7D50\u8D0A\u52A9\u6211\u5011\u7684\u5718\u968A\u6210\u54E1\u3002\u5E0C\u671B\u4F60\u559C\u6B61\u9E7F\u9CF4\uFF01"]);
    },
    "desc_para4": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9E7F\u9CF4\u662F\u958B\u6E90\u7684\uFF0C\u5982\u679C\u4F60\u9858\u610F\u5E6B\u52A9\u6E2C\u8A66\u3001\u63D0\u4F9B\u56DE\u994B\u6216\u4F5C\u51FA\u8CA2\u737B\uFF0C"]);
    },
    "desc_para5": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5728 GitHub \u4E0A\u806F\u7E6B\u6211\u5011"]);
    },
    "desc_para6": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4F86\u53C3\u8207\u5176\u4E2D\u3002"]);
    },
    "footer_team": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9E7F\u9CF4\u958B\u767C\u5718\u968A"]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9810\u89BD\u9E7F\u9CF4\uFF01"]);
    }
  },
  "language": {
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u641C\u5C0B"]);
    }
  },
  "list": {
    "add_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5728\u5217\u8868\u4E2D\u6DFB\u52A0\u5E33\u865F"]);
    },
    "cancel_edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u53D6\u6D88\u7DE8\u8F2F"]);
    },
    "clear_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6E05\u9664\u932F\u8AA4"]);
    },
    "create": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5EFA\u7ACB"]);
    },
    "delete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u522A\u9664\u9019\u500B\u5217\u8868"]);
    },
    "delete_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u522A\u9664\u5217\u8868\u6642\u767C\u751F\u932F\u8AA4"]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7DE8\u8F2F\u9019\u500B\u5217\u8868"]);
    },
    "edit_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u66F4\u65B0\u5217\u8868\u6642\u767C\u751F\u932F\u8AA4"]);
    },
    "error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5EFA\u7ACB\u5217\u8868\u6642\u767C\u751F\u932F\u8AA4"]);
    },
    "error_prefix": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u932F\u8AA4\uFF1A"]);
    },
    "list_title_placeholder": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5217\u8868\u6A19\u984C"]);
    },
    "modify_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4FEE\u6539\u5217\u8868\u4E2D\u7684\u5E33\u865F"]);
    },
    "remove_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u79FB\u9664\u5217\u8868\u4E2D\u7684\u5E33\u865F"]);
    },
    "save": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4FDD\u5B58\u8B8A\u66F4"]);
    }
  },
  "menu": {
    "block_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u5C01\u9396 ", _interpolate(_list(0))]);
    },
    "block_domain": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u5C01\u9396\u7684\u57DF\u540D ", _interpolate(_list(0))]);
    },
    "copy_link_to_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8907\u88FD\u9019\u7BC7\u8CBC\u6587\u7684\u9023\u7D50"]);
    },
    "copy_original_link_to_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8907\u88FD\u8CBC\u6587\u7684\u539F\u7DB2\u5740"]);
    },
    "delete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u522A\u9664"]);
    },
    "delete_and_redraft": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u522A\u9664\u4E26\u91CD\u65B0\u7DE8\u8F2F"]);
    },
    "direct_message_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u79C1\u8A0A ", _interpolate(_list(0))]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7DE8\u8F2F"]);
    },
    "hide_reblogs": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u96B1\u85CF\u4F86\u81EA ", _interpolate(_list(0)), " \u7684\u8F49\u767C"]);
    },
    "mention_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u63D0\u53CA ", _interpolate(_list(0))]);
    },
    "mute_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u975C\u97F3 ", _interpolate(_list(0))]);
    },
    "mute_conversation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u975C\u97F3\u8CBC\u6587"]);
    },
    "open_in_original_site": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5728\u539F\u7DB2\u7AD9\u4E0A\u958B\u555F"]);
    },
    "pin_on_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7F6E\u9802\u5728\u500B\u4EBA\u8CC7\u6599\u4E0A"]);
    },
    "share_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5206\u4EAB\u9019\u5247\u8CBC\u6587"]);
    },
    "show_favourited_and_boosted_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u986F\u793A\u8AB0\u559C\u6B61\u548C\u8F49\u767C\u4E86"]);
    },
    "show_reblogs": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u986F\u793A\u4F86\u81EA ", _interpolate(_list(0)), " \u7684\u8F49\u767C"]);
    },
    "show_untranslated": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u986F\u793A\u539F\u6587"]);
    },
    "toggle_theme": {
      "dark": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u5207\u63DB\u6DF1\u8272\u6A21\u5F0F"]);
      },
      "light": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u5207\u63DB\u6DFA\u8272\u6A21\u5F0F"]);
      }
    },
    "translate_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7FFB\u8B6F\u8CBC\u6587"]);
    },
    "unblock_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u89E3\u9664\u5C01\u9396 ", _interpolate(_list(0))]);
    },
    "unblock_domain": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u89E3\u9664\u5C01\u9396\u57DF\u540D ", _interpolate(_list(0))]);
    },
    "unmute_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u89E3\u9664\u975C\u97F3 ", _interpolate(_list(0))]);
    },
    "unmute_conversation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u53D6\u6D88\u975C\u97F3\u8CBC\u6587"]);
    },
    "unpin_on_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u53D6\u6D88\u7F6E\u9802"]);
    }
  },
  "nav": {
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u56DE\u4E0A\u4E00\u9801"]);
    },
    "blocked_domains": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5DF2\u5C01\u9396\u7684\u57DF\u540D"]);
    },
    "blocked_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5DF2\u5C01\u9396\u7684\u4F7F\u7528\u8005"]);
    },
    "bookmarks": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u66F8\u7C64"]);
    },
    "built_at": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u65BC ", _interpolate(_list(0)), " \u66F4\u65B0"]);
    },
    "compose": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u64B0\u5BEB"]);
    },
    "conversations": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u79C1\u8A0A"]);
    },
    "explore": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u63A2\u7D22"]);
    },
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u559C\u6B61"]);
    },
    "federated": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u806F\u90A6"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9996\u9801"]);
    },
    "list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5217\u8868"]);
    },
    "lists": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5217\u8868"]);
    },
    "local": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u672C\u7AD9"]);
    },
    "muted_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5DF2\u975C\u97F3\u7684\u4F7F\u7528\u8005"]);
    },
    "notifications": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u901A\u77E5"]);
    },
    "privacy": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u96B1\u79C1\u6B0A\u653F\u7B56"]);
    },
    "profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u500B\u4EBA\u8CC7\u6599"]);
    },
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u641C\u5C0B"]);
    },
    "select_feature_flags": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u529F\u80FD\u958B\u95DC"]);
    },
    "select_font_size": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5B57\u9AD4\u5927\u5C0F"]);
    },
    "select_language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9078\u64C7\u8A9E\u8A00"]);
    },
    "settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8A2D\u5B9A"]);
    },
    "show_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9E7F\u9CF4\u4ECB\u7D39"]);
    },
    "toggle_theme": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5207\u63DB\u4E3B\u984C"]);
    },
    "zen_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u79AA\u6A21\u5F0F"]);
    }
  },
  "notification": {
    "favourited_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9EDE\u8B9A\u4E86\u4F60\u7684\u8CBC\u6587"]);
    },
    "followed_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8FFD\u8E64\u4E86\u4F60"]);
    },
    "followed_you_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " \u4EBA\u8FFD\u8E64\u4E86\u4F60"]);
    },
    "missing_type": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u672A\u77E5\u7684\u901A\u77E5\u985E\u578B\uFF1A"]);
    },
    "reblogged_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8F49\u767C\u4E86\u4F60\u7684\u8CBC\u6587"]);
    },
    "request_to_follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8ACB\u6C42\u8FFD\u8E64\u4F60"]);
    },
    "signed_up": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8A3B\u518A\u4E86"]);
    },
    "update_status": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u66F4\u65B0\u4E86\u4ED6\u5011\u7684\u72C0\u614B"]);
    }
  },
  "placeholder": {
    "content_warning": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5BEB\u4E0B\u4F60\u7684\u8B66\u544A"]);
    },
    "default_1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5728\u60F3\u4E9B\u4EC0\u9EBC\uFF1F"]);
    },
    "reply_to_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u56DE\u8986 ", _interpolate(_list(0))]);
    },
    "replying": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u56DE\u8986"]);
    }
  },
  "pwa": {
    "dismiss": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5FFD\u7565"]);
    },
    "install": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5B89\u88DD"]);
    },
    "install_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5B89\u88DD\u9E7F\u9CF4"]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9E7F\u9CF4\u5B58\u5728\u65B0\u7684\u66F4\u65B0"]);
    },
    "update": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u66F4\u65B0"]);
    },
    "update_available_short": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u66F4\u65B0\u9E7F\u9CF4"]);
    },
    "webmanifest": {
      "canary": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u4E00\u500B\u9748\u5DE7\u7684 Mastodon \u7528\u6236\u7AEF\uFF08Canary\uFF09"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u9E7F\u9CF4 Canary"]);
        },
        "short_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u9E7F\u9CF4 Canary"]);
        }
      },
      "dev": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u4E00\u500B\u9748\u5DE7\u7684 Mastodon \u7528\u6236\u7AEF\uFF08\u958B\u767C\u7248\uFF09"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u9E7F\u9CF4 \u958B\u767C\u7248"]);
        },
        "short_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u9E7F\u9CF4 \u958B\u767C\u7248"]);
        }
      },
      "preview": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u4E00\u500B\u9748\u5DE7\u7684 Mastodon \u7528\u6236\u7AEF\uFF08\u9810\u89BD\u7248\uFF09"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u9E7F\u9CF4 \u9810\u89BD\u7248"]);
        },
        "short_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u9E7F\u9CF4 \u9810\u89BD\u7248"]);
        }
      },
      "release": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u4E00\u500B\u9748\u5DE7\u7684 Mastodon \u7528\u6236\u7AEF"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u9E7F\u9CF4"]);
        },
        "short_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u9E7F\u9CF4"]);
        }
      }
    }
  },
  "search": {
    "search_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u641C\u5C0B\u4F7F\u7528\u8005\u6216\u8A71\u984C\u6A19\u7C64"]);
    },
    "search_empty": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7121\u6CD5\u627E\u5230\u7B26\u5408\u641C\u5C0B\u689D\u4EF6\u4E4B\u7D50\u679C"]);
    }
  },
  "settings": {
    "about": {
      "built_at": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u69CB\u5EFA\u65BC"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u95DC\u65BC"]);
      },
      "meet_the_team": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u8A8D\u8B58\u6211\u5011"]);
      },
      "sponsor_action": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u8D0A\u52A9\u6211\u5011"]);
      },
      "sponsor_action_desc": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u8D0A\u52A9\u9E7F\u9CF4\u7684\u958B\u767C\u5718\u968A"]);
      },
      "sponsors": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u8D0A\u52A9"]);
      },
      "sponsors_body_1": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u9E7F\u9CF4\u7684\u8A95\u751F\u5F97\u611F\u8B1D\u4EE5\u4E0B\u7684\u6177\u6168\u8D0A\u52A9\u8207\u5E6B\u52A9\uFF1A"]);
      },
      "sponsors_body_2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u4EE5\u53CA\u6240\u6709\u8D0A\u52A9\u9E7F\u9CF4\u6210\u54E1\u7684\u516C\u53F8\u548C\u500B\u4EBA\uFF0C\u4EE5\u53CA\u968A\u54E1\u5011\u3002"]);
      },
      "sponsors_body_3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u5982\u679C\u4F60\u559C\u6B61\u9E7F\u9CF4\uFF0C\u53EF\u4EE5\u8003\u616E\u8D0A\u52A9\u6211\u5011\uFF1A"]);
      },
      "version": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u7248\u672C"]);
      }
    },
    "account_settings": {
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u5728 Mastodon UI \u4E2D\u7DE8\u8F2F\u4F60\u7684\u5E33\u865F\u8A2D\u5B9A"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u5E33\u865F\u8A2D\u5B9A"]);
      }
    },
    "interface": {
      "color_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u8272\u5F69\u6A21\u5F0F"]);
      },
      "dark_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u6DF1\u8272"]);
      },
      "default": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uFF08\u9810\u8A2D\uFF09"]);
      },
      "font_size": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u5B57\u9AD4\u5927\u5C0F"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u5916\u89C0"]);
      },
      "light_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u6DFA\u8272"]);
      },
      "system_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u7CFB\u7D71\u9810\u8A2D"]);
      },
      "theme_color": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u4E3B\u984C\u8272"]);
      }
    },
    "language": {
      "display_language": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u986F\u793A\u8A9E\u8A00"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u8A9E\u8A00"]);
      },
      "translations": {
        "add": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u6DFB\u52A0"]);
        },
        "choose_language": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u9078\u64C7\u8A9E\u8A00"]);
        },
        "heading": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u7FFB\u8B6F"]);
        },
        "hide_specific": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u96B1\u85CF\u7279\u5B9A\u7684\u7FFB\u8B6F"]);
        },
        "remove": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u522A\u9664"]);
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
          return _normalize(["\u901A\u77E5\u8A2D\u5B9A"]);
        }
      },
      "push_notifications": {
        "alerts": {
          "favourite": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u559C\u6B61\u7684"]);
          },
          "follow": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u65B0\u7684\u7C89\u7D72"]);
          },
          "mention": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u63D0\u53CA"]);
          },
          "poll": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u6295\u7968"]);
          },
          "reblog": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u8F49\u767C\u4E86\u4F60\u7684\u8CBC\u6587"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u63A5\u6536\u4E86\u4EC0\u9EBC\u901A\u77E5\uFF1F"]);
          }
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u7576\u4F60\u6C92\u6709\u5728\u4F7F\u7528\u9E7F\u9CF4\u6642\u4E5F\u80FD\u63A5\u6536\u901A\u77E5\u3002"]);
        },
        "instructions": (ctx) => {
          const { normalize: _normalize, linked: _linked, type: _type } = ctx;
          return _normalize(["\u4E0D\u8981\u5FD8\u8A18\u9EDE\u64CA ", _linked("settings.notifications.push_notifications.save_settings", void 0, _type), " \u6309\u9215\u5132\u5B58\u8B8A\u66F4\uFF01"]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u63A8\u64AD\u901A\u77E5\u8A2D\u5B9A"]);
        },
        "policy": {
          "all": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u4EFB\u4F55\u4EBA"]);
          },
          "followed": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u6211\u8FFD\u8E64\u7684\u4EBA"]);
          },
          "follower": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u7C89\u7D72"]);
          },
          "none": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u7121\u4EBA"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u6211\u53EF\u4EE5\u5F9E\u8AB0\u90A3\u88E1\u63A5\u6536\u901A\u77E5\uFF1F"]);
          }
        },
        "save_settings": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u5132\u5B58\u8A2D\u5B9A\u8B8A\u66F4"]);
        },
        "subscription_error": {
          "clear_error": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u6E05\u9664\u932F\u8AA4"]);
          },
          "invalid_vapid_key": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["VAPID \u516C\u9470\u4F3C\u4E4E\u7121\u6548\u3002"]);
          },
          "permission_denied": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u6B0A\u9650\u4E0D\u8DB3\uFF1A\u8ACB\u5728\u4F60\u7684\u700F\u89BD\u5668\u4E2D\u6253\u958B\u901A\u77E5\u6B0A\u9650\u3002"]);
          },
          "repo_link": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u9E7F\u9CF4\u7684 GitHub \u5132\u5B58\u5EAB"]);
          },
          "request_error": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u8ACB\u6C42\u8A02\u95B1\u6642\u767C\u751F\u4E86\u4E00\u500B\u932F\u8AA4\uFF0C\u8ACB\u518D\u6B21\u5617\u8A66\u3002\u5982\u932F\u8AA4\u4ECD\u7136\u5B58\u5728\uFF0C\u8ACB\u5230\u9E7F\u9CF4\u5132\u5B58\u5EAB\u4E2D\u5831\u544A\u9019\u4E00\u554F\u984C\u3002"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u7121\u6CD5\u8A02\u95B1\u63A8\u64AD\u901A\u77E5\u3002"]);
          },
          "too_many_registrations": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u7531\u65BC\u700F\u89BD\u5668\u9650\u5236\uFF0C\u9E7F\u9CF4\u7121\u6CD5\u70BA\u4E0D\u540C\u4F3A\u670D\u5668\u4E0A\u7684\u591A\u500B\u5E33\u865F\u4F7F\u7528\u63A8\u64AD\u901A\u77E5\u670D\u52D9\u3002 \u4F60\u61C9\u8A72\u53D6\u6D88\u8A02\u95B1\u5176\u4ED6\u5E33\u865F\u7684\u63A8\u9001\u901A\u77E5\uFF0C\u7136\u5F8C\u91CD\u8A66\u3002"]);
          },
          "vapid_not_supported": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u60A8\u7684\u700F\u89BD\u5668\u652F\u6301 Web Push Notifications\uFF0C\u4F46\u4F3C\u4E4E\u6C92\u6709\u5BE6\u73FE VAPIO \u7684\u5354\u8B70\u3002"]);
          }
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u63A8\u64AD\u901A\u77E5\u8A2D\u5B9A"]);
        },
        "undo_settings": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u64A4\u92B7\u8A2D\u5B9A\u8B8A\u66F4"]);
        },
        "unsubscribe": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u505C\u7528\u63A8\u64AD\u529F\u80FD"]);
        },
        "unsupported": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u4F60\u7684\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u63A8\u64AD\u529F\u80FD"]);
        },
        "warning": {
          "enable_close": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u95DC\u9589"]);
          },
          "enable_description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u82E5\u60F3\u5728\u9E7F\u9CF4\u672A\u958B\u555F\u6642\u63A5\u6536\u901A\u77E5\uFF0C\u8ACB\u555F\u7528\u63A8\u64AD\u901A\u77E5\u529F\u80FD\u3002\u555F\u7528\u5F8C\uFF0C\u4F60\u53EF\u4EE5\u901A\u904E\u4E0A\u9762\u7684 \u300C\u524D\u5F80\u901A\u77E5\u8A2D\u5B9A\u300D \u6309\u9215\u4F86 \u7CBE\u78BA\u63A7\u5236\u54EA\u7A2E\u985E\u578B\u7684\u4E92\u52D5\u53EF\u4EE5\u7522\u751F\u684C\u9762\u901A\u77E5\u3002"]);
          },
          "enable_description_desktop": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u82E5\u60F3\u5728\u9E7F\u9CF4\u672A\u958B\u555F\u6642\u63A5\u6536\u901A\u77E5\uFF0C\u8ACB\u555F\u7528\u63A8\u64AD\u901A\u77E5\u529F\u80FD\u3002\u555F\u7528\u5F8C\uFF0C\u4F60\u53EF\u4EE5\u5728 \u300C\u8A2D\u5B9A\u300D > \u300C\u901A\u77E5\u300D > \u300C\u63A8\u64AD\u901A\u77E5\u8A2D\u5B9A\u300D \u88E1\u9762\u9078\u64C7\u54EA\u4E9B\u4E92\u52D5\u4F60\u6703\u63A5\u6536\u5230\u901A\u77E5\u3002"]);
          },
          "enable_description_mobile": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5C0E\u89BD\u5217 \u300C\u8A2D\u5B9A\u300D > \u300C\u901A\u77E5\u300D > \u300C\u63A8\u64AD\u901A\u77E5\u8A2D\u5B9A\u300D \u9032\u5165\u8A2D\u5B9A\u9801\u9762\u3002"]);
          },
          "enable_description_settings": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u82E5\u60F3\u5728\u9E7F\u9CF4\u672A\u958B\u555F\u6642\u63A5\u6536\u901A\u77E5\uFF0C\u8ACB\u555F\u7528\u63A8\u64AD\u901A\u77E5\u529F\u80FD\u3002 \u555F\u7528\u5F8C\uFF0C\u4F60\u5C07\u80FD\u5920\u9078\u64C7\u54EA\u4E9B\u4E92\u52D5\u4F60\u6703\u63A5\u6536\u5230\u901A\u77E5\u3002"]);
          },
          "enable_desktop": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u555F\u7528\u63A8\u64AD\u529F\u80FD"]);
          },
          "enable_title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u4E0D\u932F\u904E\u4EFB\u4F55\u4E8B"]);
          },
          "re_auth": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u60A8\u7684\u4F3A\u670D\u5668\u4F3C\u4E4E\u4E0D\u652F\u63F4\u63A8\u64AD\u901A\u77E5\u3002\u5617\u8A66\u9000\u51FA\u4F7F\u7528\u8005\u4E26\u91CD\u65B0\u767B\u5165\u3002\u5982\u679C\u6B64\u6D88\u606F\u4ECD\u7136\u51FA\u73FE\uFF0C\u8ACB\u806F\u7E6B\u60A8\u4F3A\u670D\u5668\u7684\u7BA1\u7406\u54E1\u3002"]);
          }
        }
      },
      "show_btn": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u524D\u5F80\u901A\u77E5\u8A2D\u5B9A"]);
      },
      "under_construction": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u5EFA\u7ACB\u4E2D"]);
      }
    },
    "notifications_settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u901A\u77E5"]);
    },
    "preferences": {
      "enable_autoplay": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u555F\u7528\u81EA\u52D5\u64AD\u653E\u529F\u80FD"]);
      },
      "enable_pinch_to_zoom": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u555F\u7528\u96D9\u6307\u7E2E\u653E\u529F\u80FD"]);
      },
      "github_cards": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["GitHub \u5361\u7247"]);
      },
      "grayscale_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u6DF1\u8272\u6A21\u5F0F"]);
      },
      "hide_account_hover_card": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u96B1\u85CF\u5E33\u865F\u6D6E\u52D5\u5361\u7247"]);
      },
      "hide_alt_indi_on_posts": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u96B1\u85CF\u8CBC\u6587\u4E0A\u7684 alt \u6307\u793A"]);
      },
      "hide_boost_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u96B1\u85CF\u8F49\u767C\u6578"]);
      },
      "hide_favorite_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u96B1\u85CF\u6536\u85CF\u6578"]);
      },
      "hide_follower_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u96B1\u85CF\u7C89\u7D72\u6578"]);
      },
      "hide_reply_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u96B1\u85CF\u56DE\u8986\u6578"]);
      },
      "hide_translation": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u96B1\u85CF\u7FFB\u8B6F"]);
      },
      "hide_username_emojis": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u96B1\u85CF\u4F7F\u7528\u8005\u540D\u7A31\u4E0A\u7684\u8868\u60C5\u7B26\u865F"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u504F\u597D\u8A2D\u5B9A"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u5BE6\u9A57\u529F\u80FD"]);
      },
      "user_picker": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u4F7F\u7528\u8005\u9078\u64C7\u5668"]);
      },
      "virtual_scroll": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u865B\u64EC\u6EFE\u52D5"]);
      },
      "wellbeing": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u798F\u5229"]);
      }
    },
    "profile": {
      "appearance": {
        "bio": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u7C21\u4ECB"]);
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u7DE8\u8F2F\u500B\u4EBA\u8CC7\u6599\uFF0C\u4F8B\u5982\u5927\u982D\u8CBC\u3001\u4F7F\u7528\u8005\u540D\u3001\u500B\u4EBA\u7C21\u4ECB\u7B49\u3002"]);
        },
        "display_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u66B1\u7A31"]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u500B\u4EBA\u8CC7\u6599"]);
        },
        "profile_metadata": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u500B\u4EBA\u8CC7\u6599\u9644\u52A0\u8A0A\u606F"]);
        },
        "profile_metadata_desc": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
          return _normalize(["\u9019\u5C07\u6703\u5728\u500B\u4EBA\u8CC7\u6599\u9801\u4E0A\u4EE5\u8868\u683C\u7684\u5F62\u5F0F\u5448\u73FE\uFF0C\u6700\u591A ", _interpolate(_list(0)), " \u500B\u9805\u76EE"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u7DE8\u8F2F\u500B\u4EBA\u8CC7\u6599"]);
        }
      },
      "featured_tags": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u4EBA\u5011\u53EF\u4EE5\u5728\u9019\u4E9B\u6A19\u7C64\u4E0B\u700F\u89BD\u4F60\u7684\u516C\u958B\u561F\u6587\u3002"]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u7CBE\u9078\u7684\u8A71\u984C\u6A19\u7C64"]);
        }
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u500B\u4EBA\u8CC7\u6599"]);
      }
    },
    "select_a_settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5728\u5DE6\u5074\u9078\u64C7\u4E00\u500B\u8A2D\u5B9A"]);
    },
    "users": {
      "export": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u532F\u5165\u4F7F\u7528\u8005\u6191\u8B49"]);
      },
      "import": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u532F\u51FA\u4F7F\u7528\u8005\u6191\u8B49"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u7576\u524D\u4F7F\u7528\u8005"]);
      }
    }
  },
  "share-target": {
    "description": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5982\u679C\u4F60\u60F3\u5206\u4EAB\u5176\u4ED6\u61C9\u7528\u7A0B\u5F0F\u4E0A\u7684\u5167\u5BB9\u5230\u9E7F\u9CF4\u3002\u8ACB\u5728\u4F60\u7684\u884C\u52D5\u88DD\u7F6E\u88DD\u7F6E\u6216\u96FB\u8166\u4E0A\u5B89\u88DD\u9E7F\u9CF4\u4E26\u767B\u5165\u3002"]);
    },
    "hint": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u70BA\u4E86\u5C07\u5167\u5BB9\u5206\u4EAB\u5230\u9E7F\u9CF4\uFF0C\u4F60\u9700\u8981\u5B89\u88DD\u9E7F\u9CF4\u4E26\u4E14\u767B\u5165\u3002"]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5206\u4EAB\u5230\u9E7F\u9CF4"]);
    }
  },
  "state": {
    "attachments_exceed_server_limit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9644\u4EF6\u7684\u6578\u91CF\u8D85\u51FA\u4E86\u6700\u5927\u9650\u5236"]);
    },
    "attachments_limit_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8D85\u51FA\u6BCF\u7BC7\u8CBC\u6587\u7684\u6700\u5927\u9650\u5236"]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uFF08\u5DF2\u7DE8\u8F2F\uFF09"]);
    },
    "editing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7DE8\u8F2F\u4E2D"]);
    },
    "loading": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8F09\u5165\u4E2D..."]);
    },
    "publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u767C\u5E03\u5931\u6557"]);
    },
    "publishing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u767C\u5E03\u4E2D"]);
    },
    "upload_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4E0A\u50B3\u5931\u6557"]);
    },
    "uploading": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4E0A\u50B3\u4E2D..."]);
    }
  },
  "status": {
    "boosted_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u88AB\u8F49\u767C"]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u5728 ", _interpolate(_list(0)), " \u7DE8\u8F2F\u4E86"]);
    },
    "favourited_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u88AB\u559C\u6B61"]);
    },
    "filter_hidden_phrase": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u7BE9\u9078\u4F9D\u64DA"]);
    },
    "filter_show_anyway": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4ECD\u7136\u986F\u793A"]);
    },
    "img_alt": {
      "ALT": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["ALT"]);
      },
      "desc": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u63CF\u8FF0"]);
      },
      "dismiss": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u95DC\u9589"]);
      },
      "read": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u95B1\u8B80 ", _interpolate(_list(0)), " \u7684\u8AAA\u660E"]);
      }
    },
    "poll": {
      "count": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize([_interpolate(_list(0)), " \u6B21\u6295\u7968"]);
      },
      "ends": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u5C07\u5728 ", _interpolate(_list(0)), " \u7D50\u675F"]);
      },
      "finished": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u5DF2\u5728 ", _interpolate(_list(0)), " \u7D50\u675F"]);
      }
    },
    "replying_to": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u56DE\u8986", _interpolate(_list(0))]);
    },
    "show_full_thread": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u986F\u793A\u5B8C\u6574\u8CBC\u6587\u4E32"]);
    },
    "someone": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u67D0\u4EBA"]);
    },
    "spoiler_show_less": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u96B1\u85CF"]);
    },
    "spoiler_show_more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u986F\u793A\u66F4\u591A"]);
    },
    "thread": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8CBC\u6587\u4E32"]);
    },
    "try_original_site": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5617\u8A66\u5F9E\u4F86\u6E90\u6253\u958B"]);
    }
  },
  "status_history": {
    "created": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u5728 ", _interpolate(_list(0)), " \u767C\u5E03\u4E86"]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u5728 ", _interpolate(_list(0)), " \u7DE8\u8F2F\u4E86"]);
    }
  },
  "tab": {
    "accounts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5E33\u865F"]);
    },
    "for_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u63A8\u85A6\u8FFD\u8E64"]);
    },
    "hashtags": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8A71\u984C\u6A19\u7C64"]);
    },
    "list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5217\u8868"]);
    },
    "media": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5A92\u9AD4"]);
    },
    "news": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u6700\u65B0\u6D88\u606F"]);
    },
    "notifications_all": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5168\u90E8"]);
    },
    "notifications_mention": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u63D0\u53CA"]);
    },
    "posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8CBC\u6587"]);
    },
    "posts_with_replies": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8CBC\u6587\u8207\u7559\u8A00"]);
    }
  },
  "tag": {
    "follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8FFD\u8E64"]);
    },
    "follow_label": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u8FFD\u8E64 ", _interpolate(_list(0)), " \u6A19\u7C64"]);
    },
    "unfollow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u53D6\u6D88\u8FFD\u8E64"]);
    },
    "unfollow_label": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u53D6\u6D88\u8FFD\u8E64 ", _interpolate(_list(0)), " \u6A19\u7C64"]);
    }
  },
  "time_ago_options": {
    "day_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u73FE\u5728"]), _normalize(["\u660E\u5929"]), _normalize([_interpolate(_named("n")), " \u5929\u5F8C"])]);
    },
    "day_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u73FE\u5728"]), _normalize(["\u6628\u5929"]), _normalize([_interpolate(_named("n")), " \u5929\u524D"])]);
    },
    "hour_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u73FE\u5728"]), _normalize(["1 \u5C0F\u6642\u5F8C"]), _normalize([_interpolate(_named("n")), " \u5C0F\u6642\u5F8C"])]);
    },
    "hour_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u73FE\u5728"]), _normalize(["1 \u5C0F\u6642\u524D"]), _normalize([_interpolate(_named("n")), " \u5C0F\u6642\u524D"])]);
    },
    "just_now": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u525B\u525B"]);
    },
    "minute_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u73FE\u5728"]), _normalize(["1 \u5206\u9418\u5F8C"]), _normalize([_interpolate(_named("n")), " \u5206\u9418\u5F8C"])]);
    },
    "minute_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u73FE\u5728"]), _normalize(["1 \u5206\u9418\u524D"]), _normalize([_interpolate(_named("n")), " \u5206\u9418\u524D"])]);
    },
    "month_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u73FE\u5728"]), _normalize(["\u4E0B\u500B\u6708"]), _normalize([_interpolate(_named("n")), " \u500B\u6708\u5F8C"])]);
    },
    "month_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u73FE\u5728"]), _normalize(["\u4E0A\u500B\u6708"]), _normalize([_interpolate(_named("n")), " \u500B\u6708\u524D"])]);
    },
    "second_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u525B\u525B"]), _normalize([_interpolate(_named("n")), " \u79D2\u5F8C"]), _normalize([_interpolate(_named("n")), " \u79D2\u5F8C"])]);
    },
    "second_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u525B\u525B"]), _normalize([_interpolate(_named("n")), " \u79D2\u524D"]), _normalize([_interpolate(_named("n")), " \u79D2\u524D"])]);
    },
    "short_day_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " \u5929"]);
    },
    "short_day_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " \u5929"]);
    },
    "short_hour_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " \u5C0F\u6642"]);
    },
    "short_hour_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " \u5C0F\u6642"]);
    },
    "short_minute_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " \u5206"]);
    },
    "short_minute_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " \u5206"]);
    },
    "short_month_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " \u6708"]);
    },
    "short_month_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " \u6708"]);
    },
    "short_second_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " \u79D2"]);
    },
    "short_second_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " \u79D2"]);
    },
    "short_week_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " \u9031"]);
    },
    "short_week_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " \u9031"]);
    },
    "short_year_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " \u5E74"]);
    },
    "short_year_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " \u5E74"]);
    },
    "week_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u73FE\u5728"]), _normalize(["\u4E0B\u9031"]), _normalize([_interpolate(_named("n")), " \u9031\u5F8C"])]);
    },
    "week_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u73FE\u5728"]), _normalize(["\u4E0A\u9031"]), _normalize([_interpolate(_named("n")), " \u9031\u524D"])]);
    },
    "year_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u73FE\u5728"]), _normalize(["\u660E\u5E74"]), _normalize([_interpolate(_named("n")), " \u5E74\u5F8C"])]);
    },
    "year_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u73FE\u5728"]), _normalize(["\u53BB\u5E74"]), _normalize([_interpolate(_named("n")), " \u5E74\u524D"])]);
    }
  },
  "timeline": {
    "show_new_items": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u986F\u793A ", _interpolate(_named("v")), " \u5247\u65B0\u8CBC\u6587"]);
    },
    "view_older_posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5176\u4ED6\u7AD9\u9EDE\u4E0A\u66F4\u820A\u7684\u8CBC\u6587\u53EF\u80FD\u4E0D\u6703\u5728\u9019\u88E1\u986F\u793A\u3002"]);
    }
  },
  "title": {
    "federated_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8DE8\u7AD9\u6642\u9593\u8EF8"]);
    },
    "local_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u672C\u7AD9\u6642\u9593\u8EF8"]);
    }
  },
  "tooltip": {
    "add_content_warning": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u52A0\u5165\u8CBC\u6587\u8B66\u544A\u6A19\u8B58"]);
    },
    "add_emojis": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u52A0\u5165\u8868\u60C5\u7B26\u865F"]);
    },
    "add_media": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u52A0\u5165\u5716\u7247\u3001\u5F71\u7247\u6216\u97F3\u8A0A"]);
    },
    "add_publishable_content": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u52A0\u5165\u8981\u767C\u5E03\u7684\u8CBC\u6587"]);
    },
    "change_content_visibility": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4FEE\u6539\u8CBC\u6587\u96B1\u79C1\u72C0\u614B"]);
    },
    "change_language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5207\u63DB\u8A9E\u8A00"]);
    },
    "emoji": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8868\u60C5\u7B26\u865F"]);
    },
    "explore_links_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9019\u4E9B\u65B0\u805E\u6545\u4E8B\u6B63\u88AB\u672C\u7AD9\u548C\u5206\u6563\u5F0F\u7DB2\u8DEF\u4E0A\u5176\u4ED6\u7AD9\u9EDE\u7684\u4F7F\u7528\u8005\u8AC7\u8AD6\u3002"]);
    },
    "explore_posts_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4F86\u81EA\u672C\u7AD9\u548C\u5206\u6563\u5F0F\u7DB2\u8DEF\u4E0A\u5176\u4ED6\u7AD9\u9EDE\u7684\u9019\u4E9B\u561F\u6587\u6B63\u5728\u672C\u7AD9\u5F15\u8D77\u95DC\u6CE8\u3002"]);
    },
    "explore_tags_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9019\u4E9B\u6A19\u7C64\u6B63\u5728\u672C\u7AD9\u548C\u5206\u6563\u5F0F\u7DB2\u8DEF\u4E0A\u5176\u4ED6\u7AD9\u9EDE\u7684\u4F7F\u7528\u8005\u4E2D\u5F15\u8D77\u95DC\u6CE8\u3002"]);
    },
    "publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8ACB\u95DC\u9589\u7DE8\u8F2F\u5668\u4E0A\u65B9\u7684\u5931\u6557\u8A0A\u606F\u4EE5\u91CD\u65B0\u767C\u5E03\u8CBC\u6587\u3002"]);
    },
    "toggle_code_block": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5207\u63DB\u7A0B\u5F0F\u78BC\u5340\u584A"]);
    }
  },
  "user": {
    "add_existing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u52A0\u5165\u73FE\u6709\u5E33\u865F"]);
    },
    "server_address_label": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mastodon \u4F3A\u670D\u5668\u4F4D\u7F6E"]);
    },
    "sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u767B\u5165\u5F8C\u53EF\u8FFD\u8E64\u5176\u4ED6\u4EBA\u6216\u6A19\u7C64\u3001\u9EDE\u8B9A\u3001\u5206\u4EAB\u548C\u56DE\u8986\u8CBC\u6587\uFF0C\u6216\u8207\u4E0D\u540C\u4F3A\u670D\u5668\u4E0A\u7684\u5E33\u865F\u4E92\u52D5\u3002"]);
    },
    "sign_in_notice_title": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u6B63\u5728\u67E5\u770B ", _interpolate(_list(0)), " \u7684\u516C\u5171\u6578\u64DA"]);
    },
    "sign_out_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u767B\u51FA ", _interpolate(_list(0))]);
    },
    "tip_no_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u5982\u679C\u60A8\u9084\u6C92\u6709 Mastodon \u5E33\u865F\uFF0C", _interpolate(_list(0)), "\u3002"]);
    },
    "tip_register_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9078\u64C7\u60A8\u7684\u4F3A\u670D\u5668\u4E26\u8A3B\u518A\u4E00\u500B"]);
    }
  },
  "visibility": {
    "direct": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u79C1\u8A0A"]);
    },
    "direct_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u50C5\u5C0D\u63D0\u53CA\u7684\u4F7F\u7528\u8005\u53EF\u898B"]);
    },
    "private": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u50C5\u9650\u7C89\u7D72"]);
    },
    "private_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u50C5\u7C89\u7D72\u53EF\u898B"]);
    },
    "public": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u516C\u958B"]);
    },
    "public_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5C0D\u6240\u6709\u4EBA\u53EF\u898B"]);
    },
    "unlisted": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4E0D\u516C\u958B"]);
    },
    "unlisted_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5C0D\u6240\u6709\u4EBA\u53EF\u898B\uFF0C\u4F46\u4E0D\u51FA\u73FE\u5728\u63A2\u7D22\u9801\u9762\u88E1\u9762"]);
    }
  }
};

export { zhTW as default };
