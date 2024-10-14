import { SignOut } from '@/components/main/signout'
import React from 'react'
import { logout } from './actions'



export default function() {

  return (
    <div className='h-screen flex justify-center items-center'>
        <SignOut logout={logout}/>
    </div>
  )
}

