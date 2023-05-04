import React from 'react'
import { useDispatch } from 'react-redux'
import {toggleSidebar} from "../utils/appSlice"
import { Link } from 'react-router-dom'
const Header = () => {

  const dispatch=useDispatch()

  function toggle(){
    dispatch(toggleSidebar())
  }
  return (
    <div className='flex p-3 items-center shadow-xl'>


        <div className='flex gap-3 items-center basis-1/4 '>
            <img className='h-6'src='ham.png' alt='logo' onClick={toggle}/>
            <Link to="/"><img src='yt_logo.png' alt='logo' className='h-9'/></Link>
        </div>

        <div className='basis-1/2 flex items-center justify-center'>
            <input className='w-3/5 h-9 border rounded-l-full ' type='text' />
            <button className='h-9 w-14 bg-gray-400 rounded-r-full flex items-center justify-center p-2'><img className='h-5 ' src='search.png' alt='something'></img></button>
            <button className='h-9 w-9 bg-gray-400 rounded-full ml-7 flex items-center justify-center p-2'><img className='h-5' src='mic.png' alt='something'></img></button>
        </div>

        <div className='ml-auto'>
            <button className='h-12 rounded-full'><img className='h-full p-2' src='profile.png' alt='something'></img></button>
        </div>

    </div>
  )
}

export default Header