
import { useQuery } from '@tanstack/react-query';
import StoryCard from './StoryCard';
import useAxiosPublic from '../../../hook/useAxiosPublic';
import { data } from 'react-router-dom';
import LoadingSpinner from '../../loading/LoadingSpinner';

const Story = () => {
    const axiosPublic=useAxiosPublic()
    const {data:storyData,isLoading}=useQuery({
    queryKey:['shareStory'],
    queryFn:async()=>{
        const {data}=await axiosPublic('/story')
        return data
    }
    })
    if(isLoading) return <LoadingSpinner/>
    console.log(storyData)
    return (
        <div className='mt-20 px-3 md:px-10'>
      <div className='lg:w-5/12 text-center mx-auto'>
      <h1 className='text-3xl font-bold'>Blog Posts</h1> 
      <p>One inspiring story is worth traveling. Discover more about local food, tradition and history. Read the stories that make you want to travel.</p>
      </div>


           {/* story card */}
       <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {
            storyData.map(story=><StoryCard key={story._id} story={story}/>)
        }
  
      
       </div>
       <div className='text-center mt-4'>
        <button className='btn bg-green text-white border-none'>All Story</button>
        <button className='btn bg-green text-white border-none ml-4'>Add Story</button>
       </div>
        </div>
    );
};

export default Story;