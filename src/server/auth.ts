import { betterAuth } from "better-auth";

export const auth = betterAuth({
  secret: process.env.AUTH_SECRET!,
  baseUrl: "http://localhost:4321",

  socialProviders: {
    github: {
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    },
  },
});
