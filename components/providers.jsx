'use client'
import { Sessionproviders } from 'next-auth/react'

 const provider=({children,session})=> {
  return (
    <Sessionproviders session={session}>
        {children}
    </Sessionproviders>
  )
}

export default provider