import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Mybookings = () => {
    const [bookings,setBookings] = useState([])
    const {user} = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            <h1>this is my bookings:{bookings.length}</h1>
        </div>
    );
};

export default Mybookings;