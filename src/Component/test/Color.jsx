import React from 'react'
import "./Color.css"
export const Color = ({ colout,change}) => {
  return (
    <div>
        <div className='col' style={{ backgroundColor: colout  , color:change}} >{colout}</div>
    </div>
  )
}
