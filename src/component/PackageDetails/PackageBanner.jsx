import { CiLocationOn } from "react-icons/ci";
import { FaInfoCircle } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import InfoForm from "../form/InfoForm";
import Infromation from "./Information/Infromation";
import TourPlan from "./Tourplan/TourPlan";
import Location from "./Location/Location";
import Gallery from "./Gallery/Gallery";



const PackageBanner = ({item}) => {



    return (
     <div>
           <div
        // todo: title design
        className="hero bg-cover mt-20   bg-center min-h-screen-70 w-full"
        style={{
          backgroundImage: `url('https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/Newsletter-Image.jpg')`,
        }}>
        <div className="hero-overlay bg-opacity-40 bg-black  "></div>
       
      </div>
        
      {/* <div className="grid grid-cols-2 md:w-11/12 -mt-14 lg:w-8/12 mx-auto md:grid-cols-4">
          <NavLink to={'/package-details/information'}>
          <div className="flex items-center cursor-pointer border-r-2 font-serif bg-[#F6F6F6] p-4 uppercase  gap-2">
            <FaInfoCircle className="text-green" />
                <p className="text-black">Information</p>
            </div>
          </NavLink>
            
           <NavLink to={'/package-details/tourplan'}>
           <div className="flex items-center border-r-2 cursor-pointer font-serif bg-[#F6F6F6] p-4 uppercase  gap-2">
            <IoBookOutline className="text-green" />
                <p className="text-black">Tour  plan</p>
            </div>
           </NavLink>
          <NavLink to={'/package-details/location'}>
          <div className="flex items-center border-r-2 cursor-pointer font-serif bg-[#F6F6F6] p-4 uppercase  gap-2">
            <CiLocationOn className="text-green" />
                <p className="text-black">location</p>
            </div>
          </NavLink>
          <NavLink to={'/package-details/gallery'}>
          <div className="flex items-center cursor-pointer font-serif bg-[#F6F6F6] p-4 uppercase  gap-2">
            <GrGallery className="text-green" />
                <p className="text-black">gallery</p>
            </div> 
          </NavLink>
        </div> */}

        <div className="">
        <Tabs>
  <div className='text-center font-bold text-xl mt-8'>
  <TabList className={'grid  grid-cols-2 md:w-11/12 -mt-24 lg:w-8/12 mx-auto md:grid-cols-4'}>
      <Tab><div className="flex items-center cursor-pointer border-r-2 font-serif bg-[#F6F6F6] p-4 uppercase  gap-2">
            <FaInfoCircle className="text-green" />
                <p className="text-black">Information</p>
            </div></Tab>
      <Tab> <div className="flex items-center border-r-2 cursor-pointer font-serif bg-[#F6F6F6] p-4 uppercase  gap-2">
            <IoBookOutline className="text-green" />
                <p className="text-black">Tour  plan</p>
            </div></Tab>
      <Tab> <div className="flex items-center border-r-2 cursor-pointer font-serif bg-[#F6F6F6] p-4 uppercase  gap-2">
            <CiLocationOn className="text-green" />
                <p className="text-black">location</p>
            </div></Tab>
      <Tab>   <div className="flex items-center cursor-pointer font-serif bg-[#F6F6F6] p-4 uppercase  gap-2">
            <GrGallery className="text-green" />
                <p className="text-black">gallery</p>
            </div> </Tab>
    
    </TabList>
  </div>

<div className="flex md:w-8/12 mt-10 mx-auto gap-4">
  <div className="flex-1">
  <TabPanel>
    <Infromation item={item}/>
    </TabPanel>
    <TabPanel>
   <div>
   <TourPlan item={item}/>
   </div>
    </TabPanel>
    <TabPanel>
   <div>
   <Location item={item}/>
   </div>
    </TabPanel>
    <TabPanel>
   <div>
  <Gallery item={item}/>
   </div>
    </TabPanel>
  </div>
  <InfoForm item={item}/>
</div>
     
     
  </Tabs>
        </div>
        <div>
    
        </div>
     </div>
    );
};

export default PackageBanner;