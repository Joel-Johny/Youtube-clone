import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
const Body = () => {
  return (
    <div className="mt-16 flex border border-cyan-100">
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body