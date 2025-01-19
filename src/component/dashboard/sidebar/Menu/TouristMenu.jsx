import React from 'react';
import { IoSettings } from 'react-icons/io5';
import { MdLibraryAdd, MdManageAccounts, MdOutlineLibraryAddCheck } from 'react-icons/md';
import { SiMyget } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

const TouristMenu = () => {
    return (
        <div>
         <NavLink to={'/dashboard/tourist/my-booking'}> <button className='flex  mt-2 items-center gap-3 ml-4'> <SiMyget  className='text-green'/><span>My Booking</span></button> </NavLink>
         <NavLink to={'/dashboard/tourist/add-story'}> <button className='flex mt-2 items-center gap-3 ml-4'> <MdLibraryAdd  className='text-green'/><span>Add Story</span></button> </NavLink>
         <NavLink to={'/dashboard/tourist/manage-stories'}> <button className='flex mt-2 items-center gap-3 ml-4'> <IoSettings  className='text-green'/><span>Manage Stories</span></button> </NavLink>
         <NavLink to={'/dashboard/tourist/join-tour-guide'}> <button className='flex mt-2 items-center gap-3 ml-4'> <MdOutlineLibraryAddCheck  className='text-green'/><span>Join as Tour Guide</span></button> </NavLink>
        </div>
    );
};




export default TouristMenu;