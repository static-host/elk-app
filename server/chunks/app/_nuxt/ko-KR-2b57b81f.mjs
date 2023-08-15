const koKR = {
  "a11y": {
    "loading_page": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB85C\uB529\uC911 \uC785\uB2C8\uB2E4. \uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694."]);
    },
    "loading_titled_page": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \uD398\uC774\uC9C0\uB97C \uB85C\uB529 \uC911, \uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694."]);
    },
    "locale_changed": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\uB85C \uC5B8\uC5B4\uB97C \uBCC0\uACBD\uD588\uC2B5\uB2C8\uB2E4"]);
    },
    "locale_changing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC5B8\uC5B4\uB97C \uBC14\uAFB8\uB294 \uC911\uC785\uB2C8\uB2E4. \uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694."]);
    },
    "route_loaded": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\uD398\uC774\uC9C0 \uB85C\uB4DC\uB428"]);
    }
  },
  "account": {
    "avatar_description": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\uC758 \uC544\uBC14\uD0C0"]);
    },
    "blocked_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB2F9\uC2E0\uC740 \uC774 \uC720\uC800\uC5D0\uAC8C \uCC28\uB2E8\uB2F9\uD588\uC2B5\uB2C8\uB2E4."]);
    },
    "blocked_domains": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uCC28\uB2E8\uD55C \uB3C4\uBA54\uC778"]);
    },
    "blocked_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uCC28\uB2E8\uD55C \uC720\uC800"]);
    },
    "blocking": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uCC28\uB2E8"]);
    },
    "bot": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uBD07"]);
    },
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC88B\uC544\uC694"]);
    },
    "follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD314\uB85C\uC6B0"]);
    },
    "follow_back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB9DE\uD314\uB85C\uC6B0"]);
    },
    "follow_requested": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD314\uB85C\uC6B0 \uC694\uCCAD"]);
    },
    "followers": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD314\uB85C\uC6CC"]);
    },
    "followers_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_list(0)), "\uD314\uB85C\uC6CC"]), _normalize([_interpolate(_list(0)), "\uD314\uB85C\uC6CC"]), _normalize([_interpolate(_list(0)), "\uD314\uB85C\uC6CC"])]);
    },
    "following": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD314\uB85C\uC789"]);
    },
    "following_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\uD314\uB85C\uC789"]);
    },
    "follows_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB098\uB97C \uD314\uB85C\uC6B0\uD568"]);
    },
    "go_to_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD504\uB85C\uD544\uB85C \uAC00\uAE30"]);
    },
    "muted_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uBBA4\uD2B8\uB41C \uC0AC\uC6A9\uC790"]);
    },
    "mutuals": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB9DE\uD314\uB85C\uC6B0 \uC911"]);
    },
    "pinned": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uACE0\uC815\uB428"]);
    },
    "posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uAC8C\uC2DC\uBB3C"]);
    },
    "posts_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_list(0)), "\uAC8C\uC2DC\uBB3C"]), _normalize([_interpolate(_list(0)), "\uAC8C\uC2DC\uBB3C"]), _normalize([_interpolate(_list(0)), "\uAC8C\uC2DC\uBB3C"])]);
    },
    "profile_description": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\uC758 \uD504\uB85C\uD544 \uD5E4\uB354"]);
    },
    "profile_unavailable": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD504\uB85C\uD544 \uC0AC\uC6A9 \uBD88\uAC00\uB2A5"]);
    },
    "request_follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD314\uB85C\uC6B0 \uC694\uCCAD"]);
    },
    "unblock": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uCC28\uB2E8 \uD574\uC81C"]);
    },
    "unfollow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC5B8\uD314\uB85C\uC6B0"]);
    },
    "unmute": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC5B8\uBBA4\uD2B8"]);
    }
  },
  "action": {
    "apply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC801\uC6A9"]);
    },
    "bookmark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uBD81\uB9C8\uD06C"]);
    },
    "bookmarked": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uBD81\uB9C8\uD06C \uB428"]);
    },
    "boost": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uBD80\uC2A4\uD2B8"]);
    },
    "boost_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "boosted": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uBD80\uC2A4\uD2B8\uB428"]);
    },
    "clear_publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uAC8C\uC2DC \uC624\uB958 \uD074\uB9AC\uC5B4"]);
    },
    "clear_upload_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD30C\uC77C \uC5C5\uB85C\uB4DC \uC624\uB958 \uD074\uB9AC\uC5B4"]);
    },
    "close": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB2EB\uAE30"]);
    },
    "compose": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC791\uC131"]);
    },
    "confirm": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD655\uC778"]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC218\uC815"]);
    },
    "enter_app": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC571 \uB4E4\uC5B4\uAC00\uAE30"]);
    },
    "favourite": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC88B\uC544\uC694"]);
    },
    "favourite_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "favourited": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC88B\uC544\uC694\uD568"]);
    },
    "more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB354 \uBCF4\uAE30"]);
    },
    "next": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB2E4\uC74C"]);
    },
    "prev": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC774\uC804"]);
    },
    "publish": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uAC8C\uC2DC"]);
    },
    "reply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB2F5\uAE00"]);
    },
    "reply_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "reset": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB9AC\uC14B"]);
    },
    "save": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC800\uC7A5"]);
    },
    "save_changes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uBCC0\uACBD\uC0AC\uD56D \uC800\uC7A5"]);
    },
    "sign_in": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB85C\uADF8\uC778"]);
    },
    "sign_in_to": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\uC5D0 \uB85C\uADF8\uC778"]);
    },
    "switch_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uACC4\uC815 \uC804\uD658"]);
    },
    "vote": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD22C\uD45C"]);
    }
  },
  "app_desc_short": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["\uBBFC\uCCA9\uD55C \uB9C8\uC2A4\uD1A0\uB3C8 \uC6F9 \uD074\uB77C\uC774\uC5B8\uD2B8"]);
  },
  "app_logo": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Elk \uB85C\uACE0"]);
  },
  "app_name": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Elk"]);
  },
  "attachment": {
    "edit_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC124\uBA85"]);
    },
    "remove_label": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uCCA8\uBD80\uD30C\uC77C \uC0AD\uC81C"]);
    }
  },
  "command": {
    "complete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC644\uB8CC"]);
    },
    "compose_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC0C8 \uAC8C\uC2DC\uBB3C \uC4F0\uAE30"]);
    },
    "select_lang": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC5B8\uC5B4 \uC120\uD0DD"]);
    },
    "sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uAE30\uC874 \uACC4\uC815 \uCD94\uAC00"]);
    },
    "switch_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\uB85C \uC804\uD658"]);
    },
    "switch_account_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB2E4\uB978 \uACC4\uC815\uC73C\uB85C \uC804\uD658"]);
    },
    "toggle_dark_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB2E4\uD06C \uBAA8\uB4DC \uD1A0\uAE00"]);
    }
  },
  "confirm": {
    "block_account": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uCDE8\uC18C"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uCC28\uB2E8"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\uC815\uB9D0\uB85C ", _interpolate(_list(0)), "\uC744/\uB97C \uCC28\uB2E8\uD560\uAE4C\uC694?"]);
      }
    },
    "block_domain": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uCDE8\uC18C"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uCC28\uB2E8"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\uC815\uB9D0\uB85C ", _interpolate(_list(0)), "\uC744/\uB97C \uCC28\uB2E8\uD560\uAE4C\uC694?"]);
      }
    },
    "common": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC544\uB2C8\uC624"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uB124"]);
      }
    },
    "delete_list": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uCDE8\uC18C"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC0AD\uC81C"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(['\uC815\uB9D0\uB85C "', _interpolate(_list(0)), '" \uB9AC\uC2A4\uD2B8\uB97C \uC0AD\uC81C\uD560\uAE4C\uC694?']);
      }
    },
    "delete_posts": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uCDE8\uC18C"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC0AD\uC81C"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC815\uB9D0\uB85C \uC774 \uAC8C\uC2DC\uBB3C\uC744 \uC0AD\uC81C\uD560\uAE4C\uC694?"]);
      }
    },
    "mute_account": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uCDE8\uC18C"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uBBA4\uD2B8"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\uC815\uB9D0\uB85C ", _interpolate(_list(0)), "\uC744/\uB97C \uBBA4\uD2B8\uD558\uC2DC\uACA0\uC5B4\uC694?"]);
      }
    },
    "show_reblogs": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uCDE8\uC18C"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uBCF4\uAE30"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\uC815\uB9D0\uB85C ", _interpolate(_list(0)), "\uC774/\uAC00 \uBD80\uC2A4\uD2B8\uD55C \uAC8C\uC2DC\uBB3C\uC744 \uD45C\uC2DC\uD560\uAE4C\uC694?"]);
      }
    },
    "unfollow": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uCDE8\uC18C"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC5B8\uD314\uB85C\uC6B0"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC815\uB9D0\uB85C \uC5B8\uD314\uB85C\uC6B0\uB97C \uD558\uC2DC\uACA0\uC5B4\uC694?"]);
      }
    }
  },
  "conversation": {
    "with": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD568\uAED8"]);
    }
  },
  "error": {
    "account_not_found": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \uACC4\uC815\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"]);
    },
    "file_size_cannot_exceed_n_mb": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\uD30C\uC77C \uD06C\uAE30\uB294 ", _interpolate(_list(0)), "MB\uB97C \uCD08\uACFC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"]);
    },
    "sign_in_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."]);
    },
    "status_not_found": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uAC8C\uC2DC\uBB3C\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"]);
    },
    "unsupported_file_format": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uD30C\uC77C \uD3EC\uB9F7"]);
    }
  },
  "help": {
    "build_preview": {
      "desc1": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\uB2F9\uC2E0\uC740 \uD604\uC7AC \uCEE4\uBBA4\uB2C8\uD2F0\uB85C\uBD80\uD130 \uAE30\uC5EC\uB41C Elk \uBBF8\uB9AC\uBCF4\uAE30 \uBC84\uC804(\uBC84\uC804 \uBC88\uD638: ", _interpolate(_list(0)), ")\uC744 \uBCF4\uACE0 \uC788\uC2B5\uB2C8\uB2E4."]);
      },
      "desc2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uAC80\uD1A0\uB418\uC9C0 \uC54A\uC558\uAC70\uB098 \uC545\uC758\uC801\uC778 \uBCC0\uACBD \uC0AC\uD56D\uC774 \uD3EC\uD568\uB418\uC5B4 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]);
      },
      "desc3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uB2F9\uC2E0\uC758 \uC2E4\uC81C \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778\uD558\uC9C0 \uB9C8\uC138\uC694."]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uBBF8\uB9AC\uBCF4\uAE30 \uBC30\uD3EC"]);
      }
    },
    "desc_highlight": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC5EC\uAE30\uC800\uAE30\uC11C \uBC84\uADF8\uC640 \uB204\uB77D\uB41C \uAE30\uB2A5\uC774 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]);
    },
    "desc_para1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD604\uC7AC \uAC1C\uBC1C \uC911\uC778 \uB9C8\uC2A4\uD1A0\uB3C8 \uC6F9 \uD074\uB77C\uC774\uC5B8\uD2B8 Elk\uC5D0 \uAD00\uC2EC\uC744 \uAC00\uC838\uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4!"]);
    },
    "desc_para2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uAC1C\uBC1C\uC744 \uC704\uD574 \uC5F4\uC2EC\uD788 \uB178\uB825\uD558\uACE0 \uC788\uC73C\uBA70 \uC2DC\uAC04\uC774 \uC9C0\uB0A8\uC5D0 \uB530\uB77C \uAC1C\uC120\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4."]);
    },
    "desc_para3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uAC1C\uBC1C\uC744 \uCD09\uC9C4\uD558\uAE30 \uC704\uD574 \uAE43\uD5C8\uBE0C \uC2A4\uD3F0\uC11C\uB97C \uD1B5\uD574 \uD300\uC744 \uD6C4\uC6D0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. Elk\uB97C \uC990\uACA8\uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4!"]);
    },
    "desc_para4": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk\uB294 \uC624\uD508\uC18C\uC2A4\uC785\uB2C8\uB2E4. \uB9CC\uC57D \uD14C\uC2A4\uD2B8, \uD53C\uB4DC\uBC31 \uC81C\uACF5 \uB610\uB294 \uAE30\uC5EC\uB97C \uB3D5\uACE0 \uC2F6\uC73C\uC2DC\uB2E4\uBA74,"]);
    },
    "desc_para5": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC6B0\uB9AC\uC758 \uAE43\uD5C8\uBE0C\uC5D0 \uB4E4\uC5B4\uAC00\uC11C"]);
    },
    "desc_para6": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uCC38\uC5EC\uD558\uC138\uC694."]);
    },
    "footer_team": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["The Elk Team"]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk\uB294 \uD604\uC7AC \uBBF8\uB9AC\uBCF4\uAE30 \uC785\uB2C8\uB2E4!"]);
    }
  },
  "language": {
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uAC80\uC0C9"]);
    }
  },
  "list": {
    "add_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB9AC\uC2A4\uD2B8\uC5D0 \uACC4\uC815 \uCD94\uAC00"]);
    },
    "cancel_edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD3B8\uC9D1 \uCDE8\uC18C"]);
    },
    "create": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC0DD\uC131"]);
    },
    "list_title_placeholder": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB9AC\uC2A4\uD2B8 \uC81C\uBAA9"]);
    }
  },
  "magic_keys": {
    "dialog_header": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD0A4\uBCF4\uB4DC \uB2E8\uCD95\uD0A4"]);
    },
    "groups": {
      "actions": {
        "boost": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uBD80\uC2A4\uD2B8"]);
        },
        "compose": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uC791\uC131"]);
        },
        "favourite": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uC88B\uC544\uC694"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uC5D1\uC158"]);
        }
      },
      "media": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uBBF8\uB514\uC5B4"]);
        }
      },
      "navigation": {
        "go_to_home": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uD648"]);
        },
        "go_to_notifications": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uC54C\uB9BC"]);
        },
        "next_status": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uB2E4\uC74C \uAC8C\uC2DC\uBB3C"]);
        },
        "previous_status": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uC774\uC804 \uAC8C\uC2DC\uBB3C"]);
        },
        "shortcut_help": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uB2E8\uCD95\uD0A4 \uB3C4\uC6C0\uB9D0"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uB124\uBE44\uAC8C\uC774\uC158"]);
        }
      }
    }
  },
  "menu": {
    "add_personal_note": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\uC5D0 \uB300\uD55C \uAC1C\uC778 \uBA54\uBAA8 \uCD94\uAC00\uD558\uAE30"]);
    },
    "block_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\uC744/\uB97C \uCC28\uB2E8\uD558\uAE30"]);
    },
    "block_domain": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \uB3C4\uBA54\uC778\uC744 \uCC28\uB2E8\uD558\uAE30"]);
    },
    "copy_link_to_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC774 \uAC8C\uC2DC\uBB3C\uC758 \uB9C1\uD06C\uB97C \uBCF5\uC0AC\uD558\uAE30"]);
    },
    "copy_original_link_to_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC774 \uAC8C\uC2DC\uBB3C\uC758 \uC6D0\uBCF8 \uB9C1\uD06C\uB97C \uBCF5\uC0AC\uD558\uAE30"]);
    },
    "delete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC0AD\uC81C"]);
    },
    "delete_and_redraft": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC0AD\uC81C \uD6C4 \uC7AC\uAC8C\uC2DC"]);
    },
    "direct_message_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \uB2D8\uC5D0\uAC8C DM \uBCF4\uB0B4\uAE30"]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC218\uC815"]);
    },
    "hide_reblogs": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\uC774/\uAC00 \uBD80\uC2A4\uD2B8\uD55C \uAC8C\uC2DC\uBB3C \uC228\uAE30\uAE30"]);
    },
    "mention_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \uB2D8\uC5D0\uAC8C \uBA58\uC158\uD558\uAE30"]);
    },
    "mute_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\uC744/\uB97C \uBBA4\uD2B8\uD558\uAE30"]);
    },
    "mute_conversation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC774 \uAC8C\uC2DC\uBB3C\uC744 \uBBA4\uD2B8\uD558\uAE30"]);
    },
    "open_in_original_site": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC6D0\uBCF8 \uC0AC\uC774\uD2B8\uC5D0\uC11C \uC5F4\uAE30"]);
    },
    "pin_on_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD504\uB85C\uD544\uC5D0 \uACE0\uC815"]);
    },
    "report_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\uC744/\uB97C \uC2E0\uACE0\uD558\uAE30"]);
    },
    "share_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC774 \uAC8C\uC2DC\uBB3C\uC744 \uACF5\uC720\uD558\uAE30"]);
    },
    "show_favourited_and_boosted_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB204\uAC00 \uC88B\uC544\uC694\uC640 \uBD80\uC2A4\uD2B8\uB97C \uD588\uB294\uC9C0 \uBCF4\uAE30"]);
    },
    "show_untranslated": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uBBF8\uBC88\uC5ED\uBCF8 \uBCF4\uAE30"]);
    },
    "toggle_theme": {
      "dark": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uB2E4\uD06C \uBAA8\uB4DC \uD1A0\uAE00"]);
      },
      "light": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uB77C\uC774\uD06C \uBAA8\uB4DC \uD1A0\uAE00"]);
      }
    },
    "translate_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uAC8C\uC2DC\uBB3C \uBC88\uC5ED"]);
    },
    "unblock_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\uC744/\uB97C \uCC28\uB2E8 \uD574\uC81C\uD558\uAE30"]);
    },
    "unblock_domain": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \uB3C4\uBA54\uC778\uC744 \uCC28\uB2E8 \uD574\uC81C\uD558\uAE30"]);
    },
    "unmute_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\uC744/\uB97C \uC5B8\uBBA4\uD2B8\uD558\uAE30"]);
    },
    "unmute_conversation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC774 \uAC8C\uC2DC\uBB3C\uC744 \uC5B8\uBBA4\uD2B8"]);
    },
    "unpin_on_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD504\uB85C\uD544\uC5D0 \uACE0\uC815 \uD574\uC81C"]);
    }
  },
  "modals": {
    "aria_label_close": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB2EB\uAE30"]);
    }
  },
  "nav": {
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB4A4\uB85C \uAC00\uAE30"]);
    },
    "blocked_domains": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uCC28\uB2E8\uD55C \uB3C4\uBA54\uC778"]);
    },
    "blocked_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uCC28\uB2E8\uD55C \uC720\uC800"]);
    },
    "bookmarks": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uBD81\uB9C8\uD06C"]);
    },
    "built_at": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\uC5D0 \uBE4C\uB4DC\uB428"]);
    },
    "compose": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC791\uC131"]);
    },
    "conversations": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB300\uD654"]);
    },
    "explore": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD0D0\uC0C9"]);
    },
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC88B\uC544\uC694"]);
    },
    "federated": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC5F0\uD569"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD648"]);
    },
    "list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB9AC\uC2A4\uD2B8"]);
    },
    "lists": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB9AC\uC2A4\uD2B8"]);
    },
    "local": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB85C\uCEEC"]);
    },
    "muted_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uBBA4\uD2B8\uD55C \uC720\uC800"]);
    },
    "notifications": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC54C\uB9BC"]);
    },
    "privacy": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68"]);
    },
    "profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD504\uB85C\uD544"]);
    },
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uAC80\uC0C9"]);
    },
    "select_font_size": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uAE00\uC790 \uD06C\uAE30"]);
    },
    "select_language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD45C\uC2DC \uC5B8\uC5B4"]);
    },
    "settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC124\uC815"]);
    },
    "show_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC18C\uAC1C \uBCF4\uAE30"]);
    },
    "toggle_theme": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD14C\uB9C8 \uD1A0\uAE00"]);
    }
  },
  "notification": {
    "favourited_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB2F9\uC2E0\uC758 \uAC8C\uC2DC\uBB3C\uC744 \uC88B\uC544\uD569\uB2C8\uB2E4"]);
    },
    "followed_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB2F9\uC2E0\uC744 \uD314\uB85C\uC6B0 \uD569\uB2C8\uB2E4"]);
    },
    "followed_you_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_list(0)), "\uBA85\uC774 \uB2F9\uC2E0\uC744 \uD314\uB85C\uC6B0 \uD569\uB2C8\uB2E4"]), _normalize([_interpolate(_list(0)), "\uBA85\uC774 \uB2F9\uC2E0\uC744 \uD314\uB85C\uC6B0 \uD569\uB2C8\uB2E4"]), _normalize([_interpolate(_list(0)), "\uBA85\uC774 \uB2F9\uC2E0\uC744 \uD314\uB85C\uC6B0 \uD569\uB2C8\uB2E4"])]);
    },
    "reblogged_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB2F9\uC2E0\uC758 \uAC8C\uC2DC\uBB3C\uC744 \uB9AC\uBE14\uB85C\uADF8\uD588\uC2B5\uB2C8\uB2E4."]);
    },
    "request_to_follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD314\uB85C\uC6B0 \uC694\uCCAD"]);
    },
    "signed_up": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD68C\uC6D0\uAC00\uC785 \uB428"]);
    },
    "update_status": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uAC8C\uC2DC\uBB3C\uC774 \uC5C5\uB370\uC774\uD2B8 \uB428"]);
    }
  },
  "placeholder": {
    "content_warning": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC5EC\uAE30\uC5D0 \uACBD\uACE0\uB97C \uC801\uC73C\uC138\uC694"]);
    },
    "default_1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uBB34\uC2A8 \uC0DD\uAC01\uC744 \uD558\uACE0 \uACC4\uC2E0\uAC00\uC694?"]);
    },
    "reply_to_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\uC5D0\uAC8C \uB2F5\uAE00"]);
    },
    "replying": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB2F5\uAE00"]);
    }
  },
  "polls": {
    "allow_multiple": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uBCF5\uC218 \uD22C\uD45C \uD5C8\uC6A9"]);
    },
    "cancel": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uCDE8\uC18C"]);
    },
    "create": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD22C\uD45C \uB9CC\uB4E4\uAE30"]);
    },
    "disallow_multiple": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uBCF5\uC218 \uD22C\uD45C \uBD88\uD5C8"]);
    },
    "expiration": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD22C\uD45C \uC885\uB8CC \uC2DC\uC810"]);
    },
    "hide_votes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD22C\uD45C\uAC00 \uB05D\uB0A0\uB54C \uAE4C\uC9C0 \uCD1D \uB4DD\uD45C\uC218 \uC228\uAE30\uAE30"]);
    },
    "option_placeholder": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\uD22C\uD45C \uC120\uD0DD\uC9C0 ", _interpolate(_named("current")), "/", _interpolate(_named("max"))]);
    },
    "remove_option": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC120\uD0DD\uC9C0 \uC9C0\uC6B0\uAE30"]);
    },
    "settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD22C\uD45C \uC124\uC815"]);
    },
    "show_votes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD56D\uC0C1 \uCD1D \uB4DD\uD45C\uC218 \uBCF4\uC774\uAE30"]);
    }
  },
  "pwa": {
    "dismiss": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC124\uCE58\uD558\uC9C0 \uC54A\uAE30"]);
    },
    "install": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC124\uCE58"]);
    },
    "install_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk \uC124\uCE58"]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC0C8\uB85C\uC6B4 Elk \uC5C5\uB370\uC774\uD2B8\uAC00 \uAC00\uB2A5\uD569\uB2C8\uB2E4!"]);
    },
    "update": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC5C5\uB370\uC774\uD2B8"]);
    },
    "update_available_short": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC5C5\uB370\uC774\uD2B8 Elk"]);
    },
    "webmanifest": {
      "canary": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uBBFC\uCCA9\uD55C \uB9C8\uC2A4\uD1A0\uB3C8 \uC6F9 \uD074\uB77C\uC774\uC5B8\uD2B8(\uCE74\uB098\uB9AC)"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (\uCE74\uB098\uB9AC)"]);
        },
        "short_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (\uCE74\uB098\uB9AC)"]);
        }
      },
      "dev": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uBBFC\uCCA9\uD55C \uB9C8\uC2A4\uD1A0\uB3C8 \uC6F9 \uD074\uB77C\uC774\uC5B8\uD2B8(\uAC1C\uBC1C)"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (\uAC1C\uBC1C)"]);
        },
        "short_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (\uAC1C\uBC1C)"]);
        }
      },
      "preview": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uBBFC\uCCA9\uD55C \uB9C8\uC2A4\uD1A0\uB3C8 \uC6F9 \uD074\uB77C\uC774\uC5B8\uD2B8(\uBBF8\uB9AC\uBCF4\uAE30)"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (\uBBF8\uB9AC\uBCF4\uAE30)"]);
        },
        "short_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (\uBBF8\uB9AC\uBCF4\uAE30)"]);
        }
      },
      "release": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uBBFC\uCCA9\uD55C \uB9C8\uC2A4\uD1A0\uB3C8 \uC6F9 \uD074\uB77C\uC774\uC5B8\uD2B8"]);
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
      return _normalize(["\uC0AC\uB78C\uACFC \uD574\uC2DC\uD0DC\uADF8 \uAC80\uC0C9"]);
    },
    "search_empty": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB2E4\uC74C \uAC80\uC0C9\uC5B4\uC5D0 \uB300\uD55C \uB0B4\uC6A9\uC744 \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"]);
    }
  },
  "settings": {
    "about": {
      "built_at": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uCD5C\uADFC \uBE4C\uB4DC \uC77C\uC2DC"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Elk\uC5D0 \uB300\uD558\uC5EC"]);
      },
      "meet_the_team": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uD300\uACFC \uB9CC\uB098\uAE30"]);
      },
      "sponsor_action": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC6B0\uB9AC\uB97C \uC9C0\uC6D0\uD558\uAE30"]);
      },
      "sponsor_action_desc": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Elk \uAC1C\uBC1C\uCE68\uC744 \uC704\uD574 \uC9C0\uC6D0\uD558\uAE30"]);
      },
      "sponsors": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC2A4\uD3F0\uC11C"]);
      },
      "sponsors_body_1": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Elk\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uBD84\uB4E4\uC758 \uC544\uB08C\uC5C6\uB294 \uD6C4\uC6D0\uACFC \uB3C4\uC6C0 \uB355\uBD84\uC5D0 \uAC00\uB2A5\uD588\uC2B5\uB2C8\uB2E4:"]);
      },
      "sponsors_body_2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uADF8\uB9AC\uACE0 Elk \uD300\uACFC \uBA64\uBC84\uB4E4\uC744 \uD6C4\uC6D0\uD558\uB294 \uBAA8\uB4E0 \uAE30\uC5C5\uACFC \uAC1C\uC778\uC5D0\uAC8C\uB3C4 \uAC10\uC0AC\uB4DC\uB9BD\uB2C8\uB2E4"]);
      },
      "sponsors_body_3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC571\uC744 \uC990\uAE30\uACE0 \uACC4\uC2E0\uB2E4\uBA74 \uD6C4\uC6D0\uC744 \uACE0\uB824\uD574 \uBCF4\uC138\uC694:"]);
      },
      "version": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uBC84\uC804"]);
      }
    },
    "account_settings": {
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uB9C8\uC2A4\uD1A0\uB3C8 UI\uC5D0\uC11C \uACC4\uC815 \uC124\uC815 \uC218\uC815\uD558\uAE30"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uACC4\uC815 \uC124\uC815"]);
      }
    },
    "interface": {
      "color_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uCEEC\uB7EC \uBAA8\uB4DC"]);
      },
      "dark_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uB2E4\uD06C"]);
      },
      "default": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize([" (\uAE30\uBCF8)"]);
      },
      "font_size": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uAE00\uC790 \uD06C\uAE30"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC778\uD130\uD398\uC774\uC2A4"]);
      },
      "light_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uB77C\uC774\uD2B8"]);
      },
      "system_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC2DC\uC2A4\uD15C"]);
      },
      "theme_color": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uD14C\uB9C8 \uCEEC\uB7EC"]);
      }
    },
    "language": {
      "display_language": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uD45C\uC2DC \uC5B8\uC5B4"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC5B8\uC5B4"]);
      },
      "status": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\uBC88\uC5ED \uC9C4\uD589\uB3C4: ", _interpolate(_list(0)), "/", _interpolate(_list(1)), "(", _interpolate(_list(2)), "%)"]);
      },
      "translations": {
        "add": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uCD94\uAC00"]);
        },
        "choose_language": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uC5B8\uC5B4 \uC120\uD0DD"]);
        },
        "heading": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uBC88\uC5ED"]);
        },
        "hide_specific": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uD2B9\uC815 \uC5B8\uC5B4\uB294 \uBC88\uC5ED \uC228\uAE30\uAE30"]);
        },
        "remove": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uC0AD\uC81C"]);
        }
      }
    },
    "notifications": {
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC54C\uB9BC"]);
      },
      "notifications": {
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uC54C\uB9BC \uC124\uC815"]);
        }
      },
      "push_notifications": {
        "alerts": {
          "favourite": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uC88B\uC544\uC694"]);
          },
          "follow": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uC0C8\uB85C\uC6B4 \uD314\uB85C\uC6CC"]);
          },
          "mention": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uBA58\uC158"]);
          },
          "poll": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uD22C\uD45C"]);
          },
          "reblog": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uB9AC\uBE14\uB85C\uADF8"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uC5B4\uB290 \uC54C\uB9BC\uC744 \uBC1B\uC744\uAE4C\uC694?"]);
          }
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC744 \uB54C\uC5D0\uB3C4 \uC54C\uB9BC\uC744 \uBC1B\uC2B5\uB2C8\uB2E4."]);
        },
        "instructions": (ctx) => {
          const { normalize: _normalize, linked: _linked, type: _type } = ctx;
          return _normalize([_linked("settings.notifications.push_notifications.save_settings", void 0, _type), " \uBC84\uD2BC\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC124\uC815\uC744 \uC800\uC7A5\uD558\uB294 \uAC83\uC744 \uC78A\uC9C0 \uB9C8\uC138\uC694!"]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uD478\uC2DC \uC54C\uB9BC \uC124\uC815"]);
        },
        "policy": {
          "all": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uB204\uAD6C\uB098"]);
          },
          "followed": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uB0B4\uAC00 \uD314\uB85C\uC6B0\uD558\uB294 \uC0AC\uB78C"]);
          },
          "follower": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uB098\uB97C \uD314\uB85C\uC6B0\uD558\uB294 \uC0AC\uB78C"]);
          },
          "none": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uC5B4\uB290 \uC0AC\uB78C\uC758 \uC54C\uB9BC\uB3C4 \uBC1B\uC9C0 \uC54A\uC74C"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uB204\uAD6C\uC758 \uC54C\uB9BC\uC744 \uBC1B\uC744\uAE4C\uC694?"]);
          }
        },
        "save_settings": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uC124\uC815 \uC800\uC7A5"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uD478\uC2DC \uC54C\uB9BC \uC124\uC815"]);
        },
        "undo_settings": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uBCC0\uACBD\uC0AC\uD56D \uB418\uB3CC\uB9AC\uAE30"]);
        },
        "unsubscribe": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uD478\uC2DC \uC54C\uB9BC \uBE44\uD65C\uC131\uD654"]);
        },
        "unsupported": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uC9C0\uAE08 \uC0AC\uC6A9\uD558\uB294 \uBE0C\uB77C\uC6B0\uC800\uB294 \uD478\uC2DC \uC54C\uB9BC\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."]);
        },
        "warning": {
          "enable_close": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uB2EB\uAE30"]);
          },
          "enable_description": (ctx) => {
            const { normalize: _normalize, linked: _linked, type: _type } = ctx;
            return _normalize(['Elk\uAC00 \uC5F4\uB824 \uC788\uC9C0 \uC54A\uC744 \uB54C \uC54C\uB9BC\uC744 \uBC1B\uC73C\uB824\uBA74 \uD478\uC2DC \uC54C\uB9BC\uC744 \uD65C\uC131\uD654\uD558\uC138\uC694. \uD478\uC2DC \uC54C\uB9BC\uC744 \uD65C\uC131\uD654\uD558\uBA74 \uC704\uC758 "', _linked("settings.notifications.show_btn", void 0, _type), '"', " \uBC84\uD2BC\uC744 \uD1B5\uD574 \uC5B4\uB5A4 \uC720\uD615\uC758 \uC0C1\uD638\uC791\uC6A9\uC774 \uD478\uC2DC \uC54C\uB9BC\uC744 \uC0DD\uC131\uD558\uB294\uC9C0 \uC815\uD655\uD558\uAC8C \uC81C\uC5B4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]);
          },
          "enable_description_settings": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Elk\uAC00 \uC5F4\uB824 \uC788\uC9C0 \uC54A\uC744 \uB54C \uC54C\uB9BC\uC744 \uBC1B\uC73C\uB824\uBA74 \uD478\uC2DC \uC54C\uB9BC\uC744 \uC0AC\uC6A9 \uC124\uC815\uD558\uC138\uC694. \uD478\uC2DC \uC54C\uB9BC\uC744 \uC0AC\uC6A9 \uC124\uC815\uD558\uBA74 \uB3D9\uC77C\uD55C \uD654\uBA74\uC5D0\uC11C \uD478\uC2DC \uC54C\uB9BC\uC744 \uC0DD\uC131\uD558\uB294 \uC0C1\uD638 \uC791\uC6A9 \uC720\uD615\uC744 \uC815\uD655\uD558\uAC8C \uC81C\uC5B4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]);
          },
          "enable_desktop": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uD478\uC2DC \uC54C\uB9BC \uD65C\uC131\uD654"]);
          },
          "enable_title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uC5B4\uB5A4 \uAC83\uB3C4 \uB193\uCE58\uC9C0 \uB9C8\uC138\uC694"]);
          },
          "re_auth": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\uC0AC\uC6A9 \uC911\uC778 \uC11C\uBC84\uAC00 \uD478\uC2DC \uC54C\uB9BC\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uAC83 \uAC19\uC2B5\uB2C8\uB2E4. \uB85C\uADF8\uC544\uC6C3\uD588\uB2E4\uAC00 \uB2E4\uC2DC \uB85C\uADF8\uC778\uD55C \uD6C4\uC5D0\uB3C4 \uC774 \uBA54\uC2DC\uC9C0\uAC00 \uACC4\uC18D \uD45C\uC2DC\uB418\uBA74 \uC11C\uBC84 \uAD00\uB9AC\uC790\uC5D0\uAC8C \uBB38\uC758\uD558\uC138\uC694."]);
          }
        }
      }
    },
    "notifications_settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC54C\uB9BC"]);
    },
    "preferences": {
      "enable_autoplay": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC790\uB3D9 \uC7AC\uC0DD \uD65C\uC131\uD654"]);
      },
      "enable_data_saving": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uB370\uC774\uD130 \uC808\uC57D \uD65C\uC131\uD654"]);
      },
      "enable_data_saving_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uCCA8\uBD80\uD30C\uC77C\uC774 \uC790\uB3D9\uC73C\uB85C \uB85C\uB4DC\uB418\uC9C0 \uC54A\uB3C4\uB85D \uC124\uC815\uD558\uC5EC \uB370\uC774\uD130\uB97C \uC808\uC57D\uD558\uC138\uC694."]);
      },
      "enable_pinch_to_zoom": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uD540\uCE58\uD558\uC5EC \uD655\uB300/\uCD95\uC18C \uD65C\uC131\uD654"]);
      },
      "github_cards": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uAE43\uD5C8\uBE0C \uCE74\uB4DC"]);
      },
      "grayscale_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uADF8\uB808\uC774\uC2A4\uCF00\uC77C \uBAA8\uB4DC"]);
      },
      "hide_account_hover_card": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uACC4\uC815 \uD638\uBC84 \uCE74\uB4DC \uC228\uAE30\uAE30"]);
      },
      "hide_alt_indi_on_posts": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uAC8C\uC2DC\uBB3C\uC5D0\uC11C \uB300\uCCB4 \uD45C\uC2DC \uC228\uAE30\uAE30"]);
      },
      "hide_boost_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uBD80\uC2A4\uD2B8 \uAC2F\uC218 \uC228\uAE30\uAE30"]);
      },
      "hide_favorite_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC88B\uC544\uC694 \uAC2F\uC218 \uC228\uAE30\uAE30"]);
      },
      "hide_follower_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uD314\uB85C\uC789/\uD314\uB85C\uC6CC \uAC2F\uC218 \uC228\uAE30\uAE30"]);
      },
      "hide_reply_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uB313\uAE00 \uAC2F\uC218 \uC228\uAE30\uAE30"]);
      },
      "hide_translation": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uBC88\uC5ED \uC228\uAE30\uAE30"]);
      },
      "hide_username_emojis": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC0AC\uC6A9\uC790 \uC774\uB984 \uC774\uBAA8\uC9C0 \uC228\uAE30\uAE30"]);
      },
      "hide_username_emojis_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uD0C0\uC784\uB77C\uC778\uC758 \uC0AC\uC6A9\uC790 \uC544\uC774\uB514\uC5D0\uC11C \uC774\uBAA8\uD2F0\uCF58\uC744 \uC228\uAE41\uB2C8\uB2E4. \uC774\uBAA8\uD2F0\uCF58\uC740 \uD504\uB85C\uD544\uC5D0 \uACC4\uC18D \uD45C\uC2DC\uB429\uB2C8\uB2E4."]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uAC1C\uC778 \uC124\uC815"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC2E4\uD5D8\uC801 \uAE30\uB2A5"]);
      },
      "use_star_favorite_icon": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uBCC4\uC744 \uC88B\uC544\uC694 \uC544\uC774\uCF58\uC73C\uB85C \uC0AC\uC6A9"]);
      }
    },
    "profile": {
      "appearance": {
        "bio": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uBC14\uC774\uC624"]);
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uC544\uBC14\uD0C0, \uC0AC\uC6A9\uC790\uBA85, \uD504\uB85C\uD544 \uB4F1"]);
        },
        "display_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uD45C\uC2DC \uC774\uB984"]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uBAA8\uC591"]);
        },
        "profile_metadata": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uD504\uB85C\uD544 \uBA54\uD0C0\uB370\uC774\uD130"]);
        },
        "profile_metadata_desc": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
          return _normalize(["\uD504\uB85C\uD544\uC5D0 \uCD5C\uB300 ", _interpolate(_list(0)), "\uAC1C\uC758 \uD56D\uBAA9\uC744 \uD45C\uB85C \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4"]);
        },
        "profile_metadata_label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uB77C\uBCA8"]);
        },
        "profile_metadata_value": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uCF58\uD150\uCE20"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uD504\uB85C\uD544 \uC218\uC815"]);
        }
      },
      "featured_tags": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uC0AC\uB78C\uB4E4\uC740 \uC774\uB7EC\uD55C \uD574\uC2DC\uD0DC\uADF8\uB85C \uACF5\uAC1C \uAC8C\uC2DC\uBB3C\uC744 \uAC80\uC0C9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\uC8FC\uC694 \uD574\uC2DC\uD0DC\uADF8"]);
        }
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uD504\uB85C\uD544"]);
      }
    },
    "select_a_settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC124\uC815 \uC120\uD0DD"]);
    },
    "users": {
      "export": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC0AC\uC6A9\uC790 \uD1A0\uD070 \uB0B4\uBCF4\uB0B4\uAE30"]);
      },
      "import": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC0AC\uC6A9\uC790 \uD1A0\uD070 \uAC00\uC838\uC624\uAE30"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uB85C\uADF8\uC778\uB41C \uC720\uC800"]);
      }
    }
  },
  "state": {
    "edited": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["(\uC218\uC815\uB428)"]);
    },
    "editing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC218\uC815 \uC911"]);
    },
    "loading": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB85C\uB529 \uC911..."]);
    },
    "publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uAC8C\uC2DC \uC2E4\uD328"]);
    },
    "publishing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uAC8C\uC2DC \uC911"]);
    },
    "upload_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC5C5\uB85C\uB4DC \uC2E4\uD328"]);
    },
    "uploading": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC5C5\uB85C\uB4DC \uC911..."]);
    }
  },
  "status": {
    "boosted_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uBD80\uC2A4\uD2B8\uB97C \uD55C \uC0AC\uB78C"]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\uC5D0 \uC218\uC815\uD568"]);
    },
    "favourited_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC88B\uC544\uC694\uB97C \uD55C \uC0AC\uB78C"]);
    },
    "img_alt": {
      "ALT": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["ALT"]);
      },
      "desc": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uC124\uBA85"]);
      },
      "dismiss": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\uB2EB\uAE30"]);
      },
      "read": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize([_interpolate(_list(0)), " \uC124\uBA85 \uC77D\uAE30"]);
      }
    },
    "poll": {
      "count": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
        return _plural([_normalize([_interpolate(_list(0)), "\uD22C\uD45C"]), _normalize([_interpolate(_list(0)), "\uD22C\uD45C"]), _normalize([_interpolate(_list(0)), "\uD22C\uD45C"])]);
      },
      "ends": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize([_interpolate(_list(0)), " \uD6C4 \uB9C8\uAC10"]);
      },
      "finished": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize([_interpolate(_list(0)), " \uB9C8\uAC10\uB428"]);
      }
    },
    "replying_to": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \uB2D8\uC5D0\uAC8C \uB2F5\uAE00\uC744 \uB2EC\uC558\uC2B5\uB2C8\uB2E4"]);
    },
    "show_full_thread": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC2A4\uB808\uB4DC \uC804\uCCB4\uBCF4\uAE30"]);
    },
    "someone": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB204\uAD70\uAC00"]);
    },
    "spoiler_show_less": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uCD5C\uC18C\uD55C\uC73C\uB85C \uBCF4\uAE30"]);
    },
    "spoiler_show_more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB354 \uBCF4\uAE30"]);
    },
    "thread": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC2A4\uB808\uB4DC"]);
    },
    "try_original_site": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC6D0\uBCF8 \uC0AC\uC774\uD2B8\uC5D0\uC11C \uC2DC\uB3C4\uD558\uAE30"]);
    }
  },
  "status_history": {
    "created": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\uC5D0 \uCC98\uC74C \uAC8C\uC2DC\uD568"]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\uC5D0 \uC218\uC815\uD568"]);
    }
  },
  "tab": {
    "accounts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uACC4\uC815"]);
    },
    "for_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD314\uB85C\uC6B0 \uCD94\uCC9C"]);
    },
    "hashtags": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD574\uC2DC\uD0DC\uADF8"]);
    },
    "list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB9AC\uC2A4\uD2B8"]);
    },
    "media": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uBBF8\uB514\uC5B4"]);
    },
    "news": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB274\uC2A4"]);
    },
    "notifications_all": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uBAA8\uB450"]);
    },
    "notifications_mention": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uBA58\uC158"]);
    },
    "posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uAC8C\uC2DC\uBB3C"]);
    },
    "posts_with_replies": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uAC8C\uC2DC\uBB3C\uACFC \uB2F5\uAE00"]);
    }
  },
  "tag": {
    "follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD314\uB85C\uC6B0"]);
    },
    "follow_label": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\uD314\uB85C\uC6B0 ", _interpolate(_list(0)), "\uD0DC\uADF8"]);
    },
    "unfollow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC5B8\uD314\uB85C\uC6B0"]);
    },
    "unfollow_label": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\uC5B8\uD314\uB85C\uC6B0 ", _interpolate(_list(0)), "\uD0DC\uADF8"]);
    }
  },
  "time_ago_options": {
    "day_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0\uC77C \uD6C4"]), _normalize(["\uB0B4\uC77C"]), _normalize([_interpolate(_named("n")), "\uC77C \uD6C4"])]);
    },
    "day_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0\uC77C \uC804"]), _normalize(["\uC5B4\uC81C"]), _normalize([_interpolate(_named("n")), "\uC77C \uC804"])]);
    },
    "hour_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0\uC2DC\uAC04 \uD6C4"]), _normalize(["1\uC2DC\uAC04 \uD6C4"]), _normalize([_interpolate(_named("n")), " \uC2DC\uAC04"])]);
    },
    "hour_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0\uC2DC\uAC04 \uC804"]), _normalize(["1\uC2DC\uAC04 \uC804"]), _normalize([_interpolate(_named("n")), "\uC2DC\uAC04 \uC804"])]);
    },
    "just_now": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC9C0\uAE08"]);
    },
    "minute_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0\uBD84 \uD6C4"]), _normalize(["1\uBD84"]), _normalize([_interpolate(_named("n")), "\uBD84 \uD6C4"])]);
    },
    "minute_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0\uBD84 \uC804"]), _normalize(["1\uBD84 \uC804"]), _normalize([_interpolate(_named("n")), "\uBD84 \uC804"])]);
    },
    "month_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0 \uB2EC"]), _normalize(["\uB2E4\uC74C \uB2EC"]), _normalize([_interpolate(_named("n")), "\uB2EC \uD6C4"])]);
    },
    "month_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0\uB2EC \uC804"]), _normalize(["\uC9C0\uB09C \uB2EC"]), _normalize([_interpolate(_named("n")), "\uB2EC \uC804"])]);
    },
    "second_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\uC9C0\uAE08"]), _normalize([_interpolate(_named("n")), "\uCD08 \uD6C4"]), _normalize([_interpolate(_named("n")), "\uCD08 \uD6C4"])]);
    },
    "second_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\uC9C0\uAE08"]), _normalize([_interpolate(_named("n")), "\uCD08 \uC804"]), _normalize([_interpolate(_named("n")), "\uCD08 \uC804"])]);
    },
    "short_day_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\uC77C"]);
    },
    "short_day_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\uC77C"]);
    },
    "short_hour_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\uC2DC\uAC04"]);
    },
    "short_hour_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\uC2DC\uAC04"]);
    },
    "short_minute_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\uBD84"]);
    },
    "short_minute_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\uBD84"]);
    },
    "short_month_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\uB2EC"]);
    },
    "short_month_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\uB2EC"]);
    },
    "short_second_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\uCD08"]);
    },
    "short_second_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\uCD08"]);
    },
    "short_week_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\uC8FC"]);
    },
    "short_week_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\uC8FC"]);
    },
    "short_year_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\uB144"]);
    },
    "short_year_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\uB144"]);
    },
    "week_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0\uC8FC \uD6C4"]), _normalize(["\uB2E4\uC74C \uC8FC"]), _normalize([_interpolate(_named("n")), "\uC8FC \uD6C4"])]);
    },
    "week_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0\uC8FC \uC804"]), _normalize(["\uC800\uBC88 \uC8FC"]), _normalize([_interpolate(_named("n")), "\uC8FC \uC804"])]);
    },
    "year_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0\uB144 \uD6C4"]), _normalize(["\uB0B4\uB144"]), _normalize([_interpolate(_named("n")), " \uB144 \uD6C4"])]);
    },
    "year_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0\uB144 \uC804"]), _normalize(["\uC791\uB144"]), _normalize([_interpolate(_named("n")), "\uB144 \uC804"])]);
    }
  },
  "timeline": {
    "show_new_items": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_named("v")), "\uAC1C\uC758 \uC0C8 \uAC8C\uC2DC\uBB3C \uBCF4\uAE30"]), _normalize([_interpolate(_named("v")), "\uAC1C\uC758 \uC0C8 \uAC8C\uC2DC\uBB3C \uBCF4\uAE30"]), _normalize([_interpolate(_named("v")), "\uAC1C\uC758 \uC0C8 \uAC8C\uC2DC\uBB3C \uBCF4\uAE30"])]);
    }
  },
  "title": {
    "federated_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC5F0\uD569 \uD0C0\uC784\uB77C\uC778"]);
    },
    "local_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB85C\uCEEC \uD0C0\uC785\uB77C\uC778"]);
    }
  },
  "tooltip": {
    "add_content_warning": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uCF58\uD150\uCE20 \uACBD\uACE0 \uCD94\uAC00"]);
    },
    "add_emojis": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC774\uBAA8\uC9C0 \uCD94\uAC00"]);
    },
    "add_media": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC774\uBBF8\uC9C0, \uBE44\uB514\uC624, \uC624\uB514\uC624 \uD30C\uC77C \uCD94\uAC00"]);
    },
    "add_publishable_content": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uCF58\uD150\uCE20\uB97C \uAC8C\uC2DC\uD569\uB2C8\uB2E4"]);
    },
    "change_content_visibility": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uCF58\uD150\uCE20 \uACF5\uAC1C \uBC94\uC704 \uBCC0\uACBD"]);
    },
    "change_language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC5B8\uC5B4 \uBCC0\uACBD"]);
    },
    "emoji": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC774\uBAA8\uC9C0"]);
    },
    "open_editor_tools": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC5D0\uB514\uD130 \uD234"]);
    },
    "pick_an_icon": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC544\uC774\uCF58 \uC120\uD0DD"]);
    },
    "toggle_bold": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uAD75\uAC8C"]);
    },
    "toggle_code_block": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uCF54\uB4DC \uBE14\uB85D \uD1A0\uAE00"]);
    },
    "toggle_italic": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC774\uD0E4\uB9AD \uD1A0\uAE00"]);
    }
  },
  "user": {
    "add_existing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uAE30\uC874 \uACC4\uC815 \uCD94\uAC00"]);
    },
    "server_address_label": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB9C8\uC2A4\uD1A0\uB3C8 \uC11C\uBC84 \uC8FC\uC18C"]);
    },
    "sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB85C\uADF8\uC778\uD574\uC11C \uD504\uB85C\uD544\uC744 \uD314\uB85C\uC6B0\uD558\uAC70\uB098 \uD574\uC2DC\uD0DC\uADF8, \uC88B\uC544\uC694, \uAC8C\uC2DC\uBB3C\uC744 \uACF5\uC720\uD558\uACE0 \uB2F5\uAE00\uC744 \uB2EC\uAC70\uB098 \uB2E4\uB978 \uC11C\uBC84\uC5D0\uC11C \uB2F9\uC2E0\uC758 \uACC4\uC815\uACFC \uC0C1\uD638\uC791\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."]);
    },
    "sign_in_notice_title": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), "\uC758 \uACF5\uAC1C \uB370\uC774\uD130\uB97C \uBCF4\uACE0 \uC788\uC2B5\uB2C8\uB2E4"]);
    },
    "sign_out_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \uACC4\uC815 \uB85C\uADF8\uC544\uC6C3"]);
    },
    "single_instance_sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB85C\uADF8\uC778\uD574\uC11C \uD504\uB85C\uD544\uC744 \uD314\uB85C\uC6B0\uD558\uAC70\uB098 \uD574\uC2DC\uD0DC\uADF8, \uC88B\uC544\uC694, \uAC8C\uC2DC\uBB3C\uC744 \uACF5\uC720\uD558\uACE0 \uB2F5\uAE00\uC744 \uB2EC \uC218 \uC788\uC2B5\uB2C8\uB2E4."]);
    },
    "tip_no_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\uB9CC\uC57D \uB9C8\uC2A4\uD1A0\uB3C8 \uACC4\uC815\uC744 \uAC00\uC9C0\uACE0 \uC788\uC9C0 \uC54A\uB294 \uACBD\uC6B0, ", _interpolate(_list(0)), "."]);
    },
    "tip_register_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC11C\uBC84\uB97C \uC120\uD0DD\uD558\uACE0 \uACC4\uC815\uC744 \uB9CC\uB4DC\uC138\uC694"]);
    }
  },
  "visibility": {
    "direct": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB2E4\uC774\uB809\uD2B8"]);
    },
    "direct_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uBA58\uC158\uB41C \uC0AC\uC6A9\uC790\uB9CC \uBCFC \uC218 \uC788\uC74C"]);
    },
    "private": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD314\uB85C\uC6CC \uC804\uC6A9"]);
    },
    "private_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD314\uB85C\uC6CC\uB9CC \uBCFC \uC218 \uC788\uC74C"]);
    },
    "public": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uACF5\uAC1C"]);
    },
    "public_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uBAA8\uB450\uAC00 \uBCFC \uC218 \uC788\uC74C"]);
    },
    "unlisted": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uBBF8\uB4F1\uC7AC"]);
    },
    "unlisted_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uBAA8\uB4E0 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uD45C\uC2DC\uB418\uC9C0\uB9CC, \uBC1C\uACAC\uD558\uAE30 \uAE30\uB2A5\uC5D0\uC11C\uB294 \uC81C\uC678\uB428"]);
    }
  }
};

export { koKR as default };
