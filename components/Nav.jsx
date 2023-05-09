"use client"
import Link from 'next/link'
import Image from 'next/image';
import {useState,useEffect  } from "react";
import { signIn,signOut,useSession,getProviders } from 'next-auth/react';


const Nav=() =>{
  const isuserlogin=true
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
    <div className='container p-3 flex gap-11 justify-between '>
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
         {isuserlogin?(
          <div className='flex gap-3 md:gap-5'>
             <Link href={'/'} className='border  border-red-500 
             rounded-full  text-white bg-blue-700 font-bold p-2'>create post</Link>
             <button  type='button' className='border  border-red-500 rounded-full outline-slate-500 hover:bg-slate-600 text-black font-bold p-2
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
       {/* mobile navigation */}




      <div className='md:hidden flex px-3'>
         {
          isuserlogin?(
            <div>
            <Image 
       src ={"assets/images/logo.svg"}
       width={30}
       height={30}
       onClick={()=>setDropdwon((prev)=>!prev)}
       
       />
       {dropdwon &&(
       < div className='py-2'>
           <Link href={"/profile"}
           onClick={()=>{setDropdwon(false)}} className='block'>My profile</Link>
           <Link href={"/profile"}
           onClick={()=>{setDropdwon(false)}} className='block py-2'>creat ptompt</Link>
            <button  type='button' className='border  border-red-500 rounded-full outline-slate-500 hover:bg-slate-600 text-black font-bold px-3 py-2
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

