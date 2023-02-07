import NextAuth from "next-auth/next";

import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.OAUTH_GITHUB__CLIENT_ID || "",
            clientSecret: process.env.OAUTH_GITHUB__CLIENT_SECRET || "",
        }),
    ],
});
