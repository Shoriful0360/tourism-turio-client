import { BsStopwatch } from "react-icons/bs";
import { IoIosAirplane } from "react-icons/io";


const Package = () => {
    return (
        <div>
          <div className="card group  shadow-xl">
  <figure className="rounded-md relative px-3">
    <img
      src="https://triprex.b-cdn.net/wp-content/uploads/2024/02/Tour-Package-10.webp"
      className=" rounded-lg group-hover:scale-[1.05] transition-all h-60"
      alt="Shoes" />

      <button className="bg-green absolute btn border-none text-white py-2 px-2 top-1 left-4"><BsStopwatch  />3 Days 4 Nights</button>
  </figure>
  <div className=" px-3">
    <h2 className="card-title">
Discover Serenity, Exploration, and Enlightenment.</h2>

<div className="divider"></div>
<div className="flex justify-between items-center">
    <div>
        <p className="text-sm font-medium">Starting From:</p>
        <p className="text-green font-bold text-xl">$340</p>
        <p className="uppercase text-xs ">Taxes incl/pers</p>
    </div>

    <div>
        <button className="btn bg-green text-white">Book A Trip <IoIosAirplane /></button>
    </div>
</div>
    
  </div>
</div>  
        </div>
    );
};

export default Package;