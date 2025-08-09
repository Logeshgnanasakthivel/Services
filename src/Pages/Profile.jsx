import React from 'react'
import { useParams } from 'react-router-dom'

export const Profile = () => {
  const name = useParams()
  const workerName = name.name 
  return (
    <>
    <div>Profile</div>
    <p>{workerName}</p>
    </>
  )
}
