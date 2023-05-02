import React from 'react'

const VideoCard = ({id,snippet,statistics}) => {
    
    const thumbnail=snippet.thumbnails.high.url
    const views=statistics.viewCount
    let videoTitle=snippet.title
    let videoTitleShort=""
    if(videoTitle.length>50){
        videoTitleShort=videoTitle.slice(0,40)

    }
    const channelTitle=snippet.channelTitle
    return (
    <div className='w-64 h-80 p-3'>
        <img className="rounded-xl" src={thumbnail} alt="video title"/>
        <p className='font-bold text-l'>
            {
                (videoTitle.length>50)
                ? videoTitleShort+"..."
                :videoTitle
            }
        </p>
        <p className='flex flex-col'>
            <p>{channelTitle}</p>
            {views&&<p>{views} views</p>}
        </p>
    </div>
  )
}

export default VideoCard