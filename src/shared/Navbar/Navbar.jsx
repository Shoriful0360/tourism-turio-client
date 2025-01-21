import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hook/useAuth";


const Navbar = () => {
  const {user}=useAuth()
    return (
        <div>
          <div className="navbar top-0 z-50 fixed left-0 right-0 md:px-10 mx-auto bg-base-100">
  <div className="flex-1 hidden md:block ">
    <img src="https://turio-wp.b-cdn.net/wp-content/themes/turio/includes/theme-options/images/logo/header1-logo.svg" alt="" />
  </div>
  <div className="flex-none">
  <div className="flex gap-5 text-xl uppercase font-medium">
      <NavLink to={''} className={'hover:text-green'}>Home</NavLink>
        <NavLink to={'/trip'} className={'hover:text-green'}>Trips</NavLink>
        <NavLink to={'/all-story'} className={'hover:text-green'}>Community</NavLink>
        <NavLink to={''} className={'hover:text-green'}>About Us</NavLink>
      </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
     
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
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