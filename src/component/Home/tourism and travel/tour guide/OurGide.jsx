import Guider from "./Guider";


const OurGide = () => {
    return (
        <div>
         <div className="text-center space-y-2 md:w-8/12 mt-6 mx-auto">
         <h1 className="text-green font-extrabold font-serif">Read The Top</h1> 
           <h1 className="text-2xl font-extrabold">Tour Guide</h1> 
           <p>A tour guide is a professional responsible for providing visitors with engaging, informative, and enjoyable experiences in a specific location or attraction. They are skilled at offering insights into the history, culture, and significance of landmarks, natural sites, museums, and other tourist destinations.</p>
         </div>
         {/* tour guider */}
            <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
            <Guider/>
            <Guider/>
            <Guider/>
            <Guider/>
            </div>
        </div>
    );
};

export default OurGide;