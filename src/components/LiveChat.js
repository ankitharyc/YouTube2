import React, { useEffect, useState } from 'react'
import Chatmsg from './Chatmsg'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/livechatSlice';
import {generateRandomNames, randomMessage} from '../utils/helper'

const LiveChat = () => {
  const [livetext, setLivetext] = useState('');
  const dispatch = useDispatch();
  const livechatdata = useSelector(store => store.livechat.messages)
  

  useEffect(()=>{
    const i = setInterval(()=>{
    console.log('API polling');
        dispatch(addMessage({
                name:generateRandomNames(),
                message: randomMessage(30)
        }));
    },500)
    return ()=> clearInterval(i);

  },[])
  return (
    <>
    <div className='bg-slate-100 rounded-lg border border-black w-full h-[420px] p-2 overflow-y-scroll flex-col-reverse flex'>
       {
        livechatdata.map((item, index)=>
        <Chatmsg  key={index} name={item.name} message={item.message}/>
        )
       } 
    </div>
    <form className='flex' onSubmit={(e)=>{
        e.preventDefault();
        console.log(livetext);
        dispatch(addMessage({
            name: 'Ankitha',
            message : livetext
        }))
        setLivetext('');
    }}>
        <input type="text" value={livetext} onChange={(e)=> setLivetext(e.target.value)} className='border border-black w-50'/>
        <button className='border border-black p-2 bg-green-500'>Submit</button>
    </form>
    </>
  )
}

export default LiveChat