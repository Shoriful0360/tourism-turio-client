import StorieCard from '../../../component/dashboard/common/StorieCard';
import useAuth from '../../../hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import LoadingSpinner from '../../../component/loading/LoadingSpinner';


const AdminManageStory = () => {
    const {user,loading}=useAuth()
    const axiosSecure=useAxiosSecure()
    const {data:stories,isLoading,refetch}=useQuery({
        queryKey:['storiesCard',user?.email],
        enabled:!loading,
        queryFn:async()=>{
            const {data}=await axiosSecure.get(`/stories/${user?.email}`)
            return data
        }
    })
   if(isLoading) return <LoadingSpinner/>
    return (
        <div>
           <h1 className='text-xl font-bold text-center uppercase underline'>My Stories</h1>

        <div className='mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                stories?.map(story=><StorieCard story={story} refetch={refetch} key={story._id}/>)
            }
   
        </div>
        </div>
    )
};

export default AdminManageStory;