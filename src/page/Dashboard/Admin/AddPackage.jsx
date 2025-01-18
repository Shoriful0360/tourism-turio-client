import { useState } from "react";
import AddPackageForm from "../../../component/form/AddPackageForm";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { imageUpload } from "../../../utilites/ImageUpload";
import useAuth from "../../../hook/useAuth";
import toast from 'react-hot-toast'


const AddPackage = () => {
    const{user}=useAuth()
    const [loading, setLoading] = useState(false)
    const [imgUpload, setImgUpload] = useState({
        image: { name: 'Upload Image' }
    })
    // console.log(imgUpload.image.name)
    const axiosSecure = useAxiosSecure()
    const handleSubmitForm = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries())
        const imgUrl = await imageUpload({ image: initialData.image })
      

        if (imgUrl) {
            
            initialData.image = imgUrl
            const {data}=await axiosSecure.post(`/admin/package/${user?.email}`,initialData)
            if(data.insertedId){
                toast.success('Success! Added your  package')
            }
           e.target.reset()
           setImgUpload({image: { name: 'Upload Image' }})
        }
    }
    return (
        <div>
            <AddPackageForm handleSubmitForm={handleSubmitForm} loading={loading} setImgUpload={setImgUpload} imgUpload={imgUpload} />
        </div>
    );
};

export default AddPackage;
