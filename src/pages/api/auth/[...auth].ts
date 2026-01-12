import type { APIRoute } from "astro";
import { auth } from "../../../server/auth";

export const ALL: APIRoute = async ({ request }) => {
  return auth.handler(request);
};
