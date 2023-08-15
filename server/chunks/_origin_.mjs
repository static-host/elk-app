import { defineEventHandler, getRouterParams, createError, getQuery, sendRedirect } from 'h3';
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

const _origin_ = defineEventHandler(async (event) => {
  let { server, origin } = getRouterParams(event);
  server = server.toLocaleLowerCase().trim();
  origin = decodeURIComponent(origin);
  const app = await getApp(origin, server);
  if (!app) {
    throw createError({
      statusCode: 400,
      statusMessage: `App not registered for server: ${server}`
    });
  }
  const { code } = getQuery(event);
  if (!code) {
    throw createError({
      statusCode: 422,
      statusMessage: "Missing authentication code."
    });
  }
  try {
    const result = await $fetch(`https://${server}/oauth/token`, {
      method: "POST",
      body: {
        client_id: app.client_id,
        client_secret: app.client_secret,
        redirect_uri: getRedirectURI(origin, server),
        grant_type: "authorization_code",
        code,
        scope: "read write follow push"
      },
      retry: 3
    });
    const url = `/signin/callback?${stringifyQuery({ server, token: result.access_token, vapid_key: app.vapid_key })}`;
    await sendRedirect(event, url, 302);
  } catch (e) {
    throw createError({
      statusCode: 400,
      statusMessage: "Could not complete log in."
    });
  }
});

export { _origin_ as default };
