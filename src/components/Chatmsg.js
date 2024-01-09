import React from 'react'

const Chatmsg = ({name, message}) => {
  return (
    <div className='flex items-center gap-4 w-full'>
        <p className='font-bold'>{name}</p>
        <p>{message}</p>
    </div>
  )
}

export default Chatmsg