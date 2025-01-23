import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hook/useAuth";


const Navbar = () => {
  const {user}=useAuth()
    return (
        <div>
          <div className="navbar top-0 z-50  fixed left-0 right-0 md:px-10 mx-auto bg-base-100">
  <div className="flex-1 hidden md:block ">
  <Link to={'/'}>
  <img src="https://turio-wp.b-cdn.net/wp-content/themes/turio/includes/theme-options/images/logo/header1-logo.svg" alt="" />
  </Link>
  </div>
  <div className="flex-none">
  <div className="flex gap-2 md:gap-5 md:text-xl uppercase md:font-medium">
      <NavLink to={'/'} className={'hover:text-green'}>Home</NavLink>
        <NavLink to={'/trip'} className={'hover:text-green'}>Trips</NavLink>
        <NavLink to={'/all-story'} className={'hover:text-green'}>Community</NavLink>
        <NavLink to={'/about-us'} className={'hover:text-green'}>About Us</NavLink>
      </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
     
  
      </div>
    </div>
    {/* profiel dropdown  */}
      {
        user? <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={user?.photoURL} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content text-black text-lg font-bold bg-white  px-4 rounded-box z-[1] mt-3 w-72 p-2 shadow">
        
          <Link><li>{user?.displayName}</li></Link>
          <Link><li>{user?.email}</li></Link>
          <Link to={'dashboard'}><li>Dashboard</li></Link>
          
        </ul>
      </div>
      :
      <Link to={'/signIn'}><button className="btn">SignIn</button></Link>
      }

   
  </div>
</div>
        </div>
    );
};

export default Navbar;