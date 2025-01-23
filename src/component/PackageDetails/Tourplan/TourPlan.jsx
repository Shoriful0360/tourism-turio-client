import FiveDays from "./service/FiveDays";
import SevenDays from "./service/SevenDays";
import ThreeDays from "./service/ThreeDays";
import TwoDays from "./service/TwoDays";

const TourPlan = ({item}) => {
  const{day}=item || {}
    return (
        <div className="">
<h1 className="text-xl font-bold my-4">Plan Tour</h1>
{day <=2 && <TwoDays/> }
{day >=3 && day<4 && <ThreeDays/> }

{day >=4 && day<=5 && <FiveDays/> }
{day >=6 && <SevenDays/> }
 
        </div>
    );
};

export default TourPlan;