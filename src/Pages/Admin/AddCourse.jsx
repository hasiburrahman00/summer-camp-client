import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddCourse = () => {
    const { user } = useContext(AuthContext);
    console.log(user)

    const handleAddCourse = event => {
        event.preventDefault();
        const form = event.target;
        console.log(form);
        const instructorName = form.instructorName.value;
        const instructorEmail = form.instructorEmail.value;
        const courseName = form.courseName.value;
        const price = form.price.value;
        const availableSeats = form.seat.value;
        const courseImage = form.photoURL.value;
        const courseInfo = { instructorName, instructorEmail, courseName, price, availableSeats, courseImage, status: 'pending', photoURL: user.photoURL, enrolled: 0 }
        console.log(courseInfo)

        fetch('http://localhost:5000/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(courseInfo),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Course Added Successfully. waiting to Admins under review and publish finally',
                        showConfirmButton: true,
                    })
                    form.reset();
                }
            })
            .catch((error) => {
                // Handle any errors that occurred during the request
                console.error('Error posting data:', error);
            });


    }


    return (
        <div className='w-10/12 mx-auto p-20 rounded-lg bg-slate-300'>
            <h2 className='text-3xl font-bold uppercase text-center mb-12'>Add Course </h2>
            <form onSubmit={handleAddCourse}>
                <div className='grid grid-cols-2 gap-2 gap-x-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='instructorName' defaultValue={user?.displayName} type="text" placeholder="Type here" className="input input-bordered input-success w-full " readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='instructorEmail' defaultValue={user?.email} type="text" placeholder="Type here" className="input input-bordered input-success w-full " readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Course Name</span>
                        </label>
                        <input name='courseName' type="text" placeholder="Course Name" className="input input-bordered input-success w-full " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input name='price' type="text" placeholder="price " className="input input-bordered input-success w-full " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Seat</span>
                        </label>
                        <input name='seat' type="text" placeholder="Available Seat" className="input input-bordered input-success w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Course Image</span>
                        </label>
                        <input name='photoURL' type="text" placeholder="Course Image URL" className="input input-bordered input-success w-full" required />
                    </div>
                </div>
                <button className='btn btn-success w-full mt-8 font-bold text-black'>Add Course </button>
            </form>
        </div>

    );
};

export default AddCourse;








