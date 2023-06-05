import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage' 
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
const LiveChat = () => {

    const dispatch=useDispatch()
    const messages=useSelector((store)=>store.chat.messages)
    useEffect(()=>{

        const interval=setInterval(()=>{
            // console.log("API POLLING")

            dispatch(addMessage({
                name:"Samantha",
                message:"Joel"
            }))



        },20000)

        return ()=>clearInterval(interval)
    },[])
  return (
    <>
        <div className='h-[50px] bg-slate-100 w-full flex items-center justify-center text-lg'>This section is a simulation of Live Chat</div>
        <div className='border border-green-600 mt-2 overflow-auto h-full flex flex-col-reverse '>
            
            {messages.map((message)=>{
                return <ChatMessage name={message.name} message={message.message}/>
            })}

        </div>
    </>


  )
}

export default LiveChat