
import { Link } from 'react-router-dom'
import { ServiceItem } from './ServiceItem'

export const Services = () => {
      const Services =  [
  { name: "CarWash" },
  { name: "House Keeping" },
  { name: "Child care" },
  { name: "Driver" },
  { name: "plumber"},
  { name: "electricen" },
  { name: "painter" },
  { name: "cook" },
  { name: "maid" }
]
  return (
    <>
    {
        Services.map((item,index)=>{
            return(
                <>
                    <ServiceItem 
                        key={index}
                        name={item.name}
                    />

                </>
            )
        })
    }
    </>
  )
}
