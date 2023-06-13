import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";



const Checkout = ({price}) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState(' ');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            setCardError(error.message);
        } else {
            setCardError(' ');
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
                <button className="btn btn-warning btn-sm w-1/3 mt-8" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-500">{cardError}</p>}
            </>

    );
};

export default Checkout;