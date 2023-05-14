import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import BookingRow from './BookingRow';

const Mybookings = () => {
    const [bookings, setBookings] = useState([])
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    console.log(url)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBookings(data)
            })
    }, [])
    const handleDelete =(id)=>{
         fetch(`http://localhost:5000/bookings/${id}`,{
            method:'DELETE'
         })
         .then(res=>res.json())
         .then(data=>{
            if(data.deletedCount>0){
                const newBookings = bookings.filter(booking=>booking._id !==id)
                setBookings(newBookings)
            }
         })
    }
    const handleCofirm = (id) =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:confirm})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data.modifiedCount)
            if(data.modifiedCount>0 || data.modifiedCount===0 ){
                const remaing = bookings.filter(booking=>booking._id !== id)
                const updated = bookings.find (booking=>booking._id===id)
                updated.status='confirm'
                const newbokings = [updated,...remaing]
                setBookings(newbokings)
            }
        })
    }
    return (
        <div >
            <h1>this is my bookings:{bookings.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full  ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>imge</th>
                            <th>Name</th>
                            <th>description</th>
                            <th>date</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleCofirm = {handleCofirm}
                            ></BookingRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Mybookings;