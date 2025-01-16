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
        }
    ]
},
{
    path:'signUp',
    element:<SignUp/>
},
{
    path:'signIn',
    element:<SignIn/>
}
])