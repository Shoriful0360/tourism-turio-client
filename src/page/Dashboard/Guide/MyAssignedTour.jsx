import { Helmet } from "react-helmet-async";


const MyAssignedTour = () => {
    return (
        <div className='container mx-auto px-4 sm:px-8'>
        <Helmet>
          <title>Dashboard || my-assigned-tour</title>
        </Helmet>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
        <th>Update Role</th>
        
      </tr>
    </thead>
    <tbody>
        {/* {
            users?.map((userData,idx)=><UserDateRow key={idx} idx={idx} userData={userData} refetch={refetch} />)
        } */}
   
    
    </tbody>
  

  </table>
</div>
      </div>
    );
};

export default MyAssignedTour;