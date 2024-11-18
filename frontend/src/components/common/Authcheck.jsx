import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'

function Authcheck({isAuthenticated, user, children}) {
  const location = useLocation()
  if(!isAuthenticated && !location.pathname.includes('/login')) {
    return <Navigate to="/login" />
  }

  if(isAuthenticated && location.pathname.includes('/login')) {
    if(user?.role === 'admin'){
        return <Navigate to="/admin/dashboard" />
    } else {
        return <Navigate to="/shop/home" />
    }
  }

  if(isAuthenticated && user?.role !== 'admin' && location.pathname.includes('/admin')){
    return <Navigate to="/unauth" />
  }

  if((isAuthenticated && user?.role === 'admin' || user?.role === 'user') && location.pathname.includes('shop')){
    return <Navigate to="/admin/dashboard" />
  }

  return <>{children}</>
}

export default Authcheck