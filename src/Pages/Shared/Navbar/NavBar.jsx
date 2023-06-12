import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import logo from '../../../assets/Images/logo.png'
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseCarts from '../../../Hooks/UseCarts';

const NavBar = () => {

    const [cart] = UseCarts();
    const { loading, user, logout } = useContext(AuthContext);
    const userName = user?.displayName?.split(" ")[0];


    const handleLogout = () => {
        logout()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Logout Account Successfully ',
                    showConfirmButton: false,
                    timer: 1500
                })

            })
            .catch(error => {
                console.log(error.message)
            })
    }


    const navItems = <>
        <li className='font-bold' ><Link to="/">Home</Link></li>
        <li className='font-bold'><Link to="/">About us</Link></li>
        <li className='font-bold'><Link to={`/instructors`}>Instructors</Link></li>
        <li className='font-bold'><Link to="/courses">Courses </Link></li>
    </>


    return (
        <div className=''>
            <div className="navbar bg-base-100 py-8 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50">
                            {navItems}
                        </ul>
                    </div>
                    {/* <Link to="/"><img src={logo} alt="" /></Link> */}
                    <Link to={`/`}><button className="btn btn-warning md:text-3xl font-semibold text-white">TuTorSeba</button></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={`/dashboard/cartClasses`}>
                        <button className="flex mr-4">
                            <AiOutlineShoppingCart className='h-8 w-8' />
                            <div className="badge badge-warning font-semibold">+{cart?.length}</div>
                        </button>
                    </Link>



                    {/* user profile or login button  */}
                    {
                        user ?
                            <>
                                <button className="btn btn-outline flex dropdown dropdown-bottom dropdown-end">
                                    <img className='h-8 w-8 rounded-full' src={user?.photoURL} alt="" />
                                    <span className='hidden md:block'>{userName}</span>
                                    <div className="dropdown dropdown-bottom dropdown-end">
                                        <label tabIndex={0} className=" m-1"><IoMdArrowDropdown className='h-6 w-6' /></label>
                                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black z-50 ">
                                            <li><Link to={`/dashboard`}>Dashboard</Link></li>
                                            <li><Link>My Accounts</Link></li>
                                            <li><Link>My Orders</Link></li>
                                            <li><Link>My Courses</Link></li>
                                            <button onClick={handleLogout} className="btn btn-warning btn-sm mt-4">Sign Out</button>
                                        </ul>
                                    </div>
                                </button>
                            </> :
                            <>
                                <Link to={`/login`}> <button className='btn btn-warning'><FaUserAlt className='h-6 w-6' />Sign In</button></Link>
                            </>
                    }
                </div>
            </div>

        </div>
    );
};

export default NavBar;