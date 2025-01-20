import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const StoryCard = ({story}) => {
  const {title,description,image,_id}=story || {}
    return (
        <div className="card group  mt-6  shadow-xl">
        <figure className="rounded-md relative px-3">
          <img
            src={image[0]}
            className=" rounded-lg group-hover:scale-[1.05] w-full object-cover object-top transition-all h-60"
            alt="Shoes" />
      
           
        </figure>
        <div className=" px-3">
          <h2 className="card-title">
      {title}</h2>
      
      
      
    <div className='flex justify-between'>
    <h1 className='flex items-center  gap-1 mt-2'>
      <CiCalendarDate />

      February,12, 2018
      </h1>
      <button className='bg-green text-white py-2 p-2 rounded-sm'>Share Now</button>
    </div>
 
      <div className="divider"></div>
<p>{description.substring(0,150)}...</p>

<Link to={`/story-details/${_id}`}><button className='text-secondary mt-2'>Read More</button></Link>
          
        </div>
      </div> 
    );
};

export default StoryCard;