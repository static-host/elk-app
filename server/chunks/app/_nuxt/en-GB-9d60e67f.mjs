const enGB = {
  "account": {
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Favourites"]);
    }
  },
  "action": {
    "favourite": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Favourite"]);
    },
    "favourited": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Favourited"]);
    }
  },
  "menu": {
    "show_favourited_and_boosted_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Show who favourited and boosted"]);
    }
  },
  "nav": {
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Favourites"]);
    }
  },
  "notification": {
    "favourited_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["favourited your post"]);
    }
  },
  "user": {
    "sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Sign in to follow profiles or hashtags, favourite, share and reply to posts, or interact from your account on a different server."]);
    }
  }
};

export { enGB as default };
