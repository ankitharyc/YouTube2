import React from 'react'
import Buttonlist from './Buttonlist'
import Videocontainer from './Videocontainer'

const Maincontainer = () => {
  return (
    <div className='col-span-10'>
        <Buttonlist/>
        <Videocontainer/>
    </div>
  )
}

export default Maincontainer;