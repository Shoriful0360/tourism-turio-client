import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";
import LoadingSpinner from "../../component/loading/LoadingSpinner";
import Package from "../../component/Home/tourism and travel/Package/Package";


const Trips = () => {
    const axiosPublic=useAxiosPublic()
  // get package data
  const {data:packages,isLoading}=useQuery({
    queryKey:['package'],
    queryFn:async()=>{
      const {data}=await axiosPublic('/package')
      return data
    }
  })

  if(isLoading) return <LoadingSpinner/>
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {
                packages?.map(pac=><Package key={pac._id} item={pac}/>)
            }
        </div>
    );
};

export default Trips;