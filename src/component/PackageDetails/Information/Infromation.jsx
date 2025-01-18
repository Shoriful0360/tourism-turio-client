import { MdOutlineWatchLater } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { FaGripfire } from "react-icons/fa";

const Infromation = ({item}) => {
    const {name,day,night,description,price}=item || {}

    return (
        <div className="">
    
            <div className=" px-2  space-y-2">
      <div className="flex justify-between">
      <h1 className="text-xl font-bold font-serif  uppercase">  {name}</h1>
      <h1 className=""><span className="text-lg font-semibold">${price}</span><small className="text-gray-500 ">/per person</small></h1>
      </div>
          <div className="flex gap-4">
        <h1 className="flex items-center gap-2"> <MdOutlineWatchLater className="text-green" /> <span className="text-gray-500 font-serif">{day}Days {night} Nights</span></h1>
        <h1 className="flex items-center gap-2"> <FaUserGroup  className="text-green" /> <span className="text-gray-500 font-serif">16+ Age</span></h1>
        <h1 className="flex items-center gap-2"> <FaGripfire className="text-green" /> <span className="text-gray-500 font-serif">Discover</span></h1>
      </div>
      <p className=" text-justify ">
     {description}

      </p>
        
        <div className="mt-4">
        <div className="divider"></div>
        <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Departure Time</h1>
            <p className="text-gray-500 font-semibold text-xl">	Please arrive by 9:15 AM for a departure at 9:30 AM</p>
        </div> 
        <div className="divider"></div>
 
        <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Return Time</h1>
            <p className="text-gray-500 font-semibold text-xl">	Approximately 8:30 PM</p>
        </div> 
     
        <div className="divider"></div>
        <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Dress Code</h1>
            <p className="text-gray-500 font-semibold text-xl">	Lorem ipsum dolor sit amet, consectetur adipiscing elith</p>
        </div> 
   
        <div className="divider"></div>

        {/* to do include */}
        {/* <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Include</h1>
            <p className="text-gray-500 font-semibold text-xl">Rangamati,Bangladesh</p>
        </div>  */}
   
        </div>
        </div>

    
      
        </div>
        
    );
};

export default Infromation;