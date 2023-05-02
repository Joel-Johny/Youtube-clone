import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
const Body = () => {
  return (
    <div className="mt-5 flex border border-cyan-100">
        <Sidebar/>
        <Main/>
    </div>
  )
}

export default Body