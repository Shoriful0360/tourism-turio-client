import { IoMdSettings } from "react-icons/io";
import { Link } from 'react-router-dom';

const ProfileMenu = () => {
    return (
        <div>
           <Link to={'/dashboard/profile'}>
           <h1  className='ml-4 flex items-center gap-4'><IoMdSettings /> Profile</h1>
           </Link>
        </div>
    );
};

export default ProfileMenu;