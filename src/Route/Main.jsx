import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../page/Error/Error";
import Home from "../page/Home/Home";
import SignUp from "../page/Authentication/SignUp";
import SignIn from "../page/Authentication/SignIn";
import PackageDetails from "../page/PackageDetails/PackageDetails";
import Infromation from "../component/PackageDetails/Information/Infromation";
import TourPlan from "../component/PackageDetails/Tourplan/TourPlan";
import Location from "../component/PackageDetails/Location/Location";
import Gallery from "../component/PackageDetails/Gallery/Gallery";

import DashboardLayout from "../layout/DashboardLayout";
import Profile from "../page/Dashboard/Common/Profile";
import AuthPrivate from "../Private/AuthPrivate";
import ManageProfile from "../page/Dashboard/Admin/ManageProfile";


export const router=createBrowserRouter([
{
    path:'/',
    element:<MainLayout></MainLayout>,
    errorElement:<Error/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/package-details',
            element:<PackageDetails/>,
            children:[
                {
                    path:'information',
                    element:<Infromation/>
                },
                {
                    path:'tourplan',
                    element:<TourPlan/>
                },
                {
                    path:'location',
                    element:<Location/>
                },
                {
                    path:'gallery',
                    element:<Gallery/>
                }
            ]
        },
      
    ]
},
{
    path:'signUp',
    element:<SignUp/>
},
{
    path:'/dashboard',
    element:<AuthPrivate><DashboardLayout/></AuthPrivate>,
    children:[
        {
            path:'manage-profile',
            element:<ManageProfile/>
        },


        // common router
        {
            path:'profile',
            element:<Profile/>
        }
    ]
},
{
    path:'signIn',
    element:<SignIn/>
}
])