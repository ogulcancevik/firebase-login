import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import HomeView from './views/HomeView'
import LoginView from './views/LoginView'

const Router = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useSelector(state => state.auth)
  useEffect(() => {
    const { currentUser } = auth
    if (currentUser && location.pathname === '/login') {
      navigate('/', {
        replace: true
      })
    }
  }, [location])
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute Component={HomeView} />}></Route>
      <Route path="/login" element={<LoginView />}></Route>
    </Routes>
  )
}

export default Router
