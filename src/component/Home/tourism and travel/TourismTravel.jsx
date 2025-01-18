
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Package from './Package/Package';
import OurGide from './tour guide/OurGide';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hook/useAxiosPublic';
import LoadingSpinner from '../../loading/LoadingSpinner';
const TourismTravel = () => {
const axiosPublic=useAxiosPublic()
  // get package data
  const {data:packages,isLoading}=useQuery({
    queryKey:['package'],
    queryFn:async()=>{
      const {data}=await axiosPublic('/package')
      return data
    }
  })

  if(isLoading) return <LoadingSpinner/>
  console.log(packages)
    return (
        <div className='mt-10 px-3 md:px-10'>
            <h1 className="text-2xl font-black text-center uppercase">tourism & travel guide</h1>
            {/* react tabs */}
            <Tabs>
  <div className='text-center font-bold text-xl mt-8'>
  <TabList>
      <Tab>Our Package</Tab>
      <Tab>Meet Our Tour Guide</Tab>
    </TabList>
  </div>

    <TabPanel>
     <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
     {
      packages?.map(item=><Package key={item._id} item={item}></Package>)
     }
 
     </div>
    </TabPanel>
    <TabPanel>
    <OurGide></OurGide>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default TourismTravel;