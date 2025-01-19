import { FcAcceptDatabase } from "react-icons/fc";
import { ImCancelCircle } from "react-icons/im";

const CandidateDataRows = ({candidate,idx,refetch,handleAccept,handleReject}) => {
    const {cv,email,name,_id}=candidate || {}

    
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
    {name}
   </td>
   <td>
   {email}

   </td>
   <td>Tourist</td>
 <td>{cv}</td>
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

export default CandidateDataRows;