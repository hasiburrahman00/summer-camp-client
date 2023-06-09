import React, { useState } from 'react';
import loginImg from '../../assets/Images/login_page.png'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Register.css'
import { BsGoogle } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPasword = event => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }


    return (
        <div className='md:flex gap-20 w-9/12 mx-auto items-center justify-between py-20 md:py-12'>
            <div>
                <img src={loginImg} alt="" />
            </div>
            <div className='md:w-1/2 '>
                <h2 className='text-4xl font-bold mb-4' >Login </h2>
                <form>
                    <div className='md:grid grid-cols-2 gap-x-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" placeholder="Phone" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" placeholder="Address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <input type="text" placeholder="Gender" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='flex'>
                                <input type={showPassword ? 'text' : 'password'} placeholder="Pasword" className="input input-bordered w-full border-r-0 pass-input" />
                                <button onClick={handleShowPasword} className='input input-bordered eye-icon'>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <div className='flex'>
                                <input type={showPassword ? 'text' : 'password'} placeholder="Confirm Password" className="input input-bordered w-full border-r-0 pass-input" />
                                <button onClick={handleShowPasword} className='input input-bordered eye-icon'>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-warning w-full mt-8'>Register</button>
                    <div className="divider divider-vertical">OR</div>
                    <div>
                        <button className='btn  w-full '> <FcGoogle className='h-6 w-6' />Sign up using Google</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default Register;