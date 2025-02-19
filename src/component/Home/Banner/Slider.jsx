import { Link } from "react-router-dom";


const Slider = ({img,title1,title2}) => {
    return (
        <div
        // todo: title design
        className="hero bg-cover  bg-center min-h-screen-70 w-full"
        style={{
          backgroundImage: `url(${img})`,
        }}>
        <div className="hero-overlay bg-opacity-40 bg-black  "></div>
        <div className="hero-content  text-neutral-content text-center">
          <div className="max-w-md">
            <p className="text-white uppercase">come to exprience in turio</p>
            <h1 className="mb-5 text-5xl text-green uppercase  font-bold">{title1}</h1>
            <h1 className="mb-5 text-5xl uppercase font-bold">{title2}</h1>
            <p className="mb-5">
            Create lasting memories through immersive adventures, vibrant traditions, and the unique flavors of your chosen destination
            </p>
           <Link to={'/trip'}> <button className="btn bg-green text-white">Explore Now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Slider;