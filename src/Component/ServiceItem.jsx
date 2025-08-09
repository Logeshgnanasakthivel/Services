import React from 'react'
import { Link } from 'react-router-dom'

export const ServiceItem = ({name}) => {
  return (
    <div>
    
        <Link to={name}>
        <p>{name} service </p>

        </Link>        

    </div>
  )
}
