import React, { useEffect, useState } from 'react';
import SingleServise from './SingleServise';

const ServiseArea = () => {
    const [servises,setServises] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/servises')
        .then(res=>res.json())
        .then(data=>setServises(data))
    },[])
    return (
        <div>
            <h1>this is our servise area</h1>
            <div className='grid md:grid-cols-3 gap-4 w-11/12 mx-auto '>
                {
                  servises.map(servis=><SingleServise 
                  key={servis._id}
                  servis={servis}
                  ></SingleServise>)
                }
            </div>
        </div>
    );
};

export default ServiseArea;