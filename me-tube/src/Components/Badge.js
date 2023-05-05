import React from 'react'
const Badge = ({name,fname}) => {


  return (
    <div className='m-2 p-2 flex gap-3 rounded-xl hover:bg-gray-300'>
        <img className='w-5 h-5 ' src={`/badges/`+fname} alt="icon"/>
        <p >{name}</p>
    </div>
  )
}

export default Badge