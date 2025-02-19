

const Adventure = () => {
    return (
        <div className="lg:flex mt-20 relative px-3 bg-[#F3F4F6] py-10 md:px-10 ">
           <div className=" lg:w-5/12 lg:h-[600px]  px-2 bg-white shadow-md rounded-md flex flex-col justify-center  lg:px-20">

    <div className="lg:pr-20">
    <h1 className="text-3xl font-semibold">Making Adventure tours activites affordable.</h1>
            <div className="divider divider-success w-20"></div>
            <p>Find an adventure, create a hobby that is related to nature in its vert pristiene shape for your goodness. Tempor incididunt ut labore. Et dolore magna aliqua. Quitts ipsum suspendisse ultrices gravida.</p>
    </div>
            </div> 
            <div className="lg:-ml-20 lg:mt-20 relative group overflow-hidden rounded-lg">
                <img src="https://adventor.wpengine.com/wp-content/uploads/2021/07/overlap-image.jpg" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" alt="" />
                <div className="absolute inset-0 z-10 bg-yellow-600 bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-10 flex items-center justify-center">
 
  </div>
            </div>
        </div>
    );
};

export default Adventure;