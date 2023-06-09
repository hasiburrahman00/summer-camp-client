import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import logo from '../../../assets/Images/logo.png'

const NavBar = () => {

    const navItems = <>
        <li className='font-bold' ><Link to="/">Home</Link></li>
        <li className='font-bold'><Link to="/">About us</Link></li>
        <li className='font-bold' tabIndex={0}>
            <details>
                <summary>Pages</summary>
                <ul className="p-2 z-50">
                    <li className='font-bold'><Link to="/">Instructors</Link></li>
                    <li className='font-bold'><Link to="/">Top courses</Link></li>
                    <li className='font-bold'><Link to="/">Popular Instructors</Link></li>
                </ul>
            </details>
        </li>
        <li className='font-bold'><Link to="/">Courses </Link></li>
        <li className='font-bold'><Link to="/login">Login </Link></li>
        <li className='font-bold'><Link to="/register">Register </Link></li>
    </>


    return (
        <div>
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
                    <button className="btn btn-warning text-3xl font-semibold text-white">TuTorSeba</button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="flex mr-4">
                        <AiOutlineShoppingCart className='h-8 w-8' />
                        <div className="badge badge-warning font-semibold">+99</div>
                    </button>


                    {/* user profile or login button  */}
                    <button className="btn btn-outline flex dropdown dropdown-bottom dropdown-end">
                        Hasibur
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <label tabIndex={0} className=" m-1"><IoMdArrowDropdown className='h-6 w-6' /></label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black z-50 ">
                                <li><Link>Dashboard</Link></li>
                                <li><Link>My Accounts</Link></li>
                                <li><Link>My Orders</Link></li>
                                <li><Link>My Courses</Link></li>
                                <button className="btn btn-warning btn-sm mt-4">Sign Out</button>
                            </ul>
                        </div>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default NavBar;