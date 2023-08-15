const frFR = {
  "a11y": {
    "loading_page": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Chargement de la page, veuillez patienter"]);
    },
    "loading_titled_page": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Chargement de la page ", _interpolate(_list(0)), ", veuillez patienter"]);
    },
    "locale_changed": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Langue chang\xE9e \xE0 ", _interpolate(_list(0))]);
    },
    "locale_changing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Changement de langue, veuillez patienter"]);
    },
    "route_loaded": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Page ", _interpolate(_list(0)), " charg\xE9e"]);
    }
  },
  "account": {
    "avatar_description": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Avatar de ", _interpolate(_list(0))]);
    },
    "blocked_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ce compte vous a bloqu\xE9"]);
    },
    "blocked_domains": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Domaines bloqu\xE9s"]);
    },
    "blocked_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Comptes bloqu\xE9s"]);
    },
    "blocking": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Bloqu\xE9\xB7e"]);
    },
    "bot": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Automatis\xE9"]);
    },
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Aim\xE9s"]);
    },
    "follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Suivre"]);
    },
    "follow_back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Suivre en retour"]);
    },
    "follow_requested": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Abonnement demand\xE9"]);
    },
    "followers": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Abonn\xE9\xB7e\xB7s"]);
    },
    "followers_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_list(0)), " abonn\xE9\xB7e"]), _normalize([_interpolate(_list(0)), " abonn\xE9\xB7e"]), _normalize([_interpolate(_list(0)), " abonn\xE9\xB7e\xB7s"])]);
    },
    "following": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Suivi\xB7e"]);
    },
    "following_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " abonnements"]);
    },
    "follows_you": (ctx) => {
      const { normalize: _normalize, linked: _linked, type: _type } = ctx;
      return _normalize([_linked("account.follow_back", void 0, _type)]);
    },
    "go_to_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Aller \xE0 son profil"]);
    },
    "joined": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["a rejoint"]);
    },
    "moved_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["a indiqu\xE9 que son nouveau compte est d\xE9sormais :"]);
    },
    "muted_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Comptes masqu\xE9s"]);
    },
    "muting": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Masqu\xE9\xB7e"]);
    },
    "mutuals": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Abonn\xE9\xB7e\xB7s"]);
    },
    "notifications_on_post_disable": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Arr\xEAtez de me notifier lorsque ", _interpolate(_named("username")), " publie"]);
    },
    "notifications_on_post_enable": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["M'avertir lorsque ", _interpolate(_named("username")), " publie"]);
    },
    "pinned": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\xC9pingl\xE9s"]);
    },
    "posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Messages"]);
    },
    "posts_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " Messages"]);
    },
    "profile_description": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["En-t\xEAte du profil de ", _interpolate(_list(0))]);
    },
    "profile_personal_note": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Note personnelle"]);
    },
    "profile_unavailable": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Profil non accessible"]);
    },
    "request_follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Demander \xE0 suivre"]);
    },
    "unblock": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["D\xE9bloquer"]);
    },
    "unfollow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ne plus suivre"]);
    },
    "unmute": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["R\xE9afficher"]);
    },
    "view_other_followers": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Les comptes abonn\xE9s d'autres instances peuvent ne pas \xEAtre affich\xE9s."]);
    },
    "view_other_following": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Les comptes suivis d'autres instances peuvent ne pas \xEAtre affich\xE9s."]);
    }
  },
  "action": {
    "apply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Appliquer"]);
    },
    "bookmark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ajouter aux marque-pages"]);
    },
    "bookmarked": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ajout\xE9 aux marque-pages"]);
    },
    "boost": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Partager"]);
    },
    "boost_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "boosted": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Partag\xE9"]);
    },
    "clear_publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Effacer les erreurs de publication"]);
    },
    "clear_upload_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Effacer les erreurs de t\xE9l\xE9versement de fichier"]);
    },
    "close": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Fermer"]);
    },
    "compose": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Composer"]);
    },
    "confirm": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Confirmer"]);
    },
    "done": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Termin\xE9"]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\xC9diter"]);
    },
    "enter_app": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Entrer dans l'application"]);
    },
    "favourite": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["J'aime"]);
    },
    "favourite_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "favourited": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Aim\xE9"]);
    },
    "more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Plus"]);
    },
    "next": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Suivant"]);
    },
    "prev": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Pr\xE9c\xE9dent"]);
    },
    "publish": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Publier"]);
    },
    "reply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["R\xE9pondre"]);
    },
    "reply_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0))]);
    },
    "reset": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["R\xE9initialiser"]);
    },
    "save": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Enregistrer"]);
    },
    "save_changes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Enregistrer les changements"]);
    },
    "sign_in": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Se connecter"]);
    },
    "sign_in_to": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Se connecter \xE0 ", _interpolate(_list(0))]);
    },
    "switch_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Changer de compte"]);
    },
    "vote": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Voter"]);
    }
  },
  "app_desc_short": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Un client Mastodon fait avec \u{1F9E1}"]);
  },
  "app_logo": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Logo Elk"]);
  },
  "app_name": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Elk"]);
  },
  "attachment": {
    "edit_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Description"]);
    },
    "remove_label": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Retirer le fichier attach\xE9"]);
    }
  },
  "command": {
    "activate": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Activer"]);
    },
    "complete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Compl\xE9ter"]);
    },
    "compose_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\xC9crire un nouveau message"]);
    },
    "n-people-in-the-past-n-days": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " personnes dans les ", _interpolate(_list(1)), " jours"]);
    },
    "select_lang": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["S\xE9lectionner langue"]);
    },
    "sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ajouter un compte existant"]);
    },
    "switch_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Changer pour le compte ", _interpolate(_list(0))]);
    },
    "switch_account_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Changer vers un autre compte"]);
    },
    "toggle_dark_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Passer au th\xE8me fonc\xE9"]);
    },
    "toggle_zen_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Passer en mode zen"]);
    }
  },
  "common": {
    "end_of_list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Fin de liste"]);
    },
    "error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["ERREUR"]);
    },
    "fetching": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["R\xE9cup\xE9ration..."]);
    },
    "in": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["sur"]);
    },
    "no_bookmarks": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Aucun message mis dans les marques-page pour le moment"]);
    },
    "no_favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Aucun message mis en favoris pour le moment"]);
    },
    "not_found": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["404 Introuvable"]);
    },
    "offline_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Il semble que vous soyez hors-ligne. V\xE9rifiez votre connexion internet."]);
    }
  },
  "compose": {
    "draft_title": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Brouillon ", _interpolate(_list(0))]);
    },
    "drafts": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Brouillons (", _interpolate(_named("v")), ")"]);
    }
  },
  "confirm": {
    "block_account": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Annuler"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Bloquer"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Voulez-vous vraiment bloquer ", _interpolate(_list(0)), " ?"]);
      }
    },
    "block_domain": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Annuler"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Bloquer"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Voulez-vous vraiment bloquer ", _interpolate(_list(0)), " ?"]);
      }
    },
    "common": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Non"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Oui"]);
      }
    },
    "delete_list": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Annuler"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Supprimer"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(['Voulez-vous vraiment supprimer la liste "', _interpolate(_list(0)), '" ?']);
      }
    },
    "delete_posts": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Annuler"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Supprimer"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Voulez-vous vraiment supprimer ce message ?"]);
      }
    },
    "mute_account": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Annuler"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Mettre en sourdine"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Voulez-vous vraiment mettre en sourdine ", _interpolate(_list(0)), " ?"]);
      }
    },
    "show_reblogs": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Annuler"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Afficher"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Voulez-vous vraiment afficher les partages de ", _interpolate(_list(0)), " ?"]);
      }
    },
    "unfollow": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Annuler"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Se d\xE9sabonner"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Voulez-vous vraiment vous d\xE9sabonner ?"]);
      }
    }
  },
  "conversation": {
    "with": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["avec"]);
    }
  },
  "custom_cards": {
    "stackblitz": {
      "lines": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Lignes ", _interpolate(_list(0))]);
      },
      "open": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ouvrir"]);
      },
      "snippet_from": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Extrait de ", _interpolate(_list(0))]);
      }
    }
  },
  "error": {
    "account_not_found": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Compte ", _interpolate(_list(0)), " non trouv\xE9"]);
    },
    "explore-list-empty": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Pas de tendance en ce moment. Revenez plus tard!"]);
    },
    "file_size_cannot_exceed_n_mb": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["La taille du fichier d\xE9passe les ", _interpolate(_list(0)), "MB"]);
    },
    "sign_in_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Impossible de se connecter au serveur."]);
    },
    "status_not_found": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Message non trouv\xE9"]);
    },
    "unsupported_file_format": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Format de fichier non support\xE9"]);
    }
  },
  "help": {
    "build_preview": {
      "desc1": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Vous consultez actuellement une version d'aper\xE7u d'Elk de la communaut\xE9 - ", _interpolate(_list(0)), "."]);
      },
      "desc2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Elle peut contenir des modifications non r\xE9vis\xE9es voire m\xEAme malveillantes."]);
      },
      "desc3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ne vous connectez pas avec votre compte r\xE9el."]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Aper\xE7u du d\xE9ploiement"]);
      }
    },
    "desc_highlight": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Il est possible de rencontrer, par-ci par-l\xE0, quelques bugs et fonctionnalit\xE9s manquantes."]);
    },
    "desc_para1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Merci de l'int\xE9r\xEAt pour Elk, notre client Mastodon en cours de d\xE9veloppement !"]);
    },
    "desc_para2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Nous travaillons dur sur le d\xE9veloppement et l'am\xE9liorons au fur et \xE0 mesure. Nous allons open-sourcer l'application une fois qu'elle sera pr\xEAte pour un usage public."]);
    },
    "desc_para3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Pour supporter son d\xE9veloppement, vous pouvez parrainer les membres de l'\xE9quipe avec les liens ci-dessous. Nous esp\xE9rons que vous appr\xE9cierez Elk!"]);
    },
    "desc_para4": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Avant cela, si vous voulez aider \xE0 tester, donner des retours ou contribuer"]);
    },
    "desc_para5": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["contactez nous sur GitHub"]);
    },
    "desc_para6": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["et rejoignez l'aventure."]);
    },
    "footer_team": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["L'\xE9quipe Elk"]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk est en mode Aper\xE7u !"]);
    }
  },
  "language": {
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Recherche"]);
    }
  },
  "list": {
    "add_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ajouter le compte \xE0 la liste"]);
    },
    "cancel_edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Annuler l'\xE9dition"]);
    },
    "clear_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Effacer l'erreur"]);
    },
    "create": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Cr\xE9er"]);
    },
    "delete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Supprimer cette liste"]);
    },
    "delete_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Il y a eu une erreur lors de la suppression de la liste"]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Editer cette liste"]);
    },
    "edit_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Il y a eu une erreur lors de la mise \xE0 jour de la liste"]);
    },
    "error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Il y a eu une erreur lors de la cr\xE9ation de la liste"]);
    },
    "error_prefix": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Erreur :"]);
    },
    "list_title_placeholder": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Nom de la liste"]);
    },
    "modify_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Modifier les listes de ce compte"]);
    },
    "remove_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Supprimer ce compte de listes"]);
    },
    "save": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Enregistrer les changements"]);
    }
  },
  "magic_keys": {
    "dialog_header": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Raccourcis clavier"]);
    },
    "groups": {
      "actions": {
        "boost": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Partager"]);
        },
        "command_mode": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Mode commande"]);
        },
        "compose": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Composer"]);
        },
        "favourite": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["J'aime"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Actions"]);
        },
        "zen_mode": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Mode Zen"]);
        }
      },
      "media": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["M\xE9dia"]);
        }
      },
      "navigation": {
        "go_to_home": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Accueil"]);
        },
        "go_to_notifications": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Notifications"]);
        },
        "next_status": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Message suivant"]);
        },
        "previous_status": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Message pr\xE9c\xE9dent"]);
        },
        "shortcut_help": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Aide sur les raccourcis"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Navigation"]);
        }
      }
    },
    "sequence_then": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["puis"]);
    }
  },
  "menu": {
    "add_personal_note": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Ajouter une note personnelle \xE0 ", _interpolate(_list(0))]);
    },
    "block_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Bloquer ", _interpolate(_list(0))]);
    },
    "block_domain": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Bloquer le domaine ", _interpolate(_list(0))]);
    },
    "copy_link_to_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Copier le lien du message"]);
    },
    "copy_original_link_to_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Copiez le lien d'origine vers ce message"]);
    },
    "delete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Supprimer"]);
    },
    "delete_and_redraft": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Supprimer et r\xE9\xE9crire"]);
    },
    "direct_message_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Message direct \xE0 ", _interpolate(_list(0))]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\xC9diter"]);
    },
    "hide_reblogs": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Cacher les partages de ", _interpolate(_list(0))]);
    },
    "mention_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Mentionner ", _interpolate(_list(0))]);
    },
    "mute_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Mettre en sourdine ", _interpolate(_list(0))]);
    },
    "mute_conversation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Message muet"]);
    },
    "open_in_original_site": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ouvrir sur le site d'origine"]);
    },
    "pin_on_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\xC9pingler sur le profil"]);
    },
    "remove_personal_note": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Retirer la note personnelle de ", _interpolate(_list(0))]);
    },
    "report_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Signaler ", _interpolate(_list(0))]);
    },
    "share_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Partager ce message"]);
    },
    "show_favourited_and_boosted_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Montrer qui a aim\xE9 et partag\xE9"]);
    },
    "show_reblogs": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Voir les partages de ", _interpolate(_list(0))]);
    },
    "show_untranslated": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Montrer le message non-traduit"]);
    },
    "toggle_theme": {
      "dark": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Passer au th\xE8me fonc\xE9"]);
      },
      "light": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Passer au th\xE8me clair"]);
      }
    },
    "translate_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Traduire le message"]);
    },
    "unblock_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["D\xE9bloquer ", _interpolate(_list(0))]);
    },
    "unblock_domain": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["D\xE9bloquer le domaine ", _interpolate(_list(0))]);
    },
    "unfollow_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Ne plus suivre ", _interpolate(_list(0))]);
    },
    "unmute_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Enlever la sourdine \xE0 ", _interpolate(_list(0))]);
    },
    "unmute_conversation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["R\xE9activer le message"]);
    },
    "unpin_on_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["D\xE9s\xE9pingler du profil"]);
    }
  },
  "modals": {
    "aria_label_close": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Fermer"]);
    }
  },
  "nav": {
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Retourner \xE0 la page pr\xE9c\xE9dente"]);
    },
    "blocked_domains": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Domaines bloqu\xE9s"]);
    },
    "blocked_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Comptes bloqu\xE9s"]);
    },
    "bookmarks": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Marque-pages"]);
    },
    "built_at": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Derni\xE8re compilation ", _interpolate(_list(0))]);
    },
    "compose": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Composer"]);
    },
    "conversations": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Conversations"]);
    },
    "explore": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Explorer"]);
    },
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Favoris"]);
    },
    "federated": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["F\xE9d\xE9r\xE9s"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Accueil"]);
    },
    "list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Liste"]);
    },
    "lists": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Listes"]);
    },
    "local": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Local"]);
    },
    "muted_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Comptes masqu\xE9s"]);
    },
    "notifications": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Notifications"]);
    },
    "privacy": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Donn\xE9es priv\xE9es"]);
    },
    "profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Profil"]);
    },
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Rechercher"]);
    },
    "select_feature_flags": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Activer/D\xE9sactiver Feature Flags"]);
    },
    "select_font_size": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Taille de la police"]);
    },
    "select_language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["S\xE9lectionner langue"]);
    },
    "settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Param\xE8tres"]);
    },
    "show_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["R\xE9-afficher l'introduction"]);
    },
    "toggle_theme": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Changer de th\xE8me"]);
    },
    "zen_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mode Zen"]);
    }
  },
  "notification": {
    "favourited_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["a aim\xE9 votre message"]);
    },
    "followed_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["vous suit"]);
    },
    "followed_you_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_list(0)), " personnes vous suivent"]), _normalize([_interpolate(_list(0)), " personne vous suit"]), _normalize([_interpolate(_list(0)), " personnes vous suivent"])]);
    },
    "missing_type": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["MISSING notification.type:"]);
    },
    "reblogged_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["a relay\xE9 votre message"]);
    },
    "reported": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " a signal\xE9 ", _interpolate(_list(1))]);
    },
    "request_to_follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["vous demande de le suivre"]);
    },
    "signed_up": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["s'est inscrit\xB7e"]);
    },
    "update_status": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["a post\xE9 un nouveau message"]);
    }
  },
  "placeholder": {
    "content_warning": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\xC9crivez votre message d'avertissement ici"]);
    },
    "default_1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Quelque chose \xE0 partager ?"]);
    },
    "reply_to_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["R\xE9pondre \xE0 ", _interpolate(_list(0))]);
    },
    "replying": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["R\xE9pondre"]);
    }
  },
  "polls": {
    "allow_multiple": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Autoriser plusieurs choix"]);
    },
    "cancel": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Annuler"]);
    },
    "create": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Cr\xE9er un sondage"]);
    },
    "disallow_multiple": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["D\xE9sactiver le choix multiple"]);
    },
    "expiration": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Expiration du sondage"]);
    },
    "hide_votes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Masquer le total des votes jusqu'\xE0 la fin"]);
    },
    "option_placeholder": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Option du sondage ", _interpolate(_named("current")), "/", _interpolate(_named("max"))]);
    },
    "remove_option": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Retirer l'option"]);
    },
    "settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Options du sondage"]);
    },
    "show_votes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Toujours montrer le total des votes"]);
    }
  },
  "pwa": {
    "dismiss": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Fermer"]);
    },
    "install": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Installer"]);
    },
    "install_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Installer Elk"]);
    },
    "screenshots": {
      "dark": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Capture d'\xE9cran de Elk en th\xE8me sombre"]);
      },
      "light": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Capture d'\xE9cran de Elk en th\xE8me lumineux"]);
      }
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Nouvelle mise \xE0 jour Elk disponible !"]);
    },
    "update": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mettre \xE0 jour"]);
    },
    "update_available_short": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mettre \xE0 jour Elk"]);
    },
    "webmanifest": {
      "canary": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Un client Web Mastodon (canary)"]);
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
          return _normalize(["Un client Web Mastodon (dev)"]);
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
          return _normalize(["Un client Web Mastodon (aper\xE7u)"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (aper\xE7u)"]);
        },
        "short_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Elk (aper\xE7u)"]);
        }
      },
      "release": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Un client Web Mastodon"]);
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
      return _normalize(["Commentaires additionnels"]);
    },
    "another_server": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["L'utilisateur que vous signalez appartient \xE0 une autre instance"]);
    },
    "anything_else": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Est-ce qu'il y a autre chose dont nous devrions \xEAtre mis au courant ?"]);
    },
    "block_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Vous ne verrez plus aucun message de cet utilisateur. Il ou elle ne pourra pas voir vos publications ni vous suivre, mais il ou elle pourra dire qu'il ou elle est bloqu\xE9.e."]);
    },
    "dontlike": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Je n'aime pas \xE7a"]);
    },
    "dontlike_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ce n'est pas quelque chose que vous souhaitez voir"]);
    },
    "forward": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Oui, transf\xE9rez ce signalement \xE0 ", _interpolate(_list(0))]);
    },
    "forward_question": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Souhaitez-vous \xE9galement envoyer une copie anonyme de ce signalement \xE0 ce serveur ?"]);
    },
    "further_actions": {
      "limit": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Voici vos options pour contr\xF4ler ce que vous voyez :"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Vous ne voulez pas voir cela ?"]);
        }
      },
      "report": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Pendant que nous examinons cela, voici les actions que vous pouvez entreprendre :"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Merci pour le signalement, nous allons examiner cela."]);
        }
      }
    },
    "limiting": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Limiter ", _interpolate(_list(0))]);
    },
    "mute_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Vous ne verrez plus aucun message de cet utilisateur. Il pourra toujours vous suivre et voir vos messages. Il ne saura pas qu'il est muet."]);
    },
    "other": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["C'est quelque chose d'autre"]);
    },
    "other_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Le probl\xE8me ne rentre pas dans les autres cat\xE9gories"]);
    },
    "reporting": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Signaler ", _interpolate(_list(0))]);
    },
    "select_many": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["S\xE9lectionnez tout ce qui correspond :"]);
    },
    "select_one": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Choisissez la meilleure correspondance :"]);
    },
    "select_posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Y a-t-il des messages qui \xE9tayent ce signalement ?"]);
    },
    "select_posts_other": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Y a-t-il d'autres messages qui \xE9tayent ce rapport ?"]);
    },
    "spam": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["C'est du spam"]);
    },
    "spam_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Liens malveillants, faux engagement ou r\xE9ponses r\xE9p\xE9titives"]);
    },
    "submit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Envoyer le signalement"]);
    },
    "unfollow_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Vous ne verrez plus les messages de cet utilisateur dans votre flux d'accueil. Vous pourrez toujours voir des messages de lui ailleurs."]);
    },
    "violation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Il enfreint une ou plusieurs des r\xE8gles du serveur"]);
    },
    "whats_wrong_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Dites-nous le probl\xE8me de ce compte"]);
    },
    "whats_wrong_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Dites-nous ce qui ne va pas avec ce post"]);
    }
  },
  "search": {
    "search_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Recherche de personnes & hashtags"]);
    },
    "search_empty": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Aucun r\xE9sultat avec ces mots-clefs"]);
    }
  },
  "settings": {
    "about": {
      "built_at": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Derni\xE8re compilation"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\xC0 propos"]);
      },
      "meet_the_team": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Rencontrez l'\xE9quipe"]);
      },
      "sponsor_action": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Soutenez-nous"]);
      },
      "sponsor_action_desc": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Pour financer l'\xE9quipe d\xE9veloppant Elk"]);
      },
      "sponsors": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Soutiens financiers"]);
      },
      "sponsors_body_1": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Elk existe gr\xE2ce aux g\xE9n\xE9reux soutien de :"]);
      },
      "sponsors_body_2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Et toutes les personnes et soci\xE9t\xE9s soutenant l'\xE9quipe Elk et ses membres."]);
      },
      "sponsors_body_3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Si vous appr\xE9ciez l'application, envisagez de nous soutenir :"]);
      },
      "version": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Version"]);
      }
    },
    "account_settings": {
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Modifiez les param\xE8tres de votre compte dans l'interface de Mastodon"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Param\xE8tres de compte"]);
      }
    },
    "interface": {
      "color_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Couleur de th\xE8me"]);
      },
      "dark_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Mode sombre"]);
      },
      "default": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize([" (par d\xE9faut)"]);
      },
      "font_size": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Taille de police"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Interface"]);
      },
      "light_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Mode lumineux"]);
      },
      "system_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Syst\xE8me"]);
      },
      "theme_color": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Couleur du th\xE8me"]);
      }
    },
    "language": {
      "display_language": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Langue d'affichage"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Langue"]);
      },
      "status": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\xC9tat de la traduction : ", _interpolate(_list(0)), "/", _interpolate(_list(1)), " (", _interpolate(_list(2)), " %)"]);
      },
      "translations": {
        "add": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ajouter"]);
        },
        "choose_language": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Choisir une langue"]);
        },
        "heading": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Traductions"]);
        },
        "hide_specific": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cacher certaines traductions"]);
        },
        "remove": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Retirer"]);
        }
      }
    },
    "notifications": {
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Notifications"]);
      },
      "notifications": {
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Param\xE8tres des notifications"]);
        }
      },
      "push_notifications": {
        "alerts": {
          "favourite": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Messages aim\xE9s"]);
          },
          "follow": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Nouveaux abonn\xE9s"]);
          },
          "mention": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Mentions"]);
          },
          "poll": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Sondages"]);
          },
          "reblog": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Messages partag\xE9s"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Quelles notifications recevoir ?"]);
          }
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recevez des notifications m\xEAme lorsque vous n'utilisez pas Elk."]);
        },
        "instructions": (ctx) => {
          const { normalize: _normalize, linked: _linked, type: _type } = ctx;
          return _normalize(["N'oubliez pas de sauvegarder vos modifications en utilisant le bouton ", _linked("settings.notifications.push_notifications.save_settings", void 0, _type), " !"]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Param\xE8tres des notifications push"]);
        },
        "policy": {
          "all": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["De n'importe qui"]);
          },
          "followed": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Des personnes que je suis"]);
          },
          "follower": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Des personnes qui me suivent"]);
          },
          "none": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["De personne"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["De que je peux recevoir des notifications ?"]);
          }
        },
        "save_settings": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Enregistrer les param\xE8tres"]);
        },
        "subscription_error": {
          "clear_error": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Effacer l'erreur"]);
          },
          "error_hint": (ctx) => {
            const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
            return _normalize(["Vous pouvez consulter une liste des questions fr\xE9quemment pos\xE9es pour essayer de r\xE9soudre le probl\xE8me : ", _interpolate(_list(0))]);
          },
          "invalid_vapid_key": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["La cl\xE9 publique VAPID ne semble pas \xEAtre valide"]);
          },
          "permission_denied": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Autorisation refus\xE9e : activez les notifications dans votre navigateur."]);
          },
          "repo_link": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["D\xE9p\xF4t Elk sur GitHub"]);
          },
          "request_error": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Une erreur s'est produite lors de la demande d'abonnement, r\xE9essayez et si l'erreur persiste, veuillez signaler le probl\xE8me aupr\xE8s du d\xE9p\xF4t Elk."]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Impossible de s'abonner aux notifications push"]);
          },
          "too_many_registrations": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["En raison des limitations du navigateur, Elk ne peut pas utiliser le service de notifications push pour plusieurs comptes sur diff\xE9rents serveurs. \nVous devez vous d\xE9sabonner des notifications push sur un autre compte et r\xE9essayer."]);
          },
          "vapid_not_supported": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Votre navigateur prend en charge les Notifications Push Web, mais ne semble pas impl\xE9menter le protocole VAPID."]);
          }
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Param\xE8tres des notifications push"]);
        },
        "undo_settings": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Annuler les changements de param\xE8tres"]);
        },
        "unsubscribe": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["D\xE9sactiver les notifications push"]);
        },
        "unsupported": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Votre navigateur ne prend pas en charge les notifications push."]);
        },
        "warning": {
          "enable_close": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Fermer"]);
          },
          "enable_description": (ctx) => {
            const { normalize: _normalize, linked: _linked, type: _type } = ctx;
            return _normalize([`Pour recevoir des notifications lorsque Elk n'est pas ouvert, activez les notifications push. 
Vous pouvez contr\xF4ler pr\xE9cis\xE9ment quels types d'interactions g\xE9n\xE8rent des notifications push via le bouton "`, _linked("settings.notifications.show_btn", void 0, _type), '"', " ci-dessus une fois activ\xE9."]);
          },
          "enable_description_desktop": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize([`Pour recevoir des notifications lorsque Elk n'est pas ouvert, activez les notifications push. 
Vous pouvez contr\xF4ler pr\xE9cis\xE9ment quels types d'interactions g\xE9n\xE8rent des notifications push dans "Param\xE8tres > Notifications > Param\xE8tres des notifications push" une fois activ\xE9.`]);
          },
          "enable_description_mobile": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(['Vous pouvez \xE9galement acc\xE9der aux param\xE8tres via le menu de navigation "Param\xE8tres > Notifications > Param\xE8tres des notifications push".']);
          },
          "enable_description_settings": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Pour recevoir des notifications lorsque Elk n'est pas ouvert, activez les notifications push. Vous pourrez contr\xF4ler pr\xE9cis\xE9ment quels types d'interactions g\xE9n\xE8rent des notifications push sur ce m\xEAme \xE9cran une fois que vous les aurez activ\xE9es."]);
          },
          "enable_desktop": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Activer les notifications push"]);
          },
          "enable_title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Ne manquez jamais rien"]);
          },
          "re_auth": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Il semble que votre serveur ne supporte pas les notifications push. \nEssayez de vous d\xE9connecter et de vous reconnecter, si ce message persiste, contactez l'administrateur de votre serveur."]);
          }
        }
      },
      "show_btn": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Se rendre aux param\xE8tres des notifications"]);
      },
      "under_construction": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["En construction"]);
      }
    },
    "notifications_settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Notifications"]);
    },
    "preferences": {
      "enable_autoplay": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Activer la lecture automatique"]);
      },
      "enable_data_saving": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Activer l'\xE9conomie de donn\xE9es"]);
      },
      "enable_data_saving_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Economise les donn\xE9es en \xE9vitant le chargement automatique des m\xE9dias."]);
      },
      "enable_pinch_to_zoom": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Activer le zoom par pincement"]);
      },
      "github_cards": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Cartes GitHub"]);
      },
      "github_cards_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Lorsqu'un lien Github est publi\xE9, une carte HTML accessible utilisant la m\xE9ta du graphe social s'affiche \xE0 la place de l'image sociale."]);
      },
      "grayscale_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Mode niveaux de gris"]);
      },
      "hide_account_hover_card": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Masquer la carte de survol du compte"]);
      },
      "hide_alt_indi_on_posts": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Masquer l'indicateur alt sur les messages"]);
      },
      "hide_boost_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Masquer les compteurs de partages"]);
      },
      "hide_favorite_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Masquer les compteurs de favoris"]);
      },
      "hide_follower_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Masquer les compteurs d'abonn\xE9\xB7e\xB7s"]);
      },
      "hide_news": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Masquer les actualit\xE9s"]);
      },
      "hide_reply_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Masquer les compteurs de r\xE9ponses"]);
      },
      "hide_translation": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Masquer traduction"]);
      },
      "hide_username_emojis": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Masquer les emojis sur le nom d'utilisateur"]);
      },
      "hide_username_emojis_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Masque les emojis des noms d'utilisateur dans la timeline. \nLes emojis seront toujours visibles sur leurs profils."]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Pr\xE9f\xE9rences"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Fonctionnalit\xE9s exp\xE9rimentales"]);
      },
      "use_star_favorite_icon": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Utiliser l'ic\xF4ne de l'\xE9toile en favoris"]);
      },
      "user_picker": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["User Picker"]);
      },
      "user_picker_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Affiche tous les avatars des comptes connect\xE9s en bas \xE0 gauche afin que vous puissiez basculer rapidement entre eux."]);
      },
      "virtual_scroll": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["D\xE9filement virtuel"]);
      },
      "virtual_scroll_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Utilisez une liste virtuelle dans les chronologies, afin qu'un plus grand nombre d'\xE9l\xE9ments puissent \xEAtre rendus de mani\xE8re performante."]);
      },
      "wellbeing": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Bien-\xEAtre"]);
      },
      "zen_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Mode Zen"]);
      },
      "zen_mode_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Masquer les c\xF4t\xE9s \xE0 moins que le curseur de la souris ne les survole. Masquer \xE9galement certains \xE9l\xE9ments du fil d'actualit\xE9."]);
      }
    },
    "profile": {
      "appearance": {
        "bio": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Bio"]);
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\xC9diter l'avatar, nom du compte, profil, etc."]);
        },
        "display_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nom d'affichage"]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Apparence"]);
        },
        "profile_metadata": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["M\xE9tadonn\xE9es de profil"]);
        },
        "profile_metadata_desc": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Vous pouvez avoir jusqu'\xE0 4 \xE9l\xE9ments affich\xE9s sous forme de tableau sur votre profil"]);
        },
        "profile_metadata_label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Label"]);
        },
        "profile_metadata_value": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Contenu"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\xC9diter le profil"]);
        }
      },
      "featured_tags": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Les gens peuvent parcourir vos messages publics sous ces hashtags."]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Hashtags en vedette"]);
        }
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Profil"]);
      }
    },
    "select_a_settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["S\xE9lectionner un param\xE8tre"]);
    },
    "users": {
      "export": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Exporter les tokens de compte"]);
      },
      "import": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Importer des tokens de compte"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Comptes connect\xE9s"]);
      }
    }
  },
  "share-target": {
    "description": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk peut \xEAtre configur\xE9 pour que vous puissiez partager du contenu \xE0 partir d'autres applications, installez simplement Elk sur votre appareil ou ordinateur et connectez-vous."]);
    },
    "hint": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Pour partager du contenu avec Elk, Elk doit \xEAtre install\xE9 et vous devez \xEAtre connect\xE9."]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Partager avec Elk"]);
    }
  },
  "state": {
    "attachments_exceed_server_limit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Le nombre de pi\xE8ces jointes a d\xE9pass\xE9 la limite par message."]);
    },
    "attachments_limit_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Limite par publication d\xE9pass\xE9e"]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["(\xC9dit\xE9)"]);
    },
    "editing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\xC9dition"]);
    },
    "loading": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Chargement..."]);
    },
    "publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["La publication a \xE9chou\xE9"]);
    },
    "publishing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Envoi"]);
    },
    "upload_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Le t\xE9l\xE9versement a \xE9chou\xE9"]);
    },
    "uploading": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["T\xE9l\xE9versement en cours..."]);
    }
  },
  "status": {
    "account": {
      "suspended_message": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Le compte \xE0 l'origine de ce message a \xE9t\xE9 suspendu."]);
      },
      "suspended_show": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Afficher le contenu malgr\xE9 tout ?"]);
      }
    },
    "boosted_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Partag\xE9 par"]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Edit\xE9 ", _interpolate(_list(0))]);
    },
    "favourited_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Aim\xE9 par"]);
    },
    "filter_hidden_phrase": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Filtr\xE9 par"]);
    },
    "filter_show_anyway": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Montrer co\xFBte que co\xFBte"]);
    },
    "img_alt": {
      "ALT": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["ALT"]);
      },
      "desc": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Description"]);
      },
      "dismiss": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Fermer"]);
      },
      "read": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Lire la description de ", _interpolate(_list(0))]);
      }
    },
    "poll": {
      "count": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize([_interpolate(_list(0)), " votes"]);
      },
      "ends": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["se cl\xF4t ", _interpolate(_list(0))]);
      },
      "finished": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["clos ", _interpolate(_list(0))]);
      }
    },
    "replying_to": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["R\xE9pondre \xE0 ", _interpolate(_list(0))]);
    },
    "show_full_thread": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Voir le fil de discussion complet"]);
    },
    "someone": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["quelqu'un"]);
    },
    "spoiler_media_hidden": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["M\xE9dia cach\xE9"]);
    },
    "spoiler_show_less": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Voir moins"]);
    },
    "spoiler_show_more": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Voir plus"]);
    },
    "thread": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Fil de discussion"]);
    },
    "try_original_site": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Essayer le site d'origine"]);
    }
  },
  "status_history": {
    "created": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["a \xE9crit ", _interpolate(_list(0))]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["a \xE9dit\xE9 ", _interpolate(_list(0))]);
    }
  },
  "tab": {
    "account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Compte"]);
    },
    "accounts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Comptes"]);
    },
    "for_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Pour vous"]);
    },
    "hashtags": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Hashtags"]);
    },
    "list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Liste"]);
    },
    "media": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["M\xE9dia"]);
    },
    "news": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Actualit\xE9s"]);
    },
    "notifications_all": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tout"]);
    },
    "notifications_mention": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mentions"]);
    },
    "posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Messages"]);
    },
    "posts_with_replies": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Messages et r\xE9ponses"]);
    }
  },
  "tag": {
    "follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Suivre"]);
    },
    "follow_label": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Suivre la balise ", _interpolate(_list(0))]);
    },
    "unfollow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ne plus suivre"]);
    },
    "unfollow_label": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Ne plus suivre la balise ", _interpolate(_list(0))]);
    }
  },
  "time_ago_options": {
    "day_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["dans 0 jour"]), _normalize(["demain"]), _normalize(["dans ", _interpolate(_named("n")), " jours"])]);
    },
    "day_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["il y a 0 jour"]), _normalize(["hier"]), _normalize(["il y a ", _interpolate(_named("n")), " jours"])]);
    },
    "hour_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["dans 0 heure"]), _normalize(["dans 1 heure"]), _normalize(["dans ", _interpolate(_named("n")), " heures"])]);
    },
    "hour_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["il y a 0 heure"]), _normalize(["il y a 1 heure"]), _normalize(["il y a ", _interpolate(_named("n")), " heures"])]);
    },
    "just_now": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\xE0 l'instant"]);
    },
    "minute_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["dans 0 minutes"]), _normalize(["dans 1 minute"]), _normalize(["dans ", _interpolate(_named("n")), " minutes"])]);
    },
    "minute_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["il y a 0 minute"]), _normalize(["il y a 1 minute"]), _normalize(["il y a ", _interpolate(_named("n")), " minutes"])]);
    },
    "month_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["dans 0 mois"]), _normalize(["le mois prochain"]), _normalize(["dans ", _interpolate(_named("n")), " mois"])]);
    },
    "month_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["il y a 0 mois"]), _normalize(["le dernier mois"]), _normalize(["il y a ", _interpolate(_named("n")), " mois"])]);
    },
    "second_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["maintenant"]), _normalize(["dans ", _interpolate(_named("n")), " secondes"]), _normalize(["dans ", _interpolate(_named("n")), " secondes"])]);
    },
    "second_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["maintenant"]), _normalize(["il y a ", _interpolate(_named("n")), " seconde"]), _normalize(["il y a ", _interpolate(_named("n")), " secondes"])]);
    },
    "short_day_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["dans ", _interpolate(_named("n")), "j"]);
    },
    "short_day_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "j"]);
    },
    "short_hour_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["dans ", _interpolate(_named("n")), "h"]);
    },
    "short_hour_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "h"]);
    },
    "short_minute_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["dans ", _interpolate(_named("n")), "min"]);
    },
    "short_minute_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "min"]);
    },
    "short_month_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["dans ", _interpolate(_named("n")), "mo"]);
    },
    "short_month_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "mo"]);
    },
    "short_second_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["dans ", _interpolate(_named("n")), "s"]);
    },
    "short_second_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "s"]);
    },
    "short_week_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["dans ", _interpolate(_named("n")), "sm"]);
    },
    "short_week_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "sm"]);
    },
    "short_year_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["dans ", _interpolate(_named("n")), "a"]);
    },
    "short_year_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "a"]);
    },
    "week_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["dans 0 semaine"]), _normalize(["semaine prochaine"]), _normalize(["dans ", _interpolate(_named("n")), " semaines"])]);
    },
    "week_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["il y a 0 semaines"]), _normalize(["il y a 1 semaine"]), _normalize(["il y a ", _interpolate(_named("n")), " semaines"])]);
    },
    "year_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["dans 0 ann\xE9e"]), _normalize(["l'ann\xE9e prochaine"]), _normalize(["dans ", _interpolate(_named("n")), " ann\xE9es"])]);
    },
    "year_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["il y a 0 ann\xE9e"]), _normalize(["l'ann\xE9e derni\xE8re"]), _normalize(["il y a ", _interpolate(_named("n")), " ann\xE9es"])]);
    }
  },
  "timeline": {
    "show_new_items": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["Voir le nouveau message"]), _normalize(["Voir les ", _interpolate(_named("v")), " nouveaux messages"])]);
    },
    "view_older_posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Les messages plus anciens d'autres instances peuvent ne pas \xEAtre affich\xE9s."]);
    }
  },
  "title": {
    "federated_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Fil d'actualit\xE9 f\xE9d\xE9r\xE9"]);
    },
    "local_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Fil d'actualit\xE9 local"]);
    }
  },
  "tooltip": {
    "add_content_warning": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ajouter un avertissement de contenu"]);
    },
    "add_emojis": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ajouter des \xE9motic\xF4nes"]);
    },
    "add_media": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ajouter des images, une vid\xE9o ou un fichier audio"]);
    },
    "add_publishable_content": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ajouter du contenu \xE0 publier"]);
    },
    "change_content_visibility": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ajuster la confidentialit\xE9 du message"]);
    },
    "change_language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Changer la langue"]);
    },
    "emoji": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Emoji"]);
    },
    "explore_links_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ces actualit\xE9s sont sujets \xE0 discussions sur ce serveur et sur d'autres serveurs du r\xE9seau d\xE9centralis\xE9."]);
    },
    "explore_posts_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ces publications de ce serveur et d'autres serveurs du r\xE9seau d\xE9centralis\xE9 gagnent du terrain sur ce serveur en ce moment."]);
    },
    "explore_tags_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ces hashtags gagnent du terrain sur ce serveur et sur d'autres serveurs du r\xE9seau d\xE9centralis\xE9."]);
    },
    "open_editor_tools": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Outils d'\xE9dition"]);
    },
    "pick_an_icon": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Choisir une ic\xF4ne"]);
    },
    "publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Fermez les messages ayant \xE9chou\xE9 en haut de l'\xE9diteur pour republier les messages"]);
    },
    "toggle_bold": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Appliquer/retirer le gras"]);
    },
    "toggle_code_block": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ajouter un bloc de code"]);
    },
    "toggle_italic": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Appliquer/retirer l'italique"]);
    }
  },
  "user": {
    "add_existing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ajouter un compte existant"]);
    },
    "server_address_label": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Adresse du serveur mastodon"]);
    },
    "sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Connectez-vous pour suivre des profils ou des hashtags, aimer, partagez et r\xE9pondre \xE0 des messages, ou interagir \xE0 partir de votre compte d'autre serveur."]);
    },
    "sign_in_notice_title": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Affichage de ", _interpolate(_list(0)), " donn\xE9es publiques"]);
    },
    "sign_out_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Se d\xE9connecter de ", _interpolate(_list(0))]);
    },
    "single_instance_sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Connectez-vous pour suivre des profils ou des hashtags, aimer, partager et r\xE9pondre aux messages."]);
    },
    "tip_no_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Si vous n'avez pas encore de compte Mastodon, ", _interpolate(_list(0)), "."]);
    },
    "tip_register_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["choisissez votre serveur et enregistrez-en un"]);
    }
  },
  "visibility": {
    "direct": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Personnes mentionn\xE9es uniquement"]);
    },
    "direct_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Visibles uniquement par les comptes mentionn\xE9s"]);
    },
    "private": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Abonn\xE9s uniquement"]);
    },
    "private_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Visible uniquement par vos abonn\xE9s"]);
    },
    "public": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Public"]);
    },
    "public_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Visible par tout le monde"]);
    },
    "unlisted": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Non list\xE9"]);
    },
    "unlisted_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Visible pour tous, mais sans fonctionnalit\xE9s de d\xE9couverte"]);
    }
  }
};

export { frFR as default };
