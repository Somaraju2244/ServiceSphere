import NextAuth from "next-auth/next";


export const authOptions = {
    providers: [
    {
        id: "descope",
        name: "Descope",
        type: "oauth",                        
        wellKnown: `https://api.descope.com/P2j8shihxrM4bDZEBC43PLReO0OR/.well-known/openid-configuration`,
        authorization: { params: { scope: "openid email profile" } },
        idToken: true,
        clientId:"P2j8shihxrM4bDZEBC43PLReO0OR",
        clientSecret: "<Descope Access Key>",
        checks: ["pkce", "state"],
        profile(profile) {
            return {
                id: profile.sub,
                name: profile.name,
                email: profile.email,
                image: profile.picture,
            }
        },
    }]
}  


const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
