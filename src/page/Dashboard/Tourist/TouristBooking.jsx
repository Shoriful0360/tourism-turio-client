import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hook/useAuth";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import LoadingSpinner from "../../../component/loading/LoadingSpinner";
import { Helmet } from "react-helmet-async";
import BookingTableRows from "../../../component/dashboard/TableRows/BookingTableRows";


const TouristBooking = () => {
    const {user,loading}=useAuth()
    const axiosSecure=useAxiosSecure()

    const {data:bookingData,isLoading,refetch}=useQuery({
        queryKey:['touristBooking',user?.email],
        enabled:!loading,
        queryFn:async()=>{
const {data}=await axiosSecure.get(`/tourist/${user?.email}`)
return data
        }
    })

if(isLoading) return <LoadingSpinner/>
    return (
        <div className='container mx-auto px-4 sm:px-8'>
        <Helmet>
          <title>Dashboard || My Booking</title>
        </Helmet>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Package Name</th>
        <th>Tour Guide </th>
        <th>Date</th>
        <th>Price</th>
        <td>TransactionId</td>
        <th>Status</th>
        <th>Pay</th>
        <th>Cancel</th>
   
        
      </tr>
    </thead>
    <tbody>
        {
            bookingData?.map((booking,idx)=><BookingTableRows key={idx} idx={idx} booking={booking} refetch={refetch} />)
        }
   
    
    </tbody>
  

  </table>
</div>
      </div>
    );
};

export default TouristBooking;