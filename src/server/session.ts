import { auth } from "./auth";
import type { APIContext } from "astro";

export async function getSession(ctx: APIContext) {
  return auth.api.getSession({
    headers: ctx.request.headers,
  });
}
