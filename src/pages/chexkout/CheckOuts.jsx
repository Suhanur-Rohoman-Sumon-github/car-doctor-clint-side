import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const CheckOuts = () => {
    const data = useLoaderData()
    console.log(data)
    const {user} = useContext(AuthContext)
    
    const { _id, title, price,img } = data
    const handleBook =(event)=>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const date = form.date.value
        const title = form.title.value
        const price = form.price.value
        const newBooking = {
            name,
            date,
            title,
            price,
            imges
        }
        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newBooking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div>
            <h1>servise :{title}</h1>
            <div>
                <form onSubmit={handleBook}>
                    <div className="card-body bg-slate-300 mt-16 p-16">
                        <div className='md:flex w-full'>
                            <div className="form-control w-1/2 ">
                                <label className="label">
                                    <span className="label-text ">name</span>
                                </label>
                                <input type="email" name='email' value={user?.email} placeholder="name" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control  w-1/2">
                                <label className="label">
                                    <span className="label-text">date</span>
                                </label>
                                <input type="date" name='date' placeholder="email " className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className='md:flex w-full'>
                            <div className="form-control w-1/2 ">
                                <label className="label">
                                    <span className="label-text w-full">title</span>
                                </label>
                                <input type="text" name='title' placeholder="title" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control  w-1/2">
                                <label className="label">
                                    <span className="label-text">price</span>
                                </label>
                                <input type="text" name='price' value={price } placeholder="price " className="input input-bordered w-full" />
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className=" btn btn-block bg-[#FF3811]">book now</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default CheckOuts;