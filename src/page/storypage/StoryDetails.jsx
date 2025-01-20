import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../component/loading/LoadingSpinner";


const StoryDetails = () => {
    const {id}=useParams()
    const axiosPublic=useAxiosPublic()
    const {data:storyData,isLoading}=useQuery({
    queryKey:['singleStory'],
    queryFn:async()=>{
        const {data}=await axiosPublic(`/story/${id}`)
        return data
    }
    })
   if(isLoading) return <LoadingSpinner/>
    const{title,description,image}=storyData || {}
    return (
        <div>
           <div
        // todo: title design
        className="hero mt-20 bg-object-cover   min-h-screen-70 w-full"
        style={{
          backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/026/746/427/non_2x/illustration-image-nature-and-sustainability-eco-friendly-living-and-conservation-concept-art-of-earth-and-animal-life-in-different-environments-generative-ai-illustration-free-photo.jpg')`,
        }}>
        <div className="hero-overlay bg-opacity-40 bg-black  "></div>
       
      </div>  

      {/* image and details */}
   <div className="px-2 md:px-10">
   <div className="mt-10 grid md:grid-cols-2 gap-4 xl:grid-cols-4 lg:grid-cols-3 ">
        {
image?.map((img,idx)=> <img key={idx} src={img} alt="" className="float-start h-64 " />)
   
        }
      </div>
        <p>{description}</p>
   </div>
        </div>
    );
};

export default StoryDetails;