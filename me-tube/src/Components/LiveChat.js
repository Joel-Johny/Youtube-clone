import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage' 
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
const LiveChat = () => {

    const dispatch=useDispatch()
    const messages=useSelector((store)=>store.chat.messages)
    useEffect(()=>{

        const interval=setInterval(async ()=>{
            // console.log("API POLLING")
            const user=await fetch("https://randomuser.me/api/")
            const userJson=await user.json()

            const messageApi=await fetch("https://baconipsum.com/api/?type=all-meat&sentences=1")
            const messageJson=await messageApi.json()
            console.log(messageJson[0])
            dispatch(addMessage({
                profile:userJson.results[0].picture.medium,
                name:userJson.results[0].name.first,
                message:messageJson[0].slice(0,40)
            }))



        },1000)

        return ()=>clearInterval(interval)
    },[])
  return (
    <>
        <div className='h-[50px] bg-slate-100 w-full flex items-center justify-center text-lg'>This section is a simulation of Live Chat</div>
        <div className='border border-green-600 mt-2 overflow-auto h-full flex flex-col-reverse '>
            
            {messages.map((message)=>{
                return <ChatMessage name={message.name} message={message.message} profile={message.profile}/>
            })}

        </div>
    </>


  )
}

export default LiveChat