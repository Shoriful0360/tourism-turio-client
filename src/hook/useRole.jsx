import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import LoadingSpinner from "../component/loading/LoadingSpinner";
import useAuth from "./useAuth";


const useRole = () => {
    const axiosSecure=useAxiosSecure()
    const{user,loading}=useAuth()
    const {data:role,isLoading}=useQuery({
        queryKey:['role',user?.email],
        enabled:!!user,
        queryFn:async()=>{
            const {data}=await axiosSecure.get(`/user/role/${user?.email}`)
            return(data)
        }
    })
    return {role,isLoading}
};

export default useRole;