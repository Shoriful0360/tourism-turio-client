import { AiTwotoneMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaUsersLine } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import useAuth from "../../hook/useAuth";
import useAxiosPublic from "../../hook/useAxiosPublic";
import toast from 'react-hot-toast'
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const InfoForm = ({item}) => {
  const {price,_id,name,image}=item || {}
  const{user}=useAuth()
const axiosPublic=useAxiosPublic()
const navigate=useNavigate()

// get guider data
const {data:guiderData}=useQuery({
  queryKey:['touristGuider'],
  queryFn:async()=>{
    const {data}=await axiosPublic.get('/guider')
 
    return data
  }
})
// console.log(guiderData)
  const handleBookingForm=async(e)=>{
e.preventDefault()
const form=e.target;
const phone=form.phone.value;
const date=form.date.value;
const person=parseInt(form.person.value);
const guiderEmail=form.guiderName.value;
const message=form.message.value;
const totalPrice=person * parseInt(price)
const formData={packageName:name,packageImg:image, name:user?.displayName,email:user?.email,phone,date,person,guiderEmail,totalPrice,message,status:'Pending'}

try{
  await axiosPublic.post('/tourist',formData)
  toast.success('Successfull! Added your Booking')
  form.reset()
  navigate('/dashboard/tourist/my-booking')

}catch (err){
 console.log(err)
}

  }
    return (
        <div className="bg-logImg py-10 px-2 ">
         <h1 className="text-xl font-semibold">Booking Now</h1>
<form onSubmit={handleBookingForm} className="space-y-2 mt-4">
  {/* name */}
<label className="input input-bordered lg:max-w-xs flex items-center gap-2">
<FiEdit className="text-green " />
  <input type="text" className="grow" value={user?.displayName}  placeholder="Name" />
</label>
{/* email */}
<label className="input input-bordered lg:max-w-xs flex items-center gap-2">
<AiTwotoneMail  className="text-green"/>
  <input type="text" className="grow" value={user?.email} placeholder="Email" />
</label>

{/* phone number */}
<label className="input input-bordered lg:max-w-xs flex items-center gap-2">
<BsTelephone className="text-green"  />
  <input type="number" name="phone" required className="grow"  placeholder="Phone" />
</label>
{/* date */}
<label className="input input-bordered flex lg:max-w-xs items-center gap-2"> 
  <input type="date" name="date" required className="grow" placeholder="Name" />
</label>
{/* person */}
<label className="input input-bordered flex lg:max-w-xs items-center gap-2">
<FaUsersLine className="text-green"  />
  <input type="number" name="person" className="grow" placeholder="1" />
</label>
{/* tourist guider */}
<label className=" input-bordered flex lg:max-w-xs items-center gap-2">

<select name="guiderName" className="select  select-bordered w-full lg:max-w-xs">
  <option disabled selected>Select Tour Guider Name</option>
  {
    guiderData?.map((item,idx)=><option value={item?.email} key={idx}>{item?.name}</option>)
  }


</select>
</label>

{/* message  */}
<textarea className="textarea w-full lg:max-w-xs textarea-bordered" name="message" placeholder="message"></textarea>

<button type="submit" className="bg-green px-4 lg:max-w-xs rounded-sm w-full py-3 text-white ">Book Now</button>
</form>
  
        </div>
    );
};

export default InfoForm;