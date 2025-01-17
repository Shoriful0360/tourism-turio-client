import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import UserDateRow from "../../../component/dashboard/TableRows/UserDateRow";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../../../component/loading/LoadingSpinner";


const ManageProfile = () => {
    const {user,loading}=useState()
    const axiosSecure=useAxiosSecure()
    const {data:users,isLoading,refetch}=useQuery({
        queryKey:['user'],
        queryFn:async()=>{
            const {data}=await axiosSecure.get(`/user`)
            return(data)
        }
    })
   if(isLoading) return <LoadingSpinner/>
    return (
        <div className='container mx-auto px-4 sm:px-8'>
        <Helmet>
          <title>Manage Users</title>
        </Helmet>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
        <th>Update Role</th>
        
      </tr>
    </thead>
    <tbody>
        {
            users?.map((userData,idx)=><UserDateRow key={idx} idx={idx} userData={userData} refetch={refetch} />)
        }
   
    
    </tbody>
  

  </table>
</div>
      </div>
    );
};

export default ManageProfile;