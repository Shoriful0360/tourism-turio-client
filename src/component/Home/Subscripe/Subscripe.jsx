

const Subscripe = () => {
    return (
        <div
        // todo: title design
        className="hero bg-cover mt-20    bg-center min-h-screen-70 w-full"
        style={{
          backgroundImage: `url('https://www.turio-wp.egenslab.com/wp-content/uploads/2022/11/Newsletter-Image.jpg')`,
        }}>
        <div className="hero-overlay bg-opacity-40 bg-black  "></div>
        <div className="hero-content  text-neutral-content text-center">
          <div className="max-w-6xlxl gap-8 lg:flex">
            <div className="lg:py-10">
           
            <h1 className="mb-5 text-5xl uppercase  font-bold">Subscribe Our</h1>
            <h1 className="mb-5 text-5xl uppercase text-green  font-bold">Newsletter</h1>
            <p className="mb-5">
            Sign up to receive the best offers on promotion and coupons. Don’t worry! It’s not Spam
            </p>
            <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Email here..." />
  <span className="bg-green md:p-3 -mr-6 w-1/3">Subscripe Now</span>
</label>
            </div>
           <div>
            {/* card */}
          <div className="grid gap-3 mt-4 lg:mt-0 grid-cols-2">
          <div className="flex flex-col border-2 border-green p-4 items-center">
                <img src="https://demo.egenslab.com/html/tourxpro/demo/assets/images/icons/counter-icon2.svg"  alt="" />
       
                <h1 className="text-3xl font-extrabold">500+</h1>
                <h1 className="text-2xl font-bold">Awesome Tour</h1>
            </div>
          <div className="flex flex-col border-2 border-green p-4 items-center">
                <img src="https://demo.egenslab.com/html/tourxpro/demo/assets/images/icons/counter-icon3.svg"  alt="" />
       
                <h1 className="text-3xl font-extrabold">300+</h1>
                <h1 className="text-2xl font-bold">New Destinations</h1>
            </div>
          <div className="flex flex-col border-2 border-green p-4 items-center">
                <img src="https://demo.egenslab.com/html/tourxpro/demo/assets/images/icons/counter-icon1.svg"  alt="" />
       
                <h1 className="text-3xl font-extrabold">05+</h1>
                <h1 className="text-2xl font-bold">Years Experience</h1>
            </div>
          <div className="flex flex-col border-2 border-green p-4 items-center">
                <img src="https://demo.egenslab.com/html/tourxpro/demo/assets/images/icons/counter-icon4.svg"  alt="" />
       
                <h1 className="text-3xl font-extrabold">150+</h1>
                <h1 className="text-2xl font-bold">Best Mountains</h1>
            </div>
          </div>
           </div>
          </div>
        </div>
      </div>
    );
};

export default Subscripe;