import React, { useEffect, useState } from 'react'
import { ytApi } from '../utils/data'
import Button from './Button'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { openSidebar } from '../utils/appSlice'
const Main = () => {
  const buttonList=["All","Live","Gaming","Mixes","Valorant","Javascript","Data Structures","GTA 5"]
  const [videos,setVideos]=useState([])
  const dispatch=useDispatch()
  useEffect(()=>{
    getVideos()
    dispatch(openSidebar())
  },)
  async function getVideos(){

    const data=await fetch(ytApi)
    const json=await data.json()
    setVideos(json.items)
  }
  return (
    <div className='w-full p-4 shadow-lg mt-4 flex flex-col gap-6 justify-center'> 

      <div className='flex flex-wrap items-start gap-6 mr-auto ' >
            {
              buttonList.map((value,index)=>{
                return <Button text={value} key={index}/> 
              })
            }
      </div>

      <div className='ml-4 mr-4 p-4 flex flex-wrap gap-4 items-center justify-center '>
        {
          (videos.length>0) && videos.map((video,index)=>{
            return( 
              <Link to={`/watch?v=`+video.id} key={index}>
                <VideoCard {...video} key={index}/>
              </Link>
             )
          })
        }
      </div>



    </div>

  )
}

export default Main