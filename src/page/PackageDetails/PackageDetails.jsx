import { Outlet } from "react-router-dom";
import PackageBanner from "../../component/PackageDetails/PackageBanner";


const PackageDetails = () => {
    return (
        <div>
            <PackageBanner/>
           <div className="md:w-11/12 lg:w-8/12 mx-auto">
           <Outlet/>
           </div>
        </div>
    );
};

export default PackageDetails;