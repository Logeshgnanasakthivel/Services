import React, { useState } from 'react'
import { Color } from './Color'
import { Tonglr } from './Tonglr'

export const Test = () => {
    const [colour,setColour]= useState('')
    const [ bOrW , setText] = useState("black")

    const handleChange=(e)=>{
        setColour(e.target.value)
    }

    const handleclick=()=>{
        console.log("hello")
        setText( a=>(a==='black'?'white':'black'))
    }

  return (
    <div>
        <Color colout={colour} change={bOrW} />
        <input type='text' onChange={handleChange}></input>
        <Tonglr 
            //setstate ={setText}
            fun={handleclick}     
        />

    </div>
  )
}
