import React from 'react'
import Adminheader from './Adminheader'
import Adminsidebar from './Adminsidebar'
import { Outlet } from 'react-router-dom'

function Adminlayout() {
  return (
    <div className='flex min-h-screen w-full'>
        <Adminsidebar />
        <div className='flex flex-1 flex-col'>
            <Adminheader />
            <main className='flex flex-1 bg-muted/40 p-4 md:p-6'>
                <Outlet />
            </main>
        </div>
    </div>
  )
}

export default Adminlayout