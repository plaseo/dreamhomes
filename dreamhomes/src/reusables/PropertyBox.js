import React from 'react'
import '../css/propertylist.css'


function PropertyBox(props) {


  return (
    
    <div>
       
      <div className='propertybox'>
        <img src= {props.property.photoUrl} />
        <div>Description: {props.property.description}</div>
        <div>City: {props.property.city}</div>
        <div>State: {props.property.state}</div>
        <div>Size: {props.property.size}</div>
        <div>Price: {props.property.price}</div>
        <div>Contact Information: {props.property.contactInformation}</div>
      </div>

    </div>
    
  )
}

export default PropertyBox