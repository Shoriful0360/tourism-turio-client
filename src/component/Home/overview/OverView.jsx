import motion1 from '../../../assets/Image/img4.jpg'
import motion2 from '../../../assets/Image/photo-1500622944204-b135684e99fd.jpg'
import motion3 from '../../../assets/Image/motion3.avif'
import motion4 from '../../../assets/Image/motion4.jpg'
import motion5 from '../../../assets/Image/motion5.jpg'
import motion6 from '../../../assets/Image/motion6.jpg'
import motion7 from '../../../assets/Image/im3.jpg'
import { easeIn, motion } from "motion/react"
import overView from '../../../assets/video/Cinematic BANGLADESH in 4K _ DJI Mini 2 _ Part 1(720P_60FPS).mp4'
// import { motion } from "framer-motion";
const OverView = () => {

  const images = [
    motion1,motion2,motion3,motion4,motion5
    ,motion6,motion7
  ];
  const animationVariants = {
    animate: {
      x: ["0%", "-100%"], // Move from 0% to -100%
      transition: {
        x: {
          repeat: Infinity, // Infinite loop
          repeatType: "loop", // Smooth looping
          duration: 20, // Adjust scroll speed
          ease: "linear", // Smooth animation
        },
      },
    },
  };
    return (
      <div className="mt-10">
          <h1 className="text-center text-xl font-bold  my-4">Over View  </h1>
          <div className="md:flex gap-4 justify-center px-10 items-center  p-4">
        
        <div className="relative w-full flex-1 max-w-2xl mx-auto aspect-w-16 aspect-h-9">
     
      <video controls src={overView}></video>
       
     
        </div>
        <div className="flex-1 flex flex-col h-[380px]">
        <motion.img
        animate={{x:[0,300,0]}}
        transition={{duration:5,delay:1,repeat:Infinity}}
        
         
            src={motion1}
            className="max-w-sm rounded-t-3xl h-52 w-full mb-2 object-cover rounded-br-3xl border-b-4 border-l-4 border-blue-600   shadow-2xl" />
         <motion.img
         animate={{x:[0,300,0]}}
      transition={{duration:5 ,delay:1,repeat:Infinity,ease:easeIn}}
      src={motion2}
className='max-w-sm rounded-t-3xl rounded-br-3xl border-b-4 border-l-4 border-green'
         />
          
        </div>
      </div>
      <div className="overflow-hidden mt-5 relative w-full h-64 bg-gray-100">
      <motion.div
        className="flex absolute w-[100%]" // 200% width for smooth looping
        variants={animationVariants}
        animate="animate"
      >
        {/* Duplicate images for seamless looping */}
        {images.concat(images).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Scroll ${index}`}
            className="w-96 h-40 object-cover flex-shrink-0 object-center" // Adjust image width and aspect ratio
          />
        ))}
      </motion.div>
    </div>
      </div>
    );
};

export default OverView;