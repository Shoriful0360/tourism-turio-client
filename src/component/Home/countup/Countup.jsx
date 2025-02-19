
import CountUp from "react-countup";



const Countup = () => {

    const data = {
        guide: 22,
        completed: 34,
        experience: 10,
        customer: 80,
      };
    return (
        <section className="bg-gray-100 mt-20 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Success</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600">
              <CountUp end={data.guide} duration={10} />+
            </h3>
            <p className="text-gray-600">Professional Tour Guide</p>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-green-600">
              <CountUp end={data.completed} duration={10} />k
            </h3>
            <p className="text-gray-600">Tours Our Completed</p>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-orange-600">
              <CountUp end={data.experience} duration={10} />+
            </h3>
            <p className="text-gray-600">Travelling Experienc</p>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-600">
              <CountUp end={data.customer} duration={10} />k
            </h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Countup;