import CredentialsProvider from "next-auth/providers/credentials"
export const authoptions={
    providers: [
        CredentialsProvider({
            name: "credentails",
            credentials:{
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                 password: { label: "Password", type: "password" }
            },
            async authorize (credentails:any){
                const email =await credentails.username
                const password =await credentails.password
                return {
                    id:"1",
                    email,
                    password
                }
            }
        })
    
    ],
    secret:process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ user, token }: any) => {
            console.log(token)
            if (user) {
                token.userid = user.id
                token.password="fdasfsd"
            }
            return token;
        },
      session: ({ session, token, user }: any) => {
          if (session.user) {
              session.user.id = token.sub
              session
          }
          return session
      }
    },
 }
 