import React from 'react'
import Badge from './Badge'
const Sidebar = () => {
  return (
    <div className='p-2 shadow-lg mt-4 w-40'>
        <div>
            <h1 className='text-lg font-bold text-red-600'>Explore</h1>
            <ul>
                <li><Badge name='Movie' fname='movie.png' /></li>
                <li><Badge name='Gaming' fname='gaming.png' /></li>
                <li><Badge name='Music' fname='music.png' /></li>
                <li><Badge name='Shopping' fname='shopping.png' /></li>
                <li><Badge name='Trending' fname='trending.png' /></li>

            </ul>
        </div>
    </div>
  )
}

export default Sidebar