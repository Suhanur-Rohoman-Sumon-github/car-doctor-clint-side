import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleServise = ({ servis }) => {
    const {_id, title, img, price } = servis
    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" className='w-full h-64'  /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-circle bg-[#FF3811]">
                        <FaArrowRight />
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleServise;