import React from 'react'

const VideoBanner = ({snippet}) => {
    const {title,description,thumbnails}=snippet

  return (
    <div className='flex gap-6 p-2 my-6 w-full hover:bg-slate-300 rounded-xl'>
        <img className="w-[20rem] rounded-xl" src={`${thumbnails.medium.url}`} alt="thumbnail"/>
        <div className='p-3'>
            <h1 className='text-lg font-semibold'>{title}</h1>
            <small>{description}</small>
        </div>
    </div>
  )
}

export default VideoBanner