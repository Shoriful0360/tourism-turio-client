import Banner from "../../component/Home/Banner/Banner";
import Story from "../../component/Home/blogPost/Story";
import OverView from "../../component/Home/overview/OverView";
import Subscripe from "../../component/Home/Subscripe/Subscripe";
import TourismTravel from "../../component/Home/tourism and travel/TourismTravel";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* tourism and guide */}
            <OverView/>
            <TourismTravel></TourismTravel>
            <Subscripe/>
            <Story/>
        </div>
    );
};

export default Home;