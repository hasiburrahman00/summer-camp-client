import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineMenu, AiTwotoneHome } from 'react-icons/ai';
import { BsPersonCircle, BsWalletFill } from 'react-icons/bs';
import { MdNotificationsActive } from 'react-icons/md';
import { FaShoppingCart, FaWallet } from 'react-icons/fa';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { HiUsers } from 'react-icons/hi';
import { GrAddCircle } from 'react-icons/gr';
import { MdManageAccounts } from 'react-icons/md';

const Dashboard = () => {

    // Loged in user information: 
    const { user } = useContext(AuthContext)
    const isAdmin = true; //Todo : load data from the server 





    // some common element for all types of user like: student, Instructor, Admin:
    const commonElement = <>
        <li className='font-semibold text-lg '><Link to={`/`}><AiOutlineMenu /> Home</Link></li>
        <li className='font-semibold text-lg '><Link to={`/`}><BsFillCameraVideoFill /> Courses</Link></li>
        <li className='font-semibold text-lg '><Link to={`/`}><BsPersonCircle /> Instructors</Link></li>
        <li className='font-semibold text-lg '><Link to={`/`}><MdNotificationsActive /> Announcement</Link></li>
    </>

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-start mt-16">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        <div className='bg-slate-300 text-black px-4 rounded-lg py-8 mb-4'>
                            <img className='w-16 h-16 rounded-full' src={user?.photoURL} alt="" />
                            <h4 className='text-xl font-bold mt-2'>{user?.displayName}</h4>
                            <h6 className='font-semibold'>{user?.email}</h6>
                        </div>
                        {/* Sidebar content here */}
                        {
                            isAdmin ? <>
                                <li className='font-semibold text-lg'><Link to="/dashboard/adminHome"> <AiTwotoneHome /> Admin Home</Link></li>
                                <li className='font-semibold text-lg'><Link to="/dashboard/manageUsers"> <MdManageAccounts />Manage Users</Link></li>
                                <li className='font-semibold text-lg'><Link to="/dashboard/addCourse"><GrAddCircle /> Add Course</Link></li>
                                <li className='font-semibold text-lg'><Link to="/dashboard/manageCourses"><BsFillCameraVideoFill /> Manage Courses</Link></li>
                            </>
                                : <>
                                    <li className='font-semibold text-lg'><Link to="/dashboard/cartClasses"> <FaShoppingCart /> Cart Classes</Link></li>
                                    <li className='font-semibold text-lg'><Link to="/dashboard/myClasses"> <BsFillCameraVideoFill /> My Classes</Link></li>
                                    <li className='font-semibold text-lg'><Link to="/dashboard/paymentHistory"><BsWalletFill /> Payment History</Link></li>
                                </>
                        }

                        <hr className='my-4 border-black border-1' />
                        {commonElement}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;