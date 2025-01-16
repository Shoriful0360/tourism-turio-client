import { AiTwotoneMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaUsersLine } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";


const InfoForm = () => {
    return (
        <div className="bg-logImg py-10 ">
         <h1 className="text-xl font-semibold">Booking Now</h1>
<form className="space-y-2 mt-4">
<label className="input input-bordered flex items-center gap-2">
<FiEdit className="text-green " />
  <input type="text" className="grow" placeholder="Name" />
</label>
<label className="input input-bordered flex items-center gap-2">
<AiTwotoneMail  className="text-green"/>
  <input type="text" className="grow" placeholder="Email" />
</label>
<label className="input input-bordered flex items-center gap-2">
<BsTelephone className="text-green"  />
  <input type="text" required className="grow" placeholder="Phone" />
</label>
<label className="input input-bordered flex items-center gap-2"> 
  <input type="date" className="grow" placeholder="Name" />
</label>
<label className="input input-bordered flex items-center gap-2">
<FaUsersLine className="text-green"  />
  <input type="number" className="grow" placeholder="1" />
</label>
<textarea className="textarea w-full textarea-bordered" placeholder="message"></textarea>

<button type="submit" className="bg-green px-4 rounded-sm w-full py-3 text-white ">Book Now</button>
</form>
  
        </div>
    );
};

export default InfoForm;