import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",

      async authorize(credentials, req) {
        const url = process.env.NEXT_PUBLIC_API_BASE_URL + "auth/login";

        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });
        const user = await response.json();

        if (response.ok && user) {
          return {
            email: credentials.email,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      return { session, token, user };
    },
  },
};
