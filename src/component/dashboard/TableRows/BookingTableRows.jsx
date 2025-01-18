import { GiCancel } from "react-icons/gi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";

const BookingTableRows = ({idx,booking,refetch}) => {
    const {date,totalPrice,guiderName,_id,packageImg,packageName,status}=booking || {}
    const axiosSecure=useAxiosSecure()
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
   <td>
   {guiderName}

   </td>
   <td>{date}</td>
   <td>
    {totalPrice}
   </td>
   <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
 {
   status?
    <p className={`${status ==='Pending'?'text-yellow-400':'text-green '}whitespace-no-wrap`}>{status}</p>
   :
   <p className='text-red-500'>Unavilable</p>
 }
 </td>

 <td>pay</td>
 <td onClick={handleCancelBooking}>
 <GiCancel className="bg-red-700 p-1 text-xl w-7 h-7 rounded-sm text-white" />
 </td>
 </tr>

   </>
    );
};

export default BookingTableRows;