import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSidebar } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
const Watch = () => {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(closeSidebar())
    },[])

    const [params]=useSearchParams()
    const id=params.get("v")
    return (
        <div className='p-2 m-2 flex w-full'>
            <div className='p-2 m-2 flex-col'>
                <iframe
                width="1280" 
                height="720" 
                src={`https://www.youtube.com/embed/`+id }
                title="sad" 
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                >

                </iframe>
                <div>Comments</div>
            </div>
            <div className='p-2 m-2 flex border border-red-100 w-full'>
                Suggested videos
            </div>
        </div>
        
    )
}

export default Watch