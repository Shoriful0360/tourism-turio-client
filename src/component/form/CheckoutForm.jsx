import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../hook/useAxiosSecure';
import useAuth from '../../hook/useAuth';
import toast from 'react-hot-toast'

const CheckoutForm = ({open,close,booking,refetch}) => {
  const{totalPrice,_id,packageName}=booking || {}
  const {user}=useAuth()
  const [error,setError]=useState()
  const[clientSecret,setClientSecret]=useState('')
    const stripe=useStripe()
    const elements=useElements()
    const axiosSecure=useAxiosSecure()


useEffect(()=>{
if(totalPrice>0){
  axiosSecure.post('/create-payment-intent',{price:totalPrice})
  .then(res=>{
  setClientSecret(res.data.client_secret  )
  })
}
},[axiosSecure,totalPrice])


    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(!stripe || !elements){
            return
        }

        const card=elements.getElement(CardElement);
        if(card==null){
            return;
        }

        const{error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card
        })

        if(error){
            
            setError(error.message)
        }else{
   
            setError('')
        }

        // confirm payment

        const{paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientSecret,{
          payment_method:{
            card:card,
            billing_details:{
              name:user?.displayName,
              email:user?.email
            }
          }
        })
       if(confirmError){
      setError(confirmError.message)
       }else{
      
        
        if(paymentIntent.status ==='succeeded'){
          const paymentInfo={
            transactionId:paymentIntent.id,
            email:user?.email,
            packageName:packageName,
            bookingId:_id,
            price:totalPrice,
          }
          await axiosSecure.post(`/payment`,paymentInfo)
         await axiosSecure.patch(`/booking/payment/${_id}`,{transactionId:paymentIntent.id})
         .then(res=>{
          if(res.data.modifiedCount){
            toast.success('Payment is success')
            refetch()
            close()
          }
         })
        }
       }
    }
    return (
        <div className='md:w-8/12 mx-auto'>
            <form onSubmit={handleSubmit}>
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />

      <div className="divider  mt-10"></div>
      <div><h1 className='text-red-500 text-xl my-2'>{error}</h1></div>
     <div className='flex justify-between'>
     <button className='btn bg-green text-white'  type="submit" disabled={!stripe}>
      {`Pay $${totalPrice}`}
      </button>
      <button onClick={close} className='btn bg-green text-white' >No</button>
     </div>

            </form>
        </div>
    );
};

export default CheckoutForm;