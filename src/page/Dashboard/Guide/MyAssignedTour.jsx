import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hook/useAuth";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import AssignedDataRow from "../../../component/dashboard/TableRows/AssignedDataRow";
import LoadingSpinner from "../../../component/loading/LoadingSpinner";


const MyAssignedTour = () => {
const {user}=useAuth()
const axiosSecure=useAxiosSecure()
  const{data:touristData,isLoading,refetch}=useQuery({
    queryKey:['assignedTour',user?.email],
    enabled:!! user?.email,
    queryFn:async()=>{
      const {data}=await  axiosSecure.get(`/my-assigned-tour/${user?.email}`)
      return data
    }
  })
   if(isLoading) return <LoadingSpinner/>
    return (
        <div className='container mx-auto px-4 sm:px-8'>
        <Helmet>
          <title>Dashboard || my-assigned-tour</title>
        </Helmet>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Package Name</th>
        <th>Tourist Name</th>
        <th>Tour Date</th>
        <th>Tour Price</th>
        <th>Update Role</th>
        <th>Accept</th>
        <th>Reject</th>
        
      </tr>
    </thead>
    <tbody>
        {
          touristData?.map((tourData,idx)=><AssignedDataRow key={tourData._id} idx={idx} tourData={tourData} refetch={refetch}/>)
        }
   
    
    </tbody>
  

  </table>
</div>
      </div>
    );
};

export default MyAssignedTour;