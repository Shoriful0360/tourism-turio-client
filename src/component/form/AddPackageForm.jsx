
import { TbFidgetSpinner } from "react-icons/tb"
import { shortImageName } from "../../utilites/shortImgName";
const AddPackageForm = ({handleSubmitForm,loading,setImgUpload,imgUpload,images,handleImageUpload}) => {

    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
        <form onSubmit={handleSubmitForm}>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className='space-y-6'>
              {/* Name */}
              <div className='space-y-1 text-sm'>
                <label htmlFor='name' className='block text-gray-600'>
                  Name
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white'
                  name='name'
                  id='name'
                  type='text'
                  placeholder='package Name'
                  required
                />
              </div>
              {/* Category */}
              <div className='space-y-1 text-sm'>
                <label htmlFor='category' className='block text-gray-600 '>
                  Category
                </label>
                <select
                  required
                  className='w-full px-4 py-3 border-lime-300 focus:outline-lime-500 rounded-md bg-white'
                  name='category'
                >
                  <option value='Indoor'>Adventure</option>
                  <option value='Outdoor'>Wildlife </option>
                  <option value='Succulent'>Beach </option>
                  <option value='Flowering'>Cultural </option>
                </select>
              </div>
              {/* location */}
              <div className='space-y-1 text-sm'>
                  <label htmlFor='price' className='block text-gray-600 '>
                   Location
                  </label>
                  <input
                    className='w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white'
                    name='location'
                    id='location'
                    type='text'
                    placeholder='Location'
                    required
                  />
                </div>
              {/* Description */}
              <div className='space-y-1 text-sm'>
                <label htmlFor='description' className='block text-gray-600'>
                  Description
                </label>
  
                <textarea
                  id='description'
                  placeholder='Write package description here...'
                  className='block rounded-md focus:lime-300 w-full h-32 px-4 py-3 text-gray-800  border border-lime-300 bg-white focus:outline-lime-500 '
                  name='description'
                ></textarea>
              </div>
            </div>
            <div className='space-y-6 flex flex-col'>
              {/* Price & Quantity */}
              <div className='flex justify-between gap-2'>
                {/* Price */}
                <div className='space-y-1 text-sm'>
                  <label htmlFor='price' className='block text-gray-600 '>
                    Price
                  </label>
                  <input
                    className='w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white'
                    name='price'
                    id='price'
                    type='number'
                    placeholder='Price per unit'
                    required
                  />
                </div>
  
                {/* Discount price */}
                <div className='space-y-1 text-sm'>
                  <label htmlFor='discount price' className='block text-gray-600'>
                   Discount Price
                  </label>
                  <input
                    className='w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white'
                    name='discount'
                    id='discount'
                    type='number'
                    placeholder='Discount Price'
                  
                  />
                </div>
              </div>
              <div className='flex justify-between gap-2'>
                {/*duration day */}
                <div className='space-y-1 text-sm'>
                  <label htmlFor='day' className='block text-gray-600 '>
                    Duration day
                  </label>
                  <input
                    className='w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white'
                    name='day'
                    id='day'
                    type='number'
                    placeholder='Enter your service day'
                    required
                  />
                </div>
  
                {/* duration night */}
                <div className='space-y-1 text-sm'>
                  <label htmlFor='night' className='block text-gray-600'>
                  Duration Night
                  </label>
                  <input
                    className='w-full px-4 py-3 text-gray-800 border border-lime-300 focus:outline-lime-500 rounded-md bg-white'
                    name='night'
                    id='night'
                    type='number'
                    placeholder='Service Night'
                  
                  />
                </div>
              </div>
              {/* Image */}
           
                {/* image size */}
                {/* {
                  imgUpload && imgUpload?.image?.size &&(
                    <div className='flex gap-5 items-center'>
                    <img className='w-20' src={imgUpload?.url} alt='' />
                    <p>Image Size: {imgUpload?.image?.size} Bytes</p>
                  </div>
                )
                } */}
                
              {/* Submit Button */}

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

              <button
                type='submit'
                className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-lime-500 '
              >
                 {loading ? (
                                <TbFidgetSpinner className='animate-spin m-auto' />
                              ) : (
                                'Save as Continue'
                              )}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
};

export default AddPackageForm;