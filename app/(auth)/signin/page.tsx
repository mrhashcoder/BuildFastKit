import { Signin } from '@/components/main/signin'
import { SignOut } from '@/components/main/signout'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <Signin />
        <SignOut />
    </div>
  )
}

export default page