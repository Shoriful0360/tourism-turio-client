import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";
import LoadingSpinner from "../../component/loading/LoadingSpinner";
import StoryCard from "../../component/Home/blogPost/StoryCard";


const AllStory = () => {
    const axiosPublic=useAxiosPublic()
    const {data:storyData,isLoading}=useQuery({
    queryKey:['allStory'],
    queryFn:async()=>{
        const {data}=await axiosPublic('/all-story')
        return data
    }
    })
    if(isLoading) return <LoadingSpinner/>
   
    return (
        <div className="my-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
           {
            storyData.map(story=><StoryCard key={(story._id) } story={story}/>)
           } 
        </div>
    );
};

export default AllStory;