import { Outlet } from "react-router-dom";
import PackageBanner from "../../component/PackageDetails/PackageBanner";
import InfoForm from "../../component/form/InfoForm";


const PackageDetails = () => {
    return (
        <div>
            <PackageBanner/>
           <div className="md:w-11/12 mt-10  lg:w-8/12 grid gap-4 lg:grid-cols-12 mx-auto">
           <div className="col-span-8 ">

           <Outlet/>
           </div>
           <div className="col-span-4">
        <InfoForm/>
           </div>
           </div>
        </div>
    );
};

export default PackageDetails;