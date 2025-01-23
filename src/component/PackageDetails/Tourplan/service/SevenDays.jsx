import React from 'react';

const SevenDays = () => {
    return (
        <div className='space-y-3'>
             <h1 className="text-xl font-semibold">7-Day Tour Package:</h1>
             <p>A complete travel experience!</p>
            {/*day 1-2  */}
            <div className="">
             <h1 className="text-xl font-semibold">Day 1-2: Arrival & Exploration</h1>

     
        <ol className="ml-6">
          <li className="list-disc" >Discover major highlights and scenic attractions.</li>
      
        </ol>
      </div>
            {/*day 3-4 */}
            <div className="">
        <h1 className="text-xl font-semibold">Day 3-4: Cultural Activities</h1>
     
        <ol className="ml-6">
          <li className="list-disc" >Participate in local traditions, festivals, or culinary classes.</li>
          <li className="list-disc" >Guided tours to historical landmarks.</li>
        
        </ol>
      </div>
            {/*day 5-6  */}
            <div className="">
        <h1 className="text-xl font-semibold">Day 5-6: Adventure & Relaxation</h1>
     
        <ol className="ml-6">
          <li className="list-disc" >Adventure sports, eco-tourism, or guided nature walks.</li>
    
          <li className="list-disc" >Leisurely time at beaches, resorts, or serene landscapes.</li>
        </ol>
      </div>
            {/*day 7  */}
            <div className="">
        <h1 className="text-xl font-semibold">Day 7: Farewell</h1>
     
        <ol className="ml-6">
          <li className="list-disc" >A special farewell breakfast or event.</li>
          <li className="list-disc" >Departure with memories.</li>
      
        </ol>
      </div>
            {/*day 1  */}
            <div className="">
        <h1 className="text-xl font-semibold">Included:</h1>
     
        <ol className="ml-6">
          <li className="list-disc" >Accommodation (6 nights)</li>
          <li className="list-disc" >Meals (Full board)</li>
          <li className="list-disc" >Activities & Guided Tours</li>
        </ol>
      </div>
            
        </div>
    );
};

export default SevenDays;