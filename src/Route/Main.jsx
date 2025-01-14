import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../page/Error/Error";
import Home from "../page/Home/Home";


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
}
])