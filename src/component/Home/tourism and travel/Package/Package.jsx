import { BsStopwatch } from "react-icons/bs";
import { IoIosAirplane } from "react-icons/io";
import { Link } from "react-router-dom";


const Package = ({item}) => {
  const{_id,name,image,price,discount,day,night,location}=item || {}
    return (
        <div>
          <div className="card group  shadow-xl">
  <figure className="rounded-md relative px-3">
    <img
      src={image}
      className=" rounded-lg group-hover:scale-[1.05] w-full transition-all h-60"
      alt="Shoes" />

      <button className="bg-green absolute btn border-none text-white py-2 px-2 top-1 left-4"><BsStopwatch  />{day} Days {night} Nights</button>
  </figure>
  <div className=" px-3">
    <h2 className="card-title">
{name}</h2>
<h1 className="font-semibold">{location}</h1>

<div className="divider"></div>
<div className="flex my-4 justify-between items-center">
    <div>
        <p className="text-sm font-medium">Starting From:</p>
        <p className="text-green font-bold text-xl">${price}</p>
        <p className="uppercase text-xs ">Taxes incl/pers</p>
    </div>

    <div>
       <Link to={`/package-details/${_id}`}> <button className="btn bg-green text-white">Book A Trip <IoIosAirplane /></button></Link>
    </div>
</div>
    
  </div>
</div>  
        </div>
    );
};

export default Package;