import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()



const handler=NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    // callbacks: {
    //     async session({session}){
    //         const sessionUser=await prisma.findUnique({
    //          where:{
    //              email:session.user.email
    //          }
    //         })
    //         session.user.id=sessionUser._id.toString()
    //         return session
    //      },
    //  async signIn({profile}){
    //        try {
    //          const userExist=await prisma.findUnique({
    //              where:{
    //                  email:profile.email
    //              }
    //          })
    //          if(!userExist){
    //              const user=await prisma.create({
    //                 data:{
    //                  email:profile.email,
    //                  username:profile.name.replace("","").toLowerCase(),
    //                  image:profile.picture
    //                 } 
    //              })
    //          }
    //          return true
    //        } catch (error) {
             
    //        }
    //  }
    // }
   
})

export{handler as GET,handler as POST};