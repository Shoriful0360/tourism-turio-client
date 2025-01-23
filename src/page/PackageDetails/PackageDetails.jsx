import { NavLink, Outlet, useParams } from "react-router-dom";
import PackageBanner from "../../component/PackageDetails/PackageBanner";
import InfoForm from "../../component/form/InfoForm";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { FaInfoCircle } from "react-icons/fa";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";



const PackageDetails = () => {

    const axiosSecure=useAxiosSecure()
    const {id}=useParams()
const {data:item}=useQuery({
    queryKey:['singlePackage',id],
    queryFn:async()=>{
        const {data}=await axiosSecure.get(`/package/${id}`)
        return data
    }
})

    return (
        <div>
            <PackageBanner item={item}/>
        
        </div>
    );
};

export default PackageDetails;