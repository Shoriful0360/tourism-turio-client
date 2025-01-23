

const TwoDays = () => {
    return (
        <div>
            <h1>
            2-Day Tour Package</h1>
            <p>A short and sweet getaway!</p>

            {/*day 1  */}
            <div className="">
        <h1 className="text-xl font-semibold">Day 1: Arrival & Exploration</h1>
        <li className="list-disc my-2" >Morning:</li>
        <ol className="ml-6">
          <li className="list-disc" >Arrival at the destination and warm welcome.</li>
          <li className="list-disc" >Check-in to the accommodation and refresh.</li>
          <li className="list-disc" >Welcome drink and short orientation about the trip.</li>
        </ol>
{/* afternoon */}
        <li className="list-disc  my-2" >Afternoon:</li>
        <ol className="ml-6">
          <li className="list-disc" >Visit local landmarks or iconic attractions (e.g., historic sites, natural wonders, or cultural hubs).</li>
          <li className="list-disc" >Enjoy a traditional lunch at a local restaurant.</li>
       
        </ol>

        {/* evennign */}
     
        <ol className="ml-6">
          <li className="list-disc" >Attend a cultural performance or sunset tour (depending on the location).</li>
          <li className="list-disc" >Dinner with a view at a scenic or rooftop restaurant.</li>
  
        </ol>
      
      </div>
            {/*day 2  */}
            <div className="">
        <h1 className="text-xl font-semibold">Day 2: Adventure & Departure</h1>
        <li className="list-disc  my-2" >Morning:</li>
        <ol className="ml-6">
          <li className="list-disc" >Breakfast at the hotel.</li>
          <li className="list-disc" >Engage in a short adventure activity (e.g., trekking, boating, cycling, or guided nature walk).</li>
        
        </ol>
        {/* afternoon */}
        <li className="list-disc  my-2" >Afternoon:</li>
        <ol className="ml-6">
          <li className="list-disc" >Visit a nearby shopping hub for local handicrafts or souvenirs.</li>
          <li className="list-disc" >Relax with a farewell lunch.</li>
  
        </ol>
        {/* evenning */}
        <li className="list-disc  my-2" >Evening:</li>
        <ol className="ml-6">
          <li className="list-disc" >Return transfer to the departure point (airport, train station, or hotel).</li>
          <li className="list-disc" ></li>
      
        </ol>
      </div>
            {/*day 1  */}
            <div className="">
        <h1 className="text-xl font-semibold">Inclusions</h1>
     
        <ol className="ml-6">
          <li className="list-disc" >Accommodation (1 night)</li>
          <li className="list-disc" >Meals (Breakfast, Lunch, and Dinner)</li>
          <li className="list-disc" >Entry fees to attractions</li>
          <li className="list-disc" >Local guide services</li>
          <li className="list-disc" >Transportation for all activities</li>
        </ol>
      </div>
        </div>
    );
};

export default TwoDays;