import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import CheckoutForm from '../form/CheckoutForm';
import {loadStripe} from '@stripe/stripe-js';


import { Elements } from '@stripe/react-stripe-js';

const stripePromise=loadStripe(import.meta.env.VITE_STRIPE_KEY)

const PaymentModal = ({open,close,isOpen,booking,refetch}) => {
   
    return (
        <>
      
  
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-screen items-center justify-center p-4">
              <DialogPanel
                transition
                className="w-full max-w-xl rounded-xl shadow-2xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                <DialogTitle as="h3" className=" underline text-xl text-center font-medium ">
                  Payment 
                </DialogTitle>
               <div className='my-10'>
               <Elements stripe={stripePromise}>
            <CheckoutForm booking={booking} open={open} close={close} refetch={refetch}></CheckoutForm>
          </Elements>
               </div>
    
                <div className="mt-4 flex justify-center">
                 
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </>
    );
};

export default PaymentModal;