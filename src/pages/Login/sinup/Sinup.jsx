import React from 'react';
import Navbar from '../../home/shered/navbar/Navbar';
import Footer from '../../home/shered/footer/Footer';
import img from '../../../assets/images/login/login.svg'
import { FaFacebookF ,FaGithubSquare,FaGoogle} from "react-icons/fa";

const Sinup = () => {
    const handlesinUp = (event) =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
    }
    return (
        
        <div>
            <div>
                <Navbar />
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <h1 className='text-4xl text-center font-bold'>login</h1>
                            <form onSubmit={handlesinUp}>
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" name='email' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-error bg-[#FF3811] text-white">Login</button>
                                    </div>
                                </div>
                            </form>
                            <div className='text-center'>
                                <h1>or sin in with</h1>
                                <div className='flex items-center ml-36 p-4'>
                                    <button className=''><FaFacebookF /></button>
                                    <button className='ml-4'><FaGithubSquare /></button>
                                    <button className='ml-4'><FaGoogle /></button>
                                </div>
                            </div>
                        </div>
                        <div className='mr-14'>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Sinup;