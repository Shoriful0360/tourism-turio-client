import axios from "axios"



export const imageUpload=async(imgFile)=>{
    

  const {data}= await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Imgbb_key}`,imgFile,{
        headers:{
          'Content-Type':'multipart/form-data'
        }
      })
      return (data.data.display_url)
}