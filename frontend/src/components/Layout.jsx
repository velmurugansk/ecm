import React from 'react'
import Header from './Header'


function Layout() {
  return (
    <div className='w-full'>
      <Header/>
      <div className="mx-auto flex-1 py-2">{children}</div>
    </div>
  )
}

export default Layout