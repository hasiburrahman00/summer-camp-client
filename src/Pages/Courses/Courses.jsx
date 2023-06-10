import React, { useEffect, useState } from 'react';
import CourseCard from '../Shared/Components/CourseCard/CourseCard';

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCourses(data);
            })
    }, [])


    return (
        <div className='w-10/12 mx-auto'>
            <div className='md:grid grid-cols-3 gap-4'>
                {
                    // TODO: key set up id
                    courses.map((course, index) => <CourseCard
                        key={index}
                        course={course}
                    />)
                }
            </div>
        </div>
    );
};

export default Courses;