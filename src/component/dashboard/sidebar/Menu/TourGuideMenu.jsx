import React from 'react';
import { IoSettings } from 'react-icons/io5';
import { MdLibraryAdd, MdManageAccounts, MdOutlineLibraryAddCheck } from 'react-icons/md';
import { SiMyget } from 'react-icons/si';
import { NavLink } from 'react-router-dom';


const TourGuideMenu = () => {
    return (
        <div>
            <h1>guide menu</h1>
        <NavLink to={'/dashboard/guide/my-assigned-tour'}> <button className='flex  mt-2 items-center gap-3 ml-4'> <SiMyget  className='text-green'/><span>My Assigned Tours</span></button> </NavLink>
        <NavLink to={'/dashboard/guide/add-story'}> <button className='flex mt-2 items-center gap-3 ml-4'> <MdLibraryAdd  className='text-green'/><span>Add Story</span></button> </NavLink>
        <NavLink to={'/dashboard/guide/manage-stories'}> <button className='flex mt-2 items-center gap-3 ml-4'> <IoSettings  className='text-green'/><span>Manage Stories</span></button> </NavLink>
     
       </div>
    );
};

export default TourGuideMenu;