import React, { useEffect, useState } from 'react';

const Instructors = () => {

    const [instructors, setInstructors] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    console.log(instructors)


    return (
        <div className='md:grid grid-cols-3 w-10/12 mx-auto'>
            {
                instructors?.map(instructor => <div key={instructor?._id} className="card w-96 bg-slate-800 text-white shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={instructor?.photoURL} alt="Shoes" className="rounded-full w-1/2" />
                    </figure>
                    <div className="card-body ">
                        <div>
                            <h2 className="card-title">{instructor?.name}</h2>
                            <p>{instructor?.email}</p>
                        </div>
                        <div className="card-actions mt-4">
                            <button className="btn btn-sm btn-warning">View Details</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Instructors;


