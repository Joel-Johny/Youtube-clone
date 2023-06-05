import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSidebar } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from "./LiveChat"
const Watch = () => {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(closeSidebar())
    },[])

    const [params]=useSearchParams()
    const id=params.get("v")
  

    return (
        <div className='px-6 m-10 flex w-full'>
            <div className=' flex-col '>
                <iframe
                className='rounded-lg'
                width="1280" 
                height="720" 
                src={`https://www.youtube.com/embed/`+id }
                title="sad" 
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                >

                </iframe>
                <div>
                    <CommentsContainer />
                </div>
            </div>
            <div className=' mx-2 border border-red-500 flex flex-col w-full h-[720px]  rounded-lg' >
                <LiveChat />
            </div>
        </div>
        
    )
}

export default Watch