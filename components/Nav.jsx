"use client"
import Link from 'next/link'
import Image from 'next/image';
import {useState,useEffect  } from "react";
import { signIn,signOut,useSession,getProviders } from 'next-auth/react';


const Nav=() =>{
  const{data:session}=useSession()
  const [providers,setProviders]=useState(null)
  const [dropdwon,setDropdwon]=useState(false)
  useEffect(()=>{
   const set=async()=>{
    const respons=await getProviders()
    setProviders(respons)
   }
   set()
  },[])



  return (
    <div className='container p-3 flex gap-11 justify-between  z-40'>
      
      <div className='flex'>
      <Link href={"/"}>
      <Image 
       src ={"assets/images/logo.svg"}
       width={30}
       height={30}
       
       />  
      </Link>
      <p className='sm:flex hidden font-bold pl-2' >promtopia</p> 
      </div>
      
       {/* //desktop navigation */}
       <div className='sm:flex hidden  '>
         {session?.user?(
          <div className='flex gap-3 md:gap-5'>
             <Link href={'/'}   className="rounded-full py-2 px-3 text-center font-semibold hover:underline 
              bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">create post</Link>
             <button  type='button' className='border rounded-full bg-slate-500 hover:bg-transparent text-black font-bold py-2 px-3
             '
             onClick={signOut}>Sign Out</button>
              <Image 
       src ={"assets/images/logo.svg"}
       width={37}
       height={37}
       
       />  
          </div>
          
         ):(
          <>
          {providers &&Object.values(providers).map((provider)=>{
                (<button type='button' 
                   key={provider.name}
                   onClick={signIn(provider.id)}
                className='border  border-red-500 rounded-full outline-slate-500
                 hover:bg-slate-600 text-black font-bold p-2'>signIn</button>)
          })}
          
          </>
         )}
       </div>

       {/* mobile navigation  */}
 
      <div className='sm:hidden'>
         {
          session?.user?(
             <div className=''>
              <div className='content-end'>
            <Image 
       src ={"assets/images/logo.svg"}
       width={30}
       height={30}
       onClick={()=>setDropdwon((prev)=>!prev)}
        className='ml-auto'
       />
       </div>
       {dropdwon &&(
       < div className='text-right shadow-xl  p-4 z-40'>
           <Link href={"/profile"}
           onClick={()=>{setDropdwon(false)}} className='block font-semibold'>My profile</Link>
           <Link href={"/profile"}
           onClick={()=>{setDropdwon(false)}} className='block py-2 font-semibold'>creat ptompt</Link>
            <button  type='button' className='border rounded-full bg-slate-500 hover:bg-transparent text-black font-bold px-6 py-2 my-3
             '
             onClick={()=>{
               setDropdwon(false);
               signOut();
              } }>Sign Out</button>   
       </div>
       )}
       </div>  
          ):( <>
            {providers &&Object.values(providers).map((provider)=>{
                  (<button type='button' 
                     key={provider.name}
                     onClick={signIn(provider.id)}
                  className='border  border-red-500 rounded-full outline-slate-500
                   hover:bg-slate-600 text-black font-bold p-2'>signIn</button>)
            })}
            
            </>)
         }





      </div>




    </div>  
  )
         
      }

export default Nav;

