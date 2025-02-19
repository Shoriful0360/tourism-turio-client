import Banner from "../../component/Home/Banner/Banner";
import Story from "../../component/Home/blogPost/Story";
import Countup from "../../component/Home/countup/Countup";
import Adventure from "../../component/Home/Make Adventure/Adventure";
import OverView from "../../component/Home/overview/OverView";
import Subscripe from "../../component/Home/Subscripe/Subscripe";
import Destination from "../../component/Home/topDestinataion/Destination";
import TourismTravel from "../../component/Home/tourism and travel/TourismTravel";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* tourism and guide */}
            <OverView/>
            <TourismTravel></TourismTravel>
            <Subscripe/>
            <Adventure/>
            <Destination/>
            <Countup/>
            <Story/>
        </div>
    );
};

export default Home;