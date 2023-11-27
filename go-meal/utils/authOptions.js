import CredentialsProvider from "next-auth/providers/credentials";
import { generateApiEndpoint } from "@/utils";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",

      async authorize(credentials, req) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }
        const response = await fetch(generateApiEndpoint("auth/login"), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });
        const user = await response.json();

        if (response.ok && user) {
          const userResponse = await fetch(generateApiEndpoint("users/me"), {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.data.access_token}`,
            },
          });
          const userProfile = await userResponse.json();

          if (userResponse.ok && userProfile) {
            return {
              name: `${userProfile.data.first_name} ${userProfile.data.last_name}`,
              lastName: `${userProfile.data.last_name}`,
              image: userProfile.data.avatar,
              ...user.data,
              ...userProfile.data,
            };
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.accessToken = user?.access_token;
        token.refreshToken = user?.refresh_token;
        token.accessTokenExpires = Date.now() + user?.expires;
        token.firstName = user?.first_name;
        token.lastName = user?.last_name;
        token.email = user?.email;
        token.avatar = user?.avatar;
        token.role = user?.role;
      }
      return token;
    },
    async session({ session, token, user }) {
      if (token) {
        session.user = token;
      }
      return { session, token, user };
    },
  },
};
