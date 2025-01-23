

const ThreeDays = () => {
    return (
        <div className=" space-y-4" >
    
        {/* day 1 */}
        <div className="">
    
       
         <div className="">
           <h1 className="text-xl font-semibold">Day 1: Arrival & Local Sightseeing</h1>
        
           <ol className="ml-6">
             <li className="list-disc" >Welcome session at the destination</li>
             <li className="list-disc" >Explore local landmarks and cultural attractions.</li>
             <li className="list-disc" >Evening leisure or optional activity.</li>
           </ol>
         </div>
        </div>
        {/* day 2 */}
        <div className=" ">
      
       
         <div className="">
           <h1 className="text-xl font-semibold">Day 2:   Adventure/Activity Day</h1>
        
           <ol className="ml-6">
             <li className="list-disc" >Visit to nearby tourist attractions or engage in adventure activities like hiking, boating, or local workshops</li>
             <li className="list-disc" >Traditional lunch or dinner experience</li>
        
           </ol>
         </div>
        </div>
        {/* day 3 */}
        <div className=" ">
       
       
         <div className="col-span-11">
           <h1 className="text-xl font-semibold">Day 3: Relax & Departure</h1>
        
           <ol className="ml-6">
             <li className="list-disc" >Morning relaxation at scenic locations or spa.</li>
             <li className="list-disc" >Shopping for local souvenirs.</li>
             <li className="list-disc" >Drop-off at departure point</li>
           </ol>
         </div>
         <div>
         <h1 className="text-xl font-semibold">Included</h1>
         <ol className="ml-6">
             <li className="list-disc" >Accommodation (2 nights)</li>
             <li className="list-disc" >Meals (Breakfast & Dinner)</li>
             <li className="list-disc" >Guided Tours</li>
           </ol>
         </div>
        </div>
     
      
      
             </div>
    );
};

export default ThreeDays;