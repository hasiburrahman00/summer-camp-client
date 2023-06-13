import { useEffect, useState } from "react";


const TopInstructors = () => {

    const [topInstructors, setTopInstructors] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/popularInstructors')
            .then(res => res.json())
            .then(data => setTopInstructors(data))
    }, [])

    return (
        <div className="py-20 ">
            <h2 className="text-center text-4xl font-bold  uppercase mb-12">Our Top Instructors </h2>
            <div className='md:grid grid-cols-3 w-10/12 mx-auto gap-12 space-y-5 md:space-y-0'>
                {
                    topInstructors?.map(instructor => <div key={instructor?._id} className="card w-96 bg-slate-800 text-white shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={instructor?.photoURL} alt="Shoes" className="rounded-full w-40 h-60" />
                        </figure>
                        <div className="card-body ">
                            <div>
                                <h2 className="card-title">{instructor?.instructorName}</h2>
                                <p>{instructor?.instructorEmail}</p>
                            </div>
                            <div className="card-actions mt-4">
                                <button className="btn btn-sm btn-warning">View Details</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TopInstructors;