import React, { useEffect } from 'react'
import { useState } from 'react'
import PropertyBox from '../reusables/PropertyBox'
import axios from 'axios'
import '../css/propertylist.css'
import { Link } from 'react-router-dom'


function PropertyList() {

    const [properties, setProperties] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:8080/findunsoldproperties")
        .then((response) => {
            setProperties(response.data);
        })
        .catch((e) => {
            console.log(e);
        });
    }, []);


    const renderProperties = () => {
        return properties.map((property) => {
            return (
            <Link key={property.id} to={`/property/${property.id}`}>
                <PropertyBox property ={property}/>
            </Link>
        )
    })
    }


  return (
    <div>
        <div className='header'>
            <h1>Properties</h1>
        </div>
        
        <div className='propertylist'>
            {renderProperties()}
        </div>
        
    </div>
  )
  
}

export default PropertyList