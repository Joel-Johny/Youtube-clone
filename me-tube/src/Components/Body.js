import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
const Body = () => {
  return (
    <div className="mt-5 flex">
        <Sidebar/>
        <Main/>
    </div>
  )
}

export default Body