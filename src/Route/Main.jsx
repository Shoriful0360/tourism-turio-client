import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../page/Error/Error";
import Home from "../page/Home/Home";
import SignUp from "../page/Authentication/SignUp";
import SignIn from "../page/Authentication/SignIn";


export const router=createBrowserRouter([
{
    path:'/',
    element:<MainLayout></MainLayout>,
    errorElement:<Error/>,
    children:[
        {
            path:'/',
            element:<Home/>
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