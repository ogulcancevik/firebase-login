import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ Component }) => {
  const auth = useSelector(state => state.auth)
  if (!auth.currentUser) {
    return <Navigate to="/login" replace />
  } else {
    return <Component />
  }
}

export default PrivateRoute
