import { createRequestHandler } from "@remix-run/netlify";
import * as build from "@remix-run/server-build";

export const handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV
});
