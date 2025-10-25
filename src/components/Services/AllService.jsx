import React from 'react';
import ServiceCard from './ServiceCard';


const AllService = ({data}) => {

    console.log(data)
    return (
      <div>
          <h1 className='text-3xl text-center font-semibold p-10'>The Pet Services We Offer</h1>
        <div className='p-8 lg:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10 max-w-7xl mx-auto'>
            
            {
                data.map((service)=> <ServiceCard service={service}></ServiceCard>  )
            }
        </div>
      </div>
    );
};

export default AllService;