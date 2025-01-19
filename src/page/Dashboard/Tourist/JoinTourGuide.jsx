
import useAuth from '../../../hook/useAuth';
import useAxiosPublic from '../../../hook/useAxiosPublic';
import Swal from 'sweetalert2'
import toast from 'react-hot-toast'

const JoinTourGuide = () => {
  const {user}=useAuth()
  const axiosPublic=useAxiosPublic()

  const handleSubmitForm=async(e)=>{
e.preventDefault()
const form=e.target;
const cv=form.url.value;
const description=form.description.value;
const formData={cv,description,email:user?.email,name:user?.displayName}
try{
 await axiosPublic.post('/application',formData)
 Swal.fire({
  position: "top-center",
  icon: "success",
  title: "Your request has been successed!",
  showConfirmButton: false,
  timer: 1500
});

  
}catch(err){
  toast.error(err.response.data.message)
}finally{
  form.reset()
}
  }
    return (
       <div className='w-full min-h-[calc(100vh-40px)] max-w-2xl mx-auto flex flex-col justify-center  text-gray-800 rounded-xl bg-gray-50'>
             <form onSubmit={handleSubmitForm} >
               <div className=''>
                <h1 className='text-center text-2xl font-bold underline text-green my-2'>Tour Guide Application Form</h1>
                 <div className='space-y-6'>
                   {/* Name */}
                   <div className='space-y-1 text-sm'>
                     <label htmlFor='url' className=' text-gray-600'>
                    CV URL :
                     </label>
                     <input
                       className='w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white'
                       name='url'
                       id='url'
                       type='url'
                       placeholder='Enter your CV Link'
                       required
                     />
                   </div>
                  
                  
                   {/* Description */}
                   <div className='space-y-1 text-sm'>
                     <label htmlFor='description' className='block text-gray-600'>
                     Why wants to be a Tour Guide?
                     </label>
       
                     <textarea
                       id='description'
                       required
                       placeholder='Write description here...'
                       className='block rounded-md focus:lime-300 w-full h-32 px-4 py-3 text-gray-800  border border-lime-300 bg-white focus:outline-lime-500 '
                       name='description'
                     ></textarea>
                   </div>
                   {/* button */}
                   <div className='flex justify-center'>
                    <button type='submit' className='bg-[#84CC16] rounded-md  py-2 px-4 text-white '>Submit</button>
                   </div>
                 </div>
               
               </div>
             </form>
           </div>
     
    )
  }


export default JoinTourGuide;