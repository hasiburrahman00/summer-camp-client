import React, { useContext } from 'react';
import { BsFillCartFill } from 'react-icons/bs';;

const CourseCard = ({ course }) => {
    const { courseName, courseImage, instructorName, seat, price } = course;

    return (
        <div>
            <div className="card w-96 bg-base-500 shadow-xl border-2 mb-4 md:mb-0">
                <figure><img className='h-60' src={courseImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {courseName}
                    </h2>
                    <div className='card-actions justify-between'>
                        <p className='font-semibold flex items-center justify-start text-[16px] '>{instructorName}</p>
                    </div>
                    <div className="card-actions justify-between items-center mt-4">
                        <h5 className='text-lg font-bold text-green-500'>${price}</h5>
                        <div>
                            <button className='btn btn-success btn-sm cursor-text'>Seat {seat} </button>
                            <button className='btn btn-warning btn-sm ms-2'><BsFillCartFill /> Buy now </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;