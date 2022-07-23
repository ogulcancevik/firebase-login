import React from 'react'
import { useSelector } from 'react-redux'
import { logout } from '@/services/auth.service'

const HomeView = () => {
  const { currentUser } = useSelector((state) => state.auth)
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-slate-200'>
      <h1 className='text-4xl'>Welcome {currentUser.email}</h1>
      <div className='text-2xl cursor-pointer' onClick={async () => {
        await logout()
      }}>Logout</div>
    </div>
  )
}

export default HomeView
