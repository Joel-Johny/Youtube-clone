import React from 'react'
import Badge from './Badge'
import { useSelector } from 'react-redux'
const Sidebar = () => {
  const sidebarStatus=useSelector((store)=>{
    return store.app.sidebarStatus
})
if(!sidebarStatus)
  return null
  return (
    <div className='p-2 shadow-lg mt-4 w-40 h-full'>
        <div className='border-b-2'>
            <h1 className='text-2xl  font-bold text-red-600'>Explore</h1>
            <ul className='mt-4'>
                <li><Badge name='Movie' fname='movie.png' /></li>
                <li><Badge name='Gaming' fname='gaming.png' /></li>
                <li><Badge name='Music' fname='music.png' /></li>
                <li><Badge name='Shopping' fname='shopping.png' /></li>
                <li><Badge name='Trending' fname='trending.png' /></li>
                <li><Badge name='Fashion' fname='fashion.png' /></li>
                <li><Badge name='News' fname='news.png' /></li>
                <li><Badge name='Sports' fname='sports.png' /></li>
                <li><Badge name='Live' fname='live.png' /></li>
                <li><Badge name='Learning' fname='learning.png' /></li>

            </ul>
        </div>
    </div>
  )
}

export default Sidebar