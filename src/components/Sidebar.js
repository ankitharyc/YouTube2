import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom';


const Sidebar = () => {
  const isMenuopen = useSelector((store) => store.app.isMenuopen)
  if(!isMenuopen ) return null;

  return (
    <div className='w-48 rounded-lg shadow-lg p-2'>
        <ul>
            <Link to="/"><li className='font-bold'>Home</li></Link>
            <Link to="/demo"><li className='font-bold'>Demo</li></Link>
            <li>Shorts</li>
            <li>Subscription</li>
            <li>You</li>
            <li>History</li>
        </ul>
        <p className='font-bold text-lg'>Explore</p>
        <ul className='pl-3'>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Movies</li>
            <li>Live</li>
            <li>Gaming</li>
            <li>News</li>
        </ul>
    </div>
  )
}

export default Sidebar