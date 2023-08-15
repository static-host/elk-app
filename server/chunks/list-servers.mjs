import { defineEventHandler } from 'h3';
import { l as listServers$1 } from './shared.mjs';
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
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'xss';
import 'http-graceful-shutdown';

let servers;
const listServers = defineEventHandler(async () => {
  if (!servers)
    servers = await listServers$1();
  return servers;
});

export { listServers as default };
