import { defineEventHandler, getRouterParams, readBody, createError } from 'h3';
import { g as getApp, a as getRedirectURI } from './shared.mjs';
import { stringifyQuery } from 'ufo';
import 'ofetch';
import './nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'xss';
import 'http-graceful-shutdown';

const login = defineEventHandler(async (event) => {
  let { server } = getRouterParams(event);
  const { origin, force_login, lang } = await readBody(event);
  server = server.toLocaleLowerCase().trim();
  const app = await getApp(origin, server);
  if (!app) {
    throw createError({
      statusCode: 400,
      statusMessage: `App not registered for server: ${server}`
    });
  }
  const query = stringifyQuery({
    client_id: app.client_id,
    force_login: force_login === true ? "true" : "false",
    scope: "read write follow push",
    response_type: "code",
    lang,
    redirect_uri: getRedirectURI(origin, server)
  });
  return `https://${server}/oauth/authorize?${query}`;
});

export { login as default };
