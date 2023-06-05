import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center gap-2 px-3 my-2  hover:bg-slate-200 rounded-md mx-1 '>
        <img className="w-8 h-8"  src={"profile.png"}/>
        <span className='font-bold'> {name}</span>
        <span> {message}</span>
    </div>
  )
}

export default ChatMessage