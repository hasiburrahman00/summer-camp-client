import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Checkout from './Checkout';
import { Elements } from '@stripe/react-stripe-js';
import UseCarts from '../../../Hooks/UseCarts';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
// console.log(import.meta.env.VITE_Payment_Gateway_Pk);

const Payment = () => {

    const [cart] = UseCarts();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));

    return (
        <div className='bg-slate-600 rounded-lg w-10/12 mx-auto p-12 text-center text-white'>
            <h2 className='text-xl font-bold mb-8 uppercase text-emerald-500'>Payment with Stripe  </h2>
            <Elements stripe ={stripePromise}>
                <Checkout price={price} />
            </Elements>
        </div>
    );
};

export default Payment;