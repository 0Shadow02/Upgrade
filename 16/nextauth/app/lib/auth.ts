import CredentialsProvider from 'next-auth/providers/credentials';
export const Next_Auth= {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            username: { label: 'email', type: 'text', placeholder: '' },
            password: { label: 'password', type: 'password', placeholder: '' },
          },
          async authorize(credentials: any) {
              
              return {
                  id: "user1",
                  name:"Shadow",
                  email:"shadow@gmail.com"
              };
          },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks : {
        session : ({session,token,user}:any)=>{
            if (session.user) {
                session.user.id= token.sub
            }
            return session
        }
    }
  }
