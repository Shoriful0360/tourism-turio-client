import React from 'react';
import { FcAcceptDatabase } from 'react-icons/fc';
import { ImCancelCircle } from 'react-icons/im';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import toast from 'react-hot-toast';

const AssignedDataRow = ({tourData,idx,refetch}) => {

const{packageName,name,status,totalPrice,date,_id}=tourData || {}
const axiosSecure=useAxiosSecure()
const handleAccept=async()=>{
  const {data}=await axiosSecure.patch(`/guide/accept/${_id}`)
  if(data.modifiedCount){
    toast.success('Success! accept Request')
    refetch()
  }
}

const handleReject=()=>{
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

          const {data}=await axiosSecure.patch(`/guide/reject/${_id}`)
          if(data.modifiedCount){
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Success,Reject Request",
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
               {/* name */}
               <td>
                {packageName}
               </td>
               <td>
               {name}
            
               </td>
               <td>{date}</td>
             <td>${totalPrice}</td>
             <td 
             className={`${status ==='Pending' && 'text-yellow-400' 
             || status ==='Accept' && 'text-green' 
             || status ==='In Review' && 'text-orange-500'
             || status ==='Reject' && 'text-red-600'
             }`}>{status}</td>
               <td>
                <button disabled= {status==='Pending' || status==='Accept'} onClick={handleAccept} > <FcAcceptDatabase className={`bg-green ${status==='Pending' && 'cursor-not-allowed' || status==='Accept' && 'cursor-not-allowed'}  p-1 text-xl w-7 h-7 rounded-sm text-white`} /></button>
            
               </td>
               <td>
               <button onClick={handleReject} > <ImCancelCircle disab className="bg-red-700  p-1 text-xl w-7 h-7 rounded-sm text-white" /></button>
            
               </td>
            
             
             </tr>
                   
              
        </>
    );
};

export default AssignedDataRow;