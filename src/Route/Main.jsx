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

import AddPackage from "../page/Dashboard/Admin/AddPackage";

import TouristBooking from "../page/Dashboard/Tourist/TouristBooking";
import ManageTouristProfile from "../page/Dashboard/Tourist/ManageTouristProfile";
import TouristAddStories from "../page/Dashboard/Tourist/TouristAddStories";
import TouristMangeStories from "../page/Dashboard/Tourist/TouristMangeStories";
import JoinTourGuide from "../page/Dashboard/Tourist/JoinTourGuide";
import ManageCandidates from "../page/Dashboard/Admin/ManageCandidates";
import AdminAddStories from "../page/Dashboard/Admin/AdminAddStories";
import GuideAddStories from "../page/Dashboard/Guide/GuideAddStories";
import GuideManageStories from "../page/Dashboard/Guide/GuideManageStories";
import AdminPrivate from "../Private/AdminPrivate";
import GuidePrivate from "../Private/GuidePrivate";
import AdminManageStory from "../page/Dashboard/Admin/AdminManageStory";
import ManageUser from "../page/Dashboard/Admin/ManageUser";
import MyAssignedTour from "../page/Dashboard/Guide/MyAssignedTour";
import StoryDetails from "../page/storypage/StoryDetails";
import AllStory from "../page/all story/AllStory";
import Trips from "../page/Trips/Trips";
import AboutUs from "../page/about us/AboutUs";
import Payment from "../payment/Payment";


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
            path:'/all-story',
              element:<AllStory/>
          },
        {
            path:'/trip',
              element:<Trips/>
          },
        {
            path:'/about-us',
              element:<AboutUs/>
          },
        {
            path:'/package-details/:id',
            element:<PackageDetails/>,
        },
        {
            path:'/story-details/:id',
            element:<StoryDetails/>
        }
        // {
        //     path:'/package-details/:id',
        //     element:<PackageDetails/>,
        //     children:[
        //         {
        //             path:'information',
        //             element:<Infromation/>
        //         },
        //         {
        //             path:'tourplan',
        //             element:<TourPlan/>
        //         },
        //         {
        //             path:'location',
        //             element:<Location/>
        //         },
        //         {
        //             path:'gallery',
        //             element:<Gallery/>
        //         }
        //     ]
        // },
      
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

        // admin route start
        {
            path:'manage-candidates',
            element:<AdminPrivate><ManageCandidates/></AdminPrivate>
        },
        {
            path:'manage-user',
            element:<AdminPrivate><ManageUser/></AdminPrivate>
        },
        {
            path:'manage-story',
            element:<AdminPrivate><AdminManageStory/></AdminPrivate>
        },
        {
            path:'add-package',
            element:<AdminPrivate><AddPackage/></AdminPrivate>
        },
        // {
        //  path:'my-tour',
        //  element:<AdminPrivate></AdminPrivate>
        // },
        {
         path:'add-story',
         element:<AdminPrivate><AdminAddStories/></AdminPrivate>
        },

// admin route end

// start tourist route 
{
path:'tourist/manage-profile',
element:<ManageTouristProfile/>
},
{
path:'tourist/my-booking',
element:<TouristBooking/>
},
{
path:'tourist/add-story',
element:<TouristAddStories/>
},
{
path:'tourist/manage-stories',
element:<TouristMangeStories/>
},
{
path:'tourist/join-tour-guide',
element:<JoinTourGuide/>
},
{
path:'tourist-payment',
element:<Payment/>
},
// End tourist route 
// guide route start
{
    path:'guide/my-assigned-tour',
    element:<GuidePrivate><MyAssignedTour/></GuidePrivate>
    },
    {
    path:'guide/add-story',
    element:<GuidePrivate><GuideAddStories/></GuidePrivate>
    },
    {
    path:'guide/manage-stories',
    element:<GuidePrivate><GuideManageStories/></GuidePrivate>
    },


// guide route end
        // common router
        {
           index:true,
            element:<Profile/>
        },
       
    ]
},
{
    path:'signIn',
    element:<SignIn/>
},

])