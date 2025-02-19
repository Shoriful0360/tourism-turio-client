import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { HiMiniHandThumbUp } from "react-icons/hi2";
import {
  FacebookShareButton,
  FacebookIcon,
} from 'react-share';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hook/useAxiosPublic';
const StoryCard = ({story,refetch}) => {
  const {title,description,image,_id,like}=story || {}
const axiosPublic=useAxiosPublic()
  const handleLike=async()=>{
await axiosPublic.patch(`story/like/${_id}`)
refetch()
}



    return (
        <div className="card group container mt-6  shadow-xl">
        <figure className="rounded-md relative px-3">
          <img
            src={image[0]}
            className=" rounded-lg group-hover:scale-[1.05] w-full object-cover object-top transition-all h-60"
            alt="Shoes" />
      
           
        </figure>
        {/* title */}
        <div className=" px-3">
          <h2 className="card-title  flex-grow-0">
      {title}</h2>
      
      {/* like */}
      <div className='my-2 flex items-center gap-2 text-2xl '>
      <span>{like}</span>
  <button onClick={handleLike} className='text-white bg-[#3A8CFF] p-1 w-7 h-7 rounded-full'>    <HiMiniHandThumbUp /></button>
      </div>
      
    <div className='flex  justify-between'>

    <h1 className='flex items-center  gap-1 mt-2'>
      <CiCalendarDate />

      February,12, 2018
      </h1>
     <div>
     <FacebookShareButton
        url={`http://localhost:5173/story-details/${_id}`}
        quote={title}
        hashtag="#AmazingStory"
        description={description}
      >
      <button className='bg-green text-white py-2 p-2 rounded-sm'>Share Now</button>
        {/* <FacebookIcon size={32} round={true} /> */}
      </FacebookShareButton>
     </div>
    </div>
 
      <div className="divider"></div>
<p>{description.substring(0,150)}...</p>

<Link to={`/story-details/${_id}`}><button className='text-secondary mt-2'>Read More</button></Link>
          
        </div>
      </div> 
    );
};

export default StoryCard;