import React from 'react';

const FiveDays = () => {
    return (
        <div className='space-y-4'>
           <div>
           <h1 className='text-xl font-bold'>5-Day Tour Package:</h1>
           <p>For a more immersive experience!</p>
           </div>
       
              {/* day 1-2 */}
        <div className=" ">
      
       
      <div className="col-span-11">
        <h1 className="text-xl font-semibold">Day 1-2: Arrival & Main Attractions</h1>
     
        <ol className="ml-6">
          <li className="list-disc" >Explore iconic attractions and historical landmarks.</li>
          <li className="list-disc" >Enjoy cultural performances and food tastings</li>
         
        </ol>
      </div>
     </div>
              {/* day 3 */}
        <div className=" ">
      
       
      <div className="">
        <h1 className="text-xl font-semibold">Day 3: Adventure Day</h1>
     
        <ol className="ml-6">
          <li className="list-disc" >Engage in exciting activities like trekking, water sports, or local festivals.</li>
       
        </ol>
      </div>
     </div>
              {/* day 4*/}
        <div className=" ">
      
       
      <div className="">
        <h1 className="text-xl font-semibold">Day 4-5: Arrival & Main Attractions</h1>
     
        <ol className="ml-6">
          <li className="list-disc" >Visit heritage sites, museums, or workshops.</li>
          <li className="list-disc" >Interact with local artisans or communities.</li>
       
        </ol>
      </div>
     </div>
              {/* day 5*/}
        <div className=" ">
      
       
      <div className="">
        <h1 className="text-xl font-semibold">Day 5: Relaxation & Departure</h1>
     
        <ol className="ml-6">
          <li className="list-disc" >Visit a tranquil spot or wellness retreat.</li>
          <li className="list-disc" >Wrap-up and transfer to departure.</li>
  
        </ol>
      </div>
     </div>
              {/* includes*/}
        <div className=" ">
      
       
      <div className="">
        <h1 className="text-xl font-semibold">Included:</h1>
     
        <ol className="ml-6">
          <li className="list-disc" >Accommodation (4 nights)</li>
          <li className="list-disc" >Meals (Breakfast & Dinner)</li>
          <li className="list-disc" >Transportation (local travel)</li>
        </ol>
      </div>
     </div>
          
        
        </div>
    );
};

export default FiveDays;