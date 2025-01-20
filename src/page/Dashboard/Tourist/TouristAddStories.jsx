import  { useState } from 'react';
import { imageUpload } from '../../../utilites/ImageUpload';
import useAuth from '../../../hook/useAuth';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const TouristAddStories = () => {
  const {user}=useAuth()
  const axiosSecure=useAxiosSecure()
  const [images, setImages] = useState([]);
  const navigate=useNavigate()

    
    const handleSubmitForm=async(e)=>{
e.preventDefault()
const form=e.target;
const title=form.title.value;
const image=images;
const description=form.description.value;
const formData={title,image,description,email:user?.email}
 
try{
  const {data}=await axiosSecure.post('/stories',formData)
 if(data.insertedId){
   toast.success("Added your story")
   form.reset()
navigate('/dashboard/tourist/manage-stories')
 }
}catch (err){
  toast.error(err.response.data)
}


    }

    // image upload


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
    return (
      <div className='w-full px-4 min-h-[calc(100vh-40px)] max-w-2xl mx-auto flex flex-col justify-center  text-gray-800 rounded-xl '>
      <form onSubmit={handleSubmitForm} >
        <div className=''>
         <h1 className='text-center text-2xl font-bold underline text-green my-2'>Add Story</h1>
          <div className='space-y-6'>
            {/* Name */}
            <div className='space-y-1 text-sm'>
              <label htmlFor='title' className=' text-gray-600'>
      Story Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white'
                name='title'
                id='title'
                type='text'
                placeholder='Enter your story name'
                required
              />
            </div>
           {/* image */}
            <div className=' p-4  w-full  m-auto rounded-lg flex-grow'>
                          <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                            <div className='flex flex-col w-max mx-auto text-center'>
                              <label>
                                <input
                                onChange={handleImageUpload}
                                // onChange={(e)=> 
                                //   handleImageUpload({
                                //     image:e.target.files[0],
                                //   // url:URL.createObjectURL(e.target.files[0])
                                //   })}
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
                          {/* image size */}

                      <div className='flex flex-wrap gap-3'>
                      {images?.map((img,idx)=><div key={idx} >
                            <img className='w-28 h-16' src={img} alt='' />
                          </div>)}
                      </div>
                         
           
            {/* Description */}
            <div className='space-y-1 text-sm'>
              <label htmlFor='description' className='block text-gray-600'>
             Say,about story?
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
    );
};

export default TouristAddStories;