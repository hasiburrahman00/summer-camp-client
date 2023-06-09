import React, { useContext, useState } from 'react';
import loginImg from '../../assets/Images/login_page.png'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css'
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPasword = event => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleLoginForm = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    // Authentication user by Login 




    return (
        <div className='md:flex gap-20 w-9/12 mx-auto items-center justify-between'>
            <div>
                <img src={loginImg} alt="" />
            </div>
            <div className='md:w-1/2 py-12 '>
                <h2 className='text-4xl font-bold mb-4' >Login </h2>
                <form onSubmit={handleLoginForm}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className='flex'>
                            <input name='password' type={showPassword ? 'text' : 'password'} placeholder="Pasword" className="input input-bordered w-full border-r-0 pass-input" required />
                            <button onClick={handleShowPasword} className='input input-bordered eye-icon'>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>
                    <button className='btn btn-warning w-full mt-8'>Login</button>
                    <small className='mt-4'>Already have no any account? please <Link to={`/register`} className='font-semibold'> Register </Link></small>
                </form>
            </div>
        </div>
    );
};

export default Login;