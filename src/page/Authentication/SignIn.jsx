import { FcGoogle } from 'react-icons/fc';
import loginImg from '../../assets/signIn/Animation - 1736911555967.json'
import { CiFacebook } from 'react-icons/ci';
import { VscGithub } from 'react-icons/vsc';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import useAuth from '../../hook/useAuth';
import toast from 'react-hot-toast';



const SignIn = () => {
  const {signInWithGoogle,userSignIn}=useAuth()
    const [visible,setVisible]=useState(true)

const navigate=useNavigate()
const location=useLocation()
const from=location.state?.from?.pathname || '/'

  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])

  const handleLogin=(e)=>{
    e.preventDefault()

    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    userSignIn(email,password)
    .then(()=>{
     toast.success('signUp is successfully')
     navigate(from)
    })
    .then (err=>{
      toast.error(err?.message)
    })
  }

  // login with google

const handleGogleLogin=()=>{
  signInWithGoogle()
  .then(()=>{
    toast.success('signIn is Success')
    navigate(from)
  })
}
  // validate captcha
  const handleCaptcha=(value)=>{

setVisible(true)
if(value.length !==6){
  return
}
if (validateCaptcha(value)==true) {
  setVisible(false)
}

  }
    return (
        <div>
        <div className="hero bg-logImg min-h-screen">
  <div className="hero-content shadow-2xl bg-logImg flex-col lg:py-14 lg:px-20 lg:flex-row">
    <div className="text-center flex-1 lg:text-left">
    <Lottie animationData={loginImg}/>
    </div>
    <div className="card  flex-1 w-full max-w-md ">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className='text-center text-3xl font-bold'>Login</h1>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
         
        </div>
      
        <div className="form-control">
          <label className="label ">
          <LoadCanvasTemplate />
          </label>

         
          <input type="text"  onChange={(e)=>handleCaptcha(e.target.value)} placeholder="type here" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button disabled={visible} className="btn  bg-[#D1A054B3] text-white">Login</button>
        </div>
      </form>
      <div className='text-center'>
        <Link to={'/signUp'} className='text-[#D1A054] hover:cursor-pointer text-xl'>New here? Create a New Account</Link>
        <p className='text-xl'>Or sign in with </p>
        <div onClick={handleGogleLogin} className='flex justify-center gap-6 mt-4 text-4xl'>
          <FcGoogle ></FcGoogle>
        
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignIn;