import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hook/useAuth';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import CandidateDataRows from '../../../component/dashboard/TableRows/CandidateDataRows';
import LoadingSpinner from '../../../component/loading/LoadingSpinner';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const ManageCandidates = () => {
    const {user,loading}=useAuth()
    const axiosSecure=useAxiosSecure()
    const {data:candidates,isLoading,refetch}=useQuery({
        queryKey:['candidates',user?.email],
        enabled:!loading,
        queryFn:async()=>{
            const {data}=await axiosSecure.get(`/application/${user?.email}`)
            return data
        }
    })

    if(isLoading) return <LoadingSpinner/>
  
    // accept request
    const handleAccept=async(id,email)=>{
        try{
            const {data}=await axiosSecure.patch(`/application/${email}`)
        
            if(data.modifiedCount)
                toast.success('Accept Complete')
            await axiosSecure.delete(`/application/${id}`)
            refetch()
            
        }catch (err){
           toast.error(err)
        }
      
    }

    // reject application
    const handleReject=async(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be reject application this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reject this!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const {data}= await axiosSecure.delete(`/application/${id}`)
                if(data.deletedCount){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been successed",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    refetch()
                }
                
            }
          });
     
    }
    return (
        <div className='container mx-auto px-4 sm:px-8'>
               <Helmet>
                 <title>Dashboard || Manage Candidates</title>
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
            <th>CV</th>
               <th>Accept</th>
               <th>Reject</th>
               
             </tr>
           </thead>
           <tbody>
               {
                   candidates?.map((candidate,idx)=><CandidateDataRows key={idx} idx={idx} candidate={candidate} handleAccept={handleAccept} handleReject={handleReject} axiosSecure={axiosSecure} refetch={refetch} />)
               }
          
           
           </tbody>
         
       
         </table>
       </div>
             </div>
    );
};

export default ManageCandidates;