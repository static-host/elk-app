const ca = {
  "a11y": {
    "loading_page": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["S'est\xE0 carregant la p\xE0gina, espereu"]);
    },
    "loading_titled_page": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["S'est\xE0 carregant la p\xE0gina ", _interpolate(_list(0)), ", espereu"]);
    },
    "locale_changed": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["L'idioma ha canviat a ", _interpolate(_list(0))]);
    },
    "locale_changing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["S'est\xE0 canviant l'idioma, espereu"]);
    },
    "route_loaded": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["S'ha carregat la p\xE0gina ", _interpolate(_list(0))]);
    }
  },
  "account": {
    "avatar_description": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Avatar de ", _interpolate(_list(0))]);
    },
    "blocked_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Est\xE0s bloquejat per aquest usuari."]);
    },
    "blocked_domains": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Dominis bloquejats"]);
    },
    "blocked_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Usuaris bloquejats"]);
    },
    "blocking": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Bloquejat"]);
    },
    "bot": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["BOT"]);
    },
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Preferits"]);
    },
    "follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Segueix"]);
    },
    "follow_back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Segueix de tornada"]);
    },
    "follow_requested": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Demanat"]);
    },
    "followers": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Seguidors"]);
    },
    "followers_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_list(0)), " Seguidors"]), _normalize([_interpolate(_list(0)), " Seguidor"]), _normalize([_interpolate(_list(0)), " Seguidors"])]);
    },
    "following": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Seguint"]);
    },
    "following_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " Seguint"]);
    },
    "follows_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Et segueix"]);
    },
    "go_to_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["V\xE9s al perfil"]);
    },
    "joined": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["S'ha unit"]);
    },
    "moved_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["ha indicat que el seu nou compte \xE9s ara:"]);
    },
    "muted_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Usuaris silenciats"]);
    },
    "muting": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Silenciat"]);
    },
    "mutuals": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mutu"]);
    },
    "notifications_on_post_disable": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Deixa de notificar-me quan ", _interpolate(_named("username")), " publique"]);
    },
    "notifications_on_post_enable": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Aviseu-me quan ", _interpolate(_named("username")), " publique"]);
    },
    "pinned": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Fixat"]);
    },
    "posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Publicacions"]);
    },
    "posts_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_list(0)), " Publicacions"]), _normalize([_interpolate(_list(0)), " Publicaci\xF3"]), _normalize([_interpolate(_list(0)), " Publicacions"])]);
    },
    "profile_description": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Cap\xE7alera del perfil de ", _interpolate(_list(0))]);
    },
    "profile_unavailable": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Perfil no disponible"]);
    },
    "request_follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Sol\xB7licitud de seguiment"]);
    },
    "unblock": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Desbloqueja"]);
    },
    "unfollow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Deixa de seguir"]);
    },
    "unmute": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Activa el so"]);
    },
    "view_other_followers": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\xC9s possible que no es mostrin els seguidors d'altres inst\xE0ncies."]);
    },
    "view_other_following": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\xC9s possible que no es mostrin els seguits d'altres inst\xE0ncies."]);
    }
  },
  "action": {
    "apply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Aplicar"]);
    },
    "bookmark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Afegir marcador"]);
    },
    "bookmarked": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Afegit a marcadors"]);
    },
    "boost": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Est\xEDmul"]);
    },
    "boost_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "boosted": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Potenciat"]);
    },
    "clear_publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Esborra els errors de publicaci\xF3"]);
    },
    "clear_upload_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Esborra els errors de c\xE0rrega de fitxers"]);
    },
    "close": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tanca"]);
    },
    "compose": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Redactar"]);
    },
    "confirm": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Confirmeu"]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Edita"]);
    },
    "enter_app": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Entra a l'aplicaci\xF3"]);
    },
    "favourite": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Favorit"]);
    },
    "favourite_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "favourited": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Favorit"]);
    },
    "more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["M\xE9s"]);
    },
    "next": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Seg\xFCent"]);
    },
    "prev": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Anterior"]);
    },
    "publish": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Publicar"]);
    },
    "reply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Respon"]);
    },
    "reply_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "reset": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Restableix"]);
    },
    "save": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Desa"]);
    },
    "save_changes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Desa els canvis"]);
    },
    "sign_in": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Inicia sessi\xF3"]);
    },
    "sign_in_to": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Inicia sessi\xF3 a ", _interpolate(_list(0))]);
    },
    "switch_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Canvia de compte"]);
    },
    "vote": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Vota"]);
    }
  },
  "app_desc_short": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Un client web \xE0gil Mastodon"]);
  },
  "app_logo": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Logotip d'Elk"]);
  },
  "app_name": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Elk"]);
  },
  "attachment": {
    "edit_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Descripci\xF3"]);
    },
    "remove_label": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elimina el fitxer adjunt"]);
    }
  },
  "command": {
    "activate": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Activar"]);
    },
    "complete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Completa"]);
    },
    "compose_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Escriu una publicaci\xF3 nova"]);
    },
    "n-people-in-the-past-n-days": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " persones en els darrers ", _interpolate(_list(1)), " dies"]);
    },
    "select_lang": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Escolliu l'idioma"]);
    },
    "sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Afegeix un compte existent"]);
    },
    "switch_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Canvia a ", _interpolate(_list(0))]);
    },
    "switch_account_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Canvia a un altre compte"]);
    },
    "toggle_dark_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Canvia el mode fosc"]);
    },
    "toggle_zen_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Canvia el mode zen"]);
    }
  },
  "common": {
    "end_of_list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Final de la llista"]);
    },
    "error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["ERROR"]);
    },
    "fetching": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["S'est\xE0 recuperant..."]);
    },
    "in": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["en"]);
    },
    "not_found": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["404 No trobat"]);
    },
    "offline_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Sembla que est\xE0s fora de l\xEDnia. Comproveu la vostra connexi\xF3 de xarxa."]);
    }
  },
  "compose": {
    "draft_title": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Esborrany ", _interpolate(_list(0))]);
    },
    "drafts": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Esborranys (", _interpolate(_named("v")), ")"]);
    }
  },
  "confirm": {
    "block_account": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Cancel\xB7lar"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Bloc"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Confirmes que vols bloquejar ", _interpolate(_list(0)), "?"]);
      }
    },
    "block_domain": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Cancel\xB7lar"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Bloc"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Confirmes que vols bloquejar ", _interpolate(_list(0)), "?"]);
      }
    },
    "common": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["No"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["S\xED"]);
      }
    },
    "delete_list": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Cancel\xB7lar"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Suprimeix"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(['Esteu segur que voleu suprimir la llista "', _interpolate(_list(0)), '"?']);
      }
    },
    "delete_posts": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Cancel\xB7lar"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Suprimeix"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Esteu segur que voleu suprimir aquesta publicaci\xF3?"]);
      }
    },
    "mute_account": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Cancel\xB7lar"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Silenciar"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Confirmes que vols silenciar ", _interpolate(_list(0)), "?"]);
      }
    },
    "show_reblogs": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Cancel\xB7lar"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Espectacle"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Confirmes que vols mostrar els augments de ", _interpolate(_list(0)), "?"]);
      }
    },
    "unfollow": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Cancel\xB7lar"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Deixa de seguir"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Est\xE0s segur que vols deixar de seguir?"]);
      }
    }
  },
  "conversation": {
    "with": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["amb"]);
    }
  },
  "custom_cards": {
    "stackblitz": {
      "lines": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["L\xEDnies ", _interpolate(_list(0))]);
      },
      "open": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Obert"]);
      },
      "snippet_from": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Fragment de ", _interpolate(_list(0))]);
      }
    }
  },
  "error": {
    "account_not_found": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["No s'ha trobat el compte ", _interpolate(_list(0))]);
    },
    "explore-list-empty": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["No hi ha res de tend\xE8ncia ara mateix. Torna m\xE9s tard!"]);
    },
    "file_size_cannot_exceed_n_mb": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["La mida del fitxer no pot superar els ", _interpolate(_list(0)), "MB"]);
    },
    "sign_in_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["No es pot connectar al servidor."]);
    },
    "status_not_found": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["No s'ha trobat la publicaci\xF3"]);
    },
    "unsupported_file_format": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Format de fitxer no compatible"]);
    }
  },
  "help": {
    "build_preview": {
      "desc1": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Actualment esteu veient una versi\xF3 pr\xE8via d'Elk de la comunitat: ", _interpolate(_list(0)), "."]);
      },
      "desc2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Pot contenir canvis no revisats o fins i tot maliciosos."]);
      },
      "desc3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["No inicieu sessi\xF3 amb el vostre compte real."]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Vista pr\xE8via del desplegament"]);
      }
    },
    "desc_highlight": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Espereu alguns errors i caracter\xEDstiques que falten aqu\xED i all\xE0."]);
    },
    "desc_para1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Gr\xE0cies pel vostre inter\xE8s a provar Elk, el nostre client web en desenvolupament per a Mastodon!"]);
    },
    "desc_para2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Estem treballant intensament en el desenvolupament i millorant-lo amb el temps."]);
    },
    "desc_para3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Per impulsar el desenvolupament, podeu patrocinar l'equip a trav\xE9s dels patrocinadors de GitHub. Esperem que gaudiu d'Elk!"]);
    },
    "desc_para4": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk \xE9s de codi obert. Si voleu ajudar amb les proves, fer comentaris o contribuir-hi,"]);
    },
    "desc_para5": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["posa't en contacte amb nosaltres a GitHub"]);
    },
    "desc_para6": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["i participa."]);
    },
    "footer_team": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["L'equip Elk"]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk esta en Vista Previa!"]);
    }
  },
  "language": {
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Cerca"]);
    }
  },
  "list": {
    "add_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Afegeix un compte a la llista"]);
    },
    "cancel_edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Cancel\xB7la l'edici\xF3"]);
    },
    "clear_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Esborra l'error"]);
    },
    "create": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Crear"]);
    },
    "delete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Suprimeix aquesta llista"]);
    },
    "delete_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["S'ha produ\xEFt un error en suprimir la llista"]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Editeu aquesta llista"]);
    },
    "edit_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["S'ha produ\xEFt un error en actualitzar la llista"]);
    },
    "error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["S'ha produ\xEFt un error en crear la llista"]);
    },
    "error_prefix": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Error:"]);
    },
    "list_title_placeholder": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["T\xEDtol de la llista"]);
    },
    "modify_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Modificar llistes amb compte"]);
    },
    "remove_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elimina el compte de la llista"]);
    },
    "save": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Desa els canvis"]);
    }
  },
  "menu": {
    "block_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Bloqueja ", _interpolate(_list(0))]);
    },
    "block_domain": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Bloqueja el domini ", _interpolate(_list(0))]);
    },
    "copy_link_to_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Copia l'enlla\xE7 a aquesta publicaci\xF3"]);
    },
    "copy_original_link_to_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Copia l'enlla\xE7 original a aquesta publicaci\xF3"]);
    },
    "delete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Suprimeix"]);
    },
    "delete_and_redraft": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Esborra i torna a redactar"]);
    },
    "direct_message_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Missatge directe ", _interpolate(_list(0))]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Edita"]);
    },
    "hide_reblogs": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Amaga els augments de ", _interpolate(_list(0))]);
    },
    "mention_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Esmenta ", _interpolate(_list(0))]);
    },
    "mute_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Silencia ", _interpolate(_list(0))]);
    },
    "mute_conversation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Silencia aquesta publicaci\xF3"]);
    },
    "open_in_original_site": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Obre al lloc original"]);
    },
    "pin_on_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Fixa al perfil"]);
    },
    "share_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Comparteix aquesta publicaci\xF3"]);
    },
    "show_favourited_and_boosted_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mostra qui ha fet favorits i qui ha augmentat"]);
    },
    "show_reblogs": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Mostra els augments de ", _interpolate(_list(0))]);
    },
    "show_untranslated": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mostra sense traduir"]);
    },
    "toggle_theme": {
      "dark": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Canvia a mode fosc"]);
      },
      "light": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Canvia a mode clar"]);
      }
    },
    "translate_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tradueix"]);
    },
    "unblock_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Desbloqueja ", _interpolate(_list(0))]);
    },
    "unblock_domain": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Desbloqueja el domini ", _interpolate(_list(0))]);
    },
    "unmute_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Deixa de silenciar ", _interpolate(_list(0))]);
    },
    "unmute_conversation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Deixa de silenciar aquesta publicaci\xF3"]);
    },
    "unpin_on_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["No fixis al perfil"]);
    }
  },
  "nav": {
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Torna"]);
    },
    "blocked_domains": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Dominis bloquejats"]);
    },
    "blocked_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Usuaris bloquejats"]);
    },
    "bookmarks": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Marcadors"]);
    },
    "built_at": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Constru\xEFt ", _interpolate(_list(0))]);
    },
    "compose": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Redactar"]);
    },
    "conversations": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Converses"]);
    },
    "explore": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Explora"]);
    },
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Preferits"]);
    },
    "federated": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Federat"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Inici"]);
    },
    "list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Llista"]);
    },
    "lists": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Llistes"]);
    },
    "local": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Local"]);
    },
    "muted_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Usuaris silenciats"]);
    },
    "notifications": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Notificacions"]);
    },
    "privacy": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Privadesa"]);
    },
    "profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Perfil"]);
    },
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Cerca"]);
    },
    "select_feature_flags": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Commuta les banderes de funci\xF3"]);
    },
    "select_font_size": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mida de la font"]);
    },
    "select_language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Idioma de visualitzaci\xF3"]);
    },
    "settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Configuraci\xF3"]);
    },
    "show_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mostra la introducci\xF3"]);
    },
    "toggle_theme": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Canvia el tema"]);
    },
    "zen_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mode Zen"]);
    }
  },
  "notification": {
    "favourited_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["va posar com a preferit la teva publicaci\xF3"]);
    },
    "followed_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["t'ha seguit"]);
    },
    "followed_you_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_list(0)), " persones us han seguit"]), _normalize([_interpolate(_list(0)), " persones us han seguit"]), _normalize([_interpolate(_list(0)), " persones us han seguit"])]);
    },
    "missing_type": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["FALTA notificaci\xF3.tipus:"]);
    },
    "reblogged_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["ha reblogjat la teva publicaci\xF3"]);
    },
    "request_to_follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["demanat que us segueixi"]);
    },
    "signed_up": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["registrat"]);
    },
    "update_status": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["ha actualitzat la seva publicaci\xF3"]);
    }
  },
  "placeholder": {
    "content_warning": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Escriu el teu av\xEDs aqu\xED"]);
    },
    "default_1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Qu\xE8 et passa pel cap?"]);
    },
    "reply_to_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Respon a ", _interpolate(_list(0))]);
    },
    "replying": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Responent"]);
    }
  },
  "pwa": {
    "dismiss": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Descartar"]);
    },
    "install": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Instal\xB7lar"]);
    },
    "install_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Instal\xB7leu Elk"]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Nova actualitzaci\xF3 d'Elk disponible!"]);
    },
    "update": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Actualitzaci\xF3"]);
    },
    "update_available_short": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Actualitza Elk"]);
    },
    "webmanifest": {
      "canary": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Un client web \xE0gil Mastodon (canari)"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (canari)"]);
        },
        "short_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (canari)"]);
        }
      },
      "dev": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Un client web \xE0gil Mastodon (dev)"]);
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
          return _normalize(["Un client web \xE0gil Mastodon (vista pr\xE8via)"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (vista pr\xE8via)"]);
        },
        "short_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (vista pr\xE8via)"]);
        }
      },
      "release": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Un client web \xE0gil Mastodon"]);
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
      return _normalize(["Cerca persones i hashtags"]);
    },
    "search_empty": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["No s'ha pogut trobar res per a aquests termes de cerca"]);
    }
  },
  "settings": {
    "about": {
      "built_at": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Constru\xEFt"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Sobre"]);
      },
      "meet_the_team": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Coneix l'equip"]);
      },
      "sponsor_action": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Patrocina'ns"]);
      },
      "sponsor_action_desc": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Donar suport a l'equip que desenvolupa Elk"]);
      },
      "sponsors": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Patrocinadors"]);
      },
      "sponsors_body_1": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Elk \xE9s possible gr\xE0cies al gener\xF3s patrocini i ajuda de:"]);
      },
      "sponsors_body_2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["I totes les empreses i particulars patrocinadors d'Elk Team i els seus membres."]);
      },
      "sponsors_body_3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Si us agrada l'aplicaci\xF3, penseu a patrocinar-nos:"]);
      },
      "version": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Versi\xF3"]);
      }
    },
    "account_settings": {
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Editeu la configuraci\xF3 del vostre compte a la interf\xEDcie d'usuari de Mastodon"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Configuraci\xF3 del compte"]);
      }
    },
    "interface": {
      "color_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Mode de color"]);
      },
      "dark_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Fosc"]);
      },
      "default": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["(per defecte)"]);
      },
      "font_size": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Mida de la font"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Interf\xEDcie"]);
      },
      "light_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Clar"]);
      },
      "system_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Sistema"]);
      },
      "theme_color": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Color del tema"]);
      }
    },
    "language": {
      "display_language": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Idioma de visualitzaci\xF3"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Idioma"]);
      },
      "status": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Estat de la traducci\xF3: ", _interpolate(_list(0)), "/", _interpolate(_list(1)), " (", _interpolate(_list(2)), "%)"]);
      },
      "translations": {
        "add": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Afegeix"]);
        },
        "choose_language": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Trieu l'idioma"]);
        },
        "heading": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Traduccions"]);
        },
        "hide_specific": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Amaga traduccions espec\xEDfiques"]);
        },
        "remove": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Eliminar"]);
        }
      }
    },
    "notifications": {
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Notificacions"]);
      },
      "notifications": {
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Configuraci\xF3 de notificacions"]);
        }
      },
      "push_notifications": {
        "alerts": {
          "favourite": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Preferits"]);
          },
          "follow": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Nous seguidors"]);
          },
          "mention": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Mencions"]);
          },
          "poll": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Enquestes"]);
          },
          "reblog": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Reblogueu la vostra publicaci\xF3"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Quines notificacions rebre?"]);
          }
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Rebeu notificacions fins i tot quan no feu servir Elk."]);
        },
        "instructions": (ctx) => {
          const { normalize: _normalize, linked: _linked, type: _type } = ctx;
          return _normalize(["No oblideu desar els vostres canvis utilitzant el bot\xF3 ", _linked("settings.notifications.push_notifications.save_settings!", void 0, _type)]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Configuraci\xF3 de les notificacions push"]);
        },
        "policy": {
          "all": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["De qualsevol"]);
          },
          "followed": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["De la gent que segueixo"]);
          },
          "follower": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["De la gent que em segueix"]);
          },
          "none": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["De ning\xFA"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["De qui puc rebre notificacions?"]);
          }
        },
        "save_settings": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Desa els canvis"]);
        },
        "subscription_error": {
          "clear_error": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Esborra l'error"]);
          },
          "error_hint": (ctx) => {
            const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
            return _normalize(["Podeu consultar una llista de preguntes freq\xFCents per intentar resoldre el problema: ", _interpolate(_list(0)), "."]);
          },
          "invalid_vapid_key": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["La clau p\xFAblica VAPID sembla que no \xE9s v\xE0lida."]);
          },
          "permission_denied": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Perm\xEDs denegat: activeu les notificacions al vostre navegador."]);
          },
          "repo_link": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["El dip\xF2sit d'Elk a GitHub"]);
          },
          "request_error": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["S'ha produ\xEFt un error en sol\xB7licitar la subscripci\xF3, torneu-ho a provar i, si l'error persisteix, informeu-lo al repositori d'Elk."]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["No s'ha pogut subscriure a les notificacions push"]);
          },
          "too_many_registrations": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["A causa de les limitacions del navegador, Elk no pot utilitzar el servei de notificacions push per a diversos comptes en diferents servidors. Haur\xEDeu de cancel\xB7lar la subscripci\xF3 a les notificacions push d'un altre compte i tornar-ho a provar."]);
          },
          "vapid_not_supported": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["El vostre navegador admet les notificacions push web, per\xF2 no sembla implementar el protocol VAPID."]);
          }
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Configuraci\xF3 de les notificacions push"]);
        },
        "undo_settings": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Desfer els canvis"]);
        },
        "unsubscribe": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Desactiva les notificacions push"]);
        },
        "unsupported": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["El vostre navegador no admet notificacions push."]);
        },
        "warning": {
          "enable_close": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Tanca"]);
          },
          "enable_description": (ctx) => {
            const { normalize: _normalize, linked: _linked, type: _type } = ctx;
            return _normalize([`Per rebre notificacions quan Elk no estigui obert, activeu les notificacions push. Podeu controlar amb precisi\xF3 quins tipus d'interaccions generen notificacions push mitjan\xE7ant el bot\xF3 "`, _linked("settings.notifications.show_btn", void 0, _type), '"', " de dalt un cop activat."]);
          },
          "enable_description_desktop": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize([`Per rebre notificacions quan Elk no estigui obert, activeu les notificacions push. Podeu controlar amb precisi\xF3 quins tipus d'interaccions generen notificacions push a "Configuraci\xF3 > Notificacions > Configuraci\xF3 de notificacions push" un cop habilitat.`]);
          },
          "enable_description_mobile": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(['Tamb\xE9 podeu accedir a la configuraci\xF3 mitjan\xE7ant el men\xFA de navegaci\xF3 "Configuraci\xF3 > Notificacions > Configuraci\xF3 de notificacions push".']);
          },
          "enable_description_settings": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Per rebre notificacions quan Elk no estigui obert, activeu les notificacions push. Podreu controlar amb precisi\xF3 quins tipus d'interaccions generen notificacions push en aquesta mateixa pantalla un cop les habiliteu."]);
          },
          "enable_desktop": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Activa les notificacions push"]);
          },
          "enable_title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["No et perdis mai res"]);
          },
          "re_auth": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Sembla que el vostre servidor no admet notificacions push. Proveu de tancar la sessi\xF3 i tornar-la a iniciar, si aquest missatge encara apareix, poseu-vos en contacte amb l'administrador del vostre servidor."]);
          }
        }
      },
      "show_btn": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["V\xE9s a la configuraci\xF3 de notificacions"]);
      },
      "under_construction": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["En construcci\xF3"]);
      }
    },
    "notifications_settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Notificacions"]);
    },
    "preferences": {
      "enable_autoplay": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Activa la reproducci\xF3 autom\xE0tica"]);
      },
      "enable_data_saving": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Activa l'emmagatzematge de dades"]);
      },
      "enable_data_saving_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Deseu les dades evitant que els fitxers adjunts es carreguin autom\xE0ticament."]);
      },
      "enable_pinch_to_zoom": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Activa el pessic per fer zoom"]);
      },
      "github_cards": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Targetes GitHub"]);
      },
      "grayscale_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Mode d'escala de grisos"]);
      },
      "hide_account_hover_card": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Amaga la targeta de despla\xE7ament del compte"]);
      },
      "hide_alt_indi_on_posts": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Amaga l'indicador alt a les publicacions"]);
      },
      "hide_boost_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Amaga el recompte d'impulsos"]);
      },
      "hide_favorite_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Amaga el recompte de favorits"]);
      },
      "hide_follower_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Amaga el recompte de seguidors"]);
      },
      "hide_reply_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Amaga el recompte de respostes"]);
      },
      "hide_translation": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Amaga la traducci\xF3"]);
      },
      "hide_username_emojis": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Amaga els emojis del nom d'usuari"]);
      },
      "hide_username_emojis_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Amaga els emojis dels noms d'usuari a les l\xEDnies de temps. Els emojis encara seran visibles als seus perfils."]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Prefer\xE8ncies"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Caracter\xEDstiques experimentals"]);
      },
      "user_picker": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Selector d'usuaris"]);
      },
      "virtual_scroll": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Despla\xE7ament virtual"]);
      },
      "wellbeing": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Benestar"]);
      }
    },
    "profile": {
      "appearance": {
        "bio": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["bio"]);
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Edita l'avatar, el nom d'usuari, el perfil, etc."]);
        },
        "display_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nom de visualitzaci\xF3"]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Aparen\xE7a"]);
        },
        "profile_metadata": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Metadades del perfil"]);
        },
        "profile_metadata_desc": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
          return _normalize(["Pots mostrar fins a ", _interpolate(_list(0)), " elements com a taula al teu perfil"]);
        },
        "profile_metadata_label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Etiqueta"]);
        },
        "profile_metadata_value": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Contingut"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Edita el perfil"]);
        }
      },
      "featured_tags": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["La gent pot navegar per les teves publicacions p\xFAbliques amb aquests hashtags."]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Hashtags destacats"]);
        }
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Perfil"]);
      }
    },
    "select_a_settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Seleccioneu una configuraci\xF3"]);
    },
    "users": {
      "export": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Exporta fitxes d'usuari"]);
      },
      "import": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Importa fitxes d'usuari"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Usuaris connectats"]);
      }
    }
  },
  "share-target": {
    "description": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk es pot configurar perqu\xE8 pugueu compartir contingut d'altres aplicacions, nom\xE9s cal que instal\xB7leu Elk al vostre dispositiu o ordinador i inicieu sessi\xF3."]);
    },
    "hint": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Per compartir contingut amb Elk, cal que l'Elk estigui instal\xB7lat i inicieu sessi\xF3."]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Comparteix amb Elk"]);
    }
  },
  "state": {
    "attachments_exceed_server_limit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["El nombre de fitxers adjunts ha superat el l\xEDmit per missatge."]);
    },
    "attachments_limit_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["S'ha superat el l\xEDmit per publicaci\xF3"]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["(Edit)"]);
    },
    "editing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Edici\xF3"]);
    },
    "loading": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Carregant..."]);
    },
    "publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["No s'ha pogut publicar"]);
    },
    "publishing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Publicaci\xF3"]);
    },
    "upload_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["La c\xE0rrega ha fallat"]);
    },
    "uploading": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["S'est\xE0 carregant..."]);
    }
  },
  "status": {
    "boosted_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Impulsat per"]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Editat ", _interpolate(_list(0))]);
    },
    "favourited_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Favorit per"]);
    },
    "filter_hidden_phrase": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Filtrat per"]);
    },
    "filter_show_anyway": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mostra de totes maneres"]);
    },
    "img_alt": {
      "ALT": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["ALT"]);
      },
      "desc": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Descripci\xF3"]);
      },
      "dismiss": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Descartar"]);
      },
      "read": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Llegeix la descripci\xF3 de ", _interpolate(_list(0))]);
      }
    },
    "poll": {
      "count": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
        return _plural([_normalize([_interpolate(_list(0)), " vots"]), _normalize([_interpolate(_list(0)), " vot"]), _normalize([_interpolate(_list(0)), " vots"])]);
      },
      "ends": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["acaba ", _interpolate(_list(0))]);
      },
      "finished": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["acabat ", _interpolate(_list(0))]);
      }
    },
    "replying_to": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Responent a ", _interpolate(_list(0))]);
    },
    "show_full_thread": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mostra el fil complet"]);
    },
    "someone": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["alg\xFA"]);
    },
    "spoiler_show_less": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mostra menys"]);
    },
    "spoiler_show_more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mostra m\xE9s"]);
    },
    "thread": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Fil"]);
    },
    "try_original_site": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Proveu el lloc original"]);
    }
  },
  "status_history": {
    "created": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["creat ", _interpolate(_list(0))]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["editat ", _interpolate(_list(0))]);
    }
  },
  "tab": {
    "accounts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Comptes"]);
    },
    "for_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Per a tu"]);
    },
    "hashtags": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Hashtags"]);
    },
    "list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Llista"]);
    },
    "media": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mitjans de comunicaci\xF3"]);
    },
    "news": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Not\xEDcies"]);
    },
    "notifications_all": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tots"]);
    },
    "notifications_mention": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Esmenta"]);
    },
    "posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Publicacions"]);
    },
    "posts_with_replies": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Publicacions"]);
    }
  },
  "tag": {
    "follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Seguiu"]);
    },
    "follow_label": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Seguiu l'etiqueta ", _interpolate(_list(0))]);
    },
    "unfollow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Deixa de seguir"]);
    },
    "unfollow_label": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Deixa de seguir l'etiqueta ", _interpolate(_list(0))]);
    }
  },
  "time_ago_options": {
    "day_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["d'aqu\xED a 0 dies"]), _normalize(["dem\xE0"]), _normalize(["d'aqu\xED a ", _interpolate(_named("n")), " dies"])]);
    },
    "day_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["fa 0 dies"]), _normalize(["ahir"]), _normalize(["fa ", _interpolate(_named("n")), " dies"])]);
    },
    "hour_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["en 0 hores"]), _normalize(["en 1 hora"]), _normalize(["en ", _interpolate(_named("n")), " hores"])]);
    },
    "hour_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["fa 0 hores"]), _normalize(["fa 1 hora"]), _normalize(["fa ", _interpolate(_named("n")), " hores"])]);
    },
    "just_now": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["ara mateix"]);
    },
    "minute_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["en 0 minuts"]), _normalize(["en 1 minut"]), _normalize(["en ", _interpolate(_named("n")), " minuts"])]);
    },
    "minute_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["fa 0 minuts"]), _normalize(["fa 1 minut"]), _normalize(["fa ", _interpolate(_named("n")), " minuts"])]);
    },
    "month_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["d'aqu\xED a 0 mesos"]), _normalize(["mes que ve"]), _normalize(["d'aqu\xED a ", _interpolate(_named("n")), " mesos"])]);
    },
    "month_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["fa 0 mesos"]), _normalize(["el mes passat"]), _normalize(["fa ", _interpolate(_named("n")), " mesos"])]);
    },
    "second_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["ara mateix"]), _normalize(["en ", _interpolate(_named("n")), " segon"]), _normalize(["en ", _interpolate(_named("n")), " segons"])]);
    },
    "second_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["ara mateix"]), _normalize(["fa ", _interpolate(_named("n")), " segon"]), _normalize(["fa ", _interpolate(_named("n")), " segons"])]);
    },
    "short_day_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["en ", _interpolate(_named("n")), "d"]);
    },
    "short_day_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "d"]);
    },
    "short_hour_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["en ", _interpolate(_named("n")), "h"]);
    },
    "short_hour_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "h"]);
    },
    "short_minute_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["en ", _interpolate(_named("n")), "min"]);
    },
    "short_minute_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "min"]);
    },
    "short_month_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["en 0 mesos"]), _normalize(["en 1 mes"]), _normalize(["en ", _interpolate(_named("n")), " mesos"])]);
    },
    "short_month_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0 mesos"]), _normalize(["1 mes"]), _normalize([_interpolate(_named("n")), " mesos"])]);
    },
    "short_second_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["en ", _interpolate(_named("n")), " s"]);
    },
    "short_second_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " s"]);
    },
    "short_week_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["en ", _interpolate(_named("n")), " set"]);
    },
    "short_week_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), " set"]);
    },
    "short_year_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["en 0 anys"]), _normalize(["en 1 any"]), _normalize(["en ", _interpolate(_named("n")), "anys"])]);
    },
    "short_year_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0 anys"]), _normalize(["1 any"]), _normalize([_interpolate(_named("n")), " anys"])]);
    },
    "week_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["d'aqu\xED a 0 setmanes"]), _normalize(["la setmana vinent"]), _normalize(["d'aqu\xED a ", _interpolate(_named("n")), " setmanes"])]);
    },
    "week_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["fa 0 setmanes"]), _normalize(["la setmana passada"]), _normalize(["fa ", _interpolate(_named("n")), " setmanes"])]);
    },
    "year_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["d'aqu\xED a 0 anys"]), _normalize(["l'any vinent"]), _normalize(["d'aqu\xED a ", _interpolate(_named("n")), " anys"])]);
    },
    "year_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["fa 0 anys"]), _normalize(["l'any passat"]), _normalize(["fa ", _interpolate(_named("n")), " anys"])]);
    }
  },
  "timeline": {
    "show_new_items": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["Mostra ", _interpolate(_named("v")), " elements nous"]), _normalize(["Mostra ", _interpolate(_named("v")), " element nou"]), _normalize(["Mostra ", _interpolate(_named("v")), " elements nous"])]);
    },
    "view_older_posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\xC9s possible que les publicacions m\xE9s antigues d'altres inst\xE0ncies no es mostrin."]);
    }
  },
  "title": {
    "federated_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Cronologia federada"]);
    },
    "local_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Cronologia local"]);
    }
  },
  "tooltip": {
    "add_content_warning": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Afegiu un av\xEDs de contingut"]);
    },
    "add_emojis": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Afegeix emojis"]);
    },
    "add_media": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Afegiu imatges, un v\xEDdeo o un fitxer d'\xE0udio"]);
    },
    "add_publishable_content": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Afegeix contingut per publicar"]);
    },
    "change_content_visibility": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Canvia la visibilitat del contingut"]);
    },
    "change_language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Canviar d'idioma"]);
    },
    "emoji": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Emoji"]);
    },
    "explore_links_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Les persones d'aquest i d'altres servidors de la xarxa descentralitzada estan parlant d'aquestes not\xEDcies en aquests moments."]);
    },
    "explore_posts_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Aquestes publicacions d'aquest i d'altres servidors de la xarxa descentralitzada estan guanyant for\xE7a en aquest servidor ara mateix."]);
    },
    "explore_tags_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Aquests hashtags estan guanyant for\xE7a entre les persones d'aquest i d'altres servidors de la xarxa descentralitzada ara mateix."]);
    },
    "open_editor_tools": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Eines de l'editor"]);
    },
    "pick_an_icon": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Trieu una icona"]);
    },
    "publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tanca els missatges fallits a la part superior de l'editor per tornar a publicar publicacions"]);
    },
    "toggle_bold": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Commuta la negreta"]);
    },
    "toggle_code_block": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Commuta el bloc de codi"]);
    },
    "toggle_italic": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Canvia la cursiva"]);
    }
  },
  "user": {
    "add_existing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Afegeix un compte existent"]);
    },
    "server_address_label": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Adre\xE7a del servidor Mastodon"]);
    },
    "sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Inicia sessi\xF3 per seguir perfils o hashtags, preferir, compartir i respondre publicacions o interactuar des del vostre compte en un servidor diferent."]);
    },
    "sign_in_notice_title": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["S'estan visualitzant ", _interpolate(_list(0)), " dades p\xFAbliques"]);
    },
    "sign_out_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Tanca la sessi\xF3 ", _interpolate(_list(0))]);
    },
    "single_instance_sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Inicieu la sessi\xF3 per seguir perfils o hashtags, preferir, compartir i respondre publicacions."]);
    },
    "tip_no_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Si encara no teniu cap compte de Mastodon, ", _interpolate(_list(0)), "."]);
    },
    "tip_register_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["trieu el vostre servidor i registreu-ne un"]);
    }
  },
  "visibility": {
    "direct": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Directe"]);
    },
    "direct_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Visible nom\xE9s per als usuaris esmentats"]);
    },
    "private": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Nom\xE9s seguidors"]);
    },
    "private_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Visible nom\xE9s per als seguidors"]);
    },
    "public": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["P\xFAblic"]);
    },
    "public_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Visible per a tothom"]);
    },
    "unlisted": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["No llistat"]);
    },
    "unlisted_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Visible per a tothom, per\xF2 s'ha desactivat les funcions de descobriment"]);
    }
  }
};

export { ca as default };
