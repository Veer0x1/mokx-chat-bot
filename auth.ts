import NextAuth, { type DefaultSession } from 'next-auth'
import GitHub from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

declare module 'next-auth' {
  interface Session {
    user: {
      /** The user's id. */
      id: string
    } & DefaultSession['user']
  }
}

export const {
  handlers: { GET, POST },
  auth,
  CSRF_experimental
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    jwt: async ({ token, profile }) => {
      if (profile) {
        token.id = profile.id
        token.image = profile.picture
      }
      return token
    }
    // @TODO
    // authorized({ request, auth }) {
    //   return !!auth?.user
    // }
  },
  pages: {
    signIn: '/register'
  }
})
