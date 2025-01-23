import { useState } from "react";
import AddPackageForm from "../../../component/form/AddPackageForm";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { imageUpload } from "../../../utilites/ImageUpload";
import useAuth from "../../../hook/useAuth";
import toast from 'react-hot-toast'


const AddPackage = () => {
    const{user}=useAuth()
    const[images,setImages]=useState([])
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
        // const imgUrl = await imageUpload({ image: initialData.image })
      

        if (images) {
            
            initialData.image = images
            const {data}=await axiosSecure.post(`/admin/package/${user?.email}`,initialData)
            if(data.insertedId){
                toast.success('Success! Added your  package')
                setImages([])
            }
           e.target.reset()
           setImgUpload({image: { name: 'Upload Image' }})
        }
    }

    
    const handleImageUpload=async(e)=>{
        const files = e.target.files;
        
     let url=[]
     for (let i = 0; i < files.length; i++) {
      const img={image:files[0],}
  
      const imgUrl=await imageUpload(img)
     url.push(imgUrl)
      // urls.push(data.data.display_url);
    }
    setImages((prevImages) => [...prevImages, ...url]); 
  
       
      }
    return (
        <div>
            <h1 className="text-center text-xl font-semibold">Add Package</h1>
            <AddPackageForm handleSubmitForm={handleSubmitForm} handleImageUpload={handleImageUpload} images={images} loading={loading} setImgUpload={setImgUpload} imgUpload={imgUpload} />
        </div>
    );
};

export default AddPackage;
