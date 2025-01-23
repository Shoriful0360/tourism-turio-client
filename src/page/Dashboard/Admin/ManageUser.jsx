import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import UserDateRow from "../../../component/dashboard/TableRows/UserDateRow";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../../../component/loading/LoadingSpinner";
import Pagination from "./Pagination";



const ManageUser = () => {
    const {user,loading}=useState()
    const[filter,setFilter]=useState("")
    const [search,setSearch]=useState('')
    const[itemsPerPages,setItemsPerPages]=useState(10)
    const[currentPages,setCurrentPages]=useState(0)
    const axiosSecure=useAxiosSecure()
    const {data:users,isLoading,refetch}=useQuery({
        queryKey:['user',filter],
        queryFn:async()=>{
            const {data}=await axiosSecure.get(`/user?filter=${filter}&search=${search}$page=${currentPages}$size=${itemsPerPages}`)
            return(data)
        }
    })

    // total user
    const {data:countUser,isLoading:pagiLoading}=useQuery({
      queryKey:['countUser'],
      queryFn:async()=>{
          const {data}=await axiosSecure.get(`/user/count`)
          return(data)
      }
  })
   if(isLoading || pagiLoading) return <LoadingSpinner/>

  //  handle search
  const handleSearch=(value)=>{
    setSearch(value)
    refetch()
  }
    return (
        <div className='container  mx-auto px-4 sm:px-8'>
        <Helmet>
          <title>Manage Users</title>
        </Helmet>
        <div>
        <div className="md:flex justify-around my-4">
        <select onChange={(e)=>setFilter(e.target.value)} className="select select-bordered w-full max-w-xs">
  <option disabled selected>Filter Role?</option>
  <option>Admin</option>
  <option>Guide</option>
  <option>Tourist</option>
</select>
{/* search */}
<label className="input input-bordered flex items-center gap-2">
  <input onChange={(e)=>handleSearch(e.target.value)} type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
        </div>
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
  {/* pagination */}

</div>
        </div>

<div className="my-10">
<Pagination setItemsPerPages={setItemsPerPages} itemsPerPages={itemsPerPages} setCurrentPages={setCurrentPages} currentPages={currentPages} countUser={countUser}/>
</div>
      </div>
    );
};

export default ManageUser;