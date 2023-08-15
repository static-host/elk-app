const thTH = {
  "a11y": {
    "loading_page": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E01\u0E33\u0E25\u0E31\u0E07\u0E42\u0E2B\u0E25\u0E14\u0E40\u0E1E\u0E08\u0E42\u0E1B\u0E23\u0E14\u0E23\u0E2D\u0E2A\u0E31\u0E01\u0E04\u0E23\u0E39\u0E48"]);
    },
    "loading_titled_page": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E01\u0E33\u0E25\u0E31\u0E07\u0E42\u0E2B\u0E25\u0E14\u0E40\u0E1E\u0E08 ", _interpolate(_list(0)), " \u0E42\u0E1B\u0E23\u0E14\u0E23\u0E2D\u0E2A\u0E31\u0E01\u0E04\u0E23\u0E39\u0E48"]);
    },
    "locale_changed": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E20\u0E32\u0E29\u0E32\u0E40\u0E1B\u0E47\u0E19 ", _interpolate(_list(0))]);
    },
    "locale_changing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E20\u0E32\u0E29\u0E32\u0E42\u0E1B\u0E23\u0E14\u0E23\u0E2D\u0E2A\u0E31\u0E01\u0E04\u0E23\u0E39\u0E48"]);
    },
    "route_loaded": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E42\u0E2B\u0E25\u0E14\u0E40\u0E1E\u0E08 ", _interpolate(_list(0)), " \u0E41\u0E25\u0E49\u0E27"]);
    }
  },
  "account": {
    "avatar_description": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E2D\u0E27\u0E15\u0E32\u0E23\u0E02\u0E2D\u0E07 ", _interpolate(_list(0))]);
    },
    "blocked_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E04\u0E38\u0E13\u0E16\u0E39\u0E01\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E04\u0E19\u0E19\u0E35\u0E49\u0E1B\u0E34\u0E14\u0E01\u0E31\u0E49\u0E19"]);
    },
    "blocked_domains": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E42\u0E14\u0E40\u0E21\u0E19\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E1B\u0E34\u0E14\u0E01\u0E31\u0E49\u0E19Blocked domains"]);
    },
    "blocked_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E1B\u0E34\u0E14\u0E01\u0E31\u0E49\u0E19"]);
    },
    "blocking": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1B\u0E34\u0E14\u0E01\u0E31\u0E49\u0E19"]);
    },
    "bot": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1A\u0E2D\u0E17"]);
    },
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E42\u0E1B\u0E23\u0E14"]);
    },
    "follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21"]);
    },
    "follow_back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E01\u0E25\u0E31\u0E1A"]);
    },
    "follow_requested": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E02\u0E2D\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E41\u0E25\u0E49\u0E27"]);
    },
    "followers": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1C\u0E39\u0E49\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21"]);
    },
    "followers_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize(["\u0E1C\u0E39\u0E49\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21 ", _interpolate(_list(0)), " \u0E04\u0E19"]), _normalize(["\u0E1C\u0E39\u0E49\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21 ", _interpolate(_list(0)), " \u0E04\u0E19"]), _normalize(["\u0E1C\u0E39\u0E49\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21 ", _interpolate(_list(0)), " \u0E04\u0E19"])]);
    },
    "following": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E01\u0E33\u0E25\u0E31\u0E07\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21"]);
    },
    "following_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E2D\u0E22\u0E39\u0E48 ", _interpolate(_list(0)), " \u0E04\u0E19"]);
    },
    "follows_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E04\u0E38\u0E13"]);
    },
    "go_to_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C"]);
    },
    "joined": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E41\u0E25\u0E49\u0E27"]);
    },
    "moved_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E44\u0E14\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E27\u0E48\u0E32\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E02\u0E2D\u0E07\u0E1E\u0E27\u0E01\u0E40\u0E02\u0E32\u0E04\u0E37\u0E2D:"]);
    },
    "muted_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07"]);
    },
    "muting": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E41\u0E25\u0E49\u0E27"]);
    },
    "mutuals": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E0B\u0E36\u0E48\u0E07\u0E01\u0E31\u0E19\u0E41\u0E25\u0E30\u0E01\u0E31\u0E19"]);
    },
    "notifications_on_post_disable": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0E40\u0E25\u0E34\u0E01\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D ", _interpolate(_named("username")), " \u0E42\u0E1E\u0E2A\u0E15\u0E4C"]);
    },
    "notifications_on_post_enable": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D ", _interpolate(_named("username")), " \u0E42\u0E1E\u0E2A\u0E15\u0E4C"]);
    },
    "pinned": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1B\u0E31\u0E01\u0E2B\u0E21\u0E38\u0E14\u0E41\u0E25\u0E49\u0E27"]);
    },
    "posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E42\u0E1E\u0E2A\u0E15\u0E4C"]);
    },
    "posts_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_list(0)), " \u0E42\u0E1E\u0E2A\u0E15\u0E4C"]), _normalize([_interpolate(_list(0)), " \u0E42\u0E1E\u0E2A\u0E15\u0E4C"]), _normalize([_interpolate(_list(0)), " \u0E42\u0E1E\u0E2A\u0E15\u0E4C"])]);
    },
    "profile_description": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E2B\u0E31\u0E27\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07 ", _interpolate(_list(0))]);
    },
    "profile_personal_note": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E42\u0E19\u0E49\u0E15\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27"]);
    },
    "profile_unavailable": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E44\u0E21\u0E48\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E43\u0E08"]);
    },
    "request_follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E02\u0E2D\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21"]);
    },
    "unblock": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E25\u0E34\u0E01\u0E1B\u0E34\u0E14\u0E01\u0E31\u0E49\u0E19"]);
    },
    "unfollow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E25\u0E34\u0E01\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21"]);
    },
    "unmute": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E25\u0E34\u0E01\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07"]);
    },
    "view_other_followers": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1C\u0E39\u0E49\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E08\u0E32\u0E01\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E2D\u0E37\u0E48\u0E19\u0E2D\u0E32\u0E08\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E41\u0E2A\u0E14\u0E07"]);
    },
    "view_other_following": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E08\u0E32\u0E01\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E2D\u0E37\u0E48\u0E19\u0E2D\u0E32\u0E08\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E41\u0E2A\u0E14\u0E07"]);
    }
  },
  "action": {
    "apply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23"]);
    },
    "bookmark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E17\u0E35\u0E48\u0E04\u0E31\u0E48\u0E19\u0E2B\u0E19\u0E49\u0E32"]);
    },
    "bookmarked": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E04\u0E31\u0E48\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E25\u0E49\u0E27"]);
    },
    "boost": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E14\u0E31\u0E19"]);
    },
    "boost_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "boosted": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E14\u0E31\u0E19\u0E41\u0E25\u0E49\u0E27"]);
    },
    "clear_publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E2A\u0E14\u0E07\u0E01\u0E32\u0E23\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14"]);
    },
    "clear_upload_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E2A\u0E14\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E1F\u0E25\u0E4C\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14"]);
    },
    "close": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1B\u0E34\u0E14"]);
    },
    "compose": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E02\u0E35\u0E22\u0E19"]);
    },
    "confirm": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19"]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E41\u0E01\u0E49\u0E44\u0E02"]);
    },
    "enter_app": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E02\u0E49\u0E32\u0E41\u0E2D\u0E1B"]);
    },
    "favourite": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E0A\u0E37\u0E48\u0E19\u0E0A\u0E2D\u0E1A"]);
    },
    "favourite_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "favourited": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E0A\u0E37\u0E48\u0E19\u0E0A\u0E2D\u0E1A\u0E41\u0E25\u0E49\u0E27"]);
    },
    "more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21"]);
    },
    "next": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E16\u0E31\u0E14\u0E44\u0E1B"]);
    },
    "prev": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32"]);
    },
    "publish": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E42\u0E1E\u0E2A\u0E15\u0E4C"]);
    },
    "reply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E15\u0E2D\u0E1A\u0E01\u0E25\u0E31\u0E1A"]);
    },
    "reply_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "reset": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E23\u0E35\u0E40\u0E0B\u0E15"]);
    },
    "save": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"]);
    },
    "save_changes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07"]);
    },
    "sign_in": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E25\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E43\u0E0A\u0E49"]);
    },
    "sign_in_to": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E25\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E43\u0E0A\u0E49 ", _interpolate(_list(0))]);
    },
    "switch_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2A\u0E25\u0E31\u0E1A\u0E1A\u0E31\u0E0D\u0E0A\u0E35"]);
    },
    "vote": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E42\u0E2B\u0E27\u0E15"]);
    }
  },
  "app_desc_short": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["\u0E40\u0E27\u0E47\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E1A\u0E49\u0E32\u0E19\u0E21\u0E32\u0E2A\u0E42\u0E15\u0E14\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E32\u0E14\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E27"]);
  },
  "app_logo": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["\u0E42\u0E25\u0E42\u0E01\u0E49 Elk"]);
  },
  "app_name": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Elk"]);
  },
  "attachment": {
    "edit_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"]);
    },
    "remove_label": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E2D\u0E32\u0E2A\u0E34\u0E48\u0E07\u0E41\u0E19\u0E1A\u0E2D\u0E2D\u0E01"]);
    }
  },
  "command": {
    "activate": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49"]);
    },
    "complete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E15\u0E34\u0E21\u0E40\u0E15\u0E47\u0E21"]);
    },
    "compose_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E02\u0E35\u0E22\u0E19\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E43\u0E2B\u0E21\u0E48"]);
    },
    "n-people-in-the-past-n-days": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u0E04\u0E19\u0E43\u0E19 ", _interpolate(_list(1)), " \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E21\u0E32"]);
    },
    "select_lang": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E20\u0E32\u0E29\u0E32"]);
    },
    "sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E17\u0E35\u0E48\u0E21\u0E35\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27"]);
    },
    "switch_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E2A\u0E25\u0E31\u0E1A\u0E44\u0E1B ", _interpolate(_list(0))]);
    },
    "switch_account_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2A\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E2D\u0E37\u0E48\u0E19"]);
    },
    "toggle_dark_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2A\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E42\u0E2B\u0E21\u0E14\u0E2A\u0E35\u0E40\u0E02\u0E49\u0E21"]);
    },
    "toggle_zen_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2A\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E42\u0E2B\u0E21\u0E14\u0E40\u0E0B\u0E47\u0E19"]);
    }
  },
  "common": {
    "end_of_list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2A\u0E34\u0E19\u0E2A\u0E38\u0E14\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"]);
    },
    "error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14"]);
    },
    "fetching": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E01\u0E33\u0E25\u0E31\u0E07\u0E14\u0E36\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25..."]);
    },
    "in": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E43\u0E19"]);
    },
    "no_bookmarks": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E17\u0E35\u0E48\u0E04\u0E31\u0E48\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E44\u0E27\u0E49"]);
    },
    "no_favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E43\u0E19\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E42\u0E1B\u0E23\u0E14"]);
    },
    "not_found": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["404 \u0E44\u0E21\u0E48\u0E1E\u0E1A"]);
    },
    "offline_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E04\u0E25\u0E49\u0E32\u0E22\u0E27\u0E48\u0E32\u0E04\u0E38\u0E13\u0E2D\u0E2D\u0E1F\u0E44\u0E25\u0E19\u0E4C \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22"]);
    }
  },
  "compose": {
    "draft_title": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E23\u0E48\u0E32\u0E07 ", _interpolate(_list(0))]);
    },
    "drafts": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0E23\u0E48\u0E32\u0E07 (", _interpolate(_named("v")), ")"]);
    }
  },
  "confirm": {
    "block_account": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E1B\u0E34\u0E14\u0E01\u0E31\u0E49\u0E19"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0E41\u0E19\u0E48\u0E43\u0E08\u0E27\u0E48\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1B\u0E34\u0E14\u0E01\u0E31\u0E49\u0E19 ", _interpolate(_list(0)), "?"]);
      }
    },
    "block_domain": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E1B\u0E34\u0E14\u0E01\u0E31\u0E49\u0E19"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0E41\u0E19\u0E48\u0E43\u0E08\u0E27\u0E48\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1B\u0E34\u0E14\u0E01\u0E31\u0E49\u0E19 ", _interpolate(_list(0)), "?"]);
      }
    },
    "common": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E15\u0E01\u0E25\u0E07"]);
      }
    },
    "delete_list": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E25\u0E1A"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(['\u0E41\u0E19\u0E48\u0E43\u0E08\u0E27\u0E48\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23 "', _interpolate(_list(0)), '"?']);
      }
    },
    "delete_posts": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E25\u0E1A"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E41\u0E19\u0E48\u0E43\u0E08\u0E27\u0E48\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E19\u0E35\u0E49?"]);
      }
    },
    "mute_account": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0E41\u0E19\u0E48\u0E43\u0E08\u0E27\u0E48\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07 ", _interpolate(_list(0)), "?"]);
      }
    },
    "show_reblogs": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E41\u0E2A\u0E14\u0E07"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0E41\u0E19\u0E48\u0E43\u0E08\u0E27\u0E48\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E14\u0E31\u0E19 ", _interpolate(_list(0)), "?"]);
      }
    },
    "unfollow": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E40\u0E25\u0E34\u0E01\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E41\u0E19\u0E48\u0E43\u0E08\u0E27\u0E48\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E25\u0E34\u0E01\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21?"]);
      }
    }
  },
  "conversation": {
    "with": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E01\u0E31\u0E1A"]);
    }
  },
  "custom_cards": {
    "stackblitz": {
      "lines": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize([_interpolate(_list(0)), " \u0E1A\u0E23\u0E23\u0E17\u0E31\u0E14"]);
      },
      "open": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E40\u0E1B\u0E34\u0E14"]);
      },
      "snippet_from": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Snippet \u0E08\u0E32\u0E01 ", _interpolate(_list(0))]);
      }
    }
  },
  "error": {
    "account_not_found": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E1A\u0E31\u0E0D\u0E0A\u0E35 ", _interpolate(_list(0))]);
    },
    "explore-list-empty": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E44\u0E21\u0E48\u0E2D\u0E30\u0E44\u0E23\u0E43\u0E19\u0E40\u0E17\u0E23\u0E19\u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49 \u0E14\u0E39\u0E43\u0E2B\u0E21\u0E48\u0E04\u0E23\u0E32\u0E27\u0E2B\u0E19\u0E49\u0E32!"]);
    },
    "file_size_cannot_exceed_n_mb": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E02\u0E19\u0E32\u0E14\u0E02\u0E2D\u0E07\u0E44\u0E1F\u0E25\u0E4C\u0E15\u0E49\u0E2D\u0E07\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19 ", _interpolate(_list(0)), "MB"]);
    },
    "sign_in_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C"]);
    },
    "status_not_found": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E42\u0E1E\u0E2A\u0E15\u0E4C"]);
    },
    "unsupported_file_format": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E44\u0E21\u0E48\u0E23\u0E2D\u0E07\u0E23\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E1F\u0E25\u0E4C\u0E19\u0E35\u0E49"]);
    }
  },
  "help": {
    "build_preview": {
      "desc1": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0E04\u0E38\u0E13\u0E01\u0E33\u0E25\u0E31\u0E07\u0E14\u0E39 Elk \u0E23\u0E38\u0E48\u0E19\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E08\u0E32\u0E01\u0E0A\u0E38\u0E21\u0E0A\u0E19 - ", _interpolate(_list(0)), "."]);
      },
      "desc2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E2D\u0E32\u0E08\u0E21\u0E35\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E2B\u0E23\u0E37\u0E2D\u0E41\u0E21\u0E49\u0E41\u0E15\u0E48\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E31\u0E19\u0E15\u0E23\u0E32\u0E22"]);
      },
      "desc3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E2D\u0E22\u0E48\u0E32\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E14\u0E49\u0E27\u0E22\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E08\u0E23\u0E34\u0E07\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E14\u0E35\u0E1E\u0E23\u0E2D\u0E22\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E17\u0E14\u0E25\u0E2D\u0E07"]);
      }
    },
    "desc_highlight": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E04\u0E32\u0E14\u0E27\u0E48\u0E32\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E1A\u0E01\u0E1E\u0E23\u0E48\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E04\u0E38\u0E13\u0E2A\u0E21\u0E1A\u0E31\u0E15\u0E34\u0E17\u0E35\u0E48\u0E02\u0E32\u0E14\u0E2B\u0E32\u0E22\u0E44\u0E1B"]);
    },
    "desc_para1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E02\u0E2D\u0E02\u0E2D\u0E1A\u0E04\u0E38\u0E13\u0E17\u0E35\u0E48\u0E2A\u0E19\u0E43\u0E08\u0E17\u0E14\u0E25\u0E2D\u0E07\u0E43\u0E0A\u0E49 Elk \u0E0B\u0E36\u0E48\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E27\u0E47\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E1A\u0E49\u0E32\u0E19\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E21\u0E32\u0E2A\u0E42\u0E15\u0E14\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E25\u0E31\u0E07\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E22\u0E39\u0E48\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32!"]);
    },
    "desc_para2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E23\u0E32\u0E01\u0E33\u0E25\u0E31\u0E07\u0E17\u0E33\u0E07\u0E32\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E2B\u0E19\u0E31\u0E01\u0E43\u0E19\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E43\u0E2B\u0E49\u0E14\u0E35\u0E02\u0E36\u0E49\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E27\u0E25\u0E32\u0E1C\u0E48\u0E32\u0E19\u0E44\u0E1B"]);
    },
    "desc_para3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2B\u0E32\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E12\u0E19\u0E32 \u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2A\u0E19\u0E31\u0E1A\u0E2A\u0E19\u0E38\u0E19\u0E17\u0E35\u0E21\u0E1C\u0E48\u0E32\u0E19\u0E1C\u0E39\u0E49\u0E2A\u0E19\u0E31\u0E1A\u0E2A\u0E19\u0E38\u0E19 GitHub \u0E40\u0E23\u0E32\u0E2B\u0E27\u0E31\u0E07\u0E27\u0E48\u0E32\u0E04\u0E38\u0E13\u0E08\u0E30\u0E2A\u0E19\u0E38\u0E01\u0E01\u0E31\u0E1A Elk!"]);
    },
    "desc_para4": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk \u0E40\u0E1B\u0E47\u0E19\u0E42\u0E2D\u0E40\u0E1E\u0E48\u0E19\u0E0B\u0E2D\u0E23\u0E4C\u0E2A \u0E2B\u0E32\u0E01\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E43\u0E19\u0E01\u0E32\u0E23\u0E17\u0E14\u0E2A\u0E2D\u0E1A \u0E41\u0E2A\u0E14\u0E07\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19 \u0E2B\u0E23\u0E37\u0E2D\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E27\u0E21"]);
    },
    "desc_para5": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48 GitHub"]);
    },
    "desc_para6": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E41\u0E25\u0E30\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E21\u0E35\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E48\u0E27\u0E21"]);
    },
    "footer_team": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E17\u0E35\u0E21 Elk"]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E0A\u0E48\u0E27\u0E07\u0E17\u0E14\u0E25\u0E2D\u0E07!"]);
    }
  },
  "language": {
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E04\u0E49\u0E19\u0E2B\u0E32"]);
    }
  },
  "list": {
    "add_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E25\u0E07\u0E43\u0E19\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"]);
    },
    "cancel_edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E44\u0E02"]);
    },
    "clear_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E25\u0E49\u0E32\u0E07\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14"]);
    },
    "create": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2A\u0E23\u0E49\u0E32\u0E07"]);
    },
    "delete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E25\u0E1A\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49"]);
    },
    "delete_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E02\u0E13\u0E30\u0E25\u0E1A\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E41\u0E01\u0E49\u0E44\u0E02\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49"]);
    },
    "edit_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E02\u0E13\u0E30\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"]);
    },
    "error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E02\u0E13\u0E30\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"]);
    },
    "error_prefix": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14: "]);
    },
    "list_title_placeholder": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E0A\u0E37\u0E48\u0E2D\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"]);
    },
    "modify_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E41\u0E01\u0E49\u0E44\u0E02\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E14\u0E49\u0E27\u0E22\u0E1A\u0E31\u0E0D\u0E0A\u0E35"]);
    },
    "remove_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E25\u0E1A\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"]);
    },
    "save": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07"]);
    }
  },
  "magic_keys": {
    "dialog_header": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1B\u0E38\u0E48\u0E21\u0E25\u0E31\u0E14"]);
    },
    "groups": {
      "actions": {
        "boost": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E14\u0E31\u0E19"]);
        },
        "command_mode": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E42\u0E2B\u0E21\u0E14\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07"]);
        },
        "compose": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E40\u0E02\u0E35\u0E22\u0E19"]);
        },
        "favourite": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E0A\u0E37\u0E48\u0E2D\u0E0A\u0E2D\u0E1A"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07"]);
        }
      },
      "media": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E2A\u0E37\u0E48\u0E2D"]);
        }
      },
      "navigation": {
        "go_to_home": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E1A\u0E49\u0E32\u0E19"]);
        },
        "go_to_notifications": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19"]);
        },
        "next_status": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E16\u0E31\u0E14\u0E44\u0E1B"]);
        },
        "previous_status": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32"]);
        },
        "shortcut_help": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E01\u0E32\u0E23\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E17\u0E32\u0E07\u0E25\u0E31\u0E14"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E01\u0E32\u0E23\u0E19\u0E33\u0E17\u0E32\u0E07"]);
        }
      }
    },
    "sequence_then": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E41\u0E25\u0E49\u0E27"]);
    }
  },
  "menu": {
    "add_personal_note": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E42\u0E19\u0E49\u0E15\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27\u0E17\u0E35\u0E48 ", _interpolate(_list(0))]);
    },
    "block_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E1B\u0E34\u0E14\u0E01\u0E31\u0E49\u0E19 ", _interpolate(_list(0))]);
    },
    "block_domain": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E1B\u0E34\u0E14\u0E01\u0E31\u0E49\u0E19\u0E42\u0E14\u0E40\u0E21\u0E19 ", _interpolate(_list(0))]);
    },
    "copy_link_to_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E25\u0E34\u0E07\u0E04\u0E4C\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E19\u0E35\u0E49"]);
    },
    "copy_original_link_to_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E25\u0E34\u0E07\u0E04\u0E4C\u0E40\u0E14\u0E34\u0E21\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E19\u0E35\u0E49"]);
    },
    "delete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E25\u0E1A"]);
    },
    "delete_and_redraft": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E25\u0E1A\u0E41\u0E25\u0E30\u0E23\u0E48\u0E32\u0E07\u0E43\u0E2B\u0E21\u0E48"]);
    },
    "direct_message_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E48\u0E07\u0E15\u0E23\u0E07 ", _interpolate(_list(0))]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E41\u0E01\u0E49\u0E44\u0E02"]);
    },
    "hide_reblogs": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E0B\u0E48\u0E2D\u0E19\u0E01\u0E32\u0E23\u0E14\u0E31\u0E19\u0E08\u0E32\u0E01 ", _interpolate(_list(0))]);
    },
    "mention_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E01\u0E25\u0E48\u0E32\u0E27\u0E16\u0E36\u0E07 ", _interpolate(_list(0))]);
    },
    "mute_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07 ", _interpolate(_list(0))]);
    },
    "mute_conversation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E19\u0E35\u0E49"]);
    },
    "open_in_original_site": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E19\u0E44\u0E0B\u0E17\u0E4C\u0E40\u0E14\u0E34\u0E21"]);
    },
    "pin_on_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1B\u0E31\u0E14\u0E2B\u0E21\u0E38\u0E14\u0E43\u0E19\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C"]);
    },
    "remove_personal_note": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E25\u0E1A\u0E42\u0E19\u0E49\u0E15\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27\u0E08\u0E32\u0E01 ", _interpolate(_list(0))]);
    },
    "share_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E41\u0E1A\u0E48\u0E07\u0E1B\u0E31\u0E19\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E19\u0E35\u0E49"]);
    },
    "show_favourited_and_boosted_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E41\u0E2A\u0E14\u0E07\u0E27\u0E48\u0E32\u0E43\u0E04\u0E23\u0E0A\u0E37\u0E48\u0E2D\u0E0A\u0E2D\u0E1A\u0E41\u0E25\u0E30\u0E14\u0E31\u0E19"]);
    },
    "show_reblogs": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E41\u0E2A\u0E14\u0E07\u0E01\u0E32\u0E23\u0E14\u0E31\u0E19\u0E08\u0E32\u0E01 ", _interpolate(_list(0))]);
    },
    "show_untranslated": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E41\u0E2A\u0E14\u0E07\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E41\u0E1B\u0E25"]);
    },
    "toggle_theme": {
      "dark": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E2A\u0E25\u0E31\u0E1A\u0E40\u0E1B\u0E47\u0E19\u0E42\u0E2B\u0E21\u0E14\u0E21\u0E37\u0E14"]);
      },
      "light": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E2A\u0E25\u0E31\u0E1A\u0E40\u0E1B\u0E47\u0E19\u0E42\u0E2B\u0E21\u0E14\u0E2A\u0E27\u0E48\u0E32\u0E07"]);
      }
    },
    "translate_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E41\u0E1B\u0E25\u0E42\u0E1E\u0E2A\u0E15\u0E4C"]);
    },
    "unblock_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E40\u0E25\u0E34\u0E01\u0E1B\u0E34\u0E14\u0E01\u0E31\u0E49\u0E19 ", _interpolate(_list(0))]);
    },
    "unblock_domain": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E40\u0E25\u0E34\u0E01\u0E1B\u0E34\u0E14\u0E01\u0E31\u0E49\u0E19\u0E42\u0E14\u0E40\u0E21\u0E19 ", _interpolate(_list(0))]);
    },
    "unmute_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E40\u0E25\u0E34\u0E01\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07 ", _interpolate(_list(0))]);
    },
    "unmute_conversation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E25\u0E34\u0E01\u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E19\u0E35\u0E49"]);
    },
    "unpin_on_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E16\u0E2D\u0E19\u0E2B\u0E21\u0E38\u0E14\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C"]);
    }
  },
  "modals": {
    "aria_label_close": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1B\u0E34\u0E14"]);
    }
  },
  "nav": {
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B"]);
    },
    "blocked_domains": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E42\u0E14\u0E40\u0E21\u0E19\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E1B\u0E34\u0E14\u0E01\u0E31\u0E49\u0E19"]);
    },
    "blocked_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E1B\u0E34\u0E14\u0E01\u0E31\u0E49\u0E19"]);
    },
    "bookmarks": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E17\u0E35\u0E48\u0E04\u0E31\u0E48\u0E19\u0E2B\u0E19\u0E49\u0E32"]);
    },
    "built_at": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["built \u0E40\u0E21\u0E37\u0E48\u0E2D ", _interpolate(_list(0))]);
    },
    "compose": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E02\u0E35\u0E22\u0E19"]);
    },
    "conversations": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E01\u0E32\u0E23\u0E2A\u0E19\u0E17\u0E19\u0E32"]);
    },
    "explore": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2A\u0E33\u0E23\u0E27\u0E08"]);
    },
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E0A\u0E37\u0E48\u0E19\u0E0A\u0E2D\u0E1A"]);
    },
    "federated": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1A\u0E49\u0E32\u0E19"]);
    },
    "list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"]);
    },
    "lists": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"]);
    },
    "local": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E17\u0E49\u0E2D\u0E07\u0E16\u0E34\u0E48\u0E19"]);
    },
    "muted_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E35\u0E22\u0E07"]);
    },
    "notifications": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19"]);
    },
    "privacy": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E1A\u0E38\u0E04\u0E04\u0E25"]);
    },
    "profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C"]);
    },
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E04\u0E49\u0E19\u0E2B\u0E32"]);
    },
    "select_feature_flags": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2A\u0E25\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30"]);
    },
    "select_font_size": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E02\u0E19\u0E32\u0E14\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23"]);
    },
    "select_language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E41\u0E2A\u0E14\u0E07\u0E20\u0E32\u0E29\u0E32"]);
    },
    "settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32"]);
    },
    "show_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E41\u0E2A\u0E14\u0E07\u0E1A\u0E17\u0E19\u0E33"]);
    },
    "toggle_theme": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2A\u0E25\u0E31\u0E1A\u0E18\u0E35\u0E21"]);
    },
    "zen_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E42\u0E2B\u0E21\u0E14\u0E40\u0E0B\u0E47\u0E19"]);
    }
  },
  "notification": {
    "favourited_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E0A\u0E37\u0E48\u0E19\u0E0A\u0E2D\u0E1A"]);
    },
    "followed_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E04\u0E38\u0E13\u0E41\u0E25\u0E49\u0E27"]);
    },
    "followed_you_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_list(0)), " \u0E04\u0E19\u0E15\u0E32\u0E21\u0E04\u0E38\u0E13"]), _normalize([_interpolate(_list(0)), " \u0E04\u0E19\u0E15\u0E32\u0E21\u0E04\u0E38\u0E13"]), _normalize([_interpolate(_list(0)), " \u0E04\u0E19\u0E15\u0E32\u0E21\u0E04\u0E38\u0E13"])]);
    },
    "missing_type": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E44\u0E21\u0E48\u0E21\u0E35 notification.type:"]);
    },
    "reblogged_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E14\u0E31\u0E19\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13"]);
    },
    "reported": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u0E23\u0E32\u0E22\u0E07\u0E32\u0E19 ", _interpolate(_list(1))]);
    },
    "request_to_follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E02\u0E49\u0E2D\u0E17\u0E35\u0E48\u0E08\u0E30\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E04\u0E38\u0E13"]);
    },
    "signed_up": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E25\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E43\u0E0A\u0E49\u0E41\u0E25\u0E49\u0E27"]);
    },
    "update_status": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E02\u0E2D\u0E07\u0E1E\u0E27\u0E01\u0E40\u0E02\u0E32\u0E41\u0E25\u0E49\u0E27"]);
    }
  },
  "placeholder": {
    "content_warning": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E02\u0E35\u0E22\u0E19\u0E04\u0E33\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48"]);
    },
    "default_1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E04\u0E38\u0E13\u0E04\u0E34\u0E14\u0E2D\u0E30\u0E44\u0E23\u0E2D\u0E22\u0E39\u0E48?"]);
    },
    "reply_to_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E15\u0E2D\u0E1A ", _interpolate(_list(0))]);
    },
    "replying": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E01\u0E33\u0E25\u0E31\u0E07\u0E0A\u0E2D\u0E1A"]);
    }
  },
  "polls": {
    "allow_multiple": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E2B\u0E25\u0E32\u0E22\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01"]);
    },
    "cancel": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01"]);
    },
    "create": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E42\u0E1E\u0E25"]);
    },
    "disallow_multiple": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E44\u0E21\u0E48\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E43\u0E2B\u0E49\u0E21\u0E35\u0E2B\u0E25\u0E32\u0E22\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01"]);
    },
    "expiration": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E15\u0E31\u0E49\u0E07\u0E40\u0E27\u0E25\u0E32\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14\u0E42\u0E1E\u0E25"]);
    },
    "hide_votes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E0B\u0E48\u0E2D\u0E19\u0E04\u0E30\u0E41\u0E19\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E08\u0E19\u0E01\u0E27\u0E48\u0E32\u0E08\u0E30\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14"]);
    },
    "option_placeholder": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E42\u0E1E\u0E25"]);
    },
    "remove_option": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E25\u0E1A\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01"]);
    },
    "settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E42\u0E1E\u0E25"]);
    },
    "show_votes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25\u0E23\u0E27\u0E21\u0E04\u0E30\u0E41\u0E19\u0E19\u0E17\u0E38\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07"]);
    }
  },
  "pwa": {
    "dismiss": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01"]);
    },
    "install": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07"]);
    },
    "install_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 Elk"]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk \u0E21\u0E35\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E43\u0E2B\u0E21\u0E48"]);
    },
    "update": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15"]);
    },
    "update_available_short": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15 Elk"]);
    },
    "webmanifest": {
      "canary": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E40\u0E27\u0E47\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E1A\u0E49\u0E32\u0E19\u0E21\u0E32\u0E2A\u0E42\u0E15\u0E14\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E32\u0E14\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E27 (\u0E17\u0E14\u0E2A\u0E2D\u0E1A)"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (\u0E17\u0E14\u0E2A\u0E2D\u0E1A)"]);
        },
        "short_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (\u0E17\u0E14\u0E2A\u0E2D\u0E1A)"]);
        }
      },
      "dev": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E40\u0E27\u0E47\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E1A\u0E49\u0E32\u0E19\u0E21\u0E32\u0E2A\u0E42\u0E15\u0E14\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E32\u0E14\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E27 (\u0E19\u0E31\u0E01\u0E1E\u0E31\u0E12\u0E19\u0E32)"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (\u0E19\u0E31\u0E01\u0E1E\u0E31\u0E12\u0E19\u0E32)"]);
        },
        "short_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (\u0E19\u0E31\u0E01\u0E1E\u0E31\u0E12\u0E19\u0E32)"]);
        }
      },
      "preview": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E40\u0E27\u0E47\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E1A\u0E49\u0E32\u0E19\u0E21\u0E32\u0E2A\u0E42\u0E15\u0E14\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E32\u0E14\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E27 (\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07)"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07)"]);
        },
        "short_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07)"]);
        }
      },
      "release": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E40\u0E27\u0E47\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E1A\u0E49\u0E32\u0E19\u0E21\u0E32\u0E2A\u0E42\u0E15\u0E14\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E32\u0E14\u0E40\u0E1B\u0E23\u0E35\u0E22\u0E27"]);
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
      return _normalize(["\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E1C\u0E39\u0E49\u0E04\u0E19\u0E41\u0E25\u0E30\u0E41\u0E2E\u0E0A\u0E41\u0E17\u0E47\u0E01"]);
    },
    "search_empty": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E2A\u0E34\u0E48\u0E07\u0E43\u0E14\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E04\u0E33\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E40\u0E2B\u0E25\u0E48\u0E32\u0E19\u0E35\u0E49"]);
    }
  },
  "settings": {
    "about": {
      "built_at": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Built"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A"]);
      },
      "meet_the_team": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E1E\u0E1A\u0E01\u0E31\u0E1A\u0E17\u0E35\u0E21"]);
      },
      "sponsor_action": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E2A\u0E19\u0E31\u0E1A\u0E2A\u0E19\u0E38\u0E19\u0E40\u0E23\u0E32"]);
      },
      "sponsor_action_desc": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2A\u0E19\u0E31\u0E1A\u0E2A\u0E19\u0E38\u0E19\u0E17\u0E35\u0E21\u0E1E\u0E31\u0E12\u0E19\u0E32 Elk"]);
      },
      "sponsors": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E1C\u0E39\u0E49\u0E2A\u0E19\u0E31\u0E1A\u0E2A\u0E19\u0E38\u0E19"]);
      },
      "sponsors_body_1": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Elk \u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E44\u0E14\u0E49\u0E14\u0E49\u0E27\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E19\u0E31\u0E1A\u0E2A\u0E19\u0E38\u0E19\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E0A\u0E48\u0E27\u0E22\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E08\u0E32\u0E01:"]);
      },
      "sponsors_body_2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E41\u0E25\u0E30\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E41\u0E25\u0E30\u0E1A\u0E38\u0E04\u0E04\u0E25\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E17\u0E35\u0E48\u0E2A\u0E19\u0E31\u0E1A\u0E2A\u0E19\u0E38\u0E19 Elk Team \u0E41\u0E25\u0E30\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01"]);
      },
      "sponsors_body_3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E2B\u0E32\u0E01\u0E04\u0E38\u0E13\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2A\u0E19\u0E38\u0E01\u0E01\u0E31\u0E1A\u0E41\u0E2D\u0E1B \u0E25\u0E2D\u0E07\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32\u0E2A\u0E19\u0E31\u0E1A\u0E2A\u0E19\u0E38\u0E19\u0E40\u0E23\u0E32:"]);
      },
      "version": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E23\u0E38\u0E48\u0E19"]);
      }
    },
    "account_settings": {
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E41\u0E01\u0E49\u0E44\u0E02\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E43\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E02\u0E2D\u0E07\u0E21\u0E32\u0E2A\u0E42\u0E15\u0E14\u0E2D\u0E19"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E1A\u0E31\u0E0D\u0E0A\u0E35"]);
      }
    },
    "interface": {
      "color_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E42\u0E2B\u0E21\u0E14\u0E2A\u0E35"]);
      },
      "dark_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E21\u0E37\u0E14"]);
      },
      "default": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize([" (\u0E1B\u0E23\u0E34\u0E22\u0E32\u0E22)"]);
      },
      "font_size": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E02\u0E19\u0E32\u0E14\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D"]);
      },
      "light_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E2A\u0E27\u0E48\u0E32\u0E07"]);
      },
      "system_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E23\u0E30\u0E1A\u0E1A"]);
      },
      "theme_color": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E2A\u0E35\u0E18\u0E35\u0E21"]);
      }
    },
    "language": {
      "display_language": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E20\u0E32\u0E29\u0E32\u0E17\u0E35\u0E48\u0E41\u0E2A\u0E14\u0E07"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E20\u0E32\u0E29\u0E32"]);
      },
      "status": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E01\u0E32\u0E23\u0E41\u0E1B\u0E25: ", _interpolate(_list(0)), "/", _interpolate(_list(1)), " (", _interpolate(_list(2)), "%)"]);
      },
      "translations": {
        "add": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E40\u0E1E\u0E34\u0E48\u0E21"]);
        },
        "choose_language": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E20\u0E32\u0E29\u0E32"]);
        },
        "heading": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E01\u0E32\u0E23\u0E41\u0E1B\u0E25"]);
        },
        "hide_specific": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E0B\u0E48\u0E2D\u0E19\u0E01\u0E32\u0E23\u0E41\u0E1B\u0E25\u0E1A\u0E32\u0E07\u0E2A\u0E48\u0E27\u0E19"]);
        },
        "remove": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E40\u0E2D\u0E32\u0E2D\u0E2D\u0E01"]);
        }
      }
    },
    "notifications": {
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19"]);
      },
      "notifications": {
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19"]);
        }
      },
      "push_notifications": {
        "alerts": {
          "favourite": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Favorites"]);
          },
          "follow": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["New followers"]);
          },
          "mention": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Mentions"]);
          },
          "poll": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Polls"]);
          },
          "reblog": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Reblog your post"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["What notifications to receive?"]);
          }
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E41\u0E21\u0E49\u0E43\u0E19\u0E02\u0E13\u0E30\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 Elk"]);
        },
        "instructions": (ctx) => {
          const { normalize: _normalize, linked: _linked, type: _type } = ctx;
          return _normalize(["\u0E2D\u0E22\u0E48\u0E32\u0E25\u0E37\u0E21\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E42\u0E14\u0E22\u0E43\u0E0A\u0E49 ", _linked("settings.notifications.push_notifications.save_settings", void 0, _type), " button!"]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E41\u0E1A\u0E1A\u0E1E\u0E38\u0E0A"]);
        },
        "policy": {
          "all": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0E08\u0E32\u0E01\u0E43\u0E04\u0E23\u0E01\u0E47\u0E15\u0E32\u0E21"]);
          },
          "followed": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0E08\u0E32\u0E01\u0E04\u0E19\u0E17\u0E35\u0E48\u0E09\u0E31\u0E19\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21"]);
          },
          "follower": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0E08\u0E32\u0E01\u0E04\u0E19\u0E17\u0E35\u0E48\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E04\u0E48\u0E30"]);
          },
          "none": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0E44\u0E21\u0E48\u0E23\u0E31\u0E1A"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0E09\u0E31\u0E19\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E08\u0E32\u0E01\u0E43\u0E04\u0E23\u0E44\u0E14\u0E49\u0E1A\u0E49\u0E32\u0E07"]);
          }
        },
        "save_settings": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"]);
        },
        "subscription_error": {
          "clear_error": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0E25\u0E49\u0E32\u0E07\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14"]);
          },
          "error_hint": (ctx) => {
            const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
            return _normalize(["\u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E14\u0E39\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E04\u0E33\u0E16\u0E32\u0E21\u0E17\u0E35\u0E48\u0E1E\u0E1A\u0E1A\u0E48\u0E2D\u0E22\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1E\u0E22\u0E32\u0E22\u0E32\u0E21\u0E41\u0E01\u0E49\u0E44\u0E02\u0E1B\u0E31\u0E0D\u0E2B\u0E32:", _interpolate(_list(0)), "."]);
          },
          "invalid_vapid_key": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0E23\u0E2B\u0E31\u0E2A\u0E2A\u0E32\u0E18\u0E32\u0E23\u0E13\u0E30 VAPID \u0E14\u0E39\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E08\u0E30\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07"]);
          },
          "permission_denied": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0E1B\u0E0F\u0E34\u0E40\u0E2A\u0E18\u0E01\u0E32\u0E23\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15: \u0E40\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E43\u0E19\u0E40\u0E1A\u0E23\u0E32\u0E27\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13"]);
          },
          "repo_link": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0E04\u0E25\u0E31\u0E07\u0E23\u0E2B\u0E31\u0E2A\u0E15\u0E49\u0E19\u0E09\u0E1A\u0E31\u0E1A\u0E02\u0E2D\u0E07 Elk \u0E17\u0E35\u0E48 GitHub"]);
          },
          "request_error": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E02\u0E13\u0E30\u0E02\u0E2D\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01 \u0E42\u0E1B\u0E23\u0E14\u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07 \u0E41\u0E25\u0E30\u0E2B\u0E32\u0E01\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E22\u0E31\u0E07\u0E04\u0E07\u0E2D\u0E22\u0E39\u0E48 \u0E42\u0E1B\u0E23\u0E14\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E02\u0E2D\u0E07 Elk \u0E17\u0E35\u0E48 GitHub"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E41\u0E1A\u0E1A\u0E1E\u0E38\u0E0A"]);
          },
          "too_many_registrations": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E02\u0E49\u0E2D\u0E08\u0E33\u0E01\u0E31\u0E14\u0E02\u0E2D\u0E07\u0E40\u0E1A\u0E23\u0E32\u0E27\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C Elk \u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E0A\u0E49\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E41\u0E1A\u0E1A\u0E1E\u0E38\u0E0A\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E2B\u0E25\u0E32\u0E22\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E1A\u0E19\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E17\u0E35\u0E48\u0E41\u0E15\u0E01\u0E15\u0E48\u0E32\u0E07\u0E01\u0E31\u0E19 \u0E04\u0E38\u0E13\u0E04\u0E27\u0E23\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E01\u0E32\u0E23\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E41\u0E1A\u0E1A\u0E1E\u0E38\u0E0A\u0E43\u0E19\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E2D\u0E37\u0E48\u0E19\u0E41\u0E25\u0E49\u0E27\u0E25\u0E2D\u0E07\u0E43\u0E2B\u0E21\u0E48\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07"]);
          },
          "vapid_not_supported": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0E40\u0E1A\u0E23\u0E32\u0E27\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E23\u0E2D\u0E07\u0E23\u0E31\u0E1A Web Push Notifications \u0E41\u0E15\u0E48\u0E14\u0E39\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E27\u0E48\u0E32\u0E08\u0E30\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E42\u0E1B\u0E23\u0E42\u0E15\u0E04\u0E2D\u0E25 VAPID"]);
          }
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E41\u0E1A\u0E1A\u0E1E\u0E38\u0E0A"]);
        },
        "undo_settings": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E40\u0E25\u0E34\u0E01\u0E17\u0E33\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07"]);
        },
        "unsubscribe": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E41\u0E1A\u0E1A\u0E1E\u0E38\u0E0A"]);
        },
        "unsupported": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E40\u0E1A\u0E23\u0E32\u0E27\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E44\u0E21\u0E48\u0E23\u0E2D\u0E07\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E41\u0E1A\u0E1A\u0E1E\u0E38\u0E0A"]);
        },
        "warning": {
          "enable_close": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0E1B\u0E34\u0E14"]);
          },
          "enable_description": (ctx) => {
            const { normalize: _normalize, linked: _linked, type: _type } = ctx;
            return _normalize(['\u0E2B\u0E32\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D Elk \u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E40\u0E1B\u0E34\u0E14\u0E2D\u0E22\u0E39\u0E48 \u0E43\u0E2B\u0E49\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E41\u0E1A\u0E1A\u0E1E\u0E38\u0E0A \u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E41\u0E21\u0E48\u0E19\u0E22\u0E33\u0E27\u0E48\u0E32\u0E01\u0E32\u0E23\u0E42\u0E15\u0E49\u0E15\u0E2D\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E43\u0E14\u0E17\u0E35\u0E48\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E41\u0E1A\u0E1A\u0E1E\u0E38\u0E0A\u0E1C\u0E48\u0E32\u0E19 "', _linked("settings.notifications.show_btn", void 0, _type), '"', " button above once enabled."]);
          },
          "enable_description_desktop": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(['\u0E2B\u0E32\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D Elk \u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E40\u0E1B\u0E34\u0E14\u0E2D\u0E22\u0E39\u0E48 \u0E43\u0E2B\u0E49\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E41\u0E1A\u0E1A\u0E1E\u0E38\u0E0A \u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E41\u0E21\u0E48\u0E19\u0E22\u0E33\u0E27\u0E48\u0E32\u0E01\u0E32\u0E23\u0E42\u0E15\u0E49\u0E15\u0E2D\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E43\u0E14\u0E17\u0E35\u0E48\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E41\u0E1A\u0E1A\u0E1E\u0E38\u0E0A "\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32 > \u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19 > \u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E41\u0E1A\u0E1A\u0E1E\u0E38\u0E0A" \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19']);
          },
          "enable_description_mobile": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(['\u0E04\u0E38\u0E13\u0E22\u0E31\u0E07\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E42\u0E14\u0E22\u0E43\u0E0A\u0E49\u0E40\u0E21\u0E19\u0E39\u0E01\u0E32\u0E23\u0E19\u0E33\u0E17\u0E32\u0E07 "\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32 > \u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19 > \u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E41\u0E1A\u0E1A\u0E1E\u0E38\u0E0A"']);
          },
          "enable_description_settings": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0E2B\u0E32\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D Elk \u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E40\u0E1B\u0E34\u0E14\u0E2D\u0E22\u0E39\u0E48 \u0E43\u0E2B\u0E49\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E41\u0E1A\u0E1A\u0E1E\u0E38\u0E0A \u0E04\u0E38\u0E13\u0E08\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E41\u0E21\u0E48\u0E19\u0E22\u0E33\u0E27\u0E48\u0E32\u0E01\u0E32\u0E23\u0E42\u0E15\u0E49\u0E15\u0E2D\u0E1A\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E43\u0E14\u0E17\u0E35\u0E48\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E41\u0E1A\u0E1A\u0E1E\u0E38\u0E0A\u0E1A\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D\u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19\u0E19\u0E35\u0E49\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E04\u0E38\u0E13\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19"]);
          },
          "enable_desktop": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E41\u0E1A\u0E1A\u0E1E\u0E38\u0E0A"]);
          },
          "enable_title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E44\u0E21\u0E48\u0E43\u0E2B\u0E49\u0E1E\u0E25\u0E32\u0E14\u0E2A\u0E34\u0E48\u0E07\u0E43\u0E14\u0E40\u0E25\u0E22"]);
          },
          "re_auth": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0E14\u0E39\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E27\u0E48\u0E32\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E44\u0E21\u0E48\u0E23\u0E2D\u0E07\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E41\u0E1A\u0E1A\u0E1E\u0E38\u0E0A \u0E25\u0E2D\u0E07\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A\u0E41\u0E25\u0E30\u0E25\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E43\u0E0A\u0E49\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07 \u0E2B\u0E32\u0E01\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E19\u0E35\u0E49\u0E22\u0E31\u0E07\u0E04\u0E07\u0E1B\u0E23\u0E32\u0E01\u0E0F\u0E02\u0E36\u0E49\u0E19 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E23\u0E30\u0E1A\u0E1A\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13"]);
          }
        }
      },
      "show_btn": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19"]);
      },
      "under_construction": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E2D\u0E22\u0E39\u0E48\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1E\u0E31\u0E12\u0E19\u0E32"]);
      }
    },
    "notifications_settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19"]);
    },
    "preferences": {
      "enable_autoplay": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E19\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34"]);
      },
      "enable_data_saving": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25"]);
      },
      "enable_data_saving_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E42\u0E14\u0E22\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E44\u0E21\u0E48\u0E43\u0E2B\u0E49\u0E44\u0E1F\u0E25\u0E4C\u0E41\u0E19\u0E1A\u0E42\u0E2B\u0E25\u0E14\u0E42\u0E14\u0E22\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34"]);
      },
      "enable_pinch_to_zoom": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E01\u0E32\u0E23\u0E1A\u0E35\u0E1A\u0E19\u0E34\u0E49\u0E27\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E0B\u0E39\u0E21"]);
      },
      "github_cards": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E01\u0E32\u0E23\u0E4C\u0E14 GitHub"]);
      },
      "grayscale_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E42\u0E2B\u0E21\u0E14\u0E2A\u0E35\u0E40\u0E17\u0E32"]);
      },
      "hide_account_hover_card": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E0B\u0E48\u0E2D\u0E19\u0E42\u0E2E\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E01\u0E32\u0E23\u0E4C\u0E14"]);
      },
      "hide_alt_indi_on_posts": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E0B\u0E48\u0E2D\u0E19\u0E15\u0E31\u0E27\u0E1A\u0E48\u0E07\u0E0A\u0E35\u0E49 alt \u0E43\u0E19\u0E42\u0E1E\u0E2A\u0E15\u0E4C"]);
      },
      "hide_boost_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E0B\u0E48\u0E2D\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E01\u0E32\u0E23\u0E14\u0E31\u0E19"]);
      },
      "hide_favorite_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E0B\u0E48\u0E2D\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E42\u0E1B\u0E23\u0E14"]);
      },
      "hide_follower_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E0B\u0E48\u0E2D\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21/\u0E1C\u0E39\u0E49\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21"]);
      },
      "hide_news": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E0B\u0E48\u0E2D\u0E19\u0E02\u0E48\u0E32\u0E27"]);
      },
      "hide_reply_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E0B\u0E48\u0E2D\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E01\u0E32\u0E23\u0E15\u0E2D\u0E1A\u0E01\u0E25\u0E31\u0E1A"]);
      },
      "hide_translation": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E0B\u0E48\u0E2D\u0E19\u0E04\u0E33\u0E41\u0E1B\u0E25"]);
      },
      "hide_username_emojis": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E0B\u0E48\u0E2D\u0E19\u0E2D\u0E35\u0E42\u0E21\u0E08\u0E34\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49"]);
      },
      "hide_username_emojis_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E0B\u0E48\u0E2D\u0E19\u0E2D\u0E35\u0E42\u0E21\u0E08\u0E34\u0E08\u0E32\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E44\u0E17\u0E21\u0E4C\u0E44\u0E25\u0E19\u0E4C \u0E2D\u0E34\u0E42\u0E21\u0E08\u0E34\u0E08\u0E30\u0E22\u0E31\u0E07\u0E04\u0E07\u0E21\u0E2D\u0E07\u0E40\u0E2B\u0E47\u0E19\u0E44\u0E14\u0E49\u0E43\u0E19\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E1E\u0E27\u0E01\u0E40\u0E02\u0E32"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E04\u0E38\u0E13\u0E2A\u0E21\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E17\u0E14\u0E25\u0E2D\u0E07"]);
      },
      "use_star_favorite_icon": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E43\u0E0A\u0E49\u0E44\u0E2D\u0E04\u0E2D\u0E19\u0E14\u0E32\u0E27\u0E0A\u0E37\u0E48\u0E19\u0E0A\u0E2D\u0E1A"]);
      },
      "user_picker": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49"]);
      },
      "virtual_scroll": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E2A\u0E21\u0E37\u0E2D\u0E19"]);
      },
      "wellbeing": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E2A\u0E27\u0E31\u0E2A\u0E14\u0E34\u0E20\u0E32\u0E1E"]);
      },
      "zen_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E42\u0E2B\u0E21\u0E14\u0E40\u0E0B\u0E47\u0E19"]);
      },
      "zen_mode_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E0B\u0E48\u0E2D\u0E19\u0E44\u0E27\u0E49\u0E02\u0E49\u0E32\u0E07 \u0E46 \u0E40\u0E27\u0E49\u0E19\u0E41\u0E15\u0E48\u0E40\u0E04\u0E2D\u0E23\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E02\u0E2D\u0E07\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E08\u0E30\u0E2D\u0E22\u0E39\u0E48\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E1E\u0E27\u0E01\u0E40\u0E02\u0E32 \u0E0B\u0E48\u0E2D\u0E19\u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E1A\u0E32\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E08\u0E32\u0E01\u0E44\u0E17\u0E21\u0E4C\u0E44\u0E25\u0E19\u0E4C\u0E14\u0E49\u0E27\u0E22"]);
      }
    },
    "profile": {
      "appearance": {
        "bio": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34"]);
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E41\u0E01\u0E49\u0E44\u0E02\u0E2D\u0E27\u0E32\u0E15\u0E32\u0E23\u0E4C \u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49 \u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C \u0E2F\u0E25\u0E2F"]);
        },
        "display_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E0A\u0E37\u0E48\u0E2D\u0E17\u0E35\u0E48\u0E41\u0E2A\u0E14\u0E07"]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E23\u0E39\u0E1B\u0E23\u0E48\u0E32\u0E07"]);
        },
        "profile_metadata": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E21\u0E15\u0E32\u0E02\u0E2D\u0E07\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C"]);
        },
        "profile_metadata_desc": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
          return _normalize(["\u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E21\u0E35\u0E44\u0E14\u0E49\u0E16\u0E36\u0E07 ", _interpolate(_list(0)), " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E41\u0E2A\u0E14\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E32\u0E23\u0E32\u0E07\u0E43\u0E19\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13"]);
        },
        "profile_metadata_label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E1B\u0E49\u0E32\u0E22"]);
        },
        "profile_metadata_value": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E41\u0E01\u0E49\u0E44\u0E02\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C"]);
        }
      },
      "featured_tags": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E1C\u0E39\u0E49\u0E04\u0E19\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E23\u0E35\u0E22\u0E01\u0E14\u0E39\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E2A\u0E32\u0E18\u0E32\u0E23\u0E13\u0E30\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E20\u0E32\u0E22\u0E43\u0E15\u0E49\u0E41\u0E2E\u0E0A\u0E41\u0E17\u0E47\u0E01\u0E40\u0E2B\u0E25\u0E48\u0E32\u0E19\u0E35\u0E49"]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0E41\u0E2E\u0E0A\u0E41\u0E17\u0E47\u0E01\u0E40\u0E14\u0E48\u0E19"]);
        }
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C"]);
      }
    },
    "select_a_settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Select a setting"]);
    },
    "users": {
      "export": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E2A\u0E48\u0E07\u0E2D\u0E2D\u0E01\u0E42\u0E17\u0E40\u0E04\u0E47\u0E19\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49"]);
      },
      "import": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E19\u0E33\u0E40\u0E02\u0E49\u0E32\u0E42\u0E17\u0E40\u0E04\u0E47\u0E19\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E17\u0E35\u0E48\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E41\u0E25\u0E49\u0E27"]);
      }
    }
  },
  "share-target": {
    "description": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E48\u0E32 Elk \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E04\u0E38\u0E13\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E0A\u0E23\u0E4C\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E08\u0E32\u0E01\u0E41\u0E2D\u0E1B\u0E1E\u0E25\u0E34\u0E40\u0E04\u0E0A\u0E31\u0E19\u0E2D\u0E37\u0E48\u0E19\u0E46 \u0E44\u0E14\u0E49 \u0E40\u0E1E\u0E35\u0E22\u0E07\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 Elk \u0E1A\u0E19\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C\u0E2B\u0E23\u0E37\u0E2D\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E41\u0E25\u0E49\u0E27\u0E25\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E43\u0E0A\u0E49"]);
    },
    "hint": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E43\u0E19\u0E01\u0E32\u0E23\u0E41\u0E1A\u0E48\u0E07\u0E1B\u0E31\u0E19\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E01\u0E31\u0E1A Elk \u0E08\u0E30\u0E15\u0E49\u0E2D\u0E07\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 Elk \u0E41\u0E25\u0E30\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E43\u0E0A\u0E49"]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E41\u0E1A\u0E48\u0E07\u0E1B\u0E31\u0E19\u0E01\u0E31\u0E1A Elk"]);
    }
  },
  "state": {
    "attachments_exceed_server_limit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E08\u0E33\u0E19\u0E27\u0E19\u0E44\u0E1F\u0E25\u0E4C\u0E41\u0E19\u0E1A\u0E40\u0E01\u0E34\u0E19\u0E02\u0E35\u0E14\u0E08\u0E33\u0E01\u0E31\u0E14\u0E15\u0E48\u0E2D\u0E42\u0E1E\u0E2A\u0E15\u0E4C"]);
    },
    "attachments_limit_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E01\u0E34\u0E19\u0E02\u0E35\u0E14\u0E08\u0E33\u0E01\u0E31\u0E14\u0E15\u0E48\u0E2D\u0E42\u0E1E\u0E2A\u0E15\u0E4C"]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["(\u0E41\u0E01\u0E49\u0E44\u0E02\u0E41\u0E25\u0E49\u0E27)"]);
    },
    "editing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E01\u0E33\u0E25\u0E31\u0E07\u0E41\u0E01\u0E49\u0E44\u0E02"]);
    },
    "loading": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E01\u0E33\u0E25\u0E31\u0E07\u0E42\u0E2B\u0E25\u0E14..."]);
    },
    "publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E25\u0E49\u0E21\u0E40\u0E2B\u0E25\u0E27"]);
    },
    "publishing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E01\u0E33\u0E25\u0E31\u0E07\u0E42\u0E1E\u0E2A\u0E15\u0E4C"]);
    },
    "upload_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E25\u0E49\u0E21\u0E40\u0E2B\u0E25\u0E27"]);
    },
    "uploading": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14..."]);
    }
  },
  "status": {
    "account": {
      "suspended_message": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E17\u0E35\u0E48\u0E21\u0E35\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E19\u0E35\u0E49\u0E16\u0E39\u0E01\u0E23\u0E30\u0E07\u0E31\u0E1A"]);
      },
      "suspended_show": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E41\u0E2A\u0E14\u0E07\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E2B\u0E32?"]);
      }
    },
    "boosted_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E14\u0E31\u0E19\u0E42\u0E14\u0E22"]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E41\u0E01\u0E49\u0E44\u0E02 ", _interpolate(_list(0))]);
    },
    "favourited_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E0A\u0E37\u0E48\u0E2D\u0E0A\u0E2D\u0E1A\u0E42\u0E14\u0E22"]);
    },
    "filter_hidden_phrase": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E01\u0E23\u0E2D\u0E07\u0E42\u0E14\u0E22"]);
    },
    "filter_show_anyway": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E41\u0E2A\u0E14\u0E07"]);
    },
    "img_alt": {
      "ALT": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["ALT"]);
      },
      "desc": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E1A"]);
      },
      "dismiss": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01"]);
      },
      "read": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0E2D\u0E48\u0E32\u0E19 ", _interpolate(_list(0)), " \u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"]);
      }
    },
    "poll": {
      "count": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
        return _plural([_normalize([_interpolate(_list(0)), " \u0E42\u0E2B\u0E27\u0E15"]), _normalize([_interpolate(_list(0)), " \u0E42\u0E2B\u0E27\u0E15"]), _normalize([_interpolate(_list(0)), " \u0E42\u0E2B\u0E27\u0E15"])]);
      },
      "ends": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0E08\u0E1A ", _interpolate(_list(0))]);
      },
      "finished": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14 ", _interpolate(_list(0))]);
      }
    },
    "replying_to": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E15\u0E2D\u0E1A\u0E01\u0E25\u0E31\u0E1A ", _interpolate(_list(0))]);
    },
    "show_full_thread": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E41\u0E2A\u0E14\u0E07\u0E40\u0E18\u0E23\u0E14\u0E40\u0E15\u0E47\u0E21"]);
    },
    "someone": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1A\u0E32\u0E07\u0E04\u0E19"]);
    },
    "spoiler_media_hidden": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2A\u0E37\u0E48\u0E2D\u0E17\u0E35\u0E48\u0E0B\u0E48\u0E2D\u0E19\u0E2D\u0E22\u0E39\u0E48"]);
    },
    "spoiler_show_less": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E41\u0E2A\u0E14\u0E07\u0E25\u0E14\u0E25\u0E07"]);
    },
    "spoiler_show_more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E41\u0E2A\u0E14\u0E07\u0E21\u0E32\u0E01\u0E02\u0E36\u0E49\u0E19"]);
    },
    "thread": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E18\u0E23\u0E14"]);
    },
    "try_original_site": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E25\u0E2D\u0E07\u0E44\u0E0B\u0E15\u0E4C\u0E40\u0E14\u0E34\u0E21"]);
    }
  },
  "status_history": {
    "created": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E41\u0E25\u0E49\u0E27 ", _interpolate(_list(0))]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E41\u0E01\u0E49\u0E44\u0E02\u0E41\u0E25\u0E49\u0E27 ", _interpolate(_list(0))]);
    }
  },
  "tab": {
    "accounts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1A\u0E31\u0E0D\u0E0A\u0E35"]);
    },
    "for_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E04\u0E38\u0E13"]);
    },
    "hashtags": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E41\u0E2E\u0E0A\u0E41\u0E17\u0E47\u0E01"]);
    },
    "list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"]);
    },
    "media": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2A\u0E37\u0E48\u0E2D"]);
    },
    "news": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E02\u0E48\u0E32\u0E27"]);
    },
    "notifications_all": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"]);
    },
    "notifications_mention": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E01\u0E25\u0E48\u0E32\u0E27\u0E16\u0E36\u0E07"]);
    },
    "posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E42\u0E1E\u0E2A\u0E15\u0E4C"]);
    },
    "posts_with_replies": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E42\u0E1E\u0E2A\u0E15\u0E4C & \u0E15\u0E2D\u0E1A\u0E01\u0E25\u0E31\u0E1A"]);
    }
  },
  "tag": {
    "follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21"]);
    },
    "follow_label": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21 ", _interpolate(_list(0)), " \u0E41\u0E17\u0E47\u0E01"]);
    },
    "unfollow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E25\u0E34\u0E01\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21"]);
    },
    "unfollow_label": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E40\u0E25\u0E34\u0E01\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21 ", _interpolate(_list(0)), " \u0E41\u0E17\u0E47\u0E01"]);
    }
  },
  "time_ago_options": {
    "day_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0E43\u0E19 0 \u0E27\u0E31\u0E19"]), _normalize(["\u0E1E\u0E23\u0E38\u0E48\u0E07\u0E19\u0E35\u0E49"]), _normalize(["\u0E43\u0E19 ", _interpolate(_named("n")), " \u0E27\u0E31\u0E19"])]);
    },
    "day_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0 \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27"]), _normalize(["\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E27\u0E32\u0E19"]), _normalize([_interpolate(_named("n")), " \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27"])]);
    },
    "hour_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0E43\u0E19 0 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07"]), _normalize(["\u0E43\u0E19 1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07"]), _normalize(["\u0E43\u0E19 ", _interpolate(_named("n")), " \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07"])]);
    },
    "hour_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27"]), _normalize(["1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27"]), _normalize([_interpolate(_named("n")), " \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27"])]);
    },
    "just_now": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E14\u0E35\u0E4B\u0E22\u0E27\u0E19\u0E35\u0E49"]);
    },
    "minute_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0E43\u0E19 0 \u0E19\u0E32\u0E17\u0E35"]), _normalize(["\u0E43\u0E19 1 \u0E19\u0E32\u0E17\u0E35"]), _normalize(["\u0E43\u0E19 ", _interpolate(_named("n")), " \u0E19\u0E32\u0E17\u0E35"])]);
    },
    "minute_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0 \u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27"]), _normalize(["1 \u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27"]), _normalize([_interpolate(_named("n")), " \u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27"])]);
    },
    "month_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0E43\u0E19 0 \u0E40\u0E14\u0E37\u0E2D\u0E19"]), _normalize(["\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32"]), _normalize(["\u0E43\u0E19 ", _interpolate(_named("n")), " \u0E40\u0E14\u0E37\u0E2D\u0E19"])]);
    },
    "month_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0 \u0E40\u0E14\u0E37\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27"]), _normalize(["\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27"]), _normalize([_interpolate(_named("n")), " \u0E40\u0E14\u0E37\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27"])]);
    },
    "second_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0E40\u0E14\u0E35\u0E4B\u0E22\u0E27\u0E19\u0E35\u0E49"]), _normalize(["\u0E43\u0E19 ", _interpolate(_named("n")), " \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35"]), _normalize(["\u0E43\u0E19 ", _interpolate(_named("n")), " \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35"])]);
    },
    "second_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0E40\u0E14\u0E35\u0E4B\u0E22\u0E27\u0E19\u0E35\u0E49"]), _normalize([_interpolate(_named("n")), " \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27"]), _normalize([_interpolate(_named("n")), " \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27"])]);
    },
    "short_day_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0E43\u0E19 ", _interpolate(_named("n")), "\u0E27."]);
    },
    "short_day_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u0E27."]);
    },
    "short_hour_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0E43\u0E19 ", _interpolate(_named("n")), "\u0E0A\u0E21."]);
    },
    "short_hour_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u0E0A\u0E21."]);
    },
    "short_minute_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0E43\u0E19 ", _interpolate(_named("n")), "\u0E19\u0E32."]);
    },
    "short_minute_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u0E19\u0E32."]);
    },
    "short_month_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0E43\u0E19 ", _interpolate(_named("n")), "\u0E14."]);
    },
    "short_month_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u0E14."]);
    },
    "short_second_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0E43\u0E19 ", _interpolate(_named("n")), "\u0E27\u0E34\u0E2F"]);
    },
    "short_second_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u0E27\u0E34\u0E2F"]);
    },
    "short_week_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0E43\u0E19 ", _interpolate(_named("n")), "\u0E2A\u0E31\u0E1B\u0E2F"]);
    },
    "short_week_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u0E2A\u0E31\u0E1B\u0E2F"]);
    },
    "short_year_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0E43\u0E19 ", _interpolate(_named("n")), "\u0E1B\u0E35"]);
    },
    "short_year_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "\u0E1B\u0E35"]);
    },
    "week_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0E43\u0E19 0 \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C"]), _normalize(["\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C\u0E2B\u0E19\u0E49\u0E32"]), _normalize(["\u0E43\u0E19 ", _interpolate(_named("n")), " \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C"])]);
    },
    "week_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0 \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27"]), _normalize(["\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27"]), _normalize([_interpolate(_named("n")), " \u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27"])]);
    },
    "year_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0E43\u0E19 0 \u0E1B\u0E35"]), _normalize(["\u0E1B\u0E35\u0E2B\u0E19\u0E49\u0E32"]), _normalize(["\u0E43\u0E19 ", _interpolate(_named("n")), " \u0E1B\u0E35"])]);
    },
    "year_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0 \u0E1B\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27"]), _normalize(["\u0E1B\u0E35\u0E01\u0E48\u0E2D\u0E19"]), _normalize([_interpolate(_named("n")), " \u0E1B\u0E35\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27"])]);
    }
  },
  "timeline": {
    "show_new_items": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0E41\u0E2A\u0E14\u0E07\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E43\u0E2B\u0E21\u0E48 ", _interpolate(_named("v"))]), _normalize(["\u0E41\u0E2A\u0E14\u0E07\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E43\u0E2B\u0E21\u0E48 ", _interpolate(_named("v"))]), _normalize(["\u0E41\u0E2A\u0E14\u0E07\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E43\u0E2B\u0E21\u0E48 ", _interpolate(_named("v"))])]);
    },
    "view_older_posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E01\u0E48\u0E32\u0E01\u0E27\u0E48\u0E32\u0E08\u0E32\u0E01\u0E2D\u0E34\u0E19\u0E2A\u0E41\u0E15\u0E19\u0E0B\u0E4C\u0E2D\u0E37\u0E48\u0E19\u0E2D\u0E32\u0E08\u0E44\u0E21\u0E48\u0E41\u0E2A\u0E14\u0E07"]);
    }
  },
  "title": {
    "federated_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E2A\u0E49\u0E19\u0E40\u0E27\u0E25\u0E32\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22"]);
    },
    "local_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E2A\u0E49\u0E19\u0E40\u0E27\u0E25\u0E32\u0E17\u0E49\u0E2D\u0E07\u0E16\u0E34\u0E48\u0E19"]);
    }
  },
  "tooltip": {
    "add_content_warning": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E04\u0E33\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32"]);
    },
    "add_emojis": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2D\u0E34\u0E42\u0E21\u0E08\u0E34"]);
    },
    "add_media": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E \u0E27\u0E34\u0E14\u0E35\u0E42\u0E2D \u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E2A\u0E35\u0E22\u0E07"]);
    },
    "add_publishable_content": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E17\u0E35\u0E48\u0E08\u0E30\u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48"]);
    },
    "change_content_visibility": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E1C\u0E22\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32"]);
    },
    "change_language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E20\u0E32\u0E29\u0E32"]);
    },
    "emoji": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2D\u0E35\u0E42\u0E21\u0E08\u0E34"]);
    },
    "explore_links_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E23\u0E32\u0E27\u0E02\u0E48\u0E32\u0E27\u0E40\u0E2B\u0E25\u0E48\u0E32\u0E19\u0E35\u0E49\u0E01\u0E33\u0E25\u0E31\u0E07\u0E16\u0E39\u0E01\u0E1E\u0E39\u0E14\u0E16\u0E36\u0E07\u0E42\u0E14\u0E22\u0E1C\u0E39\u0E49\u0E04\u0E19\u0E43\u0E19\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E19\u0E35\u0E49\u0E41\u0E25\u0E30\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E2D\u0E37\u0E48\u0E19 \u0E46 \u0E02\u0E2D\u0E07\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22\u0E41\u0E1A\u0E1A\u0E01\u0E23\u0E30\u0E08\u0E32\u0E22\u0E28\u0E39\u0E19\u0E22\u0E4C\u0E43\u0E19\u0E02\u0E13\u0E30\u0E19\u0E35\u0E49"]);
    },
    "explore_posts_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E40\u0E2B\u0E25\u0E48\u0E32\u0E19\u0E35\u0E49\u0E08\u0E32\u0E01\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E19\u0E35\u0E49\u0E41\u0E25\u0E30\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E2D\u0E37\u0E48\u0E19 \u0E46 \u0E43\u0E19\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22\u0E41\u0E1A\u0E1A\u0E01\u0E23\u0E30\u0E08\u0E32\u0E22\u0E2D\u0E33\u0E19\u0E32\u0E08\u0E01\u0E33\u0E25\u0E31\u0E07\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E19\u0E43\u0E08\u0E1A\u0E19\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E19\u0E35\u0E49\u0E43\u0E19\u0E02\u0E13\u0E30\u0E19\u0E35\u0E49"]);
    },
    "explore_tags_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E41\u0E2E\u0E0A\u0E41\u0E17\u0E47\u0E01\u0E40\u0E2B\u0E25\u0E48\u0E32\u0E19\u0E35\u0E49\u0E01\u0E33\u0E25\u0E31\u0E07\u0E14\u0E36\u0E07\u0E14\u0E39\u0E14\u0E1C\u0E39\u0E49\u0E04\u0E19\u0E43\u0E19\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E19\u0E35\u0E49\u0E41\u0E25\u0E30\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E2D\u0E37\u0E48\u0E19 \u0E46 \u0E02\u0E2D\u0E07\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22\u0E41\u0E1A\u0E1A\u0E01\u0E23\u0E30\u0E08\u0E32\u0E22\u0E28\u0E39\u0E19\u0E22\u0E4C\u0E43\u0E19\u0E02\u0E13\u0E30\u0E19\u0E35\u0E49"]);
    },
    "open_editor_tools": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E41\u0E01\u0E49\u0E44\u0E02"]);
    },
    "pick_an_icon": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E2D\u0E04\u0E2D\u0E19"]);
    },
    "publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1B\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E35\u0E48\u0E25\u0E49\u0E21\u0E40\u0E2B\u0E25\u0E27\u0E17\u0E35\u0E48\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19\u0E02\u0E2D\u0E07\u0E40\u0E2D\u0E14\u0E34\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48\u0E42\u0E1E\u0E2A\u0E15\u0E4C\u0E43\u0E2B\u0E21\u0E48"]);
    },
    "toggle_bold": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2A\u0E25\u0E31\u0E1A\u0E15\u0E31\u0E27\u0E2B\u0E19\u0E32"]);
    },
    "toggle_code_block": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2A\u0E25\u0E31\u0E1A\u0E42\u0E04\u0E49\u0E14\u0E1A\u0E25\u0E47\u0E2D\u0E01"]);
    },
    "toggle_italic": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2A\u0E25\u0E31\u0E1A\u0E15\u0E31\u0E27\u0E40\u0E2D\u0E35\u0E22\u0E07"]);
    }
  },
  "user": {
    "add_existing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E17\u0E35\u0E48\u0E21\u0E35\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27"]);
    },
    "server_address_label": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E17\u0E35\u0E48\u0E02\u0E2D\u0E07\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E21\u0E32\u0E2A\u0E42\u0E15\u0E14\u0E2D\u0E19"]);
    },
    "sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E25\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E43\u0E0A\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E2B\u0E23\u0E37\u0E2D\u0E41\u0E2E\u0E0A\u0E41\u0E17\u0E47\u0E01 \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E42\u0E1B\u0E23\u0E14 \u0E41\u0E0A\u0E23\u0E4C\u0E41\u0E25\u0E30\u0E15\u0E2D\u0E1A\u0E01\u0E25\u0E31\u0E1A\u0E42\u0E1E\u0E2A\u0E15\u0E4C \u0E2B\u0E23\u0E37\u0E2D\u0E42\u0E15\u0E49\u0E15\u0E2D\u0E1A\u0E08\u0E32\u0E01\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E1A\u0E19\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E2D\u0E37\u0E48\u0E19"]);
    },
    "sign_in_notice_title": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E01\u0E33\u0E25\u0E31\u0E07\u0E14\u0E39\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E32\u0E18\u0E32\u0E23\u0E13\u0E30 ", _interpolate(_list(0))]);
    },
    "sign_out_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E25\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E2D\u0E2D\u0E01 ", _interpolate(_list(0))]);
    },
    "single_instance_sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E25\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E43\u0E0A\u0E49\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E2B\u0E23\u0E37\u0E2D\u0E41\u0E2E\u0E0A\u0E41\u0E17\u0E47\u0E01 \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E42\u0E1B\u0E23\u0E14 \u0E41\u0E0A\u0E23\u0E4C \u0E41\u0E25\u0E30\u0E15\u0E2D\u0E1A\u0E01\u0E25\u0E31\u0E1A\u0E42\u0E1E\u0E2A\u0E15\u0E4C"]);
    },
    "tip_no_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0E2B\u0E32\u0E01\u0E04\u0E38\u0E13\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E21\u0E32\u0E2A\u0E42\u0E15\u0E14\u0E2D\u0E19 ", _interpolate(_list(0))]);
    },
    "tip_register_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E0B\u0E34\u0E23\u0E4C\u0E1F\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E41\u0E25\u0E30\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19"]);
    }
  },
  "visibility": {
    "direct": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2A\u0E48\u0E07\u0E15\u0E23\u0E07"]);
    },
    "direct_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E21\u0E2D\u0E07\u0E40\u0E2B\u0E47\u0E19\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E01\u0E25\u0E48\u0E32\u0E27\u0E16\u0E36\u0E07"]);
    },
    "private": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1C\u0E39\u0E49\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19"]);
    },
    "private_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E1C\u0E39\u0E49\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19\u0E17\u0E35\u0E48\u0E21\u0E2D\u0E07\u0E40\u0E2B\u0E47\u0E19"]);
    },
    "public": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E2A\u0E32\u0E18\u0E32\u0E23\u0E13\u0E30"]);
    },
    "public_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E17\u0E38\u0E01\u0E04\u0E19\u0E21\u0E2D\u0E07\u0E40\u0E2B\u0E47\u0E19"]);
    },
    "unlisted": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E44\u0E21\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"]);
    },
    "unlisted_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0E17\u0E38\u0E01\u0E04\u0E19\u0E21\u0E2D\u0E07\u0E40\u0E2B\u0E47\u0E19\u0E41\u0E15\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E04\u0E38\u0E13\u0E2A\u0E21\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E04\u0E49\u0E19\u0E1E\u0E1A"]);
    }
  }
};

export { thTH as default };
