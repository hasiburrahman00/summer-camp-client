import React, { useContext } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const CourseCard = ({ course }) => {
    const { courseName, courseImage, instructorName, seat, price, ratting } = course;

    return (
        <div>
            <div className="card w-96 bg-base-500 shadow-xl border-2 mb-4 md:mb-0 z-10">
                <figure><img className='h-60' src={courseImage} alt="Shoes" /></figure>
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
                            <button className='btn btn-sm '><BsFillCartFill />Cart </button>
                            <button className='btn btn-warning btn-sm '>Buy now </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;