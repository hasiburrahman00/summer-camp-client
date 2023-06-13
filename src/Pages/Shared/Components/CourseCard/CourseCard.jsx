import React, { useContext } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { AuthContext } from '../../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import UseCarts from '../../../../Hooks/UseCarts';

const CourseCard = ({ course }) => {
    const { user } = useContext(AuthContext);
    const { courseName, courseImage, instructorName, seat, price, ratting, _id, instructorEmail } = course;
    const [, refetch] = UseCarts();

    const handleAddCart = () => {
        if (user && user.email) {
            const orderItem = { email: user.email, courseId: _id, price, seat, courseName, ratting, instructorName, courseImage, instructorEmail }
            fetch(`http://localhost:5000/carts`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Course add to cart Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })

        }
    }



    return (
        <div>
            <div className="card w-96 bg-base-500 shadow-xl border-2 mb-4 md:mb-0 z-10">
                <figure><img className='h-60 w-full' src={courseImage} alt="Shoes" /></figure>
                <div className="card-body p-4">
                    <h2 className="card-title">
                        {courseName}
                    </h2>
                    <div className='card-actions justify-between'>
                        <p className='font-semibold flex items-center justify-start text-[16px] '>{instructorName}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h5 className='text-lg font-bold text-green-500'>${price}</h5>
                        <Rating style={{ maxWidth: 100 }} value={ratting} readOnly />
                    </div>
                    <div className="card-actions justify-end items-baseline mt-4">
                        <div className='space-x-2'>
                            <button className='btn  btn-sm cursor-text btn-success text-semibold'>Seat {seat} </button>
                            <button onClick={handleAddCart} className='btn btn-sm '><BsFillCartFill />Cart </button>
                            <button className='btn btn-warning btn-sm '>Buy now </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;