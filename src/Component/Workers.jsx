// import React from 'react'
import {Worker} from './Worker'; // or correct path

import { useParams } from 'react-router-dom';

export const  Workers=()=>  {
  const Type = useParams()

  const WorkerType = Type.serviceType

    const WorkerList =  [
  { name: "Alice", roll:"CarWash", age: 25, phone: "1234567890" },
  { name: "Bob",roll:"House Keeping", age: 30, phone: "9876543210" },
  { name: "Charlie", roll:"CarWash",age: 22, phone: "5551234567" },
  { name: "David",roll:"Driver", age: 28, phone: "4445556666" },
  { name: "Eva", roll:"CarWash",age: 35, phone: "1112223333" },
  { name: "Frank",roll:"Driver", age: 24, phone: "8889990000" },
  { name: "Grace",roll:"CarWash", age: 27, phone: "7778889999" },
  { name: "Hannah",roll:"CarWash", age: 32, phone: "6667778888" },
  { name: "Ian",roll:"House Keeping", age: 26, phone: "3334445555" },
  { name: "Jane",roll:"Driver", age: 29, phone: "2223334444" },
]



  return (
    <div>
       
        {
            WorkerList.map(
                (worker,index)=>{
                    return(
                   <>
                   
                    { WorkerType==worker.roll && <Worker 
                    key={index}
                    name={worker.name}
                    age={worker.age}
                    phone={worker.phone}
                    />}
                    </>)
                }
            )
        }

    </div>
  )
}
