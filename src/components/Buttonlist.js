import React from 'react'
import Button from './Button'

const Buttonlist = () => {
  const list =["All","Music","News","Gaming","Live","Trailers","Thrillers","Cooking","Podcasts"]
  return (
    <div className='flex'>
       {
        list.map((item,index)=>
            <Button key={index} name= {item}/>
        )
       }
    </div>
  )
}

export default Buttonlist