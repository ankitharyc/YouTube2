import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import {useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const Watchpage = () => {
    const [searchparams] = useSearchParams();
    console.log(searchparams.get("v"));

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])

  return (
    <div className='flex flex-col w-full'>
    <div className=' flex gap-5 w-full'>
      <div>
        <iframe width="760" height="415" src={"https://www.youtube.com/embed/"+searchparams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className='w-full'>
        <LiveChat/>
      </div>
    </div>
    <CommentsContainer/>
    </div>
  )
}

export default Watchpage