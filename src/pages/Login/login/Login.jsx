import React, { useContext } from 'react';
import img from '../../../assets/images/login/login.svg'
import { FaFacebookF ,FaGithubSquare,FaGoogle} from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Login = () => {
    const {handleLogins,handleGoogleSinin} = useContext(AuthContext)
    const navigat = useNavigate()
    const handleLogin = (event) =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        handleLogins(email,password)
        .then(result=>{
            // console.log(result.user)
            
            const user = result.user
            const loggedUser ={
                email:user.email
            }
            console.log(loggedUser)
            fetch('http://localhost:5000/jwt',{
                method:'POST',
                headers:{
                    'content-type':'aplication/json'
                },
                body:JSON.stringify(loggedUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('jwt token',data)
                localStorage.setItem('car-access-token',data.token)
                navigat('/')
            })
           
        })
        .catch(error=>console.error(error))
    }
    const handleGogleLogin = () =>{
        handleGoogleSinin()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>console.error(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-4xl text-center font-bold'>login</h1>
                        <form onSubmit={handleLogin}>
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
                        <h1>do not have an account please <Link to={'/sinup'}><button className="btn btn-link text-[#FF3811]">sinup</button></Link></h1>
                       <h1>or sin in with</h1>
                        <div className='flex items-center ml-36 p-4'>
                        <button className=''><FaFacebookF /></button>
                        <button className='ml-4'><FaGithubSquare /></button>
                        <button onClick={handleGogleLogin} className='ml-4'><FaGoogle /></button>
                        </div>
                       </div>
                    </div>
                    <div className='mr-14'>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;