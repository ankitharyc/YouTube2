import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants';
import Videocard from './Videocard';
import {Link} from 'react-router-dom'

const Videocontainer = () => {
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata = async()=>{
        const data = await fetch(YOUTUBE_API);
        const json = await data.json();
        console.log(json);
        setVideos(json.items);
    }

  return (
    <div className='flex flex-wrap'>
        {
        videos.map((item)=>
         <Link key={item.id} to={"/watch?v="+item.id}><Videocard   videoinfo = {item}/></Link>
        )
        }
    </div>
  )
}

export default Videocontainer