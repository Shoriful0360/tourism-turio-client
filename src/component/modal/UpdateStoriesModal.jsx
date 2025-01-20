import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    DialogTitle,
  
  } from '@headlessui/react'
  import { Fragment, useState } from 'react'

  import toast from 'react-hot-toast'
import useAuth from '../../hook/useAuth';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { useNavigate } from 'react-router-dom';
import { imageUpload } from '../../utilites/ImageUpload';
import { RxCross1 } from "react-icons/rx";


const UpdateStoriesModal = ({isOpen,story,setIsOpen}) => {
    const{title,image,description,_id}=story || {}

    const {user}=useAuth()
  const axiosSecure=useAxiosSecure()
  const [images, setImages] = useState(image);
  const navigate=useNavigate()

    
    const handleSubmitForm=async(e)=>{
e.preventDefault()
const form=e.target;
const title=form.title.value;
const image=images;
const description=form.description.value;
const formData={title,image,description,email:user?.email}
 
try{
  const {data}=await axiosSecure.put(`/stories/${_id}`,formData)
  console.log(data)
 if(data.modified){
   toast.success("Added your story")
navigate('/dashboard/guide/manage-stories')
 }
}catch (err){
  toast.error(err.response.data)
}


    }

    // hande image 
      const handleImageUpload=async(e)=>{
          const files = e.target.files;
          
       let url=[]
       for (let i = 0; i < files.length; i++) {
        const img={image:files[0],}
    
        const imgUrl=await imageUpload(img)
       url.push(imgUrl)
        // urls.push(data.data.display_url);
      }
      setImages((prevImages) => [...prevImages, ...url]); 
    
         
        }


        // handle delet img
        const handleDeletImg=(url)=>{
          console.log(url)
          setImages((prevImages) =>prevImages.filter((image)=>image !==url)); 
        }
    return (
        <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={()=>isOpen(close)}>
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </TransitionChild>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <DialogTitle
                  as='h3'
                  className='text-lg font-medium text-center leading-6 text-gray-900'
                >
                Update stories
                </DialogTitle>
               <form onSubmit={handleSubmitForm}>
               <div className='mt-2'>
             
             <label className="form-control w-full ">
<div className="label">
<span className="label-text text-xl font-semibold">Title</span>

</div>
<textarea
name='title'
defaultValue={title}
placeholder="Bio"
className="textarea textarea-bordered  textarea-xs w-full  "></textarea>
</label>
           </div>
   

           {/* image uploade */}
           <div className=' p-4  w-full  m-auto rounded-lg flex-grow'>
                                   <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                     <div className='flex flex-col w-max mx-auto text-center'>
                                       <label>
                                         <input
                                         onChange={handleImageUpload}
                                      
                                           className='text-sm cursor-pointer w-36 hidden'
                                           type='file'
                                           name='image'
                                           id='image'
                                           accept='image/*'
                                         
                                         />
                                         <div className='bg-lime-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-lime-500'>
                                          {/* {imgUpload.image.name} */}
                                           Upload Image
                                         </div>
                                       </label>
                                     </div>
                                   </div>
                                 </div>

                                 {/* image  */}
                                 <div className='flex my-4 flex-wrap gap-3'>
                                    {images?.map((img,idx)=><div className='relative' key={idx} >
                                          <img className='w-28 h-14' src={img} alt='' />
                                          <div onClick={()=>handleDeletImg(img)} className='absolute top-0 text-xl text-red-600'>
                                          <RxCross1 />
                                          </div>
                                        </div>)}

                                        </div>
           
        <div>
        <textarea name='description' defaultValue={description} className="textarea w-full textarea-bordered" placeholder="Bio"></textarea>
        </div>

         <div className='mt-3 flex justify-around'>
        <button type='submit' onClick={()=>setIsOpen(false)} className='btn bg-green text-white'>update</button>
        <button onClick={()=>setIsOpen(false)} className='btn bg-green text-white'>Cancel</button>
         </div>
               </form>

              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
    );
};

export default UpdateStoriesModal;