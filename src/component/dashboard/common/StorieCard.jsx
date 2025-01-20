import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useState } from "react";
import UpdateStoriesModal from "../../modal/UpdateStoriesModal";


const StorieCard = ({story,refetch}) => {
    const {title,description,image,_id}=story || {}
    const axiosSecure=useAxiosSecure()
    const[isOpen,setIsOpen]=useState(false)

       const handleDelet=async()=>{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be reject application this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Reject this!"
              }).then(async(result) => {
                if (result.isConfirmed) {
                    const {data}= await axiosSecure.delete(`/stories/${_id}`)
                    if(data.deletedCount){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been successed",
                            showConfirmButton: false,
                            timer: 1500
                          });
                        refetch()
                    }
                    
                }
              });
         
        }
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
          className="h-56 w-full object-cover object-top"
            src={image[0]}
            alt="Shoes" />
            
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description.substring(0,75)}...</p>
          <div className="card-actions justify-between">
            <button onClick={()=>setIsOpen(true)} className="py-2 rounded-sm px-3 bg-green text-white">Update</button>
            <button onClick={handleDelet} className=" py-2 rounded-sm px-3 bg-green text-white">Delet</button>
          </div>
        </div>
        <UpdateStoriesModal story={story } setIsOpen={setIsOpen} isOpen={isOpen}/>
      </div>
    );
};

export default StorieCard;