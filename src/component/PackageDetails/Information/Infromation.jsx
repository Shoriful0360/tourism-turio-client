import { MdOutlineWatchLater } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { FaGripfire } from "react-icons/fa";
const Infromation = () => {
    return (
        <div className="mt-10 px-2 space-y-2">
      <div className="flex justify-between">
      <h1 className="text-3xl font-bold font-serif  uppercase">  title</h1>
      <h1><span className="text-lg font-semibold">$330</span><small className="text-gray-500 ">/per person</small></h1>
      </div>
          <div className="flex gap-4">
        <h1 className="flex items-center gap-2"> <MdOutlineWatchLater className="text-green" /> <span className="text-gray-500 font-serif">3Days 4 Nights</span></h1>
        <h1 className="flex items-center gap-2"> <FaUserGroup  className="text-green" /> <span className="text-gray-500 font-serif">16+ Age</span></h1>
        <h1 className="flex items-center gap-2"> <FaGripfire className="text-green" /> <span className="text-gray-500 font-serif">Discover</span></h1>
      </div>
      <p className=" text-justify ">
      Efficiently productivate reliable content rather than process-centric e-commerce. Energistically monetize go forward total linkage vis-a-vis 24/365 synergy. Efficiently reconceptualize sustainable content and leading-edge web-readiness. Holisticly build compelling processes and functional innovation. Monotonectally maximize corporate web-readiness and efficient models.

Interactively myocardinate seamless value whereas transparent total linkage. Authoritatively predominate functional leadership skills with goal-oriented solutions. Distinctively provide access to future-proof architectures through multifunctional customer service. Completely re-engineer emerging total linkage without diverse action items. Uniquely repurpose leading-edge customer service vis-a-vis robust process improvements.

Authoritatively disseminate cutting-edge meta-services for top-line materials. Professionally strategize mission-critical "outside the box" thinking for effective niches. Progressively pursue transparent systems vis-a-vis interdependent services. Conveniently evisculate state of the art functionalities after low-risk high-yield scenarios. Objectively aggregate premier technology whereas highly efficient functionalities.

Uniquely coordinate accurate schemas whereas performance based materials. Energistically supply visionary web services via bricks-and-clicks materials. Dynamically e-enable customized synergy and team driven e-markets. Appropriately leverage other's excellent mindshare whereas transparent web-readiness. Rapidiously seize quality channels through premium products.

Quickly fabricate process-centric information without distinctive infrastructures. Proactively harness proactive deliverables through interactive innovation. Collaboratively harness goal-oriented opportunities for market-driven vortals. Globally syndicate multifunctional models through user friendly interfaces. Credibly extend ethical imperatives and vertical initiatives.

Enthusiastically aggregate e-business alignments for progressive potentialities. Holisticly create user friendly collaboration and idea-sharing and intuitive innovation. Synergistically enable resource-leveling niches rather than maintainable systems. Holisticly streamline intermandated materials rather than 24/365 mindshare. Progressively pontificate an expanded array of human capital before quality e-tailers.


      </p>
        
        <div className="mt-4">
        <div className="divider"></div>
        <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Departure/Return Location</h1>
            <p className="text-gray-500 font-semibold text-xl">Rangamati,Bangladesh</p>
        </div> 
        <div className="divider"></div>
        </div>
        </div>
    );
};

export default Infromation;