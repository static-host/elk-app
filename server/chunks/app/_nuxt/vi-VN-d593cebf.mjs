const viVN = {
  "a11y": {
    "loading_page": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110ang t\u1EA3i, \u0111\u1EE3i x\xEDu"]);
    },
    "loading_titled_page": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0110ang t\u1EA3i ", _interpolate(_list(0)), " trang, \u0111\u1EE3i x\xEDu"]);
    },
    "locale_changed": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0110\xE3 \u0111\u1ED5i ng\xF4n ng\u1EEF th\xE0nh ", _interpolate(_list(0))]);
    },
    "locale_changing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110ang \u0111\u1ED5i ng\xF4n ng\u1EEF, \u0111\u1EE3i x\xEDu"]);
    },
    "route_loaded": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0110\xE3 t\u1EA3i ", _interpolate(_list(0)), " trang"]);
    }
  },
  "account": {
    "avatar_description": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u1EA2nh \u0111\u1EA1i di\u1EC7n ", _interpolate(_list(0))]);
    },
    "blocked_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["B\u1EA1n b\u1ECB ng\u01B0\u1EDDi n\xE0y ch\u1EB7n."]);
    },
    "blocked_domains": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["M\xE1y ch\u1EE7 \u0111\xE3 ch\u1EB7n"]);
    },
    "blocked_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ng\u01B0\u1EDDi \u0111\xE3 ch\u1EB7n"]);
    },
    "blocking": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\xE3 ch\u1EB7n"]);
    },
    "bot": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["BOT"]);
    },
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["L\u01B0\u1EE3t th\xEDch"]);
    },
    "follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Theo d\xF5i"]);
    },
    "follow_back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Theo d\xF5i l\u1EA1i"]);
    },
    "follow_requested": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\xE3 y\xEAu c\u1EA7u"]);
    },
    "followers": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ng\u01B0\u1EDDi theo d\xF5i"]);
    },
    "followers_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_list(0)), " Ng\u01B0\u1EDDi theo d\xF5i"]), _normalize([_interpolate(_list(0)), " Ng\u01B0\u1EDDi theo d\xF5i"]), _normalize([_interpolate(_list(0)), " Ng\u01B0\u1EDDi theo d\xF5i"])]);
    },
    "following": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110ang theo d\xF5i"]);
    },
    "following_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u0110ang theo d\xF5i"]);
    },
    "follows_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110ang theo d\xF5i b\u1EA1n"]);
    },
    "go_to_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Xem h\u1ED3 s\u01A1"]);
    },
    "joined": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\xE3 tham gia"]);
    },
    "moved_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["cho hay \u0111\u1ECBa ch\u1EC9 m\u1EDBi c\u1EE7a h\u1ECD b\xE2y gi\u1EDD l\xE0:"]);
    },
    "muted_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ng\u01B0\u1EDDi \u0111\xE3 \u1EA9n"]);
    },
    "muting": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\xE3 \u1EA9n"]);
    },
    "mutuals": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Theo d\xF5i nhau"]);
    },
    "notifications_on_post_disable": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Ng\u1EEBng th\xF4ng b\xE1o khi ", _interpolate(_named("username")), " \u0111\u0103ng t\xFAt m\u1EDBi"]);
    },
    "notifications_on_post_enable": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Th\xF4ng b\xE1o khi ", _interpolate(_named("username")), " \u0111\u0103ng t\xFAt m\u1EDBi"]);
    },
    "pinned": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\xE3 ghim"]);
    },
    "posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["T\xFAt"]);
    },
    "posts_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_list(0)), " T\xFAt"]), _normalize([_interpolate(_list(0)), " T\xFAt"]), _normalize([_interpolate(_list(0)), " T\xFAt"])]);
    },
    "profile_description": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u1EA2nh b\xECa c\u1EE7a ", _interpolate(_list(0))]);
    },
    "profile_personal_note": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ghi ch\xFA v\u1EC1 ng\u01B0\u1EDDi n\xE0y"]);
    },
    "profile_unavailable": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["H\u1ED3 s\u01A1 kh\xF4ng kh\u1EA3 d\u1EE5ng"]);
    },
    "request_follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Y\xEAu c\u1EA7u theo d\xF5i"]);
    },
    "unblock": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["B\u1ECF ch\u1EB7n"]);
    },
    "unfollow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["B\u1ECF theo d\xF5i"]);
    },
    "unmute": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["B\u1ECF \u1EA9n"]);
    },
    "view_other_followers": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ng\u01B0\u1EDDi theo d\xF5i t\u1EEB c\xE1c m\xE1y ch\u1EE7 kh\xE1c c\xF3 th\u1EC3 kh\xF4ng hi\u1EC3n th\u1ECB \u0111\u1EE7."]);
    },
    "view_other_following": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ng\u01B0\u1EDDi \u0111ang theo d\xF5i t\u1EEB c\xE1c m\xE1y ch\u1EE7 kh\xE1c c\xF3 th\u1EC3 kh\xF4ng hi\u1EC3n th\u1ECB \u0111\u1EE7."]);
    }
  },
  "action": {
    "apply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\xC1p d\u1EE5ng"]);
    },
    "bookmark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["L\u01B0u"]);
    },
    "bookmarked": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\xE3 l\u01B0u"]);
    },
    "boost": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\u0103ng l\u1EA1i"]);
    },
    "boost_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "boosted": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\xE3 \u0111\u0103ng l\u1EA1i"]);
    },
    "clear_publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["X\xF3a l\u1ED7i khi \u0111\u0103ng t\xFAt"]);
    },
    "clear_save_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["X\xF3a l\u1ED7i khi l\u01B0u t\xFAt"]);
    },
    "clear_upload_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["X\xF3a l\u1ED7i khi x\xF3a file"]);
    },
    "close": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\xF3ng"]);
    },
    "compose": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["So\u1EA1n t\xFAt"]);
    },
    "confirm": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["X\xE1c nh\u1EADn"]);
    },
    "done": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Xong"]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["S\u1EEDa"]);
    },
    "enter_app": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["M\u1EDF App"]);
    },
    "favourite": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Th\xEDch"]);
    },
    "favourite_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "favourited": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\xE3 th\xEDch"]);
    },
    "more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Xem th\xEAm"]);
    },
    "next": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["K\u1EBF ti\u1EBFp"]);
    },
    "prev": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tr\u01B0\u1EDBc \u0111\xF3"]);
    },
    "publish": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\u0103ng"]);
    },
    "reply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tr\u1EA3 l\u1EDDi"]);
    },
    "reply_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "reset": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\u1EB7t l\u1EA1i"]);
    },
    "save": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["L\u01B0u"]);
    },
    "save_changes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["L\u01B0u m\u1ECDi thay \u0111\u1ED5i"]);
    },
    "sign_in": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\u0103ng nh\u1EADp"]);
    },
    "sign_in_to": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0110\u0103ng nh\u1EADp ", _interpolate(_list(0))]);
    },
    "switch_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Chuy\u1EC3n sang t\xE0i kho\u1EA3n kh\xE1c"]);
    },
    "vote": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["B\xECnh ch\u1ECDn"]);
    }
  },
  "app_desc_short": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["M\u1ED9t \u1EE9ng d\u1EE5ng web Mastodon nhanh nh\u1EB9n"]);
  },
  "app_logo": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Elk Logo"]);
  },
  "app_name": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Elk"]);
  },
  "attachment": {
    "edit_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["M\xF4 t\u1EA3"]);
    },
    "remove_label": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["X\xF3a file \u0111\xEDnh k\xE8m"]);
    }
  },
  "command": {
    "activate": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["K\xEDch ho\u1EA1t"]);
    },
    "complete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ho\xE0n th\xE0nh"]);
    },
    "compose_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["So\u1EA1n t\xFAt m\u1EDBi"]);
    },
    "n-people-in-the-past-n-days": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " ng\u01B0\u1EDDi trong ", _interpolate(_list(1)), " ng\xE0y g\u1EA7n \u0111\xE2y"]);
    },
    "select_lang": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ch\u1ECDn ng\xF4n ng\u1EEF"]);
    },
    "sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Th\xEAm m\u1ED9t t\xE0i kho\u1EA3n kh\xE1c"]);
    },
    "switch_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Chuy\u1EC3n sang ", _interpolate(_list(0))]);
    },
    "switch_account_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Chuy\u1EC3n sang t\xE0i kho\u1EA3n kh\xE1c"]);
    },
    "toggle_dark_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\u1ED5i ch\u1EE7 \u0111\u1EC1 T\u1ED1i"]);
    },
    "toggle_zen_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\u1ED5i ch\u1EBF \u0111\u1ED9 T\u1EADp Trung"]);
    }
  },
  "common": {
    "end_of_list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["H\u1EBFt danh s\xE1ch"]);
    },
    "error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["L\u1ED6I"]);
    },
    "fetching": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110ang n\u1EA1p d\u1EEF li\u1EC7u..."]);
    },
    "in": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["trong"]);
    },
    "no_bookmarks": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ch\u01B0a l\u01B0u t\xFAt n\xE0o"]);
    },
    "no_favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ch\u01B0a th\xEDch t\xFAt n\xE0o"]);
    },
    "not_found": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["H\xF4ng t\xECm th\u1EA5y g\xEC h\u1EBFt"]);
    },
    "offline_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["C\xF3 v\u1EBB nh\u01B0 r\u1EDBt m\u1EA1ng. H\xE3y ki\u1EC3m tra l\u1EA1i k\u1EBFt n\u1ED1i."]);
    }
  },
  "compose": {
    "draft_title": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["T\xFAt nh\xE1p ", _interpolate(_list(0))]);
    },
    "drafts": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["T\xFAt nh\xE1p (", _interpolate(_named("v")), ")"]);
    }
  },
  "confirm": {
    "block_account": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["H\u1EE7y b\u1ECF"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ch\u1EB7n"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n ch\u1EB7n ", _interpolate(_list(0)), "?"]);
      }
    },
    "block_domain": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["H\u1EE7y b\u1ECF"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ch\u1EB7n"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n ch\u1EB7n ", _interpolate(_list(0)), "?"]);
      }
    },
    "common": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Kh\xF4ng"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0110\u1ED3ng \xFD"]);
      }
    },
    "delete_list": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["H\u1EE7y b\u1ECF"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["X\xF3a"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(['B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a "', _interpolate(_list(0)), '"?']);
      }
    },
    "delete_posts": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["H\u1EE7y b\u1ECF"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["X\xF3a"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a t\xFAt n\xE0y?"]);
      }
    },
    "mute_account": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["H\u1EE7y b\u1ECF"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u1EA8n"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n \u1EA9n ", _interpolate(_list(0)), "?"]);
      }
    },
    "show_reblogs": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["H\u1EE7y b\u1ECF"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Hi\u1EC7n"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n hi\u1EC7n l\u01B0\u1EE3t \u0111\u0103ng l\u1EA1i t\u1EEB ", _interpolate(_list(0)), "?"]);
      }
    },
    "unfollow": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["H\u1EE7y b\u1ECF"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["B\u1ECF theo d\xF5i"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n b\u1ECF theo d\xF5i?"]);
      }
    }
  },
  "conversation": {
    "with": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["v\u1EDBi"]);
    }
  },
  "custom_cards": {
    "stackblitz": {
      "lines": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["D\xF2ng ", _interpolate(_list(0))]);
      },
      "open": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["M\u1EDF"]);
      },
      "snippet_from": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Snippet t\u1EEB ", _interpolate(_list(0))]);
      }
    }
  },
  "error": {
    "account_not_found": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Kh\xF4ng t\xECm th\u1EA5y ", _interpolate(_list(0))]);
    },
    "explore-list-empty": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ch\u01B0a c\xF3 xu h\u01B0\u1EDBng. H\xE3y quay l\u1EA1i sau!"]);
    },
    "file_size_cannot_exceed_n_mb": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Dung l\u01B0\u1EE3ng file t\u1ED1i \u0111a ", _interpolate(_list(0)), "MB"]);
    },
    "sign_in_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Kh\xF4ng th\u1EC3 k\u1EBFt n\u1ED1i t\u1EDBi m\xE1y ch\u1EE7."]);
    },
    "status_not_found": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Kh\xF4ng t\xECm th\u1EA5y t\xFAt"]);
    },
    "unsupported_file_format": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\u1ECBnh d\u1EA1ng file kh\xF4ng \u0111\u01B0\u1EE3c h\u1ED7 tr\u1EE3"]);
    }
  },
  "help": {
    "build_preview": {
      "desc1": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["B\u1EA1n \u0111ang d\xF9ng b\u1EA3n xem tr\u01B0\u1EDBc c\u1EE7a Elk t\u1EEB c\u1ED9ng \u0111\u1ED3ng - ", _interpolate(_list(0)), "."]);
      },
      "desc2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["N\xF3 c\xF3 th\u1EC3 ch\u1EE9a c\xE1c thay \u0111\u1ED5i ch\u01B0a \u0111\u01B0\u1EE3c xem x\xE9t ho\u1EB7c th\u1EADm ch\xED c\xF3 l\u1ED7i."]);
      },
      "desc3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0110\u1EEBng \u0111\u0103ng nh\u1EADp b\u1EB1ng t\xE0i kho\u1EA3n ch\xEDnh."]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["B\u1EA3n d\u1EF1ng"]);
      }
    },
    "desc_highlight": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["S\u1EBD c\xF3 m\u1ED9t s\u1ED1 l\u1ED7i v\xE0 t\xEDnh n\u0103ng b\u1ECB thi\u1EBFu \u1EDF \u0111\xE2y."]);
    },
    "desc_para1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 quan t\xE2m \u0111\u1EBFn vi\u1EC7c d\xF9ng th\u1EED Elk, \u1EE9ng d\u1EE5ng web Mastodon \u0111ang \u0111\u01B0\u1EE3c tri\u1EC3n khai c\u1EE7a ch\xFAng t\xF4i!"]);
    },
    "desc_para2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ch\xFAng t\xF4i \u0111ang n\u1ED7 l\u1EF1c ph\xE1t tri\u1EC3n v\xE0 c\u1EA3i thi\u1EC7n n\xF3."]);
    },
    "desc_para3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\u1EC3 th\xFAc \u0111\u1EA9y s\u1EF1 ph\xE1t tri\u1EC3n, b\u1EA1n c\xF3 th\u1EC3 t\xE0i tr\u1EE3 cho Nh\xF3m th\xF4ng qua GitHub Sponsors. Ch\xFAng t\xF4i hy v\u1ECDng b\u1EA1n th\xEDch Elk!"]);
    },
    "desc_para4": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk l\xE0 M\xE3 Ngu\u1ED3n M\u1EDF. N\u1EBFu b\u1EA1n mu\u1ED1n th\u1EED nghi\u1EC7m, \u0111\u01B0a ra ph\u1EA3n h\u1ED3i ho\u1EB7c \u0111\xF3ng g\xF3p,"]);
    },
    "desc_para5": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["li\xEAn h\u1EC7 tr\xEAn GitHub"]);
    },
    "desc_para6": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["v\xE0 tham gia."]);
    },
    "footer_team": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk Team"]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk \u0111ang Th\u1EED Nghi\u1EC7m!"]);
    }
  },
  "language": {
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["T\xECm ki\u1EBFm"]);
    }
  },
  "list": {
    "add_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Th\xEAm v\xE0o danh s\xE1ch"]);
    },
    "cancel_edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["B\u1ECF s\u1EEDa \u0111\u1ED5i"]);
    },
    "clear_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["X\xF3a l\u1ED7i"]);
    },
    "create": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["T\u1EA1o"]);
    },
    "delete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["X\xF3a danh s\xE1ch n\xE0y"]);
    },
    "delete_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["X\u1EA3y ra l\u1ED7i khi x\xF3a danh s\xE1ch"]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["S\u1EEDa danh s\xE1ch n\xE0y"]);
    },
    "edit_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["X\u1EA3y ra l\u1ED7i khi c\u1EADp nh\u1EADt danh s\xE1ch"]);
    },
    "error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["X\u1EA3y ra l\u1ED7i khi t\u1EA1o danh s\xE1ch"]);
    },
    "error_prefix": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["L\u1ED7i: "]);
    },
    "list_title_placeholder": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["T\xEAn danh s\xE1ch"]);
    },
    "modify_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["S\u1EEDa danh s\xE1ch c\xF3 ng\u01B0\u1EDDi n\xE0y"]);
    },
    "remove_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["X\xF3a ng\u01B0\u1EDDi ra kh\u1ECFi danh s\xE1ch"]);
    },
    "save": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["L\u01B0u thay \u0111\u1ED5i"]);
    }
  },
  "magic_keys": {
    "dialog_header": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ph\xEDm t\u1EAFt"]);
    },
    "groups": {
      "actions": {
        "boost": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0110\u0103ng l\u1EA1i"]);
        },
        "command_mode": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ch\u1EBF \u0111\u1ED9 d\xF2ng l\u1EC7nh"]);
        },
        "compose": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Vi\u1EBFt"]);
        },
        "favourite": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Th\xEDch"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["H\xE0nh \u0111\u1ED9ng"]);
        }
      },
      "media": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Media"]);
        }
      },
      "navigation": {
        "go_to_home": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Trang ch\xEDnh"]);
        },
        "go_to_notifications": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Th\xF4ng b\xE1o"]);
        },
        "next_status": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["T\xFAt ti\u1EBFp theo"]);
        },
        "previous_status": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["T\xFAt tr\u01B0\u1EDBc \u0111\xF3"]);
        },
        "shortcut_help": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Tr\u1EE3 gi\xFAp ph\xEDm t\u1EAFt"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0110i\u1EC1u h\u01B0\u1EDBng"]);
        }
      }
    },
    "sequence_then": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["sau"]);
    }
  },
  "menu": {
    "add_personal_note": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Th\xEAm ghi ch\xFA v\u1EC1 ", _interpolate(_list(0))]);
    },
    "block_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Ch\u1EB7n ", _interpolate(_list(0))]);
    },
    "block_domain": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Ch\u1EB7n m\xE1y ch\u1EE7 ", _interpolate(_list(0))]);
    },
    "copy_link_to_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Sao ch\xE9p li\xEAn k\u1EBFt hi\u1EC7n t\u1EA1i"]);
    },
    "copy_original_link_to_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Sao ch\xE9p li\xEAn k\u1EBFt g\u1ED1c"]);
    },
    "delete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["X\xF3a"]);
    },
    "delete_and_redraft": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["X\xF3a & vi\u1EBFt l\u1EA1i"]);
    },
    "direct_message_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Nh\u1EAFn ri\xEAng ", _interpolate(_list(0))]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["S\u1EEDa"]);
    },
    "hide_reblogs": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u1EA8n \u0111\u0103ng l\u1EA1i t\u1EEB ", _interpolate(_list(0))]);
    },
    "mention_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Nh\u1EAFc \u0111\u1EBFn ", _interpolate(_list(0))]);
    },
    "mute_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u1EA8n ", _interpolate(_list(0))]);
    },
    "mute_conversation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u1EA8n th\xF4ng b\xE1o"]);
    },
    "open_in_original_site": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["M\u1EDF li\xEAn k\u1EBFt g\u1ED1c"]);
    },
    "pin_on_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ghim l\xEAn \u0111\u1EA7u"]);
    },
    "remove_personal_note": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["X\xF3a ghi ch\xFA v\u1EC1 ", _interpolate(_list(0))]);
    },
    "report_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["B\xE1o c\xE1o ", _interpolate(_list(0))]);
    },
    "share_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Chia s\u1EBB t\xFAt"]);
    },
    "show_favourited_and_boosted_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Hi\u1EC7n l\u01B0\u1EE3t th\xEDch v\xE0 \u0111\u0103ng l\u1EA1i"]);
    },
    "show_reblogs": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Hi\u1EC7n \u0111\u0103ng l\u1EA1i t\u1EEB ", _interpolate(_list(0))]);
    },
    "show_untranslated": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Hi\u1EC7n b\u1EA3n ch\u01B0a d\u1ECBch"]);
    },
    "toggle_theme": {
      "dark": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ch\u1EBF \u0111\u1ED9 T\u1ED1i"]);
      },
      "light": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ch\u1EBF \u0111\u1ED9 S\xE1ng"]);
      }
    },
    "translate_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["D\u1ECBch t\xFAt"]);
    },
    "unblock_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["B\u1ECF ch\u1EB7n ", _interpolate(_list(0))]);
    },
    "unblock_domain": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["B\u1ECF ch\u1EB7n m\xE1y ch\u1EE7 ", _interpolate(_list(0))]);
    },
    "unfollow_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["B\u1ECF theo d\xF5i ", _interpolate(_list(0))]);
    },
    "unmute_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["B\u1ECF \u1EA9n ", _interpolate(_list(0))]);
    },
    "unmute_conversation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["B\u1ECF \u1EA9n t\xFAt"]);
    },
    "unpin_on_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["B\u1ECF ghim kh\u1ECFi h\u1ED3 s\u01A1"]);
    }
  },
  "modals": {
    "aria_label_close": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\xF3ng"]);
    }
  },
  "nav": {
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Quay v\u1EC1"]);
    },
    "blocked_domains": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["M\xE1y ch\u1EE7 \u0111\xE3 ch\u1EB7n"]);
    },
    "blocked_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ng\u01B0\u1EDDi \u0111\xE3 ch\u1EB7n"]);
    },
    "bookmarks": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["T\xFAt \u0111\xE3 l\u01B0u"]);
    },
    "built_at": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["B\u1EA3n d\u1EF1ng ", _interpolate(_list(0))]);
    },
    "compose": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["So\u1EA1n t\xFAt"]);
    },
    "conversations": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Th\u1EA3o lu\u1EADn"]);
    },
    "explore": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Kh\xE1m ph\xE1"]);
    },
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["L\u01B0\u1EE3t th\xEDch"]);
    },
    "federated": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Li\xEAn h\u1EE3p"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Trang ch\xEDnh"]);
    },
    "list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Danh s\xE1ch"]);
    },
    "lists": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Danh s\xE1ch"]);
    },
    "local": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["M\xE1y ch\u1EE7"]);
    },
    "muted_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ng\u01B0\u1EDDi \u0111\xE3 \u1EA9n"]);
    },
    "notifications": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Th\xF4ng b\xE1o"]);
    },
    "privacy": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["B\u1EA3o m\u1EADt"]);
    },
    "profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["H\u1ED3 s\u01A1"]);
    },
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["T\xECm ki\u1EBFm"]);
    },
    "select_feature_flags": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["T\xEDnh N\u0103ng Th\u1EED Nghi\u1EC7m"]);
    },
    "select_font_size": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["C\u1EE1 Ch\u1EEF"]);
    },
    "select_language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ng\xF4n Ng\u1EEF"]);
    },
    "settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["C\xE0i \u0111\u1EB7t"]);
    },
    "show_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Gi\u1EDBi thi\u1EC7u"]);
    },
    "toggle_theme": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\u1ED5i ch\u1EE7 \u0111\u1EC1"]);
    },
    "zen_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["T\u1EADp Trung"]);
    }
  },
  "notification": {
    "favourited_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["th\xEDch t\xFAt c\u1EE7a b\u1EA1n"]);
    },
    "followed_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["theo d\xF5i b\u1EA1n"]);
    },
    "followed_you_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_list(0)), " ng\u01B0\u1EDDi theo d\xF5i b\u1EA1n"]), _normalize([_interpolate(_list(0)), " ng\u01B0\u1EDDi theo d\xF5i b\u1EA1n"]), _normalize([_interpolate(_list(0)), " ng\u01B0\u1EDDi theo d\xF5i b\u1EA1n"])]);
    },
    "missing_type": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["THI\u1EBEU notification.type:"]);
    },
    "reblogged_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0111\u0103ng l\u1EA1i t\xFAt c\u1EE7a b\u1EA1n"]);
    },
    "reported": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " b\xE1o c\xE1o ", _interpolate(_list(1))]);
    },
    "request_to_follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["y\xEAu c\u1EA7u theo d\xF5i b\u1EA1n"]);
    },
    "signed_up": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["tham gia m\xE1y ch\u1EE7"]);
    },
    "update_status": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["s\u1EEDa t\xFAt c\u1EE7a h\u1ECD"]);
    }
  },
  "placeholder": {
    "content_warning": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Vi\u1EBFt c\u1EA3nh b\xE1o c\u1EE7a b\u1EA1n \u1EDF \u0111\xE2y"]);
    },
    "default_1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["B\u1EA1n \u0111ang ngh\u0129 g\xEC v\u1EADy?"]);
    },
    "reply_to_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Tr\u1EA3 l\u1EDDi ", _interpolate(_list(0))]);
    },
    "replying": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tr\u1EA3 l\u1EDDi"]);
    }
  },
  "polls": {
    "allow_multiple": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Cho ph\xE9p ch\u1ECDn nhi\u1EC1u l\u1EF1a ch\u1ECDn"]);
    },
    "cancel": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["H\u1EE7y b\u1ECF"]);
    },
    "create": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["T\u1EA1o b\xECnh ch\u1ECDn"]);
    },
    "disallow_multiple": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ch\u1EC9 ch\u1ECDn m\u1ED9t l\u1EF1a ch\u1ECDn"]);
    },
    "expiration": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["H\u1EBFt h\u1EA1n"]);
    },
    "hide_votes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u1EA8n s\u1ED1 l\u01B0\u1EE3t b\xECnh ch\u1ECDn cho t\u1EDBi khi h\u1EBFt h\u1EA1n"]);
    },
    "option_placeholder": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["L\u1EF1a ch\u1ECDn ", _interpolate(_named("current")), "/", _interpolate(_named("max"))]);
    },
    "remove_option": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["X\xF3a l\u1EF1a ch\u1ECDn"]);
    },
    "settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["T\xF9y ch\u1ECDn"]);
    },
    "show_votes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Hi\u1EC7n s\u1ED1 l\u01B0\u1EE3t b\xECnh ch\u1ECDn"]);
    }
  },
  "pwa": {
    "dismiss": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["B\u1ECF qua"]);
    },
    "install": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["C\xE0i \u0111\u1EB7t"]);
    },
    "install_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["C\xE0i \u0111\u1EB7t Elk"]);
    },
    "screenshots": {
      "dark": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u1EA2nh ch\u1EE5p Elk ch\u1EBF \u0111\u1ED9 t\u1ED1i"]);
      },
      "light": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u1EA2nh ch\u1EE5p Elk ch\u1EBF \u0111\u1ED9 s\xE1ng"]);
      }
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["C\xF3 b\u1EA3n c\u1EADp nh\u1EADt Elk m\u1EDBi!"]);
    },
    "update": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["C\u1EADp nh\u1EADt"]);
    },
    "update_available_short": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["C\u1EADp nh\u1EADt Elk"]);
    },
    "webmanifest": {
      "canary": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["M\u1ED9t \u1EE9ng d\u1EE5ng web Mastodon nhanh nh\u1EB9n (canary)"]);
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
          return _normalize(["M\u1ED9t \u1EE9ng d\u1EE5ng web Mastodon nhanh nh\u1EB9n (dev)"]);
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
          return _normalize(["M\u1ED9t \u1EE9ng d\u1EE5ng web Mastodon nhanh nh\u1EB9n (preview)"]);
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
          return _normalize(["M\u1ED9t \u1EE9ng d\u1EE5ng web Mastodon nhanh nh\u1EB9n"]);
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
      return _normalize(["Th\xEAm l\u01B0u \xFD"]);
    },
    "another_server": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ng\u01B0\u1EDDi b\u1EA1n b\xE1o c\xE1o thu\u1ED9c \u1EDF m\xE1y ch\u1EE7 kh\xE1c"]);
    },
    "anything_else": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["C\xF3 \u0111i\u1EC1u g\xEC m\xE0 ch\xFAng t\xF4i c\u1EA7n bi\u1EBFt kh\xF4ng?"]);
    },
    "block_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["B\u1EA1n s\u1EBD kh\xF4ng c\xF2n th\u1EA5y t\xFAt c\u1EE7a ng\u01B0\u1EDDi n\xE0y. H\u1ECD s\u1EBD kh\xF4ng th\u1EC3 th\u1EA5y t\xFAt c\u1EE7a b\u1EA1n ho\u1EB7c theo d\xF5i b\u1EA1n. H\u1ECD bi\u1EBFt l\xE0 b\u1EA1n \u0111\xE3 ch\u1EB7n h\u1ECD."]);
    },
    "dontlike": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["T\xF4i kh\xF4ng th\xEDch n\xF3"]);
    },
    "dontlike_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\xF3 kh\xF4ng ph\u1EA3i l\xE0 th\u1EE9 g\xEC m\xE0 b\u1EA1n mu\u1ED1n th\u1EA5y"]);
    },
    "forward": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["G\u1EEDi lu\xF4n b\xE1o c\xE1o t\u1EDBi ", _interpolate(_list(0))]);
    },
    "forward_question": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n g\u1EEDi lu\xF4n b\xE1o c\xE1o t\u1EDBi m\xE1y ch\u1EE7 c\u1EE7a ng\u01B0\u1EDDi n\xE0y?"]);
    },
    "further_actions": {
      "limit": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0110\xE2y l\xE0 c\xE1ch ki\u1EC3m so\xE1t nh\u1EEFng th\u1EE9 m\xE0 b\u1EA1n th\u1EA5y:"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Kh\xF4ng mu\u1ED1n xem th\u1EE9 n\xE0y?"]);
        }
      },
      "report": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Trong l\xFAc ch\u1EDD xem x\xE9t, \u0111\xE2y l\xE0 nh\u1EEFng \u0111i\u1EC1u b\u1EA1n c\xF3 th\u1EC3 l\xE0m:"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["C\u1EA3m \u01A1n \u0111\xE3 b\xE1o c\xE1o, ch\xFAng t\xF4i s\u1EBD xem x\xE9t ngay."]);
        }
      }
    },
    "limiting": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["H\u1EA1n ch\u1EBF ", _interpolate(_list(0))]);
    },
    "mute_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["B\u1EA1n s\u1EBD kh\xF4ng c\xF2n th\u1EA5y t\xFAt c\u1EE7a ng\u01B0\u1EDDi n\xE0y. H\u1ECD v\u1EABn c\xF3 th\u1EC3 th\u1EA5y t\xFAt c\u1EE7a b\u1EA1n ho\u1EB7c theo d\xF5i b\u1EA1n. H\u1ECD kh\xF4ng bi\u1EBFt l\xE0 b\u1EA1n \u0111\xE3 ch\u1EB7n h\u1ECD."]);
    },
    "other": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["M\u1ED9t l\xFD do kh\xE1c"]);
    },
    "other_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["V\u1EA5n \u0111\u1EC1 kh\xF4ng n\u1EB1m trong nh\u1EEFng m\u1EE5c tr\xEAn"]);
    },
    "reporting": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["B\xE1o c\xE1o ", _interpolate(_list(0))]);
    },
    "select_many": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ch\u1ECDn t\u1EA5t c\u1EA3 l\xFD do ph\xF9 h\u1EE3p:"]);
    },
    "select_one": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ch\u1ECDn l\xFD do ph\xF9 h\u1EE3p nh\u1EA5t:"]);
    },
    "select_posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["B\u1EA1n mu\u1ED1n b\xE1o c\xE1o t\xFAt n\xE0o?"]);
    },
    "select_posts_other": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["B\u1EA1n mu\u1ED1n b\xE1o c\xE1o nh\u1EEFng t\xFAt n\xE0o?"]);
    },
    "spam": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\xE2y l\xE0 spam"]);
    },
    "spam_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Li\xEAn k\u1EBFt \u0111\u1ED9c h\u1EA1i, t\u01B0\u01A1ng t\xE1c gi\u1EA3, ho\u1EB7c tr\u1EA3 l\u1EDDi l\u1EB7p \u0111i l\u1EB7p l\u1EA1i"]);
    },
    "submit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["G\u1EEDi b\xE1o c\xE1o"]);
    },
    "unfollow_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["B\u1EA1n s\u1EBD kh\xF4ng c\xF2n th\u1EA5y t\xFAt c\u1EE7a ng\u01B0\u1EDDi n\xE0y tr\xEAn b\u1EA3ng tin. T\xFAt c\u1EE7a h\u1ECD v\u1EABn c\xF3 th\u1EC3 xu\u1EA5t hi\u1EC7n \u1EDF nh\u1EEFng n\u01A1i kh\xE1c."]);
    },
    "violation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Vi ph\u1EA1m n\u1ED9i quy m\xE1y ch\u1EE7"]);
    },
    "whats_wrong_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ng\u01B0\u1EDDi n\xE0y c\xF3 v\u1EA5n \u0111\u1EC1 g\xEC?"]);
    },
    "whats_wrong_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["T\xFAt n\xE0y c\xF3 v\u1EA5n \u0111\u1EC1 g\xEC?"]);
    }
  },
  "search": {
    "search_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["T\xECm ng\u01B0\u1EDDi ho\u1EB7c hashtag"]);
    },
    "search_empty": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Kh\xF4ng t\xECm th\u1EA5y g\xEC v\u1EDBi c\u1EE5m t\u1EEB n\xE0y"]);
    }
  },
  "settings": {
    "about": {
      "built_at": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["B\u1EA3n d\u1EF1ng"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Gi\u1EDBi thi\u1EC7u"]);
      },
      "meet_the_team": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0110\u1ED9i ng\u0169"]);
      },
      "sponsor_action": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["T\xE0i tr\u1EE3"]);
      },
      "sponsor_action_desc": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["H\u1ED7 tr\u1EE3 \u0111\u1ED9i ng\u0169 ph\xE1t tri\u1EC3n Elk"]);
      },
      "sponsors": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Nh\xE0 t\xE0i tr\u1EE3"]);
      },
      "sponsors_body_1": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Elk \u0111\u01B0\u1EE3c th\u1EF1c hi\u1EC7n nh\u1EDD s\u1EF1 t\xE0i tr\u1EE3 v\xE0 gi\xFAp \u0111\u1EE1 h\xE0o ph\xF3ng c\u1EE7a:"]);
      },
      "sponsors_body_2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["V\xE0 t\u1EA5t c\u1EA3 c\xE1c c\xF4ng ty, c\xE1 nh\xE2n t\xE0i tr\u1EE3 cho \u0111\u1ED9i ng\u0169 Elk."]);
      },
      "sponsors_body_3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["N\u1EBFu b\u1EA1n th\xEDch \u1EE9ng d\u1EE5ng n\xE0y, h\xE3y t\xE0i tr\u1EE3 cho ch\xFAng t\xF4i:"]);
      },
      "version": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Phi\xEAn b\u1EA3n"]);
      }
    },
    "account_settings": {
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["C\xE0i \u0111\u1EB7t t\xE0i kho\u1EA3n trong Mastodon UI"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["C\xE0i \u0111\u1EB7t t\xE0i kho\u1EA3n"]);
      }
    },
    "interface": {
      "color_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ch\u1EE7 \u0111\u1EC1"]);
      },
      "dark_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["T\u1ED1i"]);
      },
      "default": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize([" (m\u1EB7c \u0111\u1ECBnh)"]);
      },
      "font_size": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["C\u1EE1 ch\u1EEF"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Giao di\u1EC7n"]);
      },
      "light_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["S\xE1ng"]);
      },
      "system_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Thi\u1EBFt b\u1ECB"]);
      },
      "theme_color": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["M\xE0u"]);
      }
    },
    "language": {
      "display_language": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ng\xF4n ng\u1EEF hi\u1EC3n th\u1ECB"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ng\xF4n ng\u1EEF"]);
      },
      "post_language": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ng\xF4n ng\u1EEF \u0111\u0103ng t\xFAt"]);
      },
      "status": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["T\xECnh tr\u1EA1ng d\u1ECBch: ", _interpolate(_list(0)), "/", _interpolate(_list(1)), " (", _interpolate(_list(2)), "%)"]);
      },
      "translations": {
        "add": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Th\xEAm"]);
        },
        "choose_language": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ch\u1ECDn ng\xF4n ng\u1EEF"]);
        },
        "heading": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["D\u1ECBch"]);
        },
        "hide_specific": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Kh\xF4ng d\u1ECBch"]);
        },
        "remove": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["X\xF3a"]);
        }
      }
    },
    "notifications": {
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Th\xF4ng b\xE1o"]);
      },
      "notifications": {
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["C\xE0i \u0111\u1EB7t th\xF4ng b\xE1o"]);
        }
      },
      "push_notifications": {
        "alerts": {
          "favourite": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["L\u01B0\u1EE3t th\xEDch"]);
          },
          "follow": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Ng\u01B0\u1EDDi theo d\xF5i"]);
          },
          "mention": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["L\u01B0\u1EE3t nh\u1EAFc"]);
          },
          "poll": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Cu\u1ED9c b\xECnh ch\u1ECDn"]);
          },
          "reblog": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["L\u01B0\u1EE3t \u0111\u0103ng l\u1EA1i"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["B\u1EA1n mu\u1ED1n nh\u1EADn nh\u1EEFng ki\u1EC3u th\xF4ng b\xE1o n\xE0o?"]);
          }
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nh\u1EADn th\xF4ng b\xE1o k\u1EC3 c\u1EA3 khi b\u1EA1n kh\xF4ng s\u1EED d\u1EE5ng Elk."]);
        },
        "instructions": (ctx) => {
          const { normalize: _normalize, linked: _linked, type: _type } = ctx;
          return _normalize(["\u0110\u1EEBng qu\xEAn l\u01B0u c\xE1c thay \u0111\u1ED5i c\u1EE7a b\u1EA1n b\u1EB1ng c\xE1ch ", _linked("settings.notifications.push_notifications.save_settings", void 0, _type), " button!"]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["C\xE0i \u0111\u1EB7t th\xF4ng b\xE1o \u0111\u1EA9y"]);
        },
        "policy": {
          "all": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["T\u1EEB b\u1EA5t k\u1EF3 ai"]);
          },
          "followed": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["T\u1EEB ng\u01B0\u1EDDi t\xF4i theo d\xF5i"]);
          },
          "follower": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["T\u1EEB ng\u01B0\u1EDDi theo d\xF5i t\xF4i"]);
          },
          "none": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Kh\xF4ng ai c\u1EA3"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["T\xF4i s\u1EBD nh\u1EADn th\xF4ng b\xE1o t\u1EEB ai?"]);
          }
        },
        "save_settings": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["L\u01B0u c\xE0i \u0111\u1EB7t"]);
        },
        "subscription_error": {
          "clear_error": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["X\xF3a l\u1ED7i"]);
          },
          "error_hint": (ctx) => {
            const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
            return _normalize(["B\u1EA1n c\xF3 th\u1EC3 tham kh\u1EA3o danh s\xE1ch c\xE1c c\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p: ", _interpolate(_list(0)), "."]);
          },
          "invalid_vapid_key": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Kh\xF3a c\xF4ng khai VAPID d\u01B0\u1EDDng nh\u01B0 kh\xF4ng h\u1EE3p l\u1EC7."]);
          },
          "permission_denied": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Quy\u1EC1n b\u1ECB t\u1EEB ch\u1ED1i: b\u1EADt th\xF4ng b\xE1o trong tr\xECnh duy\u1EC7t c\u1EE7a b\u1EA1n."]);
          },
          "repo_link": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Repository Elk tr\xEAn GitHub"]);
          },
          "request_error": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0110\xE3 x\u1EA3y ra l\u1ED7i khi y\xEAu c\u1EA7u, h\xE3y th\u1EED l\u1EA1i v\xE0 n\u1EBFu l\u1ED7i v\u1EABn ti\u1EBFp di\u1EC5n, vui l\xF2ng b\xE1o c\xE1o s\u1EF1 c\u1ED1 v\u1EDBi repository Elk."]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Kh\xF4ng th\u1EC3 b\u1EADt th\xF4ng b\xE1o \u0111\u1EA9y"]);
          },
          "too_many_registrations": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Do gi\u1EDBi h\u1EA1n c\u1EE7a tr\xECnh duy\u1EC7t, Elk kh\xF4ng th\u1EC3 s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 th\xF4ng b\xE1o \u0111\u1EA9y cho nhi\u1EC1u t\xE0i kho\u1EA3n tr\xEAn c\xE1c m\xE1y ch\u1EE7 kh\xE1c nhau. B\u1EA1n n\xEAn h\u1EE7y \u0111\u0103ng k\xFD nh\u1EADn th\xF4ng b\xE1o \u0111\u1EA9y tr\xEAn m\u1ED9t t\xE0i kho\u1EA3n kh\xE1c v\xE0 th\u1EED l\u1EA1i."]);
          },
          "vapid_not_supported": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Tr\xECnh duy\u1EC7t c\u1EE7a b\u1EA1n h\u1ED7 tr\u1EE3 th\xF4ng b\xE1o \u0111\u1EA9y tr\xEAn web, nh\u01B0ng d\u01B0\u1EDDng nh\u01B0 kh\xF4ng tri\u1EC3n khai giao th\u1EE9c VAPID."]);
          }
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["C\xE0i \u0111\u1EB7t th\xF4ng b\xE1o \u0111\u1EA9y"]);
        },
        "undo_settings": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["B\u1ECF thay \u0111\u1ED5i"]);
        },
        "unsubscribe": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["T\u1EAFt th\xF4ng b\xE1o \u0111\u1EA9y"]);
        },
        "unsupported": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Tr\xECnh duy\u1EC7t c\u1EE7a b\u1EA1n kh\xF4ng h\u1ED7 tr\u1EE3 th\xF4ng b\xE1o \u0111\u1EA9y."]);
        },
        "warning": {
          "enable_close": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0110\xF3ng"]);
          },
          "enable_description": (ctx) => {
            const { normalize: _normalize, linked: _linked, type: _type } = ctx;
            return _normalize(['\u0110\u1EC3 nh\u1EADn th\xF4ng b\xE1o khi Elk kh\xF4ng m\u1EDF, h\xE3y b\u1EADt th\xF4ng b\xE1o \u0111\u1EA9y. B\u1EA1n c\xF3 th\u1EC3 ki\u1EC3m so\xE1t ch\xEDnh x\xE1c lo\u1EA1i t\u01B0\u01A1ng t\xE1c n\xE0o s\u1EBD t\u1EA1o th\xF4ng b\xE1o \u0111\u1EA9y th\xF4ng qua n\xFAt "', _linked("settings.notifications.show_btn", void 0, _type), '"', " \u1EDF tr\xEAn sau khi \u0111\xE3 b\u1EADt."]);
          },
          "enable_description_desktop": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(['\u0110\u1EC3 nh\u1EADn th\xF4ng b\xE1o khi Elk kh\xF4ng m\u1EDF, h\xE3y b\u1EADt th\xF4ng b\xE1o \u0111\u1EA9y. B\u1EA1n c\xF3 th\u1EC3 ki\u1EC3m so\xE1t ch\xEDnh x\xE1c lo\u1EA1i t\u01B0\u01A1ng t\xE1c n\xE0o s\u1EBD t\u1EA1o th\xF4ng b\xE1o \u0111\u1EA9y trong "C\xE0i \u0111\u1EB7t > Th\xF4ng b\xE1o > Th\xF4ng b\xE1o \u0111\u1EA9y" sau khi \u0111\xE3 b\u1EADt.']);
          },
          "enable_description_mobile": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(['B\u1EA1n c\u0169ng c\xF3 th\u1EC3 truy c\u1EADp c\xE0i \u0111\u1EB7t b\u1EB1ng menu \u0111i\u1EC1u h\u01B0\u1EDBng "C\xE0i \u0111\u1EB7t > Th\xF4ng b\xE1o > Th\xF4ng b\xE1o \u0111\u1EA9y".']);
          },
          "enable_description_settings": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0110\u1EC3 nh\u1EADn th\xF4ng b\xE1o khi Elk kh\xF4ng m\u1EDF, h\xE3y b\u1EADt th\xF4ng b\xE1o \u0111\u1EA9y. B\u1EA1n s\u1EBD c\xF3 th\u1EC3 ki\u1EC3m so\xE1t ch\xEDnh x\xE1c lo\u1EA1i t\u01B0\u01A1ng t\xE1c n\xE0o s\u1EBD t\u1EA1o th\xF4ng b\xE1o \u0111\u1EA9y tr\xEAn c\xF9ng m\xE0n h\xECnh n\xE0y sau khi b\u1EA1n b\u1EADt ch\xFAng."]);
          },
          "enable_desktop": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["B\u1EADt th\xF4ng b\xE1o \u0111\u1EA9y"]);
          },
          "enable_title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Kh\xF4ng b\u1ECF l\u1EE1 b\u1EA5t c\u1EE9 \u0111i\u1EC1u g\xEC"]);
          },
          "re_auth": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["H\xECnh nh\u01B0 m\xE1y ch\u1EE7 c\u1EE7a b\u1EA1n kh\xF4ng h\u1ED7 tr\u1EE3 th\xF4ng b\xE1o \u0111\u1EA9y. H\xE3y th\u1EED \u0111\u0103ng xu\u1EA5t v\xE0 \u0111\u0103ng nh\u1EADp l\u1EA1i, n\u1EBFu th\xF4ng b\xE1o n\xE0y v\u1EABn xu\u1EA5t hi\u1EC7n, h\xE3y li\xEAn h\u1EC7 v\u1EDBi qu\u1EA3n tr\u1ECB vi\xEAn m\xE1y ch\u1EE7 c\u1EE7a b\u1EA1n."]);
          }
        }
      },
      "show_btn": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0110\u1EBFn c\xE0i \u0111\u1EB7t th\xF4ng b\xE1o"]);
      },
      "under_construction": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0110ang \u0111\u01B0\u1EE3c x\xE2y d\u1EF1ng"]);
      }
    },
    "notifications_settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Th\xF4ng b\xE1o"]);
    },
    "preferences": {
      "enable_autoplay": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["B\u1EADt t\u1EF1 \u0111\u1ED9ng ph\xE1t"]);
      },
      "enable_data_saving": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["B\u1EADt ch\u1EBF \u0111\u1ED9 ti\u1EBFt ki\u1EC7m d\u1EEF li\u1EC7u m\u1EA1ng"]);
      },
      "enable_data_saving_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ti\u1EBFt ki\u1EC7m d\u1EEF li\u1EC7u b\u1EB1ng c\xE1ch kh\xF4ng cho t\u1EF1 \u0111\u1ED9ng t\u1EA3i file \u0111\xEDnh k\xE8m."]);
      },
      "enable_pinch_to_zoom": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["B\u1EADt ch\u1EE5m \u0111\u1EC3 thu ph\xF3ng"]);
      },
      "github_cards": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["GitHub Cards"]);
      },
      "github_cards_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Khi chia s\u1EBB m\u1ED9t li\xEAn k\u1EBFt GitHub, hi\u1EC3n th\u1ECB HTML social graph meta thay v\xEC \u1EA3nh m\u1EB7c \u0111\u1ECBnh."]);
      },
      "grayscale_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ch\u1EBF \u0111\u1ED9 x\xE1m"]);
      },
      "hide_account_hover_card": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u1EA8n popup h\u1ED3 s\u01A1"]);
      },
      "hide_alt_indi_on_posts": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u1EA8n v\u0103n b\u1EA3n thay th\u1EBF tr\xEAn t\xFAt"]);
      },
      "hide_boost_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u1EA8n s\u1ED1 l\u01B0\u1EE3t \u0111\u0103ng l\u1EA1i"]);
      },
      "hide_favorite_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u1EA8n s\u1ED1 l\u01B0\u1EE3t th\xEDch"]);
      },
      "hide_follower_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u1EA8n s\u1ED1 l\u01B0\u1EE3t ng\u01B0\u1EDDi theo d\xF5i/\u0111ang theo d\xF5i"]);
      },
      "hide_news": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u1EA8n tin t\u1EE9c"]);
      },
      "hide_reply_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u1EA8n s\u1ED1 l\u01B0\u1EE3t tr\u1EA3 l\u1EDDi"]);
      },
      "hide_translation": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u1EA8n ch\u1EE9c n\u0103ng d\u1ECBch"]);
      },
      "hide_username_emojis": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u1EA8n emoji trong t\xEAn ng\u01B0\u1EDDi d\xF9ng"]);
      },
      "hide_username_emojis_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u1EA8n emoji kh\u1ECFi t\xEAn ng\u01B0\u1EDDi d\xF9ng trong b\u1EA3ng tin. Emoji s\u1EBD v\u1EABn hi\u1EC3n th\u1ECB trong h\u1ED3 s\u01A1 c\u1EE7a h\u1ECD."]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Thi\u1EBFt l\u1EADp"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["T\xEDnh n\u0103ng th\u1EED nghi\u1EC7m"]);
      },
      "use_star_favorite_icon": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["D\xF9ng bi\u1EC3u t\u01B0\u1EE3ng th\xEDch ng\xF4i sao"]);
      },
      "user_picker": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ch\u1ECDn ng\u01B0\u1EDDi d\xF9ng"]);
      },
      "user_picker_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Hi\u1EC3n th\u1ECB h\xECnh \u0111\u1EA1i di\u1EC7n c\u1EE7a c\xE1c t\xE0i kho\u1EA3n \u0111\xE3 \u0111\u0103ng nh\u1EADp \u1EDF ph\xEDa d\u01B0\u1EDBi b\xEAn tr\xE1i \u0111\u1EC3 b\u1EA1n c\xF3 th\u1EC3 nhanh ch\xF3ng chuy\u1EC3n \u0111\u1ED5i gi\u1EEFa ch\xFAng."]);
      },
      "virtual_scroll": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Cu\u1ED9n \u1EA3o"]);
      },
      "virtual_scroll_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["S\u1EED d\u1EE5ng danh s\xE1ch \u1EA3o trong d\xF2ng th\u1EDDi gian \u0111\u1EC3 c\xF3 th\u1EC3 hi\u1EC3n th\u1ECB s\u1ED1 l\u01B0\u1EE3ng m\u1EE5c l\u1EDBn h\u01A1n m\u1ED9t c\xE1ch hi\u1EC7u qu\u1EA3."]);
      },
      "wellbeing": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ch\u1ED1ng nghi\u1EC7n"]);
      },
      "zen_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["T\u1EADp Trung"]);
      },
      "zen_mode_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u1EA8n thanh b\xEAn tr\u1EEB khi con tr\u1ECF chu\u1ED9t r\xEA qua. \u0110\u1ED3ng th\u1EDDi \u1EA9n m\u1ED9t s\u1ED1 th\xE0nh ph\u1EA7n kh\u1ECFi b\u1EA3ng tin."]);
      }
    },
    "profile": {
      "appearance": {
        "bio": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Gi\u1EDBi thi\u1EC7u"]);
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["S\u1EEDa \u1EA3nh \u0111\u1EA1i di\u1EC7n, t\xEAn, gi\u1EDBi thi\u1EC7u, etc."]);
        },
        "display_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Bi\u1EC7t danh"]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Di\u1EC7n m\u1EA1o"]);
        },
        "profile_metadata": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Metadata"]);
        },
        "profile_metadata_desc": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
          return _normalize(["B\u1EA1n c\xF3 th\u1EC3 th\xEAm ", _interpolate(_list(0)), " m\u1EE5c hi\u1EC3n th\u1ECB nh\u01B0 b\u1EA3ng tr\xEAn h\u1ED3 s\u01A1"]);
        },
        "profile_metadata_label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nh\xE3n"]);
        },
        "profile_metadata_value": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["N\u1ED9i dung"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["S\u1EEDa h\u1ED3 s\u01A1"]);
        }
      },
      "featured_tags": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["M\u1ECDi ng\u01B0\u1EDDi c\xF3 th\u1EC3 t\xECm c\xE1c t\xFAt c\xF4ng khai c\xF3 ch\u1EE9a nh\u1EEFng hashtag \u0111\xF3."]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Hashtag th\u01B0\u1EDDng d\xF9ng"]);
        }
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["H\u1ED3 s\u01A1"]);
      }
    },
    "select_a_settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ch\u1ECDn c\xE0i \u0111\u1EB7t"]);
    },
    "users": {
      "export": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Xu\u1EA5t token ng\u01B0\u1EDDi d\xF9ng"]);
      },
      "import": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Nh\u1EADp token ng\u01B0\u1EDDi d\xF9ng"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Danh s\xE1ch t\xE0i kho\u1EA3n"]);
      }
    }
  },
  "share-target": {
    "description": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk c\xF3 th\u1EC3 c\u1EA5u h\xECnh \u0111\u1EC3 b\u1EA1n c\xF3 th\u1EC3 chia s\u1EBB n\u1ED9i dung t\u1EEB c\xE1c \u1EE9ng d\u1EE5ng kh\xE1c, ch\u1EC9 c\u1EA7n c\xE0i \u0111\u1EB7t Elk tr\xEAn thi\u1EBFt b\u1ECB ho\u1EB7c m\xE1y t\xEDnh c\u1EE7a b\u1EA1n v\xE0 \u0111\u0103ng nh\u1EADp."]);
    },
    "hint": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\u1EC3 chia s\u1EBB n\u1ED9i dung v\u1EDBi Elk, Elk ph\u1EA3i \u0111\u01B0\u1EE3c c\xE0i \u0111\u1EB7t v\xE0 b\u1EA1n ph\u1EA3i \u0111\u0103ng nh\u1EADp."]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Chia s\u1EBB v\u1EDBi Elk"]);
    }
  },
  "state": {
    "attachments_exceed_server_limit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["V\u01B0\u1EE3t qu\xE1 gi\u1EDBi h\u1EA1n s\u1ED1 l\u01B0\u1EE3ng file \u0111\xEDnh k\xE8m."]);
    },
    "attachments_limit_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\xE3 v\u01B0\u1EE3t qu\xE1 gi\u1EDBi h\u1EA1n cho m\u1ED7i t\xFAt"]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["(\u0110\xE3 s\u1EEDa)"]);
    },
    "editing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["S\u1EEDa"]);
    },
    "loading": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110ang t\u1EA3i..."]);
    },
    "publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\u0103ng th\u1EA5t b\u1EA1i"]);
    },
    "publishing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\u0103ng"]);
    },
    "save_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["L\u01B0u th\u1EA5t b\u1EA1i"]);
    },
    "upload_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["T\u1EA3i l\xEAn th\u1EA5t b\u1EA1i"]);
    },
    "uploading": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110ang t\u1EA3i l\xEAn..."]);
    }
  },
  "status": {
    "account": {
      "suspended_message": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ng\u01B0\u1EDDi n\xE0y \u0111\xE3 b\u1ECB v\xF4 hi\u1EC7u h\xF3a."]);
      },
      "suspended_show": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["V\u1EABn xem n\u1ED9i dung ch\u1EE9?"]);
      }
    },
    "boosted_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\u0103ng l\u1EA1i b\u1EDFi"]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0110\xE3 s\u1EEDa ", _interpolate(_list(0))]);
    },
    "favourited_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Th\xEDch b\u1EDFi"]);
    },
    "filter_hidden_phrase": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["L\u1ECDc theo"]);
    },
    "filter_show_anyway": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["V\u1EABn c\u1EE9 hi\u1EC7n"]);
    },
    "img_alt": {
      "ALT": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["ALT"]);
      },
      "desc": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["M\xF4 t\u1EA3"]);
      },
      "dismiss": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["B\u1ECF qua"]);
      },
      "read": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0110\u1ECDc ", _interpolate(_list(0)), " m\xF4 t\u1EA3"]);
      }
    },
    "poll": {
      "count": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
        return _plural([_normalize([_interpolate(_list(0)), " b\xECnh ch\u1ECDn"]), _normalize([_interpolate(_list(0)), " b\xECnh ch\u1ECDn"]), _normalize([_interpolate(_list(0)), " b\xECnh ch\u1ECDn"])]);
      },
      "ends": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["k\u1EBFt th\xFAc ", _interpolate(_list(0))]);
      },
      "finished": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["h\u1EBFt h\u1EA1n ", _interpolate(_list(0))]);
      }
    },
    "replying_to": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Tr\u1EA3 l\u1EDDi ", _interpolate(_list(0))]);
    },
    "show_full_thread": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Chu\u1ED7i th\u1EA3o lu\u1EADn"]);
    },
    "someone": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["ai \u0111\xF3"]);
    },
    "spoiler_media_hidden": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u1EA8n media"]);
    },
    "spoiler_show_less": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Thu g\u1ECDn"]);
    },
    "spoiler_show_more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["M\u1EDF r\u1ED9ng"]);
    },
    "thread": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Th\u1EA3o lu\u1EADn"]);
    },
    "try_original_site": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Th\u1EED trang g\u1ED1c"]);
    }
  },
  "status_history": {
    "created": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0111\u0103ng ", _interpolate(_list(0))]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["s\u1EEDa ", _interpolate(_list(0))]);
    }
  },
  "tab": {
    "accounts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ng\u01B0\u1EDDi"]);
    },
    "for_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Cho b\u1EA1n"]);
    },
    "hashtags": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Hashtag"]);
    },
    "list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Danh s\xE1ch"]);
    },
    "media": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Media"]);
    },
    "news": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tin t\u1EE9c"]);
    },
    "notifications_all": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["To\xE0n b\u1ED9"]);
    },
    "notifications_mention": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["L\u01B0\u1EE3t nh\u1EAFc"]);
    },
    "posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["T\xFAt"]);
    },
    "posts_with_replies": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["L\u01B0\u1EE3t tr\u1EA3 l\u1EDDi"]);
    }
  },
  "tag": {
    "follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Theo d\xF5i"]);
    },
    "follow_label": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Theo d\xF5i ", _interpolate(_list(0)), " hashtag"]);
    },
    "unfollow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["B\u1ECF theo d\xF5i"]);
    },
    "unfollow_label": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["B\u1ECF theo d\xF5i ", _interpolate(_list(0)), " hashtag"]);
    }
  },
  "time_ago_options": {
    "day_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["sau 0 ng\xE0y"]), _normalize(["ng\xE0y mai"]), _normalize(["sau ", _interpolate(_named("n")), " ng\xE0y"])]);
    },
    "day_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0 ng\xE0y tr\u01B0\u1EDBc"]), _normalize(["h\xF4m qua"]), _normalize([_interpolate(_named("n")), " ng\xE0y tr\u01B0\u1EDBc"])]);
    },
    "hour_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["sau 0 gi\u1EDD"]), _normalize(["sau 1 gi\u1EDD"]), _normalize(["sau ", _interpolate(_named("n")), " gi\u1EDD"])]);
    },
    "hour_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0 gi\u1EDD tr\u01B0\u1EDBc"]), _normalize(["1 gi\u1EDD tr\u01B0\u1EDBc"]), _normalize([_interpolate(_named("n")), " gi\u1EDD tr\u01B0\u1EDBc"])]);
    },
    "just_now": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["v\u1EEBa xong"]);
    },
    "minute_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["sau 0 ph\xFAt"]), _normalize(["sau 1 ph\xFAt"]), _normalize(["sau ", _interpolate(_named("n")), " ph\xFAt"])]);
    },
    "minute_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0 ph\xFAt tr\u01B0\u1EDBc"]), _normalize(["1 ph\xFAt tr\u01B0\u1EDBc"]), _normalize([_interpolate(_named("n")), " ph\xFAt tr\u01B0\u1EDBc"])]);
    },
    "month_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["sau 0 th\xE1ng"]), _normalize(["th\xE1ng sau"]), _normalize(["sau ", _interpolate(_named("n")), " th\xE1ng"])]);
    },
    "month_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0 th\xE1ng tr\u01B0\u1EDBc"]), _normalize(["th\xE1ng tr\u01B0\u1EDBc"]), _normalize([_interpolate(_named("n")), " th\xE1ng tr\u01B0\u1EDBc"])]);
    },
    "second_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["v\u1EEBa xong"]), _normalize(["sau ", _interpolate(_named("n")), " gi\xE2y"]), _normalize(["sau ", _interpolate(_named("n")), " gi\xE2y"])]);
    },
    "second_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["v\u1EEBa xong"]), _normalize([_interpolate(_named("n")), "s tr\u01B0\u1EDBc"]), _normalize([_interpolate(_named("n")), "s tr\u01B0\u1EDBc"])]);
    },
    "short_day_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["sau ", _interpolate(_named("n")), " ng\xE0y"]);
    },
    "short_day_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " ng\xE0y"]);
    },
    "short_hour_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["sau ", _interpolate(_named("n")), " gi\u1EDD"]);
    },
    "short_hour_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "h"]);
    },
    "short_minute_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["sau ", _interpolate(_named("n")), " ph\xFAt"]);
    },
    "short_minute_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "p"]);
    },
    "short_month_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["sau ", _interpolate(_named("n")), " th\xE1ng"]);
    },
    "short_month_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " th\xE1ng"]);
    },
    "short_second_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["sau ", _interpolate(_named("n")), "s"]);
    },
    "short_second_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "s"]);
    },
    "short_week_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["sau ", _interpolate(_named("n")), " tu\u1EA7n"]);
    },
    "short_week_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " tu\u1EA7n"]);
    },
    "short_year_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["sau ", _interpolate(_named("n")), " n\u0103m"]);
    },
    "short_year_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " n\u0103m"]);
    },
    "week_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["sau 0 tu\u1EA7n"]), _normalize(["tu\u1EA7n sau"]), _normalize(["trong ", _interpolate(_named("n")), " tu\u1EA7n"])]);
    },
    "week_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0 tu\u1EA7n tr\u01B0\u1EDBc"]), _normalize(["tu\u1EA7n tr\u01B0\u1EDBc"]), _normalize([_interpolate(_named("n")), " tu\u1EA7n tr\u01B0\u1EDBc"])]);
    },
    "year_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["sau 0 n\u0103m"]), _normalize(["n\u0103m sau"]), _normalize(["in ", _interpolate(_named("n")), " n\u0103m sau"])]);
    },
    "year_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0 n\u0103m tr\u01B0\u1EDBc"]), _normalize(["n\u0103m tr\u01B0\u1EDBc"]), _normalize([_interpolate(_named("n")), " n\u0103m tr\u01B0\u1EDBc"])]);
    }
  },
  "timeline": {
    "show_new_items": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["Hi\u1EC7n ", _interpolate(_named("v")), " m\u1EE5c m\u1EDBi"]), _normalize(["Hi\u1EC7n ", _interpolate(_named("v")), " m\u1EE5c m\u1EDBi"]), _normalize(["Hi\u1EC7n ", _interpolate(_named("v")), " m\u1EE5c m\u1EDBi"])]);
    },
    "view_older_posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["C\xE1c t\xFAt c\u0169 \u1EDF m\xE1y ch\u1EE7 kh\xE1c c\xF3 th\u1EC3 kh\xF4ng hi\u1EC3n th\u1ECB \u0111\u1EA7y \u0111\u1EE7."]);
    }
  },
  "title": {
    "federated_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["B\u1EA3ng tin Li\xEAn h\u1EE3p"]);
    },
    "local_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["B\u1EA3ng tin M\xE1y ch\u1EE7"]);
    }
  },
  "tooltip": {
    "add_content_warning": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Th\xEAm c\u1EA3nh b\xE1o n\u1ED9i dung"]);
    },
    "add_emojis": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ch\xE8n emoji"]);
    },
    "add_media": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Th\xEAm \u1EA3nh, video ho\u1EB7c \xE2m thanh"]);
    },
    "add_publishable_content": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Th\xEAm n\u1ED9i dung \u0111\u0103ng"]);
    },
    "change_content_visibility": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ch\u1ECDn ki\u1EC3u t\xFAt"]);
    },
    "change_language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\u1ED5i ng\xF4n ng\u1EEF"]);
    },
    "emoji": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Emoji"]);
    },
    "explore_links_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\xE2y l\xE0 nh\u1EEFng li\xEAn k\u1EBFt \u0111ang \u0111\u01B0\u1EE3c chia s\u1EBB nhi\u1EC1u trong m\u1EA1ng li\xEAn h\u1EE3p c\u1EE7a m\xE1y ch\u1EE7 n\xE0y."]);
    },
    "explore_posts_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\xE2y l\xE0 nh\u1EEFng t\xFAt \u0111ang ph\u1ED5 bi\u1EBFn trong m\u1EA1ng li\xEAn h\u1EE3p c\u1EE7a m\xE1y ch\u1EE7 n\xE0y."]);
    },
    "explore_tags_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\xE2y l\xE0 nh\u1EEFng hashtag \u0111ang \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng nhi\u1EC1u trong m\u1EA1ng li\xEAn h\u1EE3p c\u1EE7a m\xE1y ch\u1EE7 n\xE0y."]);
    },
    "open_editor_tools": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["C\xF4ng c\u1EE5 so\u1EA1n th\u1EA3o"]);
    },
    "pick_an_icon": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ch\u1ECDn bi\u1EC3u t\u01B0\u1EE3ng"]);
    },
    "publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\xF3ng c\xE1c th\xF4ng b\xE1o kh\xF4ng th\xE0nh c\xF4ng \u0111\u1EC3 \u0111\u0103ng l\u1EA1i t\xFAt"]);
    },
    "toggle_bold": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["In \u0111\u1EADm"]);
    },
    "toggle_code_block": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110o\u1EA1n m\xE3"]);
    },
    "toggle_italic": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["In nghi\xEAng"]);
    }
  },
  "user": {
    "add_existing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Th\xEAm m\u1ED9t t\xE0i kho\u1EA3n kh\xE1c"]);
    },
    "server_address_label": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\u1ECBa ch\u1EC9 m\xE1y ch\u1EE7 Mastodon"]);
    },
    "sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\u0103ng nh\u1EADp \u0111\u1EC3 theo d\xF5i ng\u01B0\u1EDDi d\xF9ng ho\u1EB7c hashtag, th\xEDch, chia s\u1EBB v\xE0 tr\u1EA3 l\u1EDDi t\xFAt ho\u1EB7c t\u01B0\u01A1ng t\xE1c t\u1EEB t\xE0i kho\u1EA3n c\u1EE7a b\u1EA1n tr\xEAn m\u1ED9t m\xE1y ch\u1EE7 kh\xE1c."]);
    },
    "sign_in_notice_title": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0110ang xem ", _interpolate(_list(0)), " c\xF4ng khai"]);
    },
    "sign_out_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0110\u0103ng xu\u1EA5t ", _interpolate(_list(0))]);
    },
    "single_instance_sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110\u0103ng nh\u1EADp \u0111\u1EC3 theo d\xF5i ng\u01B0\u1EDDi d\xF9ng ho\u1EB7c hashtag, th\xEDch, chia s\u1EBB v\xE0 tr\u1EA3 l\u1EDDi t\xFAt"]);
    },
    "tip_no_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["N\u1EBFu b\u1EA1n ch\u01B0a c\xF3 t\xE0i kho\u1EA3n Mastodon, ", _interpolate(_list(0)), "."]);
    },
    "tip_register_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["ch\u1ECDn m\xE1y ch\u1EE7 v\xE0 \u0111\u0103ng k\xFD"]);
    }
  },
  "visibility": {
    "direct": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Nh\u1EAFn ri\xEAng"]);
    },
    "direct_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ch\u1EC9 ng\u01B0\u1EDDi \u0111\u01B0\u1EE3c nh\u1EAFc \u0111\u1EBFn th\u1EA5y"]);
    },
    "private": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ch\u1EC9 ng\u01B0\u1EDDi theo d\xF5i"]);
    },
    "private_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ch\u1EC9 ng\u01B0\u1EDDi theo d\xF5i b\u1EA1n th\u1EA5y"]);
    },
    "public": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["C\xF4ng khai"]);
    },
    "public_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ai c\u0169ng c\xF3 th\u1EC3 th\u1EA5y"]);
    },
    "unlisted": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["H\u1EA1n ch\u1EBF"]);
    },
    "unlisted_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ai c\u0169ng th\u1EA5y, nh\u01B0ng kh\xF4ng hi\u1EC7n tr\xEAn b\u1EA3ng tin"]);
    }
  }
};

export { viVN as default };
