const ptBR = {
  "a11y": {
    "loading_page": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Carregando p\xE1gina, por favor aguarde"]);
    },
    "loading_titled_page": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Carregando p\xE1gina ", _interpolate(_list(0)), ", por favor aguarde"]);
    },
    "locale_changing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Alterando idioma, por favor aguarde"]);
    }
  },
  "account": {
    "blocked_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Voc\xEA foi bloqueado por esse usu\xE1rio."]);
    },
    "blocked_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Usu\xE1rios bloqueados"]);
    },
    "blocking": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Bloqueados"]);
    },
    "follow_requested": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Solicitado"]);
    },
    "following": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Seguindo"]);
    },
    "following_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Seguindo ", _interpolate(_list(0))]);
    },
    "follows_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Segue voc\xEA"]);
    },
    "moved_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["indicou que a sua nova conta agora \xE9:"]);
    },
    "muted_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Usu\xE1rios silenciados"]);
    },
    "mutuals": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mutuals"]);
    },
    "view_other_following": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["As pessoas que voc\xEA segue de outras inst\xE2ncias podem n\xE3o ser exibidas."]);
    }
  },
  "action": {
    "boost": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Compartilhar"]);
    },
    "boosted": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Compartilhado"]);
    },
    "compose": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Escrever"]);
    },
    "enter_app": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Entrar no App"]);
    },
    "favourite": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Favoritar"]);
    },
    "favourited": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Favoritado"]);
    },
    "reset": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Reiniciar"]);
    },
    "save": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Salvar"]);
    },
    "save_changes": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Salvar altera\xE7\xF5es"]);
    }
  },
  "app_desc_short": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Uma aplica\xE7\xE3o web \xE1gil para o Mastodon"]);
  },
  "command": {
    "compose_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Escrever novo post"]);
    }
  },
  "common": {
    "fetching": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Buscando..."]);
    },
    "no_bookmarks": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Nenhum item salvo ainda"]);
    },
    "no_favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Nenhum post favoritado ainda"]);
    },
    "offline_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Parece que voc\xEA est\xE1 offline. Por favor, confira sua conex\xE3o \xE0 internet."]);
    }
  },
  "confirm": {
    "block_account": {
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Tem certeza que quer bloquear ", _interpolate(_list(0)), "?"]);
      }
    },
    "block_domain": {
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Tem certeza que quer bloquear ", _interpolate(_list(0)), "?"]);
      }
    },
    "delete_list": {
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Apagar"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(['Tem certeza que quer apagar a lista "', _interpolate(_list(0)), '"?']);
      }
    },
    "delete_posts": {
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Apagar"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Tem certeza que quer apagar esse post?"]);
      }
    },
    "mute_account": {
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Tem certeza que quer silenciar ", _interpolate(_list(0)), "?"]);
      }
    },
    "show_reblogs": {
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Tem certeza que quer mostrar os compartilhamentos de ", _interpolate(_list(0)), "?"]);
      }
    },
    "unfollow": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Tem certeza que quer deixar de seguir?"]);
      }
    }
  },
  "error": {
    "explore-list-empty": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Nada em tend\xEAncia no momento. Confira mais tarde!"]);
    },
    "file_size_cannot_exceed_n_mb": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["O tamanho do arquivo n\xE3o pode ser maior que ", _interpolate(_list(0)), "MB"]);
    },
    "status_not_found": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Post n\xE3o encontrado"]);
    },
    "unsupported_file_format": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Formato de arquivo n\xE3o suportado"]);
    }
  },
  "help": {
    "build_preview": {
      "desc1": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Voc\xEA est\xE1 vendo no momento uma vers\xE3o preliminar do Elk produzida pela comunidade - ", _interpolate(_list(0)), "."]);
      },
      "desc2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ela pode conter altera\xE7\xF5es n\xE3o revisadas ou mesmo maliciosas."]);
      },
      "desc3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["N\xE3o entre com sua conta verdadeira."]);
      }
    },
    "desc_para2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Estamos trabalhando duro no seu desenvolvimento e em melhor\xE1-lo com o tempo."]);
    },
    "desc_para3": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Para apoiar o desenvolvimento, voc\xEA pode patrocinar nossa equipe atrav\xE9s do GitHub Sponsors. Esperamos que voc\xEA curta o Elk!"]);
    },
    "desc_para4": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk tem o c\xF3digo aberto. Se voc\xEA quiser ajudar a testar, dar seu feedback ou contribuir,"]);
    },
    "desc_para5": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["fale com a gente no GitHub"]);
    },
    "desc_para6": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["e participe."]);
    },
    "footer_team": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["A Equipe do Elk"]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk est\xE1 em Pr\xE9via!"]);
    }
  },
  "language": {
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Buscar"]);
    }
  },
  "list": {
    "delete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Apagar lista"]);
    },
    "delete_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ocorreu um erro ao apagar a lista"]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Editar lista"]);
    },
    "edit_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ocorreu um erro ao editar a lista"]);
    }
  },
  "magic_keys": {
    "groups": {
      "actions": {
        "boost": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Compartilhar"]);
        },
        "command_mode": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Modo de comandos"]);
        },
        "compose": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Escrever"]);
        },
        "favourite": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Favoritar"]);
        }
      },
      "media": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["M\xEDdia"]);
        }
      },
      "navigation": {
        "next_status": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Pr\xF3ximo post"]);
        },
        "previous_status": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Post anterior"]);
        }
      }
    },
    "sequence_then": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["e depois"]);
    }
  },
  "menu": {
    "copy_link_to_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Copiar link para esse post"]);
    },
    "copy_original_link_to_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Copiar link original para esse post"]);
    },
    "delete": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Apagar"]);
    },
    "delete_and_redraft": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Apagar e reescrever"]);
    },
    "direct_message_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Mensagem direta para ", _interpolate(_list(0))]);
    },
    "hide_reblogs": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Esconder boosts de ", _interpolate(_list(0))]);
    },
    "mute_conversation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Silenciar esse post"]);
    },
    "open_in_original_site": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Abrir no site original"]);
    },
    "remove_personal_note": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Removar nota pessoal de ", _interpolate(_list(0))]);
    },
    "share_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Compartilhar esse post"]);
    },
    "show_favourited_and_boosted_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mostrar quem favoritou e compartilhou"]);
    },
    "show_reblogs": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Mostrar compartilhamentos de ", _interpolate(_list(0))]);
    },
    "show_untranslated": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mostrar original"]);
    },
    "toggle_theme": {
      "dark": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ativar modo escuro"]);
      },
      "light": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ativar modo claro"]);
      }
    },
    "translate_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Traduzir post"]);
    },
    "unmute_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Desilenciar ", _interpolate(_list(0))]);
    },
    "unmute_conversation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Desilenciar post"]);
    }
  },
  "nav": {
    "blocked_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Usu\xE1rios bloqueados"]);
    },
    "bookmarks": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Itens salvos"]);
    },
    "compose": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Escrever"]);
    },
    "conversations": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Conversas"]);
    },
    "federated": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Federa\xE7\xE3o"]);
    },
    "muted_users": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Usu\xE1rios silenciados"]);
    },
    "search": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Buscar"]);
    },
    "select_language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Idioma de Exibi\xE7\xE3o"]);
    },
    "settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Configura\xE7\xF5es"]);
    }
  },
  "notification": {
    "favourited_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["favoritou seu post"]);
    },
    "followed_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["seguiu voc\xEA"]);
    },
    "followed_you_count": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list, plural: _plural } = ctx;
      return _plural([_normalize([_interpolate(_list(0)), " pessoas seguiram voc\xEA"]), _normalize([_interpolate(_list(0)), " pessoa seguiu voc\xEA"]), _normalize([_interpolate(_list(0)), " pessoas seguiram voc\xEA"])]);
    },
    "reblogged_post": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["compartilhou seu post"]);
    },
    "request_to_follow": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["pediu para te seguir"]);
    },
    "signed_up": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["se inscreveu"]);
    },
    "update_status": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["atualizou seu post"]);
    }
  },
  "placeholder": {
    "content_warning": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Escreva seu aviso aqui"]);
    },
    "default_1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["No que voc\xEA est\xE1 pensando?"]);
    },
    "reply_to_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Responder ", _interpolate(_list(0))]);
    }
  },
  "pwa": {
    "dismiss": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ignorar"]);
    },
    "webmanifest": {
      "canary": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Uma aplica\xE7\xE3o web \xE1gil para o Mastodon (canary)"]);
        }
      },
      "dev": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Uma aplica\xE7\xE3o web \xE1gil para o Mastodon (dev)"]);
        }
      },
      "preview": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Uma aplica\xE7\xE3o web \xE1gil para o Mastodon (preview)"]);
        }
      },
      "release": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Uma aplica\xE7\xE3o web \xE1gil para o Mastodon"]);
        }
      }
    }
  },
  "search": {
    "search_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Buscar por pessoas e hashtags"]);
    },
    "search_empty": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["N\xE3o foi poss\xEDvel encontrar nada para os termos buscados"]);
    }
  },
  "settings": {
    "about": {
      "built_at": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Produzido em"]);
      },
      "meet_the_team": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Conhe\xE7a a equipe"]);
      },
      "sponsor_action": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Nos patrocine"]);
      },
      "sponsor_action_desc": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Para apoiar a equipe que desenvolve o Elk"]);
      },
      "sponsors_body_1": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["O Elk \xE9 poss\xEDvel gra\xE7as ao generoso patroc\xEDnio e apoio de:"]);
      },
      "sponsors_body_2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["E todas as empresas e pessoas que patrocinam a equipe do Elk e seus membros."]);
      },
      "sponsors_body_3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Se estiver curtindo o app, considere nos patrocinar:"]);
      }
    },
    "account_settings": {
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Edite as configura\xE7\xF5es da sua conta na interface do Mastodon"]);
      }
    },
    "interface": {
      "color_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Plano de fundo"]);
      },
      "dark_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Escuro"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Interface"]);
      },
      "light_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Claro"]);
      },
      "theme_color": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Cor do tema"]);
      }
    },
    "language": {
      "display_language": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Idioma de Exibi\xE7\xE3o"]);
      },
      "status": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["Status da tradu\xE7\xE3o: ", _interpolate(_list(0)), "/", _interpolate(_list(1)), " (", _interpolate(_list(2)), "%)"]);
      }
    },
    "notifications": {
      "notifications": {
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Configura\xE7\xF5es de notifica\xE7\xF5es"]);
        }
      },
      "push_notifications": {
        "alerts": {
          "poll": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Enquetes"]);
          },
          "reblog": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Compartilhamentos"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Quais notifica\xE7\xF5es quero receber?"]);
          }
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Receba notifica\xE7\xF5es mesmo quando n\xE3o estiver usando o Elk."]);
        },
        "instructions": (ctx) => {
          const { normalize: _normalize, linked: _linked, type: _type } = ctx;
          return _normalize(["N\xE3o esque\xE7a de salvar as suas altera\xE7\xF5es usando o bot\xE3o ", _linked("settings.notifications.push_notifications.save_settings!", void 0, _type)]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Configura\xE7\xF5es de notifica\xE7\xF5es push"]);
        },
        "policy": {
          "all": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["De qualquer pessoa"]);
          },
          "followed": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["De pessoas que eu sigo"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["De quem quero receber notifica\xE7\xF5es?"]);
          }
        },
        "save_settings": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Salvar altera\xE7\xF5es"]);
        },
        "subscription_error": {
          "error_hint": (ctx) => {
            const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
            return _normalize(["Voc\xEA pode consultar uma lista de perguntas frequentes para tentar resolver o problema: ", _interpolate(_list(0)), "."]);
          },
          "permission_denied": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Permiss\xE3o negada: habilite as notifica\xE7\xF5es no seu navegador."]);
          },
          "request_error": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Ocorreu um erro ao se inscrever, tente novamente e, se o erro persistir, por favor, reporte o problema no reposit\xF3rio do Elk."]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["N\xE3o foi poss\xEDvel habilitar as notifica\xE7\xF5es push"]);
          },
          "too_many_registrations": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Devido a limita\xE7\xF5es do navegador, o Elk n\xE3o pode usar o servi\xE7o de notifica\xE7\xF5es push para m\xFAltiplas contas em diferentes servidores. Voc\xEA deve desabilitar as notifica\xE7\xF5es em outra conta e tentar novamente."]);
          },
          "vapid_not_supported": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Seu navegador suporta notifica\xE7\xF5es push web, mas parece n\xE3o implementar o protocolo VAPID"]);
          }
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Configura\xE7\xF5es de notifica\xE7\xF5es push"]);
        },
        "undo_settings": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Desfazer altera\xE7\xF5es"]);
        },
        "unsupported": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Seu navegador n\xE3o suporta notifica\xE7\xF5es push."]);
        },
        "warning": {
          "enable_description": (ctx) => {
            const { normalize: _normalize, linked: _linked, type: _type } = ctx;
            return _normalize(['Para receber notifica\xE7\xF5es enquanto o Elk n\xE3o estiver aberto, habilite notifica\xE7\xF5es push. Voc\xEA pode controlar exatamente quais intera\xE7\xF5es v\xE3o disparar as notifica\xE7\xF5es atrav\xE9s do bot\xE3o "', _linked("settings.notifications.show_btn", void 0, _type), '"', " assim que habilitadas."]);
          },
          "enable_description_desktop": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(['Para receber notifica\xE7\xF5es enquanto o Elk n\xE3o estiver aberto, habilite notifica\xE7\xF5es push. Voc\xEA pode controlar exatamente quais intera\xE7\xF5es v\xE3o disparar as notifica\xE7\xF5es em "Configura\xE7\xF5es > Notifica\xE7\xF5es > Configura\xE7\xF5es de notifica\xE7\xF5es push" assim que habilitadas.']);
          },
          "enable_description_mobile": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(['Voc\xEA tamb\xE9m pode acessar as configura\xE7\xF5es atrav\xE9s do menu "Configura\xE7\xF5es > Notifica\xE7\xF5es > Configura\xE7\xF5es de notifica\xE7\xF5es push".']);
          },
          "enable_description_settings": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Para receber notifica\xE7\xF5es enquanto o Elk n\xE3o estiver aberto, habilite notifica\xE7\xF5es push. Voc\xEA pode controlar exatamente quais intera\xE7\xF5es v\xE3o disparar as notifica\xE7\xF5es nessa mesma tela assim que habilitadas."]);
          },
          "enable_desktop": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Ativar notifica\xE7\xF5es push"]);
          },
          "enable_title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Nunca fique de fora"]);
          },
          "re_auth": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Parece que o seu servidor n\xE3o suporta notifica\xE7\xF5es push. Tente desconectar e entrar novamente, se essa mensagem persistir, entre em contato com a administra\xE7\xE3o do seu servidor."]);
          }
        }
      },
      "show_btn": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ir para configura\xE7\xF5es de notifica\xE7\xF5es"]);
      }
    },
    "preferences": {
      "enable_autoplay": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ativar reprodu\xE7\xE3o autom\xE1tica"]);
      },
      "enable_data_saving": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ativar economia de dados"]);
      },
      "enable_data_saving_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Economize dados, impedindo que anexos carreguem automaticamente."]);
      },
      "enable_pinch_to_zoom": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ativar zoom com gesto de pin\xE7a"]);
      },
      "grayscale_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Modo escala de cinza"]);
      },
      "hide_account_hover_card": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Esconder cart\xE3o flutuante de perfil"]);
      },
      "hide_alt_indi_on_posts": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Esconder indicador de descri\xE7\xE3o de imagem"]);
      },
      "hide_boost_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Esconder n\xFAmero de compartilhamentos"]);
      },
      "hide_favorite_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Esconder n\xFAmero de favoritos"]);
      },
      "hide_follower_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Esconder n\xFAmero de seguidores"]);
      },
      "hide_reply_count": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Esconder n\xFAmero de respostas"]);
      },
      "hide_username_emojis": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Esconder emojis dos nomes de usu\xE1rio"]);
      },
      "hide_username_emojis_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Esconde os emojis dos nomes de usu\xE1rio na linha do tempo. Emojis continuam vis\xEDveis nos perfis."]);
      },
      "user_picker": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Selecionador de usu\xE1rios"]);
      },
      "virtual_scroll": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Rolagem virtual"]);
      },
      "zen_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Modo zen"]);
      },
      "zen_mode_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Esconde as colunas laterais, a menos que o cursor esteja sobre elas. Tamb\xE9m esconde alguns elementos da linha do tempo."]);
      }
    },
    "profile": {
      "appearance": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Alterar imagem de perfil, nome de usu\xE1rio, perfil, etc."]);
        },
        "display_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nome de exibi\xE7\xE3o"]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Apar\xEAncia"]);
        },
        "profile_metadata": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Metadados do perfil"]);
        },
        "profile_metadata_desc": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
          return _normalize(["Voc\xEA pode mostrar at\xE9 ", _interpolate(_list(0)), " itens em uma tabela no seu perfil"]);
        }
      },
      "featured_tags": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["As pessoas podem encontrar seus posts p\xFAblicos que incluam essas hashtags."]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Hashtags em destaque"]);
        }
      }
    },
    "users": {
      "export": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Exportar tokens de acesso"]);
      },
      "import": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Importar tokens de acesso"]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Usu\xE1rios conectados"]);
      }
    }
  },
  "share-target": {
    "description": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["O Elk pode ser configurado para que voc\xEA possa compartilhar conte\xFAdo de outros apps, basta instalar o Elk no seu dispositivo e entrar."]);
    },
    "hint": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Para compartilhar conte\xFAdo com o Elk, o mesmo deve estar instalado e voc\xEA deve estar conectado."]);
    },
    "title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Compartilhar com Elk"]);
    }
  },
  "state": {
    "attachments_exceed_server_limit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["O n\xFAmero de anexo excedeu o limite permitido por post."]);
    },
    "attachments_limit_error": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Limite por post excedido"]);
    },
    "upload_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Envio falhou"]);
    },
    "uploading": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Enviando..."]);
    }
  },
  "status": {
    "account": {
      "suspended_message": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["A conta desse post foi suspensa."]);
      }
    },
    "boosted_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Compartilhado por"]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Editado ", _interpolate(_list(0))]);
    },
    "favourited_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Favoritado por"]);
    },
    "filter_hidden_phrase": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Filtrado por"]);
    },
    "img_alt": {
      "dismiss": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Fechar"]);
      }
    },
    "replying_to": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Respondendo ", _interpolate(_list(0))]);
    },
    "spoiler_media_hidden": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["M\xEDdia oculta"]);
    },
    "try_original_site": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tentar o site original"]);
    }
  },
  "status_history": {
    "created": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["criado ", _interpolate(_list(0))]);
    },
    "edited": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["editado ", _interpolate(_list(0))]);
    }
  },
  "tab": {
    "for_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Para voc\xEA"]);
    },
    "media": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["M\xEDdia"]);
    },
    "notifications_all": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tudo"]);
    },
    "posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Posts"]);
    },
    "posts_with_replies": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Posts & Respostas"]);
    }
  },
  "time_ago_options": {
    "month_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["em 0 meses"]), _normalize(["next m\xEAs"]), _normalize(["em ", _interpolate(_named("n")), " meses"])]);
    },
    "month_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["0 meses atr\xE1s"]), _normalize(["last m\xEAs"]), _normalize([_interpolate(_named("n")), " meses atr\xE1s"])]);
    },
    "second_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["agora mesmo"]), _normalize(["em ", _interpolate(_named("n")), " segundo"]), _normalize(["em ", _interpolate(_named("n")), " segundos"])]);
    },
    "short_week_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["em ", _interpolate(_named("n")), "sem"]);
    },
    "short_week_past": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize([_interpolate(_named("n")), "sem"]);
    },
    "week_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["em 0 semanas"]), _normalize(["semana que vem"]), _normalize(["em ", _interpolate(_named("n")), " semanas"])]);
    },
    "year_future": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["em 0 anos"]), _normalize(["ano que vem"]), _normalize(["em ", _interpolate(_named("n")), " anos"])]);
    }
  },
  "timeline": {
    "show_new_items": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["Mostrar ", _interpolate(_named("v")), " novos posts"]), _normalize(["Mostrar ", _interpolate(_named("v")), " novo post"]), _normalize(["Mostrar ", _interpolate(_named("v")), " novos posts"])]);
    },
    "view_older_posts": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Posts antigos de outras inst\xE2ncias podem n\xE3o ser exibidos."]);
    }
  },
  "title": {
    "federated_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Linha do Tempo Federada"]);
    },
    "local_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Linha do Tempo Local"]);
    }
  },
  "tooltip": {
    "add_media": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Adicionar imagens, v\xEDdeo ou \xE1udio"]);
    },
    "add_publishable_content": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Adicione conte\xFAdo antes de publicar"]);
    },
    "explore_links_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Essas not\xEDcias est\xE3o sendo comentadas por pessoas nesse e em outros servidores da rede descentralizada nesse exato momento."]);
    },
    "explore_posts_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Esses posts est\xE3o ganhando popularidade nesse e em outros servidores da rede descentralizada nesse exato momento."]);
    },
    "explore_tags_intro": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Essas hashtags est\xE3o ganhando popularidade entre as pessoas desse e de outros servidores da rede descentralizada nesse exato momento."]);
    },
    "pick_an_icon": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Escolha um \xEDcone"]);
    },
    "publish_failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Fechar mensagens de falha no topo do editor para republicar posts"]);
    },
    "toggle_bold": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Negrito"]);
    },
    "toggle_code_block": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Bloco de c\xF3digo"]);
    },
    "toggle_italic": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["It\xE1lico"]);
    }
  },
  "user": {
    "add_existing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Adicionar conta existente"]);
    },
    "server_address_label": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Endere\xE7o do servidor do Mastodon"]);
    },
    "sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Entre para seguir perfis e hashtags, favoritar, compartilhar e responder posts ou interagir com sua conta em outro servidor."]);
    },
    "sign_in_notice_title": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Visualizando dados p\xFAblicos de ", _interpolate(_list(0))]);
    },
    "single_instance_sign_in_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Entre para seguir perfis e hashtags, favoritar, compartilhar e responder posts."]);
    },
    "tip_no_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Se ainda n\xE3o tiver uma conta do Mastodon, ", _interpolate(_list(0)), "."]);
    },
    "tip_register_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["escolha um servidor e cadastre-se"]);
    }
  },
  "visibility": {
    "direct": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Apenas men\xE7\xF5es"]);
    },
    "direct_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Vis\xEDvel apenas para pessoas mencionadas"]);
    },
    "private_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Vis\xEDvel apenas para seus seguidores"]);
    },
    "public_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["V\xEDsivel para todas as pessoas"]);
    },
    "unlisted": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["N\xE3o listado"]);
    },
    "unlisted_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Vis\xEDvel para todas as pessoas, mas n\xE3o \xE9 exibido em buscas ou recomenda\xE7\xF5es"]);
    }
  }
};

export { ptBR as default };
