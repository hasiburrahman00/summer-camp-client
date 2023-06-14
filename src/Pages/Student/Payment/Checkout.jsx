import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";



const Checkout = ({ price, cart }) => {

    console.log("checkout page", price)
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState(' ');
    const axiosSecure = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const { user } = useContext(AuthContext);
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intend', { price })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price])



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            setCardError(error.message);
        } else {
            setCardError(' ');
        }

        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'Unknown',
                        name: user?.displayName || 'Unknown'
                    }
                }
            }
        )

        if (confirmError) {
            console.log(confirmError)
        }

        setProcessing(false);
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart?.length,
                items: cart?.map(item => item._id),
                itemsName: cart?.map(item => item.courseName)

            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    if (res.data.paymentResult.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Payment Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                    console.log(res.data.deleteCartResult)
                })

        }


    }


    return (
        <>
            <form className="w-2/3 mx-auto " onSubmit={handleSubmit}>
                <CardElement

                    options={{
                        style: {
                            base: {

                                fontSize: '16px',
                                color: '#fff',
                                '::placeholder': {
                                    color: '#fff',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },

                    }}
                />
                <button className="btn btn-warning btn-sm w-1/3 mt-8" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-500">{cardError}</p>}
            {transactionId && <p className="text-green-500 mt-4">payment Successfully Done </p>}
        </>

    );
};

export default Checkout;