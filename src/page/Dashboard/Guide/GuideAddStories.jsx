import  { useState } from 'react';
import { shortImageName } from "../../../utilites/shortImgName";

const GuideAddStories = () => {
  
    const [imgUpload,setImgUpload]=useState({
        image:{name:'upload Image'}
    })
    const handleSubmitForm=()=>{

    }
    return (
        <div className='w-full min-h-[calc(100vh-40px)] max-w-2xl mx-auto flex flex-col justify-center  text-gray-800 rounded-xl bg-gray-50'>
                    <form onSubmit={handleSubmitForm} >
                      <div className=''>
                       <h1 className='text-center text-2xl font-bold underline text-green my-2'>Add Story</h1>
                        <div className='space-y-6'>
                          {/* Name */}
                          <div className='space-y-1 text-sm'>
                            <label htmlFor='url' className=' text-gray-600'>
                    Story Name
                            </label>
                            <input
                              className='w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white'
                              name='url'
                              id='url'
                              type='url'
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
                                              onChange={(e)=> 
                                                setImgUpload({
                                                  image:e.target.files[0],
                                                url:URL.createObjectURL(e.target.files[0])
                                                })}
                                                className='text-sm cursor-pointer w-36 hidden'
                                                type='file'
                                                name='image'
                                                id='image'
                                                accept='image/*'
                                              
                                              />
                                              <div className='bg-lime-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-lime-500'>
                                               {/* {imgUpload.image.name} */}
                                         {shortImageName(imgUpload?.image?.name)}
                                              </div>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                        {/* image size */}
                                        {
                                          imgUpload && imgUpload?.image?.size &&(
                                            <div className='flex gap-5 items-center'>
                                            <img className='w-20' src={imgUpload?.url} alt='' />
                                            <p>Image Size: {imgUpload?.image?.size} Bytes</p>
                                          </div>
                                        )
                                        }
                         
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

export default GuideAddStories;