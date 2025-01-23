import { GiCancel } from "react-icons/gi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { Link } from "react-router-dom";
import { useState } from "react";
import PaymentModal from "../../modal/PaymentModal";

const BookingTableRows = ({idx,booking,refetch}) => {
  const {totalPrice,guiderImg,date,guiderName,status,transactionId,packageImg,packageName,_id}=booking || {}
 let [isOpen, setIsOpen] = useState(false)

    function open() {
      setIsOpen(true)
    }
  
    function close() {
      setIsOpen(false)
    }
  
    const axiosSecure=useAxiosSecure()

    //delet booking
    const handleCancelBooking=async()=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {

          const {data}=await axiosSecure.delete(`/tourist/booking/${_id}`)
          if(data.deletedCount){
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            refetch()
          }
  
        
        }
      });
    }
    return (
        <>
        <tr>
   <th>
     <label>
  {idx +1}
     </label>
   </th>
   <td>
   <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask  rounded-md h-12 w-12">
                <img
                  src={packageImg}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{packageName}</div>
         
            </div>
          </div>
   </td>
   <td>
   <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask  rounded-md h-12 w-12">
                <img
                  src={guiderImg}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{guiderName}</div>
         
            </div>
          </div>
   </td>
   <td>{date}</td>
   <td>
    ${totalPrice}
   </td>
   <td>{transactionId?transactionId :'empty'}</td>
   <td className='px-5 py-5 border-b   border-gray-200 bg-white text-sm'>
   
 {
   status?
    <p  className={`${status ==='Pending' && 'text-yellow-400' 
      || status ==='Accept' && 'text-green' 
      || status ==='In Review' && 'text-orange-500'
      || status ==='Reject' && 'text-red-600'
      }`}>{status}</p>
   :
   <p className='text-red-500'>Unavilable</p>
 }
 </td>

 <td className="cursor-pointer ">
 <button disabled={status !=='Pending'} onClick={open} className="bg-orange-300  p-1 text-xl rounded-sm text-white">Pay</button>
 </td>
 <td  >
<button onClick={handleCancelBooking}> <GiCancel disab className="bg-red-700  p-1 text-xl w-9 h-9 rounded-sm text-white" /></button>
 </td>
 </tr>
<div>
<PaymentModal open={open} close={close} isOpen={isOpen} booking={booking} refetch={refetch} />

</div>
   </>
    );
};

export default BookingTableRows;