import { defineEventHandler, getRouterParams, getQuery } from 'h3';
import { d as deleteApp } from './shared.mjs';
import { u as useRuntimeConfig } from './nitro/node-server.mjs';
import 'ofetch';
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
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'xss';
import 'http-graceful-shutdown';

const clear = defineEventHandler(async (event) => {
  const { server } = getRouterParams(event);
  const { key } = getQuery(event);
  if (key !== String(useRuntimeConfig().adminKey))
    return { status: false, error: "incorrect key" };
  await deleteApp(server);
  return { status: true };
});

export { clear as default };
