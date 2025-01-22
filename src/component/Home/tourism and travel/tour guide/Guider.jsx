import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";


const Guider = ({guide}) => {
  const {name,email,image}=guide || {}
    return (
        <div>
          <div className="  group mt-4 shadow-2xl">
  <figure className="relative  pt-4">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl object-cover object-center h-60 w-full " />
      <Link to={`mailto:${email}?subject=Hello&body=I%20would%20like%20to%20reach%20out%20to%20you.`}><button className="border-none btn left-4 absolute bottom-2 bg-green text-white text-lg">Contact</button></Link>
     {/* link  */}
     <div className=" ">
     <div className="flex flex-col absolute top-16 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all group-hover:duration-700  right-4 gap-3">
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
     </div>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>Tour Guide</p>
   
  </div>
</div>  
        </div>
    );
};

export default Guider;