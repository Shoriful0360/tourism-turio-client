import { Outlet } from "react-router-dom";
import Sidebar from "../component/dashboard/sidebar/Sidebar";


const DashboardLayout = () => {
    return (
        <div className=" min-h-screen  md:flex bg-white">
           {/* side bard */}
           <Sidebar/>
           <div className="flex-1 p-10 md:ml-60">
            {/* outlet for daynamic content */}
            <Outlet/>
           </div>
        </div>
    );
};

export default DashboardLayout;