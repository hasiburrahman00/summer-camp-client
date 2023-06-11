import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const AddCourse = () => {
    const { user } = useContext(AuthContext);
    console.log(user)


    return (
        <div className='w-10/12 mx-auto p-20 rounded-lg bg-slate-300'>
            <h2 className='text-3xl font-bold uppercase text-center mb-12'>Add Course </h2>
            <form >
                <div className='grid grid-cols-2 gap-4'>
                    <input defaultValue={user?.displayName} type="text" placeholder="Type here" className="input input-bordered input-success w-full " readOnly />
                    <input defaultValue={user?.email} type="text" placeholder="Type here" className="input input-bordered input-success w-full " readOnly />
                    <input type="text" placeholder="Course Name" className="input input-bordered input-success w-full " />
                    <input type="text" placeholder="price " className="input input-bordered input-success w-full " />
                    <input type="text" placeholder="Available Seat" className="input input-bordered input-success w-full" />
                    <input type="text" placeholder="Course Image URL" className="input input-bordered input-success w-full" />
                </div>
                <input className='btn btn-success w-full mt-8 font-bold text-black' type="button" value="Add Course" />
            </form>
        </div>
    );
};

export default AddCourse;