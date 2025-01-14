import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';

const StoryCard = () => {
    return (
        <div className="card group  mt-6  shadow-xl">
        <figure className="rounded-md relative px-3">
          <img
            src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/blog-post-4-m.jpg"
            className=" rounded-lg group-hover:scale-[1.05] w-full object-cover object-top transition-all h-60"
            alt="Shoes" />
      
           
        </figure>
        <div className=" px-3">
          <h2 className="card-title">
      Discover Serenity, Exploration, and Enlightenment.</h2>
      
      
    <div className='flex justify-between'>
    <h1 className='flex items-center  gap-1 mt-2'>
      <CiCalendarDate />

      February,12, 2018
      </h1>
      <button className='bg-green text-white py-2 p-2 rounded-sm'>Share Now</button>
    </div>
 
      <div className="divider"></div>

          
        </div>
      </div> 
    );
};

export default StoryCard;