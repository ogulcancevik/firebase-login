import { logout } from '@/services/auth.service'
import React from 'react'

const HomeView = () => {
  return (
    <div><button onClick={async () => {
      logout()
    }}>ÇIKIŞ</button></div>
  )
}

export default HomeView
