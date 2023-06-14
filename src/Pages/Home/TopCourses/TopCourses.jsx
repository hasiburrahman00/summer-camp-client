import React, { useEffect, useState } from 'react';
import CourseCard from '../../Shared/Components/CourseCard/CourseCard';

const TopCourses = () => {
    const [topCourses, setTopCourses] = useState([])

    useEffect(() => {
        fetch('https://summer-camp-server-topaz.vercel.app/popularCourses')
            .then(res => res.json())
            .then(data => setTopCourses(data))
    }, [])


    return (
        <div className='bg-slate-100 py-20'>
            <h2 className='text-4xl font-bold text-center uppercase'>Our Polular courses</h2>
            <div className='md:grid grid-cols-3 gap-12 w-10/12 mx-auto mt-12'>
                {
                    topCourses.map(course => <CourseCard
                        key={course?._id}
                        course={course}
                    />)
                }
            </div>
        </div>
    );
};

export default TopCourses;