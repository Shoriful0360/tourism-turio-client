import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
import AdminMenu from "./Menu/AdminMenu";
import TourGuideMenu from "./Menu/TourGuideMenu";
import TouristMenu from "./Menu/TouristMenu";
import ProfileMenu from "./Menu/ProfileMenu";
import { GrLogout } from 'react-icons/gr'


const Sidebar = () => {
    const [isActive, setActive] = useState(false)
    const handleToggle = () => {
        setActive(!isActive)
      }
    return (
        <>
        {/* small screen navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
              <img
                // className='hidden md:block'
                src='https://turio-wp.b-cdn.net/wp-content/themes/turio/includes/theme-options/images/logo/header1-logo.svg'
                alt='logo'
                width='100'
                height='100'
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>  

{/* sidebar */}
<div 
className={`z-10 md:fixed flex flex-col justify-between  bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 overflow-x-hidden transform ${isActive && '-translate-x-full'} md:translate-x-0  transition duration-200 ease-in-out  `}>
  {/* logo */}
<div>
<div className='w-fullmd:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-lime-100 mx-auto '>
              <Link to='/'>
                <img
                  // className='hidden md:block'
                  src='https://turio-wp.b-cdn.net/wp-content/themes/turio/includes/theme-options/images/logo/header1-logo.svg'
                  alt='logo'
                  width='100'
                  height='100'
                />
              </Link>
            </div>

            {/* nav item */}
            <div className="flex flex-col justify-between flex-1 mt-6">
              <nav>
                {/* menu item */}
                <AdminMenu/>
                <TourGuideMenu/>
                <TouristMenu/>
              </nav>
            </div>
</div>
<div>
<hr />
            {/* profile */}
            <ProfileMenu/>
            <button
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors transform duration-300 ">
            <GrLogout className='w-5 h-5' />
            <span className="mx-4 font-medium'">  Logout</span>
            </button>
</div>
</div>
        </>
    );
};

export default Sidebar;