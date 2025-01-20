
import { IoSettings } from 'react-icons/io5';
import { MdLibraryAdd, MdManageAccounts } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { SiMyget } from "react-icons/si";

const AdminMenu = () => {
    return (
        <div className=''>
         <Link to={'/dashboard/manage-candidates'}> <button className='flex  items-center gap-3 ml-4'> <MdManageAccounts className='text-green'/><span>Manage Candidates</span></button> </Link>

         <Link to={'/dashboard/manage-user'}> <button className='flex  items-center mt-2 gap-3 ml-4'> <MdManageAccounts className='text-green'/><span>Manage User</span></button>
          </Link>
         <Link to={'/dashboard/add-package'}> <button className='flex mt-2 items-center gap-3 ml-4'> <MdLibraryAdd  className='text-green'/><span>Add package</span></button> </Link>
         <Link to={'/dashboard/add-story'}> <button className='flex mt-2 items-center gap-3 ml-4'> <MdLibraryAdd  className='text-green'/><span>Add Story</span></button> </Link>
       
         <Link to={"/dashboard/manage-story"}> <button className='flex mt-2 items-center gap-3 ml-4'> <IoSettings className='text-green'/><span>Manage Stories</span></button> </Link>
        </div>
    );
};

export default AdminMenu; 