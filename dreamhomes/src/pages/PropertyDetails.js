import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function PropertyDetails() {

    const [property, setProperty] = useState(null);
    const {propertyId} = useParams();
    

    useEffect(() => {
        axios.get(`http://localhost:8080/findpropertybyid/${propertyId}`)
        .then(function (response) {
            setProperty(response.data)
          })
        .catch(function (error) {
            console.log("Error fetching property details", error)
        })
        .finally(function() {
        })
    });

    if(!property) {

        return (
            <div>
                Loading ...
            </div>
        )
    }

    

    return (
    <div>

        <div>Description: {property.description}</div>
        <div>City: {property.city}</div>
        <div>State: {property.state}</div>
        <div>Size: {property.size}</div>
        <div>Price: {property.price}</div>
        <div>Contact Information: {property.contactInformation}</div>
        <div>Photos: </div>
        {property.photos.map((photo) =>(
            <img key={photo.id} src={photo.photoUrl}/>
    
        ))}
        
    </div>
      )




}
export default PropertyDetails