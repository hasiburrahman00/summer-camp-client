import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { json } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageCourse = () => {

    const { data: courses = [], refetch } = useQuery(['courses'], async () => {
        const res = await fetch('https://summer-camp-server-topaz.vercel.app/manageCourse')
        return res.json();
    })

    const handleDeny = async (id) => {
        console.log(id);
        const { value: text } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Message',
            inputPlaceholder: 'Type your message here...',
            inputAttributes: {
                'aria-label': 'Type your message here'
            },
            showCancelButton: true
        })
        let feedbacks = { feedback: '' };
        if (text) {
            feedbacks = { feedback: text }
        }

        fetch(`https://summer-camp-server-topaz.vercel.app/courses/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feedbacks)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Course review has been successfull ',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })



    }



    return (
        <div className='w-11/12 mx-auto bg-orange-100 p-12 rounded-lg'>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    #SI
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Instructor Info </th>
                            <th>Available Seat</th>
                            <th>Approval Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            courses.map((course, index) => <tr key={course._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img className='w-full h-full' src={course?.courseImage} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-xl">{course?.courseName}</div>
                                            <div className="badge badge-ghost badge-sm font-semibold">price : ${course?.price} </div>
                                        </div>
                                    </div>
                                </td>
                                <td className='flex items-center  space-x-3'>
                                    <div>
                                        <img className='h-8 w-8 rounded-xl' src={course?.photoURL} alt="" />
                                    </div>
                                    <div>
                                        <span className='font-bold'>{course?.instructorName}</span>
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{course?.instructorEmail}</span>
                                    </div>
                                </td>
                                <td>
                                    <span className='text-lg text-green-500 font-semibold'>{course?.availableSeats}</span>
                                </td>
                                <td>
                                    <h2>{course?.status}</h2>
                                </td>
                                <th className='flex flex-col space-y-2'>
                                    <button disabled={`${course.status === 'Deny' ? 'disabled' : ''}`} onClick={() => handleDeny(course?._id)} className="btn btn-error btn-xs">Deny</button>
                                    <button disabled={`${course.status === 'Deny' ? 'disabled' : ''}`} className="btn btn-success btn-xs">Approve</button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageCourse;