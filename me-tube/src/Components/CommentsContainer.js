import React from 'react'
const videoComments=[
    {
        author:"name",
        text:"SOme comments 1 on the video",
        replies:[
            {
                author:"name2",
                text:"Some reply on the first commment",
                replies:[
                    {
                        author:"name2",
                        text:"Some reply on the first commment",
                        replies:[]
                    },
                    {
                        author:"name3",
                        text:"Some reply on the first commment",
                        replies:[]
        
                    }
                ]
            },
            {
                author:"name3",
                text:"Some reply on the first commment",
                replies:[]

            }
        ]
    },
    {
        author:"name",
        text:"SOme comments  2 on the video",
        replies:[]
    },
    {
        author:"name",
        text:"SOme comments  3 on the video",
        replies:[]
    },
    {
        author:"name",
        text:"SOme comments  4 on the video",
        replies:[]
    }

]
const PrintComment = ({author,text}) =>{

    return (
        <>
        <div className='flex items-center gap-2 bg-slate-100 p-1 '>
            <div>
                <img className="w-12 h-12"  src={"profile.png"}/>
            </div>
            <div>
                <div>
                    <p className='font-bold'>{author}</p>
                    <p>{text}</p>
                </div>

            </div>

      
        </div>

        </>
    )
}


const Comments=({videoComment})=>{
    return (
        <div className='mt-2'>
            <PrintComment author={videoComment.author} text={videoComment.text}/>
            {(videoComment.replies.length>0) && 
            (
                <div className='ml-5  border-l-2'>
                    {videoComment.replies.map((reply)=>{
                        return <Comments videoComment={reply}/>
                    })}
                </div>
            )}

        </div >
    )
}
const CommentsContainer = () => {
  return (
    <div className='m-3 p-4 w-full border border-gray-100'>
        {
                videoComments.map((comment,index)=>{
                return <Comments videoComment={comment} key={index}/>
            })
        }
    </div>
  )
}

export default CommentsContainer