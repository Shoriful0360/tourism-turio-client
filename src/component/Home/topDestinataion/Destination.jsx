

const Destination = () => {
    const image=[
        {
            img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e2/f8/43/longest-sea-beach-in.jpg?w=300&h=300&s=1",
            place:'Cox-s Bazar'
        },
        {
            img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/71/f5/84/caption.jpg?w=300&h=300&s=1",
            place:'Srimangal'
        },
        {
            img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/bd/d1/fc/sajek.jpg?w=500&h=400&s=1",
            place:'Sajek'
        },
    ]
    return (
        <div className="mt-20 ">
           <h1 className="text-3xl text-center font-bold my-4">Top Destination</h1> 
         <div className="md:flex flex-wrap justify-center gap-10">
         {

image?.map((img,idx)=><div key={idx} className="relative group w-72 h-72 overflow-hidden rounded-full">
    <img src={img?.img} className="w-full h-full rounded-full transition-all duration-300 group-hover:opacity-80" alt="image" />
    <h1 className="absolute inset-0 flex justify-center group-hover:text-white group-hover:opacity-100 items-center text-2xl text-white font-bold">{img.place}</h1>
    <div className="absolute inset-0 bg-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-70 flex items-center justify-center">
   <h1 className={' text-2xl text-white font-bold'}>{img.place}</h1>
  </div>
</div>)
   }
         </div>
        </div>
    );
};

export default Destination;