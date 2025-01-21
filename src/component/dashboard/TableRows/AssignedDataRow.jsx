import React from 'react';
import { FcAcceptDatabase } from 'react-icons/fc';
import { ImCancelCircle } from 'react-icons/im';

const AssignedDataRow = ({tourData,idx,}) => {

const{packageName,name,status,totalPrice,date}=tourData || {}
const handleAccept=()=>{

}

const handleReject=()=>{

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
                <button onClick={()=>handleAccept(_id,email)} > <FcAcceptDatabase  disab className="bg-green  p-1 text-xl w-7 h-7 rounded-sm text-white" /></button>
            
               </td>
               <td>
               <button onClick={()=>handleReject(_id)} > <ImCancelCircle disab className="bg-red-700  p-1 text-xl w-7 h-7 rounded-sm text-white" /></button>
            
               </td>
            
             
             </tr>
                   
              
        </>
    );
};

export default AssignedDataRow;