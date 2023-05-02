import React, { useEffect, useState } from 'react'
import { ytApi } from '../utils/data'
import Button from './Button'
import VideoCard from './VideoCard'
const Main = () => {
  const buttonList=["All","Live","Gaming","Mixes","Valorant","Javascript","Data Structures","GTA 5"]
  const [videos,setVideos]=useState([])
  useEffect(()=>{
    getVideos()
  },[])
  console.log(videos)
  async function getVideos(){

    const data=await fetch(ytApi)
    const json=await data.json()
    setVideos(json.items)
  }
  return (
    <div className='w-full p-4 shadow-lg mt-4 flex flex-col gap-6 items-center justify-center'> 

      <div className='flex items-start gap-6 ' >
            {
              buttonList.map((value,index)=>{
                return <Button text={value} key={index}/> 
              })
            }
      </div>

      <div className='ml-4 mr-4 p-4 flex flex-wrap gap-4 items-center justify-center '>
        {
          (videos.length>0) && videos.map((video)=>{
            return <VideoCard {...video}/> 
          })
        }
      </div>



    </div>

  )
}

export default Main