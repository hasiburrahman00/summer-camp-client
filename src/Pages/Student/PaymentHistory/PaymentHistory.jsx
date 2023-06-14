import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvider';
import { json } from 'react-router-dom';
import axios from 'axios';

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [payments, setPayments] = useState([])

    useEffect(() => {
        if (email) {
            axios.get(`https://summer-camp-server-topaz.vercel.app/paymentHistory/${email}`)
                .then(res => {
                    console.log(res.data)
                    setPayments(res.data);
                })
        }
    }, [email])


    return (
        <div className='w-8/12 mx-auto bg-slate-400 text-black p-20 rounded-lg'>
            <h2 className='text-2xl font-bold uppercase text-center my-8 text-white'>Payment history {payments.length} </h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#SI</th>
                            <th>Date</th>
                            <th>Transaction Id</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            payments.map((payment,index) => <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <th>{payment.date}</th>
                                <td>{payment.transactionId}</td>
                                <td><button className='btn btn-warning btn-sm'>Details</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PaymentHistory;