const es419 = {
  "a11y": {
    "locale_changed": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Idioma configurado en ", _interpolate(_list(0))]);
    },
    "locale_changing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Actualizando idioma, espera..."]);
    }
  },
  "account": {
    "avatar_description": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Foto de perfil de"]);
    },
    "blocked_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Est\xE1s bloqueado por este usuario."]);
    },
    "blocked_domains": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Dominios ocultos"]);
    },
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Publicaciones Favoritas"]);
    },
    "go_to_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ver perfil"]);
    },
    "moved_title": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["indic\xF3 que su nueva cuenta es "]);
    },
    "mutuals": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mutuales"]);
    },
    "notifications_on_post_disable": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["No notificar cuando ", _interpolate(_named("username")), " publique"]);
    },
    "notifications_on_post_enable": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Notificarme cuando ", _interpolate(_named("username")), " publique"]);
    },
    "pinned": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Publicaciones ancladas"]);
    },
    "profile_description": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Imagen de portada de ", _interpolate(_list(0))]);
    },
    "unmute": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Quitar silencio"]);
    }
  },
  "action": {
    "apply": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Guardar cambios"]);
    },
    "bookmark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Marcar"]);
    },
    "confirm": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Cortar"]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Actualizar"]);
    },
    "enter_app": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ingresar"]);
    },
    "favourite": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Marcar como favorita"]);
    },
    "favourited": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Marcada como favorita"]);
    },
    "reset": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Resetear"]);
    },
    "switch_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Cambiar de cuenta"]);
    }
  },
  "app_logo": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Logo de Elk"]);
  },
  "attachment": {
    "remove_label": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Eliminar archivo adjunto"]);
    }
  },
  "command": {
    "n-people-in-the-past-n-days": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize([_interpolate(_list(0)), " usuarios en los \xFAltimos ", _interpolate(_list(1)), " d\xEDas"]);
    }
  },
  "common": {
    "end_of_list": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Fin de la lista"]);
    },
    "fetching": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Listando..."]);
    },
    "offline_desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["No tienes acceso a internet. Por favor, comprueba que tienes una conexi\xF3n a la red."]);
    }
  },
  "confirm": {
    "block_account": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["No"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["S\xED, bloquear"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\xBFDe verdad quieres bloquear a ", _interpolate(_list(0)), "?"]);
      }
    },
    "block_domain": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["No"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["S\xED ocultar"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\xBFDe verdad quieres ocultar a ", _interpolate(_list(0)), "?"]);
      }
    },
    "delete_posts": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\xBFDe verdad quieres eliminar esta publicaci\xF3n?"]);
      }
    },
    "mute_account": {
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\xBFDe verdad quieres silenciar a ", _interpolate(_list(0)), "?"]);
      }
    },
    "show_reblogs": {
      "cancel": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["No"]);
      },
      "confirm": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["S\xED, ver"]);
      },
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
        return _normalize(["\xBFDe verdad quieres ver los retoots de ", _interpolate(_list(0))]);
      }
    },
    "unfollow": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\xBFDe verdad quieres dejar de seguir?"]);
      }
    }
  },
  "error": {
    "file_size_cannot_exceed_n_mb": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["El tama\xF1o del archivo no puede ser de m\xE1s de ", _interpolate(_list(0)), "MB"]);
    },
    "unsupported_file_format": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Formato de archivo no soportado"]);
    }
  },
  "help": {
    "desc_highlight": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Es normal que aparezcan algunos errores y funcionalidades que a\xFAn est\xE9n en desarrollo."]);
    },
    "desc_para1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\xA1Gracias por tu inter\xE9s en probar Elk, nuestro cliente gen\xE9rico en desarrollo para Mastodon!"]);
    },
    "desc_para2": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Estamos haciendo lo posible para ir mejorando constantemente."]);
    },
    "desc_para4": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Elk es de c\xF3digo abierto. Si quieres probar para ayudar, opinar o contribuir,"]);
    },
    "desc_para5": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["cont\xE1ctanos a trav\xE9s de GitHub"]);
    }
  },
  "list": {
    "add_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["A\xF1adir cuenta a la lista"]);
    },
    "remove_account": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Quitar cuenta de la lista"]);
    }
  },
  "menu": {
    "block_domain": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Ocultar dominio ", _interpolate(_list(0))]);
    },
    "delete_and_redraft": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Eliminar y volver a borrador"]);
    },
    "edit": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Actualizar"]);
    },
    "pin_on_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Anclar en tu perfil"]);
    },
    "show_favourited_and_boosted_by": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ver quien marc\xF3 como favorita y quien retoote\xF3"]);
    },
    "show_reblogs": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Ver retoots de ", _interpolate(_list(0))]);
    },
    "unblock_domain": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Ver dominio ", _interpolate(_list(0))]);
    },
    "unmute_account": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Quitar silencio a ", _interpolate(_list(0))]);
    },
    "unmute_conversation": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Quitar silencio de la publicaci\xF3n"]);
    },
    "unpin_on_profile": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Desanclar del perfil"]);
    }
  },
  "nav": {
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Atr\xE1s"]);
    },
    "blocked_domains": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Dominios ocultos"]);
    },
    "built_at": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, list: _list } = ctx;
      return _normalize(["Generado ", _interpolate(_list(0))]);
    },
    "conversations": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mensajes directos"]);
    },
    "favourites": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Favoritas"]);
    },
    "federated": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Historia federada"]);
    },
    "local": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Historia local"]);
    },
    "settings": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Preferencias"]);
    },
    "toggle_theme": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Cambiar tema de color"]);
    },
    "zen_mode": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Modo sin distracciones"]);
    }
  },
  "notification": {
    "followed_you": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["te sigui\xF3"]);
    },
    "update_status": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["actualiz\xF3 su publicaci\xF3n"]);
    }
  },
  "placeholder": {
    "default_1": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\xBFEn qu\xE9 piensas?"]);
    }
  },
  "search": {
    "search_empty": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["No se encontraron resultados para la b\xFAsqueda"]);
    }
  },
  "settings": {
    "about": {
      "built_at": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Compilado el"]);
      },
      "sponsor_action": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Patrocina"]);
      }
    },
    "account_settings": {
      "description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Actualiza los ajustes de tu cuenta en la interfaz de Mastodon."]);
      },
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Configuraci\xF3n de cuenta"]);
      }
    },
    "interface": {
      "color_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Temas de color"]);
      },
      "dark_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Tema oscuro"]);
      },
      "default": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize([" (predeterminado)"]);
      },
      "font_size": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Tama\xF1o de fuente"]);
      },
      "light_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Tema claro"]);
      },
      "system_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Color del sistema"]);
      }
    },
    "language": {
      "display_language": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Idioma en pantalla"]);
      },
      "translations": {
        "add": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["A\xF1adir"]);
        },
        "hide_specific": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ocultar una traducci\xF3n espec\xEDfica"]);
        },
        "remove": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Quitar"]);
        }
      }
    },
    "notifications": {
      "notifications": {
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Preferencias de notificaciones"]);
        }
      },
      "push_notifications": {
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Preferencias de notificaciones push"]);
        }
      },
      "show_btn": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ir a preferencias de notificaciones"]);
      },
      "under_construction": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["En desarrollo"]);
      }
    },
    "preferences": {
      "grayscale_mode": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Tema en escala de grises"]);
      },
      "hide_username_emojis_description": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Oculta, de la historia, los emojis en los nombres de usuario. Los emojis seguir\xE1n visibles en los perfiles."]);
      }
    },
    "profile": {
      "appearance": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Actualizar foto, nombre de usuario, perfil, etc."]);
        },
        "display_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nombre visible"]);
        },
        "profile_metadata_desc": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Puedes ver en tu perfil hasta 4 elementos en forma de tabla"]);
        },
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Actualizar perfil"]);
        }
      },
      "featured_tags": {
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Los usuarios navegan por tus publicaciones p\xFAblicas con estas etiquetas."]);
        },
        "label": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Etiquetas destacadas"]);
        }
      }
    },
    "users": {
      "label": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Usuarios en l\xEDnea"]);
      }
    }
  },
  "status": {
    "spoiler_show_less": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Menos"]);
    }
  },
  "tab": {
    "hashtags": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Etiquetas"]);
    }
  },
  "timeline": {
    "show_new_items": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;
      return _plural([_normalize(["Ver ", _interpolate(_named("v")), " nuevas publicaciones"]), _normalize(["Ver ", _interpolate(_named("v")), " nueva publicaci\xF3n"]), _normalize(["Ver ", _interpolate(_named("v")), " nuevas publicaciones"])]);
    }
  },
  "title": {
    "federated_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Historia federada"]);
    },
    "local_timeline": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Historia local"]);
    }
  },
  "tooltip": {
    "add_emojis": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Insertar emoji"]);
    },
    "add_media": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Insertar im\xE1genes, un video o archivos de audio"]);
    },
    "change_content_visibility": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Cambiar visibilidad"]);
    }
  },
  "user": {
    "add_existing": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["A\xF1adir una cuenta existente"]);
    }
  }
};

export { es419 as default };
