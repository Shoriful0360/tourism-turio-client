
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { CiFacebook } from 'react-icons/ci';
import { VscGithub } from 'react-icons/vsc';
import signUpImg from '../../assets/signUp/Animation - 1736911384438.json'
import { useForm } from "react-hook-form"
import Lottie from "lottie-react";
import axios from 'axios';
import useAxiosPublic from '../../hook/useAxiosPublic';
import { imageUpload } from '../../utilites/ImageUpload';
import useAuth from '../../hook/useAuth';
import toast from 'react-hot-toast';

const SignUp = () => {
  const{createUser,user,setUser,signInWithGoogle,profileUpdate}=useAuth()
  const navigate=useNavigate()
  const axiosSecure=useAxiosPublic()


  const {register,handleSubmit,formState: { errors },} = useForm()

  //   login with email and password
    const onSubmit =async (data) => {

     const imageFile={image:data.photo[0]}
      const imgUpload=await imageUpload(imageFile)


      // console.log(data)
      if(imgUpload){
    createUser(data?.email,data?.password)
    .then(()=>{
      profileUpdate(data?.name,imgUpload)
      .then((result)=>{
       console.log(result)
        navigate('/')
      })

    })
    .catch(err=>{
      toast.error(err.message)
    })
     
      }
    }

    // signIn with google
    const handleSignIn=()=>{
      signInWithGoogle()
      .then(()=>{
        toast.success('SignUp is successfully')
      navigate('/')
      })
    }
    return (
        <div>
         <div className="hero bg-logImg min-h-screen">
            <div className="hero-content shadow-2xl bg-logImg flex-col lg:py-14 lg:px-20 lg:flex-row-reverse">
              <div className="text-center flex-1  lg:text-left">
              {/* <img src={signUpImg} alt="" /> */}
              <Lottie className='' animationData={signUpImg}/>
              </div>
              <div className="card  flex-1 w-full max-w-md ">
                <form  onSubmit={handleSubmit(onSubmit)}className="card-body">
                <h1 className='text-center text-3xl font-bold'>Sign Up</h1>

                {/* name */}
                <div className="form-control w-full">
                    <label className="label ">
                      <span className="label-text text-xl">Name <span className='text-red-500'>*</span></span>
                    </label>
                    <input type="text" name='name'   {...register("name",{ required: true })} placeholder="Name"  className="input input-bordered w-full"  />
                    {errors.name && <span className='text-red-500'>name is require</span>}
                  </div>
                  {/* email */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-xl">Email <span className='text-red-500'>*</span></span>
                    </label>
                    <input type="email" name='email'  {...register("email",{ required: true })} placeholder="email" className="input input-bordered w-full" required />
                    {errors.email?.type==='required' && <span className='text-red-500'>email is require</span>}
                  </div>
                  {/* photo url */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-xl">Photo Url <span className='text-red-500'>*</span></span>
                    </label>
                    <input  {...register("photo",{ required: true })} type="file" accept='image/*' className="file-input w-full " />
                    {errors.photo?.type==='required' && <span className='text-red-500'>Please choose a photo</span>}
                  </div>
                  {/* password */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl">Password <span className='text-red-500'>*</span></span>
                    </label>
                    <input type="password"  {...register("password",{ required: true,maxLength:20,
                      minLength:6,
                      pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                      })} name='password' placeholder="password" className="input input-bordered"  />
                    {errors.password?.type==='required' && <span className='text-red-500'>password is require</span>}
                    {errors.password?.type==='minLength' && <span className='text-red-500'>Password at least 6 character</span>}
                    {errors.password?.type==='maxLength' && <span className='text-red-500'>Password maximun 20 character</span>}
                    {errors.password?.type==='pattern' && <span className='text-red-500'>Password at least one uppercase,one lowercase,one number and special character</span>}
                   
                  </div>
                
                
                  <div className="form-control mt-6">
                    <button className="btn  bg-[#D1A054B3] text-white">Login</button>
                  </div>
                </form>
                <div className='text-center'>
                  <Link to={'/signIn'} className='text-[#D1A054] hover:cursor-pointer text-xl'>Already registered? Go to log in</Link>
                  <p className='text-xl'>Or sign in with </p>
                   <div onClick={handleSignIn} className='flex justify-center gap-6 mt-4 text-4xl'>
                            <FcGoogle></FcGoogle>
                            
                          </div>
                </div>
              </div>
            </div>
          </div>  
       
        </div>
    );
};

export default SignUp;