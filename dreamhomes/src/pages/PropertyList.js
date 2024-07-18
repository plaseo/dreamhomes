import React, { useEffect } from 'react'
import { useState } from 'react';
import PropertyBox from '../reusables/PropertyBox';
import axios from 'axios';

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
            <PropertyBox property ={property}/>
        )
    })
    }


  return (
    <div>
        <h1>Properties</h1>
        {renderProperties()}
    </div>
  )
  
}

export default PropertyList