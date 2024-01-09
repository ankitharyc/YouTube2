import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-gray-300 rounded-lg px-2 py-1 m-2 text-sm'>{name}</button>
    </div>
  )
}

export default Button