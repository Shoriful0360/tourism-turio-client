import { useState } from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import toast from 'react-hot-toast';
import UpdateProfileModal from '../../modal/UpdateProfileModal';


const UserDateRow = ({userData,idx,refetch}) => {
    const {email,role,image,name,status,_id}=userData || {}
   
    const axiosSecure=useAxiosSecure()


const handleUpdateRole=async(value)=>{
    if(role ===value) return
 const {data}=await axiosSecure.patch(`/user/${_id}`,{role:value})
 if(data.modifiedCount){
    toast.success('Update role is successfully')
    refetch()
 }
}

    return (
        <>
             <tr>
        <th>
          <label>
       {idx +1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
     
            </div>
          </div>
        </td>
        <td>
        {email}
 
        </td>
        <td>{role}</td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
      {
        status?
         <p className={`${status ==='Requested'?'text-yellow-500':'text-green '}whitespace-no-wrap`}>{status}</p>
        :
        <p className='text-red-500'>Unavilable</p>
      }
      </td>
        <td>
        <select
       
        onChange={(e)=>handleUpdateRole(e.target.value)}
        className=" border-2 p-1  w-20 ">
  <option disabled  defaultValue={role} >{role}</option>
  <option value={'Tourist'}>Tourist</option>
  <option value={'Guider'}>Guider</option>
  <option value={'Admin'}>Admin</option>
</select>
        </td>

      
      </tr>
     
        </>
    );
};

export default UserDateRow;