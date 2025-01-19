import { useState } from "react";
import LoadingSpinner from "../../../component/loading/LoadingSpinner";
import UpdateProfileModal from "../../../component/modal/UpdateProfileModal";
import useAuth from "../../../hook/useAuth";
import { Helmet } from 'react-helmet-async'
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
const Profile = () => {
    const {user,loading,resetPassword}=useAuth()
    const [isOpen, setIsOpen] = useState(false)
    if(loading) return <LoadingSpinner/>

    const handleResetPassword=async()=>{
  resetPassword(user?.email)
 
      Swal.fire({
        title: "Request send your email ,Please check your email",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });
    }
    return (
        <div className='flex justify-center items-center h-screen'>
        <Helmet>
          <title>Dashboard | Profile</title>
        </Helmet>
        <div className='bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5'>
        <h1 className="text-center text-xl">Wellcome</h1>
          <img
            alt='cover photo'
            src='https://i.ibb.co.com/dGxfS36/Natural-Facebook-Cover-Photo.jpg'
            className='w-full mb-4 rounded-t-lg h-56'
          />
          <div className='flex flex-col items-center justify-center p-4 -mt-16'>
            <a href='#' className='relative block'>
              <img
                alt='profile'
                src={user?.photoURL}
                className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
              />
            </a>
  
            <p className='p-2 px-4 text-xs text-white bg-lime-500 rounded-full'>
              {'Tourist'}
            </p>
            <p className='mt-2 text-xl font-medium text-gray-800 '>
              User Id: {user?.uid}
            </p>
        <Link to={'/dashboard/tourist/join-tour-guide'}><button className="p-2 text-white mt-2 bg-lime-500 rounded-md">Join as Tour Guide</button></Link>
            <div className='w-full p-2 mt-4 rounded-lg'>
              <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                <p className='flex flex-col'>
                  Name
                  <span className='font-bold text-black '>
                    {user?.displayName}
                  </span>
                </p>
                <p className='flex flex-col'>
                  Email
                  <span className='font-bold text-black '>{user?.email}</span>
                </p>
  
                <div>
                  <button onClick={()=>setIsOpen(true)} className='bg-lime-500 px-10 py-1 rounded-lg text-black cursor-pointer hover:bg-lime-800 block mb-1'>
                    Update Profile
                  </button>
                  <button onClick={handleResetPassword} className='bg-lime-500 px-7 py-1 rounded-lg text-black cursor-pointer hover:bg-lime-800'>
                    Change Password
                  </button>

                  <UpdateProfileModal isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Profile;