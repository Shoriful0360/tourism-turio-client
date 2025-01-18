
const TourPlan = ({item}) => {
    return (
        <div className="">
   <h1>Tour Plan</h1> 
   <div className="grid grid-cols-12 ">
  <div className="col-span-1 w-10 h-10  bg-green flex justify-center items-center ">
  <h1 className=" ">1</h1>
  </div>
    <div className="col-span-11">
      <h1 className="text-xl font-semibold">Day 1: Departure</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a rutrum arcu. Donec ut lobortis ante, non imperdiet est. Praesent vulputate at enim sit amet mattis rutrum nec.</p>
      <ol className="ml-6">
        <li className="list-disc" >Lorem ipsum dolor sit amet, consectetur lobortis ante adipiscing elit</li>
      </ol>
    </div>
   </div>
        </div>
    );
};

export default TourPlan;