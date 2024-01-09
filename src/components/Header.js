import React, { useEffect } from 'react'
import youtubelogo from '../youtube.png'
import hamburgermenu from '../hamburgermenu.png'
import searchimg from '../searchimg.png'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { useState } from 'react'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice'

const Header = () => {
const [searchquery, setSearchquery] = useState(""); 
const [suggestions, setSuggestions] = useState([]);
const [showsuggestions, setShowSuggestions] = useState(false);


const searchCache = useSelector((store)=> store.search)
const dispatch= useDispatch();
useEffect(()=>{
    const timer = setTimeout(()=>{
        if(searchCache[searchquery]){
            setSuggestions(searchCache[searchquery]); 
        }
        else{
            searchdata();
        }

    } ,200);
    //make an api call for every key press. but if the difference between 2 API calls is less than 200ms, then we decline the API call.  -- Debouncing
    return()=>{
        clearTimeout(timer);
    }
},[searchquery]);

const searchdata = async ()=>{
    const data = await fetch(YOUTUBE_SEARCH_API+searchquery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(cacheResults({
        [searchquery] : json[1],
    }));
};

 
 const handlesidebar = ()=>{
     dispatch(toggleMenu());
 }

 console.log(suggestions)
  return (
    <div>
    <div className='shadow-lg grid grid-flow-col'>
        <div className='col-span-2 flex gap-30 items-center'>
            <img src={hamburgermenu} alt="hamburgermenu logo" className='w-8 h-5 cursor-pointer' onClick={()=>handlesidebar()}/>
            <a href="/"><img src={youtubelogo} alt="youtube logo" className='w-24'/></a>
        </div>
        <div className='col-span-8'>
            <div>
            <input type="text" placeholder="search" value={searchquery} onChange={(e)=>setSearchquery(e.target.value)} onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)} className='p-2 w-96 border-black border rounded-tl-full rounded-bl-full'/>
            <button><img src={searchimg} alt="search logo" className='w-10  bg-gray-700 border border-black rounded-tr-full rounded-br-full'/></button> 
             </div>
            {
                showsuggestions && 
                <div> 
                <ul className='fixed bg-white p-3 w-96 border-gray-100 border rounded-lg shadow-lg'>
                {
                    suggestions&&suggestions.map((item)=>{
                       return <li className='hover:bg-gray-200 cursor-pointer' key={item}>{item}</li>
                })
                }
                 </ul> 
                </div>
            } 
        </div>                     
        <div className='col-span-2'>
            <button className='w-20 border-black border rounded-lg '>Signin</button>
        </div>
        </div>  
    </div>       
  )
}

export default Header