const ar = {
  "a11y": {
    "loading_page": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0635\u0641\u062D\u0629 \u0642\u064A\u062F \u0627\u0644\u062A\u062D\u0645\u064A\u0644\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631"]);
    },
    "loading_titled_page": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0627\u0644\u0635\u0641\u062D\u0629 ", _interpolate(_list(0)), " \u0642\u064A\u062F \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631"]);
    },
    "locale_changed": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u062A\u0645 \u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0644\u063A\u0629 \u0625\u0644\u0649 ", _interpolate(_list(0))]);
    },
    "locale_changing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u064A\u062A\u0645 \u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0644\u063A\u0629\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631"]);
    },
    "route_loaded": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u062A\u0645 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0635\u0641\u062D\u0629 ", _interpolate(_list(0))]);
    }
  },
  "account": {
    "avatar_description": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0635\u0648\u0631\u0629 \u062D\u0633\u0627\u0628 ", _interpolate(_list(0))]);
    },
    "blocked_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0645 \u062D\u0638\u0631\u0643 \u0645\u0646 \u0642\u0628\u0644 \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645"]);
    },
    "blocked_domains": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0646\u0637\u0627\u0642\u0627\u062A \u0627\u0644\u0645\u062D\u0638\u0648\u0631\u0629"]);
    },
    "blocked_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0648\u0646 \u0627\u0644\u0645\u062D\u0638\u0648\u0631\u0648\u0646"]);
    },
    "blocking": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u062D\u0638\u0648\u0631"]);
    },
    "bot": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062D\u0633\u0627\u0628 \u0622\u0644\u064A"]);
    },
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u0641\u0636\u0644\u0629"]);
    },
    "follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0625\u062A\u0628\u0639"]);
    },
    "follow_back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0625\u0639\u0627\u062F\u0629 \u0645\u062A\u0627\u0628\u0639\u0629"]);
    },
    "follow_requested": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0637\u0644\u0628\u062A \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629"]);
    },
    "followers": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u062A\u0627\u0628\u0650\u0639\u0648\u0646"]);
    },
    "followers_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize(["\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u062A\u0627\u0628\u0639\u0648\u0646"]), _normalize([_interpolate(_list(0)), " \u0645\u062A\u0627\u0628\u0650\u0639"]), _normalize([_interpolate(_list(0)), " \u0645\u062A\u0627\u0628\u0650\u0639\u064A\u0646"]), _normalize([_interpolate(_list(0)), " \u0645\u062A\u0627\u0628\u0650\u0639\u0648\u0646"]), _normalize([_interpolate(_list(0)), " \u0645\u062A\u0627\u0628\u0650\u0639"]), _normalize([_interpolate(_list(0)), " \u0645\u062A\u0627\u0628\u0650\u0639"])]);
    },
    "following": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u064F\u062A\u0627\u0628\u064E\u0639"]);
    },
    "following_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize(["\u0644\u0627 \u064A\u062A\u0628\u0639 \u0623\u062D\u062F\u0627"]), _normalize([_interpolate(_list(0)), " \u0645\u064F\u062A\u0627\u0628\u064E\u0639"]), _normalize([_interpolate(_list(0)), " \u0645\u064F\u062A\u0627\u0628\u064E\u0639\u064A\u0646"]), _normalize([_interpolate(_list(0)), " \u0645\u064F\u062A\u0627\u0628\u064E\u0639\u0648\u0646"]), _normalize([_interpolate(_list(0)), " \u0645\u064F\u062A\u0627\u0628\u064E\u0639"]), _normalize([_interpolate(_list(0)), " \u0645\u064F\u062A\u0627\u0628\u064E\u0639"])]);
    },
    "follows_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u064A\u062A\u0627\u0628\u0639\u0643"]);
    },
    "go_to_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0639\u0631\u0636 \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u0639\u0631\u064A\u0641\u064A\u0629"]);
    },
    "joined": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0646\u0636\u0645"]);
    },
    "moved_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0623\u0634\u0627\u0631 \u0625\u0644\u0649 \u0623\u0646 \u062D\u0633\u0627\u0628\u0647\u0645 \u0627\u0644\u062C\u062F\u064A\u062F \u0623\u0635\u0628\u062D \u0639\u0644\u0649"]);
    },
    "muted_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0648\u0646 \u0627\u0644\u0645\u0643\u062A\u0648\u0645\u0648\u0646"]);
    },
    "muting": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0642\u064F\u0645\u062A \u0628\u0643\u062A\u0645"]);
    },
    "mutuals": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u062A\u0628\u0627\u062F\u0644\u0648\u0646"]);
    },
    "notifications_on_post_disable": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0627\u0644\u062A\u0648\u0642\u0641 \u0639\u0646 \u0625\u0634\u0639\u0627\u0631\u064A \u0639\u0646\u062F\u0645\u0627 \u064A\u0646\u0634\u0631 ", _interpolate(_named("username"))]);
    },
    "notifications_on_post_enable": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0625\u0634\u0639\u0627\u0631\u064A \u0639\u0646\u062F\u0645\u0627 \u064A\u0646\u0634\u0631 ", _interpolate(_named("username"))]);
    },
    "pinned": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u062B\u0628\u062A\u0629"]);
    },
    "posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u0646\u0634\u0648\u0631\u0627\u062A"]);
    },
    "posts_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_list(0)), " \u0645\u0646\u0634\u0648\u0631\u0627\u062A"]), _normalize([_interpolate(_list(0)), " \u0645\u0646\u0634\u0648\u0631"]), _normalize([_interpolate(_list(0)), " \u0645\u0646\u0634\u0648\u0631\u064A\u0646"]), _normalize([_interpolate(_list(0)), " \u0645\u0646\u0634\u0648\u0631\u0627\u062A"]), _normalize([_interpolate(_list(0)), " \u0645\u0646\u0634\u0648\u0631"]), _normalize([_interpolate(_list(0)), " \u0645\u0646\u0634\u0648\u0631"])]);
    },
    "profile_description": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u0631\u0623\u0633\u064A\u0629 \u062D\u0633\u0627\u0628"]);
    },
    "profile_personal_note": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0644\u0627\u062D\u0638\u0629 \u0634\u062E\u0635\u064A\u0629"]);
    },
    "profile_unavailable": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062D\u0633\u0627\u0628 \u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631"]);
    },
    "request_follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0637\u0644\u0628 \u0645\u062A\u0627\u0628\u0639\u0629"]);
    },
    "unblock": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0625\u0644\u063A\u0627\u0621 \u062D\u0638\u0631"]);
    },
    "unfollow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0625\u0644\u063A\u0627\u0621 \u0645\u062A\u0627\u0628\u0639\u0629"]);
    },
    "unmute": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0625\u0644\u063A\u0627\u0621 \u0643\u062A\u0645"]);
    },
    "view_other_followers": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0642\u062F \u0644\u0627 \u064A\u062A\u0645 \u0639\u0631\u0636 \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u064A\u0646 \u0645\u0646 \u062E\u0648\u0627\u062F\u0645 \u0645\u062E\u062A\u0644\u0641\u064A\u0646 \u0639\u0646 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643."]);
    },
    "view_other_following": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0642\u062F \u0644\u0627 \u064A\u062A\u0645 \u0639\u0631\u0636 \u0645\u0646 \u062A\u062A\u0627\u0628\u0639 \u0645\u0646 \u062E\u0648\u0627\u062F\u0645 \u0645\u062E\u062A\u0644\u0641\u064A\u0646 \u0639\u0646 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643."]);
    }
  },
  "action": {
    "apply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0637\u0628\u064A\u0642"]);
    },
    "bookmark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629"]);
    },
    "bookmarked": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0636\u0627\u0641 \u0625\u0644\u0649 \u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629"]);
    },
    "boost": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0625\u0639\u0627\u062F\u0629 \u0646\u0634\u0631"]);
    },
    "boost_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "boosted": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0623\u0639\u064A\u062F \u0646\u0634\u0631\u0647\u0627"]);
    },
    "clear_publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0633\u062D \u0623\u062E\u0637\u0627\u0621 \u0627\u0644\u0646\u0634\u0631"]);
    },
    "clear_upload_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0633\u062D \u0623\u062E\u0637\u0627\u0621 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0644\u0641"]);
    },
    "close": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0623\u063A\u0644\u0642"]);
    },
    "compose": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0646\u0634\u0648\u0631 \u062C\u062F\u064A\u062F"]);
    },
    "confirm": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0623\u0643\u062F"]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0639\u062F\u064A\u0644"]);
    },
    "enter_app": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0623\u062F\u062E\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642"]);
    },
    "favourite": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u0641\u0636\u0644\u0629"]);
    },
    "favourite_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "favourited": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0636\u0627\u0641 \u0625\u0644\u0649 \u0627\u0644\u0645\u0641\u0636\u0644\u0629"]);
    },
    "more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u0632\u064A\u062F"]);
    },
    "next": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u062A\u0627\u0644\u064A"]);
    },
    "prev": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0633\u0627\u0628\u0642"]);
    },
    "publish": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0646\u0634\u0631"]);
    },
    "reply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0631\u062F"]);
    },
    "reply_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "reset": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0636\u0628\u0637"]);
    },
    "save": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062D\u0641\u0638"]);
    },
    "save_changes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062D\u0641\u0638 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A"]);
    },
    "sign_in": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644"]);
    },
    "sign_in_to": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0633\u062C\u0651\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0625\u0644\u0649 ", _interpolate(_list(0))]);
    },
    "switch_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u062D\u0633\u0627\u0628"]);
    },
    "vote": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0635\u0648\u064A\u062A"]);
    }
  },
  "app_desc_short": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["\u0645\u0646\u0635\u0629 \u062A\u0648\u0627\u0635\u0644 \u0645\u0627\u0633\u062A\u0648\u062F\u0648\u0646 \u0631\u0634\u064A\u0642\u0629"]);
  },
  "app_logo": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Elk \u0634\u0639\u0627\u0631"]);
  },
  "app_name": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Elk"]);
  },
  "attachment": {
    "edit_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0648\u0635\u0641"]);
    },
    "remove_label": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0642\u0645 \u0628\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0645\u0631\u0641\u0642"]);
    }
  },
  "command": {
    "activate": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0641\u0639\u0644"]);
    },
    "complete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0623\u0643\u0645\u0644"]);
    },
    "compose_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0643\u062A\u0628 \u0645\u0646\u0634\u0648\u0631\u0627 \u062C\u062F\u064A\u062F\u0627"]);
    },
    "n-people-in-the-past-n-days": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " \u0623\u0634\u062E\u0627\u0635 \u0641\u064A \u0627\u0644\u0623\u064A\u0627\u0645 \u0627\u0644 ", _interpolate(_list(1)), " \u0627\u0644\u0645\u0627\u0636\u064A\u0629"]);
    },
    "select_lang": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u062E\u062A\u0631 \u0627\u0644\u0644\u063A\u0629"]);
    },
    "sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0625\u0636\u0627\u0641\u0629 \u062D\u0633\u0627\u0628 \u0642\u0627\u0626\u0645"]);
    },
    "switch_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0627\u0644\u062A\u0628\u062F\u064A\u0644 \u0625\u0644\u0649 ", _interpolate(_list(0))]);
    },
    "switch_account_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0642\u0645 \u0628\u0627\u0644\u062A\u0628\u062F\u064A\u0644 \u0625\u0644\u0649 \u062D\u0633\u0627\u0628 \u0622\u062E\u0631"]);
    },
    "toggle_dark_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0628\u062F\u064A\u0644 \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0644\u064A\u0644\u064A"]);
    },
    "toggle_zen_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0628\u062F\u064A\u0644 \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0647\u0627\u062F\u0626"]);
    }
  },
  "common": {
    "end_of_list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u0642\u0627\u0626\u0645\u0629"]);
    },
    "error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062D\u062F\u062B \u062E\u0637\u0623"]);
    },
    "fetching": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0641\u064A \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062C\u0644\u0628 ..."]);
    },
    "in": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0641\u064A"]);
    },
    "not_found": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["404 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F"]);
    },
    "offline_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u064A\u0628\u062F\u0648 \u0623\u0646\u0643 \u063A\u064A\u0631 \u0645\u062A\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A. \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u062A\u0635\u0627\u0644\u0643."]);
    }
  },
  "compose": {
    "draft_title": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0645\u0633\u0648\u062F\u0629 ", _interpolate(_list(0))]);
    },
    "drafts": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u0627\u0644\u0645\u0633\u0648\u062F\u0627\u062A (", _interpolate(_named("v")), ")"]);
    }
  },
  "confirm": {
    "block_account": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0625\u0644\u063A\u0627\u0621"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u062D\u0638\u0631"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0638\u0631 ", _interpolate(_list(0)), "\u061F"]);
      }
    },
    "block_domain": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0625\u0644\u063A\u0627\u0621"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u062D\u0638\u0631"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0638\u0631 ", _interpolate(_list(0)), "\u061F"]);
      }
    },
    "common": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0644\u0627"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0646\u0639\u0645"]);
      }
    },
    "delete_list": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0625\u0644\u063A\u0627\u0621"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u062D\u0630\u0641"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(['\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 "', _interpolate(_list(0)), '"\u061F']);
      }
    },
    "delete_posts": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0625\u0644\u063A\u0627\u0621"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u062D\u0630\u0641"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u0634\u0648\u0631\u061F"]);
      }
    },
    "mute_account": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0625\u0644\u063A\u0627\u0621"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0643\u062A\u0645"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u0643\u062A\u0645 ", _interpolate(_list(0)), "\u061F"]);
      }
    },
    "show_reblogs": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0625\u0644\u063A\u0627\u0621"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0627\u0639\u0631\u0636"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u0625\u0638\u0647\u0627\u0631 \u062A\u0639\u0632\u064A\u0632\u0627\u062A \u0645\u0646 ", _interpolate(_list(0)), "\u061F"]);
      }
    },
    "unfollow": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0625\u0644\u063A\u0627\u0621"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629\u061F"]);
      }
    }
  },
  "conversation": {
    "with": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0639"]);
    }
  },
  "custom_cards": {
    "stackblitz": {
      "lines": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0627\u0644\u062E\u0637\u0648\u0637 ", _interpolate(_list(0))]);
      },
      "open": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0627\u0641\u062A\u062D"]);
      },
      "snippet_from": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0645\u0642\u062A\u0637\u0641 \u0645\u0646 ", _interpolate(_list(0))]);
      }
    }
  },
  "error": {
    "account_not_found": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u062D\u0633\u0627\u0628 ", _interpolate(_list(0)), " \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F"]);
    },
    "explore-list-empty": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0634\u0627\u0631\u0643\u0627\u062A \u0634\u0627\u0626\u0639\u0629 \u0627\u0644\u0622\u0646. \u062A\u062D\u0642\u0642 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649 \u0644\u0627\u062D\u0642\u064B\u0627!"]);
    },
    "file_size_cannot_exceed_n_mb": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0644\u0627 \u064A\u0645\u0643\u0646 \u0623\u0646 \u064A\u062A\u062C\u0627\u0648\u0632 \u062D\u062C\u0645 \u0627\u0644\u0645\u0644\u0641 ", _interpolate(_list(0)), " \u0645\u064A\u063A\u0627\u0628\u0627\u064A\u062A"]);
    },
    "sign_in_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0644\u0627 \u064A\u0645\u0643\u0646 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u0645\u0648\u0642\u0639"]);
    },
    "status_not_found": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0644\u0627 \u064A\u0645\u0643\u0646 \u0625\u064A\u062C\u0627\u062F \u0627\u0644\u0645\u0646\u0634\u0648\u0631"]);
    },
    "unsupported_file_format": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0644\u0627 \u064A\u0645\u0643\u0646 \u062A\u062D\u0645\u064A\u0644 \u0647\u0630\u0627 \u0627\u0644\u0646\u0648\u0639 \u0645\u0646 \u0627\u0644\u0645\u0644\u0641\u0627\u062A"]);
    }
  },
  "help": {
    "build_preview": {
      "desc1": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0623\u0646\u062A \u062A\u0634\u0627\u0647\u062F \u062D\u0627\u0644\u064A\u064B\u0627 \u0625\u0635\u062F\u0627\u0631 \u0645\u0639\u0627\u064A\u0646\u0629 \u0645\u0646 Elk \u0639\u0627\u0645\u0629 - ", _interpolate(_list(0)), "."]);
      },
      "desc2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0642\u062F \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0644\u0645 \u062A\u062A\u0645 \u0645\u0631\u0627\u062C\u0639\u062A\u0647\u0627 \u0623\u0648 \u062D\u062A\u0649 \u0636\u0627\u0631\u0629."]);
      },
      "desc3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0644\u0627 \u062A\u0633\u062C\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u062D\u0633\u0627\u0628\u0643 \u0627\u0644\u062D\u0642\u064A\u0642\u064A."]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0645\u0639\u0627\u064A\u0646\u0629 \u0627\u0644\u0646\u0634\u0631"]);
      }
    },
    "desc_highlight": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0648\u0642\u0639 \u0628\u0639\u0636 \u0627\u0644\u0623\u062E\u0637\u0627\u0621 \u0648\u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u0645\u0641\u0642\u0648\u062F\u0629 \u0647\u0646\u0627 \u0648\u0647\u0646\u0627\u0643."]);
    },
    "desc_para1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0646\u0634\u0643\u0631\u0643 \u0639\u0644\u0649 \u0627\u0647\u062A\u0645\u0627\u0645\u0643 \u0628\u062A\u062C\u0631\u0628\u0629 Elk \u060C \u0639\u0645\u064A\u0644 \u0645\u0627\u0633\u062A\u062F\u0648\u0646 \u0627\u0644\u0639\u0627\u0645!"]);
    },
    "desc_para2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0646\u062D\u0646 \u0646\u0639\u0645\u0644 \u0628\u062C\u062F \u0639\u0644\u0649 \u0627\u0644\u062A\u0637\u0648\u064A\u0631 \u0648\u062A\u062D\u0633\u064A\u0646\u0647 \u0628\u0645\u0631\u0648\u0631 \u0627\u0644\u0648\u0642\u062A. \u0648\u0633\u0646\u062F\u0639\u0648\u0643 \u0642\u0631\u064A\u0628\u064B\u0627 \u0644\u0644\u0627\u0646\u0636\u0645\u0627\u0645 \u0625\u0644\u0649 \u0627\u0644\u0642\u0648\u0629 \u0628\u0645\u062C\u0631\u062F \u0623\u0646 \u0646\u062C\u0639\u0644\u0647\u0627 \u0645\u0641\u062A\u0648\u062D\u0629 \u0627\u0644\u0645\u0635\u062F\u0631 \u0642\u0631\u064A\u0628\u064B\u0627!"]);
    },
    "desc_para3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0642\u0628\u0644 \u0630\u0644\u0643 \u060C \u0644\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0641\u064A \u062A\u0639\u0632\u064A\u0632 \u0627\u0644\u062A\u0646\u0645\u064A\u0629 \u060C \u064A\u0645\u0643\u0646\u0643 \u0631\u0639\u0627\u064A\u0629 \u0623\u0639\u0636\u0627\u0621 \u0641\u0631\u064A\u0642\u0646\u0627 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u0631\u0648\u0627\u0628\u0637 \u0623\u062F\u0646\u0627\u0647."]);
    },
    "desc_para4": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0642\u0628\u0644 \u0630\u0644\u0643 \u060C \u0625\u0630\u0627 \u0643\u0646\u062A \u062A\u0631\u063A\u0628 \u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0641\u064A \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631 \u0623\u0648 \u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0623\u0648 \u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629 \u060C"]);
    },
    "desc_para5": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0639\u0644\u0649 GitHub"]);
    },
    "desc_para6": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0648 \u0634\u0627\u0631\u0643 \u0645\u0639\u0646\u0627"]);
    },
    "footer_team": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0641\u0631\u064A\u0642 Elk"]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk \u0641\u064A \u0639\u0631\u0636 \u0645\u0633\u0628\u0642"]);
    }
  },
  "language": {
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0628\u062D\u062B"]);
    }
  },
  "list": {
    "add_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0625\u0636\u0627\u0641\u0629 \u062D\u0633\u0627\u0628 \u0625\u0644\u0649 \u0627\u0644\u0642\u0627\u0626\u0645\u0629"]);
    },
    "cancel_edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u0639\u062F\u064A\u0644"]);
    },
    "clear_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0645\u0633\u062D \u0627\u0644\u062E\u0637\u0623"]);
    },
    "create": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0625\u062E\u0644\u0642"]);
    },
    "delete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u062D\u0630\u0641 \u0647\u0630\u0647 \u0627\u0644\u0642\u0627\u0626\u0645\u0629"]);
    },
    "delete_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062D\u0630\u0641 \u0627\u0644\u0642\u0627\u0626\u0645\u0629"]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0642\u0645 \u0628\u062A\u0639\u062F\u064A\u0644 \u0647\u0630\u0647 \u0627\u0644\u0642\u0627\u0626\u0645\u0629"]);
    },
    "edit_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0642\u0627\u0626\u0645\u0629"]);
    },
    "error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0642\u0627\u0626\u0645\u0629"]);
    },
    "error_prefix": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062E\u0637\u0623: "]);
    },
    "list_title_placeholder": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629"]);
    },
    "modify_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0642\u0648\u0627\u0626\u0645 \u0645\u0639 \u0627\u0644\u062D\u0633\u0627\u0628"]);
    },
    "remove_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u062D\u0633\u0627\u0628 \u0645\u0646 \u0627\u0644\u0642\u0627\u0626\u0645\u0629"]);
    },
    "save": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u062D\u0641\u0638 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A"]);
    }
  },
  "magic_keys": {
    "dialog_header": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u062E\u062A\u0635\u0627\u0631\u0627\u062A \u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0641\u0627\u062A\u064A\u062D"]);
    },
    "groups": {
      "actions": {
        "boost": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0625\u0639\u0627\u062F\u0629 \u0646\u0634\u0631"]);
        },
        "command_mode": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Command mode"]);
        },
        "compose": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0645\u0646\u0634\u0648\u0631 \u062C\u062F\u064A\u062F"]);
        },
        "favourite": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0625\u0639\u062C\u0627\u0628"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0623\u062C\u0631\u0627\u0621\u0627\u062A"]);
        },
        "zen_mode": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0648\u0636\u0639 Zen"]);
        }
      },
      "media": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0627\u0644\u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u0631\u0642\u0645\u064A\u0629"]);
        }
      },
      "navigation": {
        "go_to_home": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0651\u0629"]);
        },
        "go_to_notifications": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A"]);
        },
        "next_status": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u062A\u0627\u0644\u064A"]);
        },
        "previous_status": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0633\u0627\u0628\u0642"]);
        },
        "shortcut_help": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0627\u062E\u062A\u0635\u0627\u0631"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0645\u0644\u0627\u062D\u0629"]);
        }
      }
    },
    "sequence_then": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062B\u0645"]);
    }
  },
  "menu": {
    "add_personal_note": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0625\u0636\u0627\u0641\u0629 \u0645\u0644\u0627\u062D\u0638\u0629 \u0634\u062E\u0635\u064A\u0629 \u0625\u0644\u0649 ", _interpolate(_list(0))]);
    },
    "block_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u062D\u0638\u0631 ", _interpolate(_list(0))]);
    },
    "block_domain": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u062D\u0638\u0631 \u0627\u0644\u0645\u062C\u0627\u0644 ", _interpolate(_list(0))]);
    },
    "copy_link_to_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0646\u0633\u062E \u0627\u0644\u0631\u0627\u0628\u0637 \u0625\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u0634\u0648\u0631"]);
    },
    "copy_original_link_to_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0646\u0633\u062E \u0627\u0644\u0631\u0627\u0628\u0637 \u0627\u0644\u0623\u0635\u0644\u064A \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u0634\u0648\u0631"]);
    },
    "delete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062D\u0630\u0641"]);
    },
    "delete_and_redraft": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062D\u0630\u0641 \u0648\u0625\u0639\u0627\u062F\u0629 \u0635\u064A\u0627\u063A\u0629"]);
    },
    "direct_message_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629 \u0645\u0628\u0627\u0634\u0631\u0629 \u0625\u0644\u0649 ", _interpolate(_list(0))]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0639\u062F\u064A\u0644"]);
    },
    "hide_reblogs": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0627\u062A \u0645\u0646 ", _interpolate(_list(0))]);
    },
    "mention_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0623\u0630\u0643\u0631 ", _interpolate(_list(0))]);
    },
    "mute_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0643\u062A\u0645 ", _interpolate(_list(0))]);
    },
    "mute_conversation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u062C\u0627\u0647\u0644 \u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u0635\u0628"]);
    },
    "open_in_original_site": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0641\u062A\u062D \u0641\u064A \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0623\u0635\u0644\u064A"]);
    },
    "pin_on_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u062B\u0628\u064A\u062A \u0639\u0644\u0649 \u062D\u0633\u0627\u0628\u0643 \u0627\u0644\u0634\u062E\u0635\u064A"]);
    },
    "remove_personal_note": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0629 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0645\u0646 ", _interpolate(_list(0))]);
    },
    "share_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0634\u0627\u0631\u0643 \u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u0634\u0648\u0631"]);
    },
    "show_favourited_and_boosted_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0623\u0638\u0647\u0631 \u0645\u0646 \u0641\u0636\u0644 \u0648\u0634\u0627\u0631\u0643"]);
    },
    "show_reblogs": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0639\u0631\u0636 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0627\u062A \u0645\u0646 ", _interpolate(_list(0))]);
    },
    "show_untranslated": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0639\u0631\u0636 \u0628\u062F\u0648\u0646 \u062A\u0631\u062C\u0645\u0629"]);
    },
    "toggle_theme": {
      "dark": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0627\u0644\u062A\u063A\u064A\u064A\u0631 \u0625\u0644\u0649 \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u062F\u0627\u0643\u0646"]);
      },
      "light": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0627\u0644\u062A\u063A\u064A\u064A\u0631 \u0625\u0644\u0649 \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0641\u0627\u062A\u062D"]);
      }
    },
    "translate_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0631\u062C\u0645 \u0627\u0644\u0645\u0646\u0634\u0648\u0631"]);
    },
    "unblock_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0631\u0641\u0639 \u0627\u0644\u062D\u0638\u0631 \u0639\u0646 ", _interpolate(_list(0))]);
    },
    "unblock_domain": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0631\u0641\u0639 \u0627\u0644\u062D\u0638\u0631 \u0639\u0646 \u0627\u0644\u0646\u0637\u0627\u0642 ", _interpolate(_list(0))]);
    },
    "unmute_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0625\u0644\u063A\u0627\u0621 \u0643\u062A\u0645 \u0627\u0644\u062D\u0633\u0627\u0628 ", _interpolate(_list(0))]);
    },
    "unmute_conversation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0625\u0644\u063A\u0627\u0621 \u0643\u062A\u0645 \u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0629"]);
    },
    "unpin_on_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u062B\u0628\u064A\u062A \u0645\u0646 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A"]);
    }
  },
  "modals": {
    "aria_label_close": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0623\u063A\u0644\u0642"]);
    }
  },
  "nav": {
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0639\u0648\u062F\u0629"]);
    },
    "blocked_domains": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u062C\u0627\u0644\u0627\u062A \u0627\u0644\u0645\u062D\u0638\u0648\u0631\u0629"]);
    },
    "blocked_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 \u0627\u0644\u0645\u062D\u0638\u0648\u0631\u064A\u0646"]);
    },
    "bookmarks": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629"]);
    },
    "built_at": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Built ", _interpolate(_list(0))]);
    },
    "compose": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0623\u0644\u064A\u0641"]);
    },
    "conversations": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0627\u062A"]);
    },
    "explore": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0633\u062A\u0643\u0634\u0641"]);
    },
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u0641\u0636\u0644\u0629"]);
    },
    "federated": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0641\u062F\u064A\u0631\u0627\u0644\u064A\u0629"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0651\u0629"]);
    },
    "list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0642\u0627\u0626\u0645\u0629"]);
    },
    "lists": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0642\u0648\u0627\u0626\u0645"]);
    },
    "local": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u062D\u0644\u064A"]);
    },
    "muted_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0648\u0646 \u0627\u0644\u0645\u0643\u062A\u0645\u0648\u0635\u064A\u0646"]);
    },
    "notifications": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A"]);
    },
    "privacy": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062E\u0635\u0648\u0635\u064A\u0629"]);
    },
    "profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u0639\u0631\u064A\u0641\u064A\u0629"]);
    },
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0628\u062D\u062B"]);
    },
    "select_feature_flags": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0628\u062F\u064A\u0644 \u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u0645\u064A\u0632\u0627\u062A"]);
    },
    "select_font_size": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062D\u062C\u0645 \u0627\u0644\u062E\u0637"]);
    },
    "select_language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u062E\u062A\u0627\u0631 \u0627\u0644\u0644\u063A\u0629"]);
    },
    "settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A"]);
    },
    "show_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0639\u0631\u0636 \u0627\u0644\u0645\u0642\u062F\u0645\u0629"]);
    },
    "toggle_theme": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0648\u0636\u0639"]);
    },
    "zen_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0647\u0627\u062F\u0626"]);
    }
  },
  "notification": {
    "favourited_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0623\u064F\u0639\u062C\u0650\u0628 \u0628\u0645\u0646\u0634\u0648\u0631\u0643"]);
    },
    "followed_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0628\u062F\u0623 \u0641\u064A \u0645\u062A\u0627\u0628\u0639\u062A\u0643"]);
    },
    "followed_you_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize(["\u0644\u0645 \u064A\u062A\u0628\u0639\u0643 \u0623\u062D\u062F"]), _normalize(["\u062A\u0628\u0639\u0643 \u0634\u062E\u0635 \u0648\u0627\u062D\u062F"]), _normalize(["\u062A\u0628\u0639\u0643 \u0634\u062E\u0635\u0627\u0646"]), _normalize(["\u062A\u0628\u0639\u0643 ", _interpolate(_list(0)), " \u0623\u0634\u062E\u0627\u0635"]), _normalize(["\u062A\u0628\u0639\u0643 ", _interpolate(_list(0)), " \u0634\u062E\u0635"]), _normalize(["\u062A\u0628\u0639\u0643 ", _interpolate(_list(0)), " \u0634\u062E\u0635"])]);
    },
    "missing_type": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["MISSING notification.type:"]);
    },
    "reblogged_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0639\u0627\u062F \u0646\u0634\u0631 \u0645\u0646\u0634\u0648\u0631\u0643"]);
    },
    "request_to_follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0637\u0644\u0628(\u062A) \u0645\u062A\u0627\u0628\u0639\u062A\u0643"]);
    },
    "signed_up": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0633\u062C\u0644"]);
    },
    "update_status": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0642\u0627\u0645(\u062A) \u0628\u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u062A\u0647(\u0627)"]);
    }
  },
  "placeholder": {
    "content_warning": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0643\u062A\u0628 \u062A\u062D\u0630\u064A\u0631\u0643 \u0647\u0646\u0627"]);
    },
    "default_1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0627\u0630\u0627 \u064A\u062F\u0648\u0631 \u0641\u064A \u0630\u0647\u0646\u0643\u061F"]);
    },
    "reply_to_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0627\u0644\u0631\u062F \u0639\u0644\u0649 ", _interpolate(_list(0))]);
    },
    "replying": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0631\u062F"]);
    }
  },
  "pwa": {
    "dismiss": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u062C\u0627\u0647\u0644"]);
    },
    "install": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u062D\u0645\u064A\u0644"]);
    },
    "install_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u062D\u0645\u064A\u0644 Elk"]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u064A\u062A\u0648\u0641\u0631 \u062A\u062D\u062F\u064A\u062B Elk \u062C\u062F\u064A\u062F"]);
    },
    "update": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u062D\u062F\u064A\u062B"]);
    },
    "update_available_short": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u062D\u062F\u064A\u062B Elk"]);
    },
    "webmanifest": {
      "canary": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0646\u0633\u062E\u0629 \u0648\u064A\u0628 \u0631\u0634\u064A\u0642\u0629 \u0644\u0645\u0627\u0633\u062A\u0648\u062F\u0648\u0646 (\u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0625\u0646\u0634\u0627\u0626\u064A\u0629)"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (\u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0625\u0646\u0634\u0627\u0626\u064A\u0629)"]);
        },
        "short_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (\u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0625\u0646\u0634\u0627\u0626\u064A\u0629)"]);
        }
      },
      "dev": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0646\u0633\u062E\u0629 \u0648\u064A\u0628 \u0631\u0634\u064A\u0642\u0629 \u0644\u0645\u0627\u0633\u062A\u0648\u062F\u0648\u0646 (\u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u062A\u0637\u0648\u064A\u0631\u064A\u0629)"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (\u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u062A\u0637\u0648\u064A\u0631\u064A\u0629)"]);
        },
        "short_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (\u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u062A\u0637\u0648\u064A\u0631\u064A\u0629)"]);
        }
      },
      "preview": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0646\u0633\u062E\u0629 \u0648\u064A\u0628 \u0631\u0634\u064A\u0642\u0629 \u0644\u0645\u0627\u0633\u062A\u0648\u062F\u0648\u0646 (\u0645\u0639\u0627\u064A\u0646\u0629)"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (\u0645\u0639\u0627\u064A\u0646\u0629)"]);
        },
        "short_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (\u0645\u0639\u0627\u064A\u0646\u0629)"]);
        }
      },
      "release": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0646\u0633\u062E\u0629 \u0648\u064A\u0628 \u0631\u0634\u064A\u0642\u0629 \u0644\u0645\u0627\u0633\u062A\u0648\u062F\u0648\u0646"]);
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
      return _normalize(["\u0627\u0628\u062D\u062B \u0639\u0646 \u0627\u0644\u0623\u0634\u062E\u0627\u0635 \u0648\u0627\u0644\u0647\u0627\u0634\u062A\u0627\u062C"]);
    },
    "search_empty": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0623\u064A \u0646\u062A\u0627\u0626\u062C \u0644\u0634\u0631\u0648\u0637 \u0627\u0644\u0628\u062D\u062B \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643"]);
    }
  },
  "settings": {
    "about": {
      "built_at": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u062A\u0645 \u0627\u0644\u062A\u062D\u062F\u064A\u062B \u0641\u064A"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u062D\u0648\u0644 Elk"]);
      },
      "meet_the_team": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0641\u0631\u064A\u0642\u0646\u0627"]);
      },
      "sponsor_action": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u062A\u0645\u0648\u064A\u0644 Elk"]);
      },
      "sponsor_action_desc": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0644\u062A\u0645\u0648\u064A\u0644 \u062A\u0637\u0648\u064A\u0631 Elk \u0648\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0641\u064A \u062A\u062D\u0633\u064A\u0646\u0647"]);
      },
      "sponsors": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0627\u0644\u0631\u0639\u0627\u0629"]);
      },
      "sponsors_body_1": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u062A\u0645 \u062A\u0645\u0648\u064A\u0644 Elk \u0645\u0646 \u0642\u0628\u0644 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0648\u0627\u0644\u0623\u0641\u0631\u0627\u062F \u0627\u0644\u062A\u0627\u0644\u064A\u064A\u0646:"]);
      },
      "sponsors_body_2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0648\u0643\u0630\u0627 \u0645\u0646 \u0642\u0628\u0644 \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0627\u0644\u062A\u0627\u0644\u064A\u0629:"]);
      },
      "sponsors_body_3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0625\u0630\u0627 \u0643\u0646\u062A \u062A\u0633\u062A\u0645\u062A\u0639 \u0628\u0625\u0633\u062A\u062E\u062F\u0627\u0645 Elk\u060C \u0641\u0646\u062D\u0646 \u0646\u0634\u062C\u0639\u0643 \u0639\u0644\u0649 \u0627\u0644\u062A\u0628\u0631\u0639 \u0644\u062F\u0639\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639."]);
      },
      "version": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0627\u0644\u0625\u0635\u062F\u0627\u0631"]);
      }
    },
    "account_settings": {
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0642\u0645 \u0628\u062A\u062D\u0631\u064A\u0631 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u062D\u0633\u0627\u0628\u0643 \u0641\u064A \u0645\u0648\u0642\u0639 \u0645\u0627\u0633\u062A\u0648\u062F\u0648\u0646 \u0627\u0644\u0623\u0635\u0644"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0625\u0639\u062F\u0627\u062F\u062A \u0627\u0644\u062D\u0633\u0627\u0628"]);
      }
    },
    "interface": {
      "color_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0648\u0636\u0639 \u0627\u0644\u0644\u0648\u0646"]);
      },
      "dark_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u062F\u0627\u0643\u0646"]);
      },
      "default": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize([" (\u0625\u0641\u062A\u0631\u0627\u0636\u064A)"]);
      },
      "font_size": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u062D\u062C\u0645 \u0627\u0644\u062E\u0637"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0648\u0627\u062C\u0647\u0647 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645"]);
      },
      "light_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0648\u0636\u0639 \u0627\u0644\u0636\u0648\u0621"]);
      },
      "system_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0627\u0644\u0646\u0638\u0627\u0645"]);
      },
      "theme_color": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0648\u0636\u0639 \u0627\u0644\u0645\u0638\u0647\u0631"]);
      }
    },
    "language": {
      "display_language": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0645\u0639\u0631\u0648\u0636\u0629"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0627\u0644\u0644\u063A\u0629"]);
      },
      "status": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0631\u062C\u0645\u0629: ", _interpolate(_list(0)), " / ", _interpolate(_list(1)), " (", _interpolate(_list(2)), "\u066A)"]);
      },
      "translations": {
        "add": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0625\u0636\u0627\u0641\u0629"]);
        },
        "choose_language": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0627\u062E\u062A\u0631 \u0627\u0644\u0644\u063A\u0629"]);
        },
        "heading": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0627\u0644\u062A\u0631\u062C\u0645\u0627\u062A"]);
        },
        "hide_specific": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0625\u062E\u0641\u0627\u0621 \u062A\u0631\u062C\u0645\u0627\u062A \u0645\u062D\u062F\u062F\u0629"]);
        },
        "remove": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0625\u0632\u0627\u0644\u0629"]);
        }
      }
    },
    "notifications": {
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A"]);
      },
      "notifications": {
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A"]);
        }
      },
      "push_notifications": {
        "alerts": {
          "favourite": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0627\u0644\u0645\u0641\u0636\u0644\u0629"]);
          },
          "follow": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0645\u062A\u0627\u0628\u0639\u064A\u0646 \u062C\u062F\u062F"]);
          },
          "mention": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0627\u0644\u0645\u0646\u0634\u0648\u0631\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0630\u0643\u0631\u0646\u064A"]);
          },
          "poll": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0627\u0633\u062A\u0637\u0644\u0627\u0639\u0627\u062A \u0627\u0644\u0631\u0623\u064A"]);
          },
          "reblog": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0625\u0639\u0627\u062F\u0629 \u0646\u0634\u0631 \u0645\u0646\u0634\u0648\u0631\u0643"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0645\u0627 \u0647\u064A \u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0631\u064A\u062F \u062A\u0644\u0642\u064A\u0647\u0627\u061F"]);
          }
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u062A\u0644\u0642\u064A \u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u062D\u062A\u0649 \u0639\u0646\u062F\u0645\u0627 \u0644\u0627 \u062A\u0633\u062A\u062E\u062F\u0645 Elk."]);
        },
        "instructions": (ctx) => {
          const { normalize: _normalize, linked: _linked, type: _type } = ctx;
          return _normalize([" \u0644\u0627 \u062A\u0646\u0633 \u062D\u0641\u0638 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0632\u0631 ", _linked("settings.notifications.push_notifications.save_settings", void 0, _type)]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A"]);
        },
        "policy": {
          "all": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0645\u0646 \u0627\u064A \u0634\u062E\u0635"]);
          },
          "followed": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0645\u0646 \u0627\u0644\u0646\u0627\u0633 \u0627\u0644\u0630\u064A\u0646 \u0623\u062A\u0627\u0628\u0639\u0647\u0645"]);
          },
          "follower": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0645\u0646 \u0627\u0644\u0646\u0627\u0633 \u0627\u0644\u0630\u064A\u0646 \u064A\u062A\u0628\u0639\u0648\u0646\u0646\u064A"]);
          },
          "none": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0645\u0646 \u0644\u0627 \u0623\u062D\u062F"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0645\u0646 \u0627\u0644\u0630\u064A \u064A\u0645\u0643\u0646\u0646\u064A \u062A\u0644\u0642\u064A \u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0645\u0646\u0647\u061F"]);
          }
        },
        "save_settings": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u062D\u0641\u0638 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A"]);
        },
        "subscription_error": {
          "clear_error": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0645\u0633\u062D"]);
          },
          "error_hint": (ctx) => {
            const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
            return _normalize(["\u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0631\u062C\u0648\u0639 \u0625\u0644\u0649 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629 \u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u062D\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0629: ", _interpolate(_list(0)), "."]);
          },
          "invalid_vapid_key": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u064A\u0628\u062F\u0648 \u0623\u0646 \u0627\u0644\u0645\u0641\u062A\u0627\u062D \u0627\u0644\u0639\u0627\u0645 VAPID \u063A\u064A\u0631 \u0635\u0627\u0644\u062D."]);
          },
          "permission_denied": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u062A\u0645 \u0631\u0641\u0636 \u0627\u0644\u0625\u0630\u0646: \u0642\u0645 \u0628\u062A\u0645\u0643\u064A\u0646 \u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0641\u064A \u0645\u062A\u0635\u0641\u062D\u0643."]);
          },
          "repo_link": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Elk's repository in GitHub"]);
          },
          "request_error": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0637\u0644\u0628 \u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643 \u060C \u062D\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649 \u0648\u0625\u0630\u0627 \u0627\u0633\u062A\u0645\u0631 \u0627\u0644\u062E\u0637\u0623 \u060C \u064A\u0631\u062C\u0649 \u0625\u0628\u0644\u0627\u063A Elk \u0628\u0627\u0644\u0645\u0634\u0643\u0644\u0629."]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643 \u0641\u064A \u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u063A\u064A\u0631 \u0646\u0627\u062C\u062D"]);
          },
          "too_many_registrations": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0628\u0633\u0628\u0628 \u0627\u0644\u0642\u064A\u0648\u062F \u0641\u064A \u0627\u0644\u0645\u062A\u0635\u0641\u062D \u060C \u0644\u0627 \u064A\u0645\u0643\u0646 \u0644\u0640 Elk \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u062E\u062F\u0645\u0629 \u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0627\u0644\u0641\u0648\u0631\u064A\u0629 \u0644\u0639\u062F\u0629 \u062D\u0633\u0627\u0628\u0627\u062A \u0639\u0644\u0649 \u062E\u0648\u0627\u062F\u0645 \u0645\u062E\u062A\u0644\u0641\u0629. \u064A\u062C\u0628 \u0639\u0644\u064A\u0643 \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643 \u0641\u064A \u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0627\u0644\u0641\u0648\u0631\u064A\u0629 \u0639\u0644\u0649 \u062D\u0633\u0627\u0628\u0627\u062A \u0623\u062E\u0631\u0649 \u0648\u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649."]);
          },
          "vapid_not_supported": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u064A\u062F\u0639\u0645 \u0627\u0644\u0645\u0633\u062A\u0639\u0631\u0636 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643 \u0625\u0639\u0644\u0627\u0645\u0627\u062A Web Push \u060C \u0648\u0644\u0643\u0646 \u0644\u0627 \u064A\u0628\u062F\u0648 \u0623\u0646\u0647 \u064A\u0642\u0648\u0645 \u0628\u062A\u0646\u0641\u064A\u0630 \u0628\u0631\u0648\u062A\u0648\u0643\u0648\u0644 VAPID."]);
          }
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A"]);
        },
        "undo_settings": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u062A\u0631\u0627\u062C\u0639 \u0639\u0646 \u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A"]);
        },
        "unsubscribe": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u062A\u0639\u0637\u064A\u0644 \u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A"]);
        },
        "unsupported": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0645\u062A\u0635\u0641\u062D\u0643 \u0644\u0627 \u064A\u062F\u0639\u0645 \u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A"]);
        },
        "warning": {
          "enable_close": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0623\u063A\u0644\u0642"]);
          },
          "enable_description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(['\u0644\u062A\u0644\u0642\u064A \u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0639\u0646\u062F\u0645\u0627 \u0644\u0627 \u064A\u0643\u0648\u0646 Elk \u0645\u0641\u062A\u0648\u062D\u064B\u0627\u060C \u0642\u0645 \u0628\u062A\u0645\u0643\u064A\u0646 \u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0627\u0644\u0646\u0638\u0627\u0645. \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u062A\u062D\u0643\u0645 \u0628\u062F\u0642\u0629 \u0641\u064A \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0646\u0634\u0626 \u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0627\u0644\u0646\u0638\u0627\u0645 \u0639\u0628\u0631 \u0627\u0644\u0632\u0631 "Show Settings" \u0623\u0639\u0644\u0627\u0647.']);
          },
          "enable_description_desktop": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(['\u0644\u062A\u0644\u0642\u064A \u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0639\u0646\u062F\u0645\u0627 \u0644\u0627 \u064A\u0643\u0648\u0646 Elk \u0645\u0641\u062A\u0648\u062D\u064B\u0627 \u060C \u0642\u0645 \u0628\u062A\u0645\u0643\u064A\u0646 \u062F\u0641\u0639 \u0627\u0644\u0625\u062E\u0637\u0627\u0631\u0627\u062A. \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u062A\u062D\u0643\u0645 \u0628\u062F\u0642\u0629 \u0641\u064A \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0648\u0644\u062F \u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0627\u0644\u062F\u0641\u0639 "Settings > Notifications > Push notifications settings"']);
          },
          "enable_description_mobile": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(['\u064A\u0645\u0643\u0646\u0643 \u0623\u064A\u0636\u064B\u0627 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062A\u0646\u0642\u0644 "Settings > Notifications > Push notification settings".']);
          },
          "enable_description_settings": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0644\u062A\u0644\u0642\u064A \u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0639\u0646\u062F\u0645\u0627 \u0644\u0627 \u064A\u0643\u0648\u0646 Elk \u0645\u0641\u062A\u0648\u062D\u064B\u0627 \u060C \u0642\u0645 \u0628\u062A\u0645\u0643\u064A\u0646 \u062F\u0641\u0639 \u0627\u0644\u0625\u062E\u0637\u0627\u0631\u0627\u062A. \u0633\u062A\u062A\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u062A\u062D\u0643\u0645 \u0628\u062F\u0642\u0629 \u0641\u064A \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u0648\u0644\u062F \u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0641\u0648\u0631\u064A\u0629 \u0639\u0644\u0649 \u0646\u0641\u0633 \u0627\u0644\u0634\u0627\u0634\u0629 \u0628\u0645\u062C\u0631\u062F \u062A\u0645\u0643\u064A\u0646\u0647\u0627."]);
          },
          "enable_desktop": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u062A\u0641\u0639\u064A\u0644 \u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0627\u0644\u0646\u0638\u0627\u0645"]);
          },
          "enable_title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u0644\u0627 \u062A\u0641\u0648\u062A \u0639\u0644\u064A\u0643 \u0623\u064A \u0634\u064A\u0621"]);
          },
          "re_auth": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u064A\u0628\u062F\u0648 \u0623\u0646 \u0627\u0644\u062E\u0627\u062F\u0645 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643 \u0644\u0627 \u064A\u062F\u0639\u0645 \u062F\u0641\u0639 \u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A. \u062D\u0627\u0648\u0644 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C \u062B\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649 \u060C \u0625\u0630\u0627 \u0627\u0633\u062A\u0645\u0631\u062A \u0647\u0630\u0647 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0641\u064A \u0627\u0644\u0638\u0647\u0648\u0631 \u060C \u0641\u0627\u062A\u0635\u0644 \u0628\u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062E\u0627\u062F\u0645."]);
          }
        }
      },
      "show_btn": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0627\u0646\u062A\u0642\u0644 \u0625\u0644\u0649 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A"]);
      },
      "under_construction": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u062A\u062D\u062A \u0627\u0644\u062A\u0637\u0648\u064A\u0631"]);
      }
    },
    "notifications_settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u062A\u0646\u0628\u064A\u0647\u0627\u062A"]);
    },
    "preferences": {
      "enable_autoplay": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A"]);
      },
      "enable_data_saving": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0642\u0645 \u0628\u062A\u0645\u0643\u064A\u0646 \u062A\u0648\u0641\u064A\u0631 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A"]);
      },
      "enable_data_saving_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u062D\u0641\u0638 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0639\u0646 \u0637\u0631\u064A\u0642 \u0645\u0646\u0639 \u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A \u0645\u0646 \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u062A\u0644\u0642\u0627\u0626\u064A\u0627."]);
      },
      "enable_pinch_to_zoom": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u062A\u0645\u0643\u064A\u0646 \u0627\u0644\u0642\u0631\u0635 \u0644\u0644\u062A\u0643\u0628\u064A\u0631"]);
      },
      "github_cards": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0628\u0637\u0627\u0642\u0627\u062A GitHub"]);
      },
      "grayscale_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0645\u0638\u0647\u0631 \u0631\u0645\u0627\u062F\u064A"]);
      },
      "hide_account_hover_card": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0625\u062E\u0641\u0627\u0621 \u0628\u0637\u0627\u0642\u0629 \u0627\u0644\u062D\u0633\u0627\u0628 \u0639\u0646\u062F \u0627\u0644\u0645\u0631\u0648\u0631 \u0641\u0648\u0642\u0647\u0627"]);
      },
      "hide_alt_indi_on_posts": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0625\u062E\u0641\u0627\u0621 \u0645\u0624\u0634\u0631 \u0627\u0644\u0646\u0635 \u0627\u0644\u0628\u062F\u064A\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0627\u062A"]);
      },
      "hide_boost_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0625\u062E\u0641\u0627\u0621 \u0639\u062F\u062F \u0627\u0644\u062A\u0639\u0632\u064A\u0632"]);
      },
      "hide_favorite_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u062A\u0639\u062F\u0627\u062F \u0627\u0644\u0645\u0641\u0636\u0644"]);
      },
      "hide_follower_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0625\u062E\u0641\u0627\u0621 \u0639\u062F\u062F \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u064A\u0646"]);
      },
      "hide_reply_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0625\u062E\u0641\u0627\u0621 \u0639\u062F\u062F \u0627\u0644\u0631\u062F\u0648\u062F"]);
      },
      "hide_translation": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u062A\u0631\u062C\u0645\u0629"]);
      },
      "hide_username_emojis": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0631\u0645\u0648\u0632 \u0627\u0644\u062A\u0639\u0628\u064A\u0631\u064A\u0629 \u0641\u064A \u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646"]);
      },
      "hide_username_emojis_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u064A\u062E\u0641\u064A \u0627\u0644\u0631\u0645\u0648\u0632 \u0627\u0644\u062A\u0639\u0628\u064A\u0631\u064A\u0629 \u0645\u0646 \u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 \u0641\u064A \u0627\u0644\u062C\u062F\u0627\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064A\u0629. \u0633\u062A\u0638\u0644 \u0627\u0644\u0631\u0645\u0648\u0632 \u0627\u0644\u062A\u0639\u0628\u064A\u0631\u064A\u0629 \u0645\u0631\u0626\u064A\u0629 \u0641\u064A \u0645\u0644\u0641\u0627\u062A\u0647\u0645 \u0627\u0644\u0634\u062E\u0635\u064A\u0629."]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0627\u0644\u062A\u0641\u0636\u064A\u0644\u0627\u062A"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u062A\u062C\u0631\u064A\u0628\u064A\u0629"]);
      },
      "user_picker": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0645\u0646\u062A\u0642\u064A \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A"]);
      },
      "virtual_scroll": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0627\u0644\u062A\u0645\u0631\u064A\u0631 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A"]);
      },
      "wellbeing": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0627\u0644\u0633\u0644\u0627\u0645\u0629"]);
      }
    },
    "profile": {
      "appearance": {
        "bio": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0627\u0644\u0646\u0628\u0630\u0629 \u0627\u0644\u062A\u0639\u0631\u064A\u0641\u064A\u0629"]);
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0631\u0645\u0632\u064A\u0629 \u0648\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0648\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A..."]);
        },
        "display_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0645\u0639\u0631\u0648\u0636"]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0627\u0644\u0645\u0638\u0647\u0631"]);
        },
        "profile_metadata": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0648\u0635\u0641\u064A\u0629 \u0644\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A"]);
        },
        "profile_metadata_desc": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
          return _normalize(["\u064A\u0645\u0643\u0646 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0644\u062F\u064A\u0643 \u0645\u0627 \u064A\u0635\u0644 \u0625\u0644\u0649 ", _interpolate(_list(0)), " \u0645\u0646 \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u0639\u0631\u0648\u0636\u0629 \u0643\u062C\u062F\u0648\u0644 \u0641\u064A \u0645\u0644\u0641\u0643 \u0627\u0644\u0634\u062E\u0635\u064A"]);
        },
        "profile_metadata_label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0645\u0644\u0635\u0642"]);
        },
        "profile_metadata_value": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0645\u062D\u062A\u0648\u0649"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A"]);
        }
      },
      "featured_tags": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u064A\u0645\u0643\u0646 \u0644\u0644\u0623\u0634\u062E\u0627\u0635 \u062A\u0635\u0641\u062D \u0645\u0634\u0627\u0631\u0643\u0627\u062A\u0643 \u0627\u0644\u0639\u0627\u0645\u0629 \u062A\u062D\u062A \u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u0647\u0627\u0634\u062A\u0627\u063A \u0647\u0630\u0647"]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0627\u0644\u0647\u0627\u0634\u062A\u0627\u063A \u0627\u0644\u0628\u0627\u0631\u0632\u0629"]);
        }
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A"]);
      }
    },
    "select_a_settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u062E\u062A\u0631 \u0627\u0644\u0625\u0639\u062F\u0627\u062F"]);
    },
    "users": {
      "export": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u062A\u0635\u062F\u064A\u0631 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645"]);
      },
      "import": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0648\u0646 \u0627\u0644\u0645\u0633\u062C\u0644\u0648\u0646"]);
      }
    }
  },
  "share-target": {
    "description": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u064A\u0645\u0643\u0646 \u062A\u062D\u062F\u064A\u062B Elk \u0628\u062D\u064A\u062B \u064A\u0645\u0643\u0646\u0643 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0645\u0646 \u0627\u0644\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0627\u0644\u0623\u062E\u0631\u0649 \u060C \u0645\u0627 \u0639\u0644\u064A\u0643 \u0633\u0648\u0649 \u062A\u062B\u0628\u064A\u062A Elk \u0639\u0644\u0649 \u062C\u0647\u0627\u0632\u0643 \u0623\u0648 \u0627\u0644\u0643\u0645\u0628\u064A\u0648\u062A\u0631 \u0648\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644."]);
    },
    "hint": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0645\u0639 Elk \u060C \u064A\u062C\u0628 \u062A\u062B\u0628\u064A\u062A Elk \u0648\u064A\u062C\u0628 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644."]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0634\u0627\u0631\u0643 \u0645\u0639 Elk"]);
    }
  },
  "state": {
    "attachments_exceed_server_limit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u062C\u0627\u0648\u0632 \u0639\u062F\u062F \u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u0643\u0644 \u0645\u0646\u0634\u0648\u0631."]);
    },
    "attachments_limit_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0644\u0644 \u0645\u0646\u0634\u0648\u0631"]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["(\u0645\u0639\u062F\u0644)"]);
    },
    "editing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0639\u062F\u064A\u0644"]);
    },
    "loading": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644 ..."]);
    },
    "publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0641\u0634\u0644 \u0627\u0644\u0646\u0634\u0631"]);
    },
    "publishing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0642\u064A\u062F \u0627\u0644\u0646\u0634\u0631"]);
    },
    "upload_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0641\u0634\u0644"]);
    },
    "uploading": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0645\u064A\u0644 ..."]);
    }
  },
  "status": {
    "account": {
      "suspended_message": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u062A\u0645 \u062A\u0639\u0644\u064A\u0642 \u062D\u0633\u0627\u0628 \u0647\u0630\u0647 \u0627\u0644\u062D\u0627\u0644\u0629."]);
      },
      "suspended_show": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0639\u0631\u0636 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0639\u0644\u0649 \u0623\u064A \u062D\u0627\u0644\u061F"]);
      }
    },
    "boosted_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0645 \u0627\u0644\u0646\u0634\u0631 \u0645\u0646"]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0639\u062F\u0644 ", _interpolate(_list(0))]);
    },
    "favourited_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u064F\u0641\u0636\u0644 \u0645\u0646"]);
    },
    "filter_hidden_phrase": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0645\u062A \u062A\u0635\u0641\u064A\u062A\u0647\u0627 \u0628\u0648\u0627\u0633\u0637\u0629"]);
    },
    "filter_show_anyway": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0639\u0631\u0636 \u0639\u0644\u0649 \u0623\u064A \u062D\u0627\u0644"]);
    },
    "img_alt": {
      "ALT": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0646\u0635 \u0628\u062F\u064A\u0644"]);
      },
      "desc": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u0648\u0635\u0641"]);
      },
      "dismiss": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u062A\u062C\u0627\u0647\u0644"]);
      },
      "read": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0627\u0642\u0631\u0623 \u0648\u0635\u0641 ", _interpolate(_list(0))]);
      }
    },
    "poll": {
      "count": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
        return _plural([_normalize(["\u0644\u0627 \u062A\u0648\u062C\u062F \u0627\u0635\u0648\u0627\u062A"]), _normalize(["\u0635\u0648\u062A ", _interpolate(_list(0))]), _normalize(["\u0635\u0648\u062A\u064A\u0646"]), _normalize([_interpolate(_list(0)), " \u0623\u0635\u0648\u0627\u062A"]), _normalize([_interpolate(_list(0)), " \u0635\u0648\u062A"]), _normalize([_interpolate(_list(0)), " \u0635\u0648\u062A"])]);
      },
      "ends": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u064A\u0646\u062A\u0647\u064A \u0641\u064A ", _interpolate(_list(0))]);
      },
      "finished": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\u0627\u0646\u062A\u0647\u0649 \u0641\u064A ", _interpolate(_list(0))]);
      }
    },
    "replying_to": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0627\u0644\u0631\u062F \u0639\u0644\u0649 ", _interpolate(_list(0))]);
    },
    "show_full_thread": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0629 \u0643\u0627\u0645\u0644\u0627\u064B"]);
    },
    "someone": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0634\u062E\u0635 \u0645\u0627"]);
    },
    "spoiler_show_less": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0639\u0631\u0636 \u0623\u0642\u0644"]);
    },
    "spoiler_show_more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064A\u062F"]);
    },
    "thread": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0629"]);
    },
    "try_original_site": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062C\u0631\u0628 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0623\u0635\u0644\u064A"]);
    }
  },
  "status_history": {
    "created": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u062A\u0645 \u0625\u0646\u0634\u0627\u0624\u0647 \u0641\u064A ", _interpolate(_list(0))]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u062A\u0645 \u062A\u0639\u062F\u064A\u0644\u0647 \u0641\u064A ", _interpolate(_list(0))]);
    }
  },
  "tab": {
    "accounts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A"]);
    },
    "for_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0635\u0645\u0645\u0629 \u0644\u0643"]);
    },
    "hashtags": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0647\u0627\u0634\u062A\u0627\u063A"]);
    },
    "list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0642\u0627\u0626\u0645\u0629"]);
    },
    "media": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0635\u0648\u0631/\u0627\u0644\u0641\u064A\u062F\u064A\u0648"]);
    },
    "news": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0623\u062E\u0628\u0627\u0631"]);
    },
    "notifications_all": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0643\u0644 \u0634\u0649\u0621"]);
    },
    "notifications_mention": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0648\u062C\u0647\u0629 \u0625\u0644\u064A"]);
    },
    "posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u0646\u0634\u0648\u0631\u0627\u062A"]);
    },
    "posts_with_replies": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u0646\u0634\u0648\u0631\u0627\u062A \u0648\u0627\u0644\u0631\u062F\u0648\u062F"]);
    }
  },
  "tag": {
    "follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0627\u0628\u0639"]);
    },
    "follow_label": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0627\u062A\u0628\u0639 \u0627\u0644\u0645\u0648\u0636\u0648\u0639 ", _interpolate(_list(0))]);
    },
    "unfollow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u063A\u0627\u0621 \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629"]);
    },
    "unfollow_label": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0627\u0644\u063A\u0627\u0621 \u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u0645\u0648\u0636\u0648\u0639 ", _interpolate(_list(0))]);
    }
  },
  "time_ago_options": {
    "day_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0641\u064A 0 \u0623\u064A\u0627\u0645"]), _normalize(["\u063A\u062F\u0627"]), _normalize(["\u0641\u064A \u064A\u0648\u0645\u064A\u0646"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0623\u064A\u0627\u0645"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u064A\u0648\u0645"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u064A\u0648\u0645"])]);
    },
    "day_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0645\u0646\u0630 0 \u0623\u064A\u0627\u0645"]), _normalize(["\u0627\u0644\u0628\u0627\u0631\u062D\u0629"]), _normalize(["\u0645\u0646\u0630 \u064A\u0648\u0645\u064A\u0646"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0623\u064A\u0627\u0645"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u064A\u0648\u0645"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u064A\u0648\u0645"])]);
    },
    "hour_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0641\u064A 0 \u0633\u0627\u0639\u0627\u062A"]), _normalize(["\u0641\u064A \u0633\u0627\u0639\u0629"]), _normalize(["\u0641\u064A \u0633\u0627\u0639\u062A\u064A\u0646"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0633\u0627\u0639\u0627\u062A"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0633\u0627\u0639\u0629"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0633\u0627\u0639\u0629"])]);
    },
    "hour_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0645\u0646\u0630 0 \u0633\u0627\u0639\u0627\u062A"]), _normalize(["\u0645\u0646\u0630 \u0633\u0627\u0639\u0629 \u0648\u0627\u062D\u062F\u0629"]), _normalize(["\u0645\u0646\u0630 \u0633\u0627\u0639\u062A\u064A\u0646"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0633\u0627\u0639\u0627\u062A"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0633\u0627\u0639\u0629"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0633\u0627\u0639\u0629"])]);
    },
    "just_now": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0622\u0646"]);
    },
    "minute_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0641\u064A 0 \u062F\u0642\u0627\u0626\u0642"]), _normalize(["\u0641\u064A \u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629"]), _normalize(["\u0641\u064A \u062F\u0642\u064A\u0642\u062A\u064A\u0646"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u062F\u0642\u0627\u0626\u0642"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u062F\u0642\u064A\u0642\u0629"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u062F\u0642\u064A\u0642\u0629"])]);
    },
    "minute_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0645\u0646\u0630 0 \u062F\u0642\u0627\u0626\u0642"]), _normalize(["\u0645\u0646\u0630 \u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629"]), _normalize(["\u0645\u0646\u0630 \u062F\u0642\u064A\u0642\u062A\u064A\u0646"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u062F\u0642\u0627\u0626\u0642"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u062F\u0642\u064A\u0642\u0629"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u062F\u0642\u064A\u0642\u0629"])]);
    },
    "month_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0641\u064A 0 \u0623\u0634\u0647\u0631"]), _normalize(["\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0642\u0627\u062F\u0645"]), _normalize(["\u0641\u064A \u0634\u0647\u0631\u064A\u0646"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0623\u0634\u0647\u0631"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0634\u0647\u0631"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0634\u0647\u0631"])]);
    },
    "month_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0645\u0646\u0630 0 \u0623\u0634\u0647\u0631"]), _normalize(["\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0645\u0627\u0636\u064A"]), _normalize(["\u0645\u0646\u0630 \u0634\u0647\u0631\u064A\u0646"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0623\u0634\u0647\u0631"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0634\u0647\u0631"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0634\u0647\u0631"])]);
    },
    "second_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0627\u0644\u0622\u0646"]), _normalize(["\u0641\u064A \u062B\u0627\u0646\u064A\u0629"]), _normalize(["\u0641\u064A \u062B\u0627\u0646\u064A\u062A\u064A\u0646"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u062B\u0648\u0627\u0646\u064A"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u062B\u0627\u0646\u064A\u0629"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u062B\u0627\u0646\u064A\u0629"])]);
    },
    "second_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0644\u0644\u062A\u0648"]), _normalize(["\u0645\u0646\u0630 \u062B\u0627\u0646\u064A\u0629"]), _normalize(["\u0645\u0646\u0630 \u062B\u0627\u0646\u064A\u062A\u064A\u0646"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u062B\u0648\u0627\u0646\u064A"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u062B\u0627\u0646\u064A\u0629"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u062B\u0627\u0646\u064A\u0629"])]);
    },
    "short_day_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0641\u064A 0 \u0623\u064A\u0627\u0645"]), _normalize(["\u063A\u062F\u0627"]), _normalize(["\u0641\u064A \u064A\u0648\u0645\u064A\u0646"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0623\u064A\u0627\u0645"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u064A\u0648\u0645"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u064A\u0648\u0645"])]);
    },
    "short_day_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0645\u0646\u0630 0 \u0623\u064A\u0627\u0645"]), _normalize(["\u0627\u0644\u0628\u0627\u0631\u062D\u0629"]), _normalize(["\u0645\u0646\u0630 \u064A\u0648\u0645\u064A\u0646"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0623\u064A\u0627\u0645"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u064A\u0648\u0645"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u064A\u0648\u0645"])]);
    },
    "short_hour_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0641\u064A 0 \u0633\u0627\u0639\u0627\u062A"]), _normalize(["\u0641\u064A \u0633\u0627\u0639\u0629"]), _normalize(["\u0641\u064A \u0633\u0627\u0639\u062A\u064A\u0646"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0633\u0627\u0639\u0627\u062A"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0633\u0627\u0639\u0629"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0633\u0627\u0639\u0629"])]);
    },
    "short_hour_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0645\u0646\u0630 0 \u0633\u0627\u0639\u0627\u062A"]), _normalize(["\u0645\u0646\u0630 \u0633\u0627\u0639\u0629 \u0648\u0627\u062D\u062F\u0629"]), _normalize(["\u0645\u0646\u0630 \u0633\u0627\u0639\u062A\u064A\u0646"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0633\u0627\u0639\u0627\u062A"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0633\u0627\u0639\u0629"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0633\u0627\u0639\u0629"])]);
    },
    "short_minute_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0641\u064A 0 \u062F\u0642\u0627\u0626\u0642"]), _normalize(["\u0641\u064A \u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629"]), _normalize(["\u0641\u064A \u062F\u0642\u064A\u0642\u062A\u064A\u0646"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u062F\u0642\u0627\u0626\u0642"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u062F\u0642\u064A\u0642\u0629"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u062F\u0642\u064A\u0642\u0629"])]);
    },
    "short_minute_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0645\u0646\u0630 0 \u062F\u0642\u0627\u0626\u0642"]), _normalize(["\u0645\u0646\u0630 \u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629"]), _normalize(["\u0645\u0646\u0630 \u062F\u0642\u064A\u0642\u062A\u064A\u0646"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u062F\u0642\u0627\u0626\u0642"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u062F\u0642\u064A\u0642\u0629"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u062F\u0642\u064A\u0642\u0629"])]);
    },
    "short_month_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0641\u064A 0 \u0623\u0634\u0647\u0631"]), _normalize(["\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0642\u0627\u062F\u0645"]), _normalize(["\u0641\u064A \u0634\u0647\u0631\u064A\u0646"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0623\u0634\u0647\u0631"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0634\u0647\u0631"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0634\u0647\u0631"])]);
    },
    "short_month_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0645\u0646\u0630 0 \u0623\u0634\u0647\u0631"]), _normalize(["\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0645\u0627\u0636\u064A"]), _normalize(["\u0645\u0646\u0630 \u0634\u0647\u0631\u064A\u0646"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0623\u0634\u0647\u0631"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0634\u0647\u0631"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0634\u0647\u0631"])]);
    },
    "short_second_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0627\u0644\u0622\u0646"]), _normalize(["\u0641\u064A \u062B\u0627\u0646\u064A\u0629"]), _normalize(["\u0641\u064A \u062B\u0627\u0646\u064A\u062A\u064A\u0646"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u062B\u0648\u0627\u0646\u064A"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u062B\u0627\u0646\u064A\u0629"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u062B\u0627\u0646\u064A\u0629"])]);
    },
    "short_second_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0644\u0644\u062A\u0648"]), _normalize(["\u0645\u0646\u0630 \u062B\u0627\u0646\u064A\u0629"]), _normalize(["\u0645\u0646\u0630 \u062B\u0627\u0646\u064A\u062A\u064A\u0646"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u062B\u0648\u0627\u0646\u064A"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u062B\u0627\u0646\u064A\u0629"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u062B\u0627\u0646\u064A\u0629"])]);
    },
    "short_week_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0641\u064A 0 \u0623\u0633\u0627\u0628\u064A\u0639"]), _normalize(["\u0627\u0644\u0627\u0633\u0628\u0648\u0639 \u0627\u0644\u0642\u0627\u062F\u0645"]), _normalize(["\u0641\u064A \u0627\u0633\u0628\u0648\u0639\u064A\u0646"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0623\u0633\u0627\u0628\u064A\u0639"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0627\u0633\u0628\u0648\u0639"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0627\u0633\u0628\u0648\u0639"])]);
    },
    "short_week_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0645\u0646\u0630 0 \u0623\u0633\u0627\u0628\u064A\u0639"]), _normalize(["\u0627\u0644\u0627\u0633\u0628\u0648\u0639 \u0627\u0644\u0645\u0627\u0636\u064A"]), _normalize(["\u0645\u0646\u0630 \u0627\u0633\u0628\u0648\u0639\u064A\u0646"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0623\u0633\u0627\u0628\u064A\u0639"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0627\u0633\u0628\u0648\u0639"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0627\u0633\u0628\u0648\u0639"])]);
    },
    "short_year_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0647\u0630\u0627 \u0627\u0644\u0639\u0627\u0645"]), _normalize(["\u0627\u0644\u0639\u0627\u0645 \u0627\u0644\u0642\u0627\u062F\u0645"]), _normalize(["\u0641\u064A \u0639\u0627\u0645\u064A\u0646"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0639\u0627\u0645\u0627"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0639\u0627\u0645"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0639\u0627\u0645"])]);
    },
    "short_year_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0647\u0630\u0627 \u0627\u0644\u0639\u0627\u0645"]), _normalize(["\u0627\u0644\u0639\u0627\u0645 \u0627\u0644\u0645\u0627\u0636\u064A"]), _normalize(["\u0645\u0646\u0630 \u0639\u0627\u0645\u064A\u0646"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0639\u0627\u0645\u0627"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0639\u0627\u0645"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0639\u0627\u0645"])]);
    },
    "week_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0641\u064A 0 \u0623\u0633\u0627\u0628\u064A\u0639"]), _normalize(["\u0627\u0644\u0627\u0633\u0628\u0648\u0639 \u0627\u0644\u0642\u0627\u062F\u0645"]), _normalize(["\u0641\u064A \u0627\u0633\u0628\u0648\u0639\u064A\u0646"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0623\u0633\u0627\u0628\u064A\u0639"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0627\u0633\u0628\u0648\u0639"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0627\u0633\u0628\u0648\u0639"])]);
    },
    "week_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0645\u0646\u0630 0 \u0623\u0633\u0627\u0628\u064A\u0639"]), _normalize(["\u0627\u0644\u0627\u0633\u0628\u0648\u0639 \u0627\u0644\u0645\u0627\u0636\u064A"]), _normalize(["\u0645\u0646\u0630 \u0627\u0633\u0628\u0648\u0639\u064A\u0646"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0623\u0633\u0627\u0628\u064A\u0639"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0627\u0633\u0628\u0648\u0639"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0627\u0633\u0628\u0648\u0639"])]);
    },
    "year_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0647\u0630\u0627 \u0627\u0644\u0639\u0627\u0645"]), _normalize(["\u0627\u0644\u0639\u0627\u0645 \u0627\u0644\u0642\u0627\u062F\u0645"]), _normalize(["\u0641\u064A \u0639\u0627\u0645\u064A\u0646"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0639\u0627\u0645\u0627"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0639\u0627\u0645"]), _normalize(["\u0641\u064A ", _interpolate(_named("v")), " \u0639\u0627\u0645"])]);
    },
    "year_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0647\u0630\u0627 \u0627\u0644\u0639\u0627\u0645"]), _normalize(["\u0627\u0644\u0639\u0627\u0645 \u0627\u0644\u0645\u0627\u0636\u064A"]), _normalize(["\u0645\u0646\u0630 \u0639\u0627\u0645\u064A\u0646"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0639\u0627\u0645\u0627"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0639\u0627\u0645"]), _normalize(["\u0645\u0646\u0630 ", _interpolate(_named("v")), " \u0639\u0627\u0645"])]);
    }
  },
  "timeline": {
    "show_new_items": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["\u0644\u0627 \u062A\u0648\u062C\u062F \u0639\u0646\u0627\u0635\u0631 \u062C\u062F\u064A\u062F\u0629"]), _normalize(["\u0625\u0638\u0647\u0627\u0631 ", _interpolate(_named("v")), " \u0639\u0646\u0635\u0631 \u062C\u062F\u064A\u062F"]), _normalize(["\u0625\u0638\u0647\u0627\u0631 ", _interpolate(_named("v")), " \u0639\u0646\u0635\u0631\u064A\u0646 \u062C\u062F\u064A\u062F\u064A\u0646"]), _normalize(["\u0625\u0638\u0647\u0627\u0631 ", _interpolate(_named("v")), " \u0639\u0646\u0627\u0635\u0631 \u062C\u062F\u064A\u062F\u0629"]), _normalize(["\u0625\u0638\u0647\u0627\u0631 ", _interpolate(_named("v")), " \u0639\u0646\u0635\u0631 \u062C\u062F\u064A\u062F"]), _normalize(["\u0625\u0638\u0647\u0627\u0631 ", _interpolate(_named("v")), " \u0639\u0646\u0635\u0631 \u062C\u062F\u064A\u062F"])]);
    },
    "view_older_posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0642\u062F \u0644\u0627 \u064A\u062A\u0645 \u0639\u0631\u0636 \u0627\u0644\u0645\u0646\u0634\u0648\u0631\u0627\u062A \u0627\u0644\u0623\u0642\u062F\u0645 \u0645\u0646 \u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0623\u062E\u0631\u0649."]);
    }
  },
  "title": {
    "federated_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u062C\u062F\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064A \u0627\u0644\u0645\u0648\u062D\u062F"]);
    },
    "local_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u062C\u062F\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064A \u0627\u0644\u0645\u062D\u0644\u064A"]);
    }
  },
  "tooltip": {
    "add_content_warning": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0625\u0636\u0627\u0641\u0629 \u062A\u062D\u0630\u064A\u0631 \u0627\u0644\u0645\u062D\u062A\u0648\u0649"]);
    },
    "add_emojis": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0625\u0636\u0627\u0641\u0629 \u0631\u0645\u0632 \u062A\u0639\u0628\u064A\u0631\u064A"]);
    },
    "add_media": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0623\u0636\u0641 \u0635\u0648\u0631\u064B\u0627 \u0623\u0648 \u0645\u0642\u0637\u0639 \u0641\u064A\u062F\u064A\u0648 \u0623\u0648 \u0645\u0644\u0641\u064B\u0627 \u0635\u0648\u062A\u064A\u064B\u0627"]);
    },
    "add_publishable_content": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0623\u0636\u0641 \u0645\u062D\u062A\u0648\u0649 \u0644\u0644\u0646\u0634\u0631"]);
    },
    "change_content_visibility": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u063A\u064A\u064A\u0631 \u062E\u0635\u0648\u0635\u064A\u0629 \u0627\u0644\u0645\u062D\u062A\u0648\u0649"]);
    },
    "change_language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0644\u063A\u0629"]);
    },
    "emoji": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0631\u0645\u0632 \u062A\u0639\u0628\u064A\u0631\u064A"]);
    },
    "explore_links_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u064A\u062A\u0645 \u0627\u0644\u062A\u062D\u062F\u062B \u0639\u0646 \u0647\u0630\u0647 \u0627\u0644\u0642\u0635\u0635 \u0627\u0644\u0625\u062E\u0628\u0627\u0631\u064A\u0629 \u0645\u0646 \u0642\u0628\u0644 \u0627\u0644\u0623\u0634\u062E\u0627\u0635 \u0627\u0644\u0645\u0648\u062C\u0648\u062F\u064A\u0646 \u0639\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u0634\u0628\u0643\u0629 \u0648\u063A\u064A\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0634\u0628\u0643\u0627\u062A \u0627\u0644\u0644\u0627\u0645\u0631\u0643\u0632\u064A\u0629 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u062D\u0627\u0644\u064A"]);
    },
    "explore_posts_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0643\u062A\u0633\u0628 \u0647\u0630\u0647 \u0627\u0644\u0645\u0646\u0634\u0648\u0631\u0627\u062A \u0627\u0644\u0643\u062B\u064A\u0631 \u0645\u0646 \u0627\u0644\u0646\u0634\u0627\u0637 \u0639\u0644\u0649 \u0627\u0644\u0634\u0628\u0643\u0629 \u0648\u063A\u064A\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0634\u0628\u0643\u0627\u062A \u0627\u0644\u0644\u0627\u0645\u0631\u0643\u0632\u064A\u0629 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u062D\u0627\u0644\u064A"]);
    },
    "explore_tags_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0643\u062A\u0633\u0628 \u0647\u0630\u0647 \u0627\u0644\u0647\u0627\u0634\u062A\u0627\u063A \u0627\u0644\u0643\u062B\u064A\u0631 \u0645\u0646 \u0627\u0644\u0646\u0634\u0627\u0637 \u0628\u064A\u0646 \u0627\u0644\u0623\u0634\u062E\u0627\u0635 \u0639\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u0634\u0628\u0643\u0629 \u0648\u063A\u064A\u0631\u0647\u0627 \u0645\u0646 \u0627\u0644\u0634\u0628\u0643\u0627\u062A \u0627\u0644\u0644\u0627\u0645\u0631\u0643\u0632\u064A\u0629 \u0641\u064A \u0627\u0644\u0648\u0642\u062A \u0627\u0644\u062D\u0627\u0644\u064A"]);
    },
    "open_editor_tools": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u0645\u062D\u0631\u0631"]);
    },
    "pick_an_icon": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u062E\u062A\u0631 \u0631\u0645\u0632\u064B\u0627"]);
    },
    "publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0623\u063A\u0644\u0642 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0641\u0627\u0634\u0644\u0629 \u0623\u0639\u0644\u0649 \u0627\u0644\u0645\u062D\u0631\u0631 \u0644\u0625\u0639\u0627\u062F\u0629 \u0646\u0634\u0631 \u0627\u0644\u0645\u0646\u0634\u0648\u0631\u0627\u062A"]);
    },
    "toggle_bold": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0628\u062F\u064A\u0644 \u0627\u0644\u0646\u0635 \u0627\u0644\u063A\u0627\u0645\u0642"]);
    },
    "toggle_code_block": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0628\u062F\u064A\u0644 \u0643\u062A\u0644\u0629 \u0627\u0644\u062A\u0639\u0644\u064A\u0645\u0627\u062A \u0627\u0644\u0628\u0631\u0645\u062C\u064A\u0629"]);
    },
    "toggle_italic": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u062A\u0628\u062F\u064A\u0644 \u0627\u0644\u0646\u0635 \u0627\u0644\u0645\u0627\u0626\u0644"]);
    }
  },
  "user": {
    "add_existing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0625\u0636\u0627\u0641\u0629 \u062D\u0633\u0627\u0628 \u0642\u0627\u0626\u0645"]);
    },
    "server_address_label": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0639\u0646\u0648\u0627\u0646 \u062E\u0627\u062F\u0645 \u0645\u0627\u0633\u062A\u0648\u062F\u0648\u0646"]);
    },
    "sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0642\u0645 \u0628\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0648\u0627\u0644\u0631\u062F \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u0634\u0648\u0631\u0627\u062A \u0623\u0648 \u0627\u0644\u062A\u0641\u0627\u0639\u0644 \u0645\u0646 \u062D\u0633\u0627\u0628\u0643 \u0639\u0644\u0649 \u062E\u0627\u062F\u0645 \u0645\u062E\u062A\u0644\u0641"]);
    },
    "sign_in_notice_title": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0639\u0631\u0636 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629 \u0645\u0646 ", _interpolate(_list(0))]);
    },
    "sign_out_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C \u0645\u0646 ", _interpolate(_list(0))]);
    },
    "single_instance_sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0633\u062C\u0651\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0623\u0648 \u0639\u0644\u0627\u0645\u0627\u062A \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0648\u0627\u0644\u0645\u0641\u0636\u0644\u0629 \u0648\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0648\u0627\u0644\u0631\u062F \u0639\u0644\u0649 \u0627\u0644\u0645\u0646\u0634\u0648\u0631\u0627\u062A."]);
    },
    "tip_no_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["\u0625\u0630\u0627 \u0644\u064A\u0633 \u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628 \u0645\u0627\u0633\u062A\u0648\u062F\u0648\u0646 \u060C ", _interpolate(_list(0))]);
    },
    "tip_register_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u062E\u062A\u0631 \u062E\u0627\u062F\u0645 \u0645\u0627\u0633\u062A\u0648\u062F\u0648\u0646 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643 \u0648\u0642\u0645 \u0628\u062A\u0633\u062C\u064A\u0644 \u062D\u0633\u0627\u0628"]);
    }
  },
  "visibility": {
    "direct": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0631\u0633\u0627\u0644\u0629 \u0645\u0628\u0627\u0634\u0631\u0629"]);
    },
    "direct_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0631\u0626\u064A \u0644\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 \u0627\u0644\u0645\u0630\u0643\u0648\u0631\u064A\u0646 \u0641\u0642\u0637"]);
    },
    "private": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0648\u0646 \u0641\u0642\u0637"]);
    },
    "private_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0631\u0626\u064A \u0644\u0644\u0645\u062A\u0627\u0628\u0639\u064A\u0646 \u0641\u0642\u0637"]);
    },
    "public": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0639\u0627\u0645"]);
    },
    "public_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0631\u0626\u064A \u0644\u0644\u062C\u0645\u064A\u0639"]);
    },
    "unlisted": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u063A\u064A\u0631 \u0645\u062F\u0631\u062C"]);
    },
    "unlisted_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0645\u0631\u0626\u064A \u0644\u0644\u062C\u0645\u064A\u0639 \u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643 \u0641\u064A \u0645\u064A\u0632\u0627\u062A \u0627\u0644\u0627\u0643\u062A\u0634\u0627\u0641"]);
    }
  }
};

export { ar as default };
