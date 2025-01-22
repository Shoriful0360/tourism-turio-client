
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from '../component/form/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise=loadStripe(import.meta.env.VITE_STRIPE_KEY)
const Payment = () => {
    return (
        <div>
            <h1 className='text-xl text-center font-semibold'>Payment</h1>
           <div className='text-xl text-black'>
           <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
          </Elements></div> 
        </div>
    );
};

export default Payment;