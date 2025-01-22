import React from 'react';
import { FcAcceptDatabase } from 'react-icons/fc';
import { ImCancelCircle } from 'react-icons/im';
import Swal from 'sweetalert2';

const AssignedDataRow = ({tourData,idx,}) => {

const{packageName,name,status,totalPrice,date}=tourData || {}
const handleAccept=()=>{

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

          // const {data}=await axiosSecure.delete(`/tourist/booking/${_id}`)
          // if(data.deletedCount){
          //   Swal.fire({
          //     position: "top-center",
          //     icon: "success",
          //     title: "Your work has been saved",
          //     showConfirmButton: false,
          //     timer: 1500
          //   });
          //   refetch()
          // }
  
        
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
             <td>{status}</td>
               <td>
                <button onClick={handleAccept} > <FcAcceptDatabase  disab className="bg-green  p-1 text-xl w-7 h-7 rounded-sm text-white" /></button>
            
               </td>
               <td>
               <button onClick={handleReject} > <ImCancelCircle disab className="bg-red-700  p-1 text-xl w-7 h-7 rounded-sm text-white" /></button>
            
               </td>
            
             
             </tr>
                   
              
        </>
    );
};

export default AssignedDataRow;