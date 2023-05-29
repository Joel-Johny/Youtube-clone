import React from 'react'

const VideoCard = ({snippet,statistics}) => {
    
    const thumbnail=snippet.thumbnails.high.url
    const views=statistics.viewCount
    let videoTitle=snippet.title
    let videoTitleShort=""
    if(videoTitle.length>50){
        videoTitleShort=videoTitle.slice(0,40)

    }
    const channelTitle=snippet.channelTitle
    return (
    <div className='w-72 h-80 p-3' >
        <img className="rounded-xl" src={thumbnail} alt="video title"/>
        <p className='font-bold text-l mt-2'>
            {
                (videoTitle.length>50)
                ? videoTitleShort+"..."
                :videoTitle
            }
        </p>
        <div className='flex flex-col'>
            <p>{channelTitle}</p>
            {views&&<p>{views} views</p>}
        </div>
    </div>
  )
}

export default VideoCard