import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvider';
import axios from 'axios';

const MyClasses = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [myCourse, setMyCourse] = useState([])

    useEffect(() => {
        if (email) {
            axios.get(`https://summer-camp-server-topaz.vercel.app/paymentHistory/${email}`)
                .then(res => {
                    console.log(res.data)
                    setMyCourse(res.data);
                })
        }
    }, [email])

    

    return (
        <div>
            
            <h2 className='text-2xl font-bold uppercase'>My classes  </h2>
            
        </div>
    );
};

export default MyClasses;