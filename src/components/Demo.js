import React, { useState } from 'react'

const Demo = () => {
    const [text, setText] = useState('');
    const [isDarktheme, setisDarktheme] = useState(true);
    console.log('rendering...........');
  return (
    <div className={"border border-black w-56 h-44 " + (isDarktheme && "bg-gray-900 text-white")}>    
        <div>
            <button className='border border-black bg-green-300' onClick={()=>setisDarktheme(!isDarktheme)}>toggletheme</button>
            <input className ="border border-black w--50 m-5 px-2" type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <p>hiiii</p>
        </div>
    </div>
  )
}

export default Demo