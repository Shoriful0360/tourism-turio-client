
// import { Calendar } from 'react-date-range'
import { FaUserAlt, FaDollarSign } from 'react-icons/fa'
import { BsFillCartPlusFill, BsFillHouseDoorFill } from 'react-icons/bs'
import { FaUsersGear } from 'react-icons/fa6';
import { MdOutlineAutoStories } from 'react-icons/md';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../../component/loading/LoadingSpinner';
const Statistic = () => {
const axiosSecure=useAxiosSecure()
    const {data:statistic,isLoading}=useQuery({
        queryKey:['statistic'],
      queryFn:async()=>{
        const {data}=await axiosSecure.get('statistic')
        return data
      }  
    })
   if(isLoading) return <LoadingSpinner/>
   const {totalPackage,totalGuide,totalstories,totalClient}=statistic || {}
    return (
        <div>
        <div className='mt-12'>
          {/* small cards */}
          <div className='mb-12 lg:w-9/12 mx-auto grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3  flex-grow'>
            {/* Sales Card */}
            <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
              <div
                className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400 text-white shadow-orange-500/40`}
              >
                <FaDollarSign className='w-6 h-6 text-white' />
              </div>
              <div className='p-4 text-right'>
                <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                  Total Payment
                </p>
                <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                  $120
                </h4>
              </div>
            </div>
            {/* Total Orders */}
            <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
              <div
                className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400 text-white shadow-blue-500/40`}
              >
                <BsFillCartPlusFill className='w-6 h-6 text-white' />
              </div>
              <div className='p-4 text-right'>
                <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                  Total Package
                </p>
                <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                 {totalPackage}
                </h4>
              </div>
            </div>
            {/* Total Plants */}
            <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
              <div
                className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-pink-600 to-pink-400 text-white shadow-pink-500/40`}
              >
                <BsFillHouseDoorFill className='w-6 h-6 text-white' />
              </div>
              <div className='p-4 text-right'>
                <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                  Total Tour Guide
                </p>
                <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                  {totalGuide}
                </h4>
              </div>
            </div>
            {/* Users Card */}
            <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
              <div
                className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-400 to-yellow-700 text-white shadow-pink-500/40`}
              >
                <FaUsersGear className='w-6 h-6 text-white' />
              </div>
              <div className='p-4 text-right'>
                <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                  Total Client
                </p>
                <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                  {totalClient}
                </h4>
              </div>
            </div>
            {/* stories */}
            <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
              <div
                className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green to-indigo-700 text-white shadow-pink-500/40`}
              >
                <MdOutlineAutoStories className='w-6 h-6 text-white' />
              </div>
              <div className='p-4 text-right'>
                <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                  Total Stories
                </p>
                <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                {totalstories}
                </h4>
              </div>
            </div>

          </div>
  
        
        </div>
      </div>
    );
};

export default Statistic;