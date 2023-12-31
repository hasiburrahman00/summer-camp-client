import React, { useContext, useState } from 'react';
import loginImg from '../../assets/Images/login_page.png'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Register.css'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Register = () => {

    const { SignUpAccount, updateInfo } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPasword = event => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    // handle form submit with form submit hook:
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    // Handle login using  user email and password: 
    const onSubmit = handleSubmit(user => {
        console.log(user)
        SignUpAccount(user.email, user.password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser)
                updateInfo(newUser, user.name, user.photoURL)
                    .then(() => {
                        // send user information to database throw backend
                        fetch('https://summer-camp-server-topaz.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(user),
                        })
                            .then((response) => response.json())
                            .then((data) => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Account create Successfully done ',
                                        showConfirmButton: false,
                                        timer: 1500

                                    })
                                }
                            })
                            .catch((error) => {
                                console.error(error);
                            });
                        navigate('/');
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            })
            .catch(error => {
                console.log(error.message);
            })
    });


    return (
        <div className='md:flex gap-20 w-9/12 mx-auto items-center justify-between py-20 md:py-12'>
            <div>
                <img src={loginImg} alt="" />
            </div>
            <div className='md:w-1/2 '>
                <h2 className='text-4xl font-bold mb-4' >Register User </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='md:grid grid-cols-2 gap-x-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className='text-rose-500'>Name is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered" />
                            {errors.email && <span className='text-rose-500'>Email is required</span>}

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input {...register("phone")} type="text" placeholder="Phone" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input {...register("address")} type="text" placeholder="Address" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input {...register("photoURL")} type="text" placeholder="Photo URL" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <input {...register("gender")} type="text" placeholder="Gender" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='flex'>
                                <input {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?]).{6,}$/,

                                })} type={showPassword ? 'text' : 'password'} placeholder="Pasword" className="input input-bordered w-full border-r-0 pass-input" />
                                <button onClick={handleShowPasword} className='input input-bordered eye-icon'>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {errors.password === 'required' && <span className='text-rose-500 w-full '>Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-rose-500 w-full '>Password must be 6 character</span>}
                            {errors.password?.type === 'pattern' && <span className='text-rose-500 w-full '>Password must have one Capical & small letter and one number and spcial character</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <div className='flex'>
                                <input {...register("confirmPassword")} type={showPassword ? 'text' : 'password'} placeholder="Confirm Password" className="input input-bordered w-full border-r-0 pass-input" />
                                <button onClick={handleShowPasword} className='input input-bordered eye-icon'>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                    </div>
                    <button className='btn btn-warning w-full mt-8'>Register</button>
                    <small className='mt-4'>Already have an  account? please <Link to={`/login`} className='font-semibold'> Login </Link></small>
                    <div className="divider divider-vertical">OR</div>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};


export default Register;