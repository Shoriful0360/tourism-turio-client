import Banner from "../../component/Home/Banner/Banner";
import TourismTravel from "../../component/Home/tourism and travel/TourismTravel";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* tourism and guide */}
            <TourismTravel></TourismTravel>
        </div>
    );
};

export default Home;