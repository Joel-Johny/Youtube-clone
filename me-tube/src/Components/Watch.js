import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeSidebar } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from "./LiveChat"
import { addMessage } from '../utils/chatSlice'
const Watch = () => {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(closeSidebar())
    },[])

    const [params]=useSearchParams()
    const id=params.get("v")
    const [Message,setMessage]=useState("")

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
                <form className="h-[35px] flex items-center gap-4 m-2" onSubmit={(e)=>{
                    e.preventDefault()
                    console.log(Message)
                    dispatch(addMessage({
                        name:"Joel",
                        message:Message,
                        profile:"/profile.png"
                    }))
                    setMessage("")
                }}>
                    <img className='w-7 h-7' src="/profile.png"/>
                    <input className='px-2 w-[60%] border border-black rounded-md'  type="text" value={Message} onChange={(e)=>setMessage(e.target.value)}/>
                    <button className='bg-green-400 p-1 rounded-md'>SEND</button>
                </form>
            </div>
        </div>
        
    )
}

export default Watch