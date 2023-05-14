import React from 'react';
import img1 from '../../../assets/images/about_us/person.jpg'
import img from '../../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className="hero min-h-screen   bg-gray-300">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={img1} className="max-w-sm rounded-lg shadow-2xl" />
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl border  border-gray-700 border-spacing-20 absolute lg:top-32 lg:left-52" />
                </div>
                <div className='lg:w-1/2 mt-64 lg:mt-0'>
                    <h1 className='text-orange-500 text-2xl py-4'>About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-error my-4">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;