import React, { useState, useRef } from 'react'

const Demo2 = () => {
    const [y,sety] = useState(0);
    let x = 0;
    const ref = useRef(0);
    console.log('ref'+ref)
    // ref={current:0}

  return (
    <div className="border border-black w-56 h-44">    
        <div>
            <p>demo2</p>
            <div className='flex'>
            <button onClick={()=> { x= x+1; console.log('x:' +x);}} className='border border-black'>Increase x</button>
            <h1>X: {x}</h1>
            </div>
            <div className='flex'>
            <button onClick={()=> {sety(y+1); console.log('y:'+y);}} className='border border-black'>Increase y</button>
            <h1>Y: {y}</h1>
            </div>
            <div className='flex'>
            <button onClick={()=> {ref.current = ref.current+1; console.log('ref:'+ref.current);}} className='border border-black'>Increase Ref</button>
            <h1>ref: {ref.current}</h1>
            </div>
            
        </div>
    </div>
  )
}

export default Demo2