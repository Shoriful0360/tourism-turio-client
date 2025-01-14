import { AiOutlineMail } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer bg-[#2D373C] p-10">
  <aside>
  <img src="https://turio-wp.b-cdn.net/wp-content/uploads/2022/10/logo2-1.svg" alt="" />
    <p className="text-white">
     
      Providing reliable tech since 1992
    </p>
    <h1 className="text-white font-bold  text-2xl">Follow Us on :</h1>
<div className="flex flex-wrap gap-3">
<div className="">
        <Link to={'https://www.facebook.com/profile.php?id=100020907764467'}><BiLogoFacebook className="text-white bg-green h-10 w-10 rounded-full p-1" /></Link>
    </div>
    <div className="">
        <Link to={'https://github.com/Shoriful0360'}><FiGithub className="text-white bg-green h-10 w-10 rounded-full p-2" /></Link>
    </div>
    <div className="">
        <Link to={'https://www.linkedin.com/in/shoriful-islam-35b67a345/'}><FaLinkedinIn className="text-white bg-green h-10 w-10 rounded-full p-2" /></Link>
    </div>
</div>
  </aside>
  <nav className="text-white">
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className="text-white">
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className="text-white">
    <h6 className=" text-2xl font-bold text-white">Contact Us</h6>
   <div className="flex items-center text-md font-bold justify-center gap-4">
   <IoCallOutline className="text-3xl" />
    <div>
        <h1>+880-1307177507</h1>
        <h1>+880-1968555718</h1>
    </div>
   </div>
   <div className="flex items-center text-md font-bold justify-center gap-4">
   <AiOutlineMail className="text-3xl" />
    <div>
        <h1>shorifulbba0360@gmail.com</h1>
        <h1>shoriful0360@gmail.com</h1>
    </div>
   </div>
   <div className="flex items-center text-md font-bold justify-center gap-4">
   <CiLocationOn className="text-3xl" />
    <div>
        <h1>168/170, Avenue 01</h1>
        <h1>Rangpur ,Bangladesh</h1>
    </div>
   </div>
   
  </nav>
</footer>
    );
};

export default Footer;