
import { useQuery } from '@tanstack/react-query';
import StoryCard from './StoryCard';
import useAxiosPublic from '../../../hook/useAxiosPublic';
import { data, Link } from 'react-router-dom';
import LoadingSpinner from '../../loading/LoadingSpinner';
import useRole from '../../../hook/useRole';

const Story = () => {
    const {role}=useRole()
    const axiosPublic=useAxiosPublic()
    const {data:storyData,isLoading,refetch}=useQuery({
    queryKey:['shareStory'],
    queryFn:async()=>{
        const {data}=await axiosPublic('/story')
        return data
    }
    })
    if(isLoading) return <LoadingSpinner/>
   
    return (
        <div className='mt-20 px-3 md:px-10'>
      <div className='lg:w-5/12 text-center mx-auto'>
      <h1 className='text-3xl font-bold'>Blog Posts</h1> 
      <p>One inspiring story is worth traveling. Discover more about local food, tradition and history. Read the stories that make you want to travel.</p>
      </div>


           {/* story card */}
       <div className='grid md:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4'>
        {
            storyData.map(story=><StoryCard key={story._id} refetch={refetch} story={story}/>)
        }
  
      
       </div>
       <div className='text-center my-10'>
        {
            <Link to={`${  role?.role ==='Tourist' && '/dashboard/tourist/add-story' || role?.role ==='Guide' && '/dashboard/guide/add-story' || role?.role ==='Admin' && '/dashboard/add-story' ||  '/signIn'}`}>  <button className='btn bg-green text-white border-none'>Add Story</button></Link>
        }
       
       
     
      
     <Link to={'/all-story'}>   <button className='btn bg-green text-white border-none ml-4'>All Story</button></Link>
       </div>
        </div>
    );
};

export default Story;