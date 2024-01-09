import React from 'react'

const Videocard = ({videoinfo}) => {
    console.log(videoinfo);
    const {snippet, statistics} = videoinfo;
    const {thumbnails,channelTitle,localized} = snippet;
  return (    
        <div className='videocard p-2 m-2 w-72 border border-black rounded-lg shadow-lg'>
            <img src={thumbnails.medium.url} alt="logo"></img>
            <p className='font-bold'>{localized.title}</p>
            <p><span className='font-semibold'>Channel:</span> {channelTitle}</p>
            <p className='text-sm'><span className='font-semibold'>Views:</span> {statistics.viewCount}</p>
        </div>
    
        
  )
}

export default Videocard