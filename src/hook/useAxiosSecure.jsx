import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


const instant=axios.create({
    baseURL:'http://localhost:9000'
})

const useAxiosSecure = () => {
    const {logOut}=useAuth()
    const navigate=useNavigate()
    instant.interceptors.request.use(function(config){
        const token=localStorage.getItem('token')
        config.headers.authorization=`Bearer ${token}`
        return config
    },function(error){
        return Promise.reject(error)
    })

    useEffect(()=>{
        instant.interceptors.response.use(response=>{
            return response
        },error=>{
            const status=error.response.status
            if(status===401 || status===403){
                logOut()
                navigate('/signIn')
            }
        })
    },[logOut,navigate])
    return instant
};

export default useAxiosSecure;