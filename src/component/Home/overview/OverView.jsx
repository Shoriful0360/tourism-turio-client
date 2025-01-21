

const OverView = () => {
    return (
        <div className="flex justify-center items-center bg-gray-100 p-4">
        <div className="relative w-full max-w-2xl mx-auto aspect-w-16 aspect-h-9">
      <h1 className="text-center text-xl font-bold  my-4">Over View this Website </h1>
      {/* <video controls src="../../../assets/video/Cinematic BANGLADESH in 4K _ DJI Mini 2 _ Part 1(720P_60FPS).mp4"></video> */}
       
         <iframe
          className=" w-full h-[400px]"
          src='https://www.youtube.com/watch?v=2hgJs1vlqYs'
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>
      </div>
    );
};

export default OverView;