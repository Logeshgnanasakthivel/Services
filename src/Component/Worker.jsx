import React, { useState } from 'react'
import { Demo } from './Demo'
import { Link } from 'react-router-dom';

export const  Worker=({name,age,phone})=> {

  
  const [showComponent, setShowComponent] = useState(false);

  
    
  return (
        <div className="person-card" >
        <Link to={name}>

        <h1>
            {name}
        </h1>
        <p>
            {age}
        </p>
        <p>
            {phone}
        </p>
        

        </Link>

    </div>
  )
}
 
