import React from 'react'

function PropertyBox(props) {


  return (
    
    <div>
       

    <div>Description: {props.property.description}</div>
    <div>City: {props.property.city}</div>
    <div>State: {props.property.state}</div>
    <div>Size: {props.property.size}</div>
    <div>Price: {props.property.price}</div>
    <div>Contact Information: {props.property.contactInformation}</div>
  

    </div>
    
  )
}

export default PropertyBox