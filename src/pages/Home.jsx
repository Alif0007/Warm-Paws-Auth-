import React from 'react';
import Slider from '../components/Header/Slider'
import { useLoaderData } from 'react-router';
import AllService from '../components/Services/AllService';
import WinterCareTips from '../components/extra-section/WinterCareTips';
import MeetOurVets from '../components/extra-section/MeetOurVets';


const Home = () => {
    const data = useLoaderData()
    
    return (
      <div>
          <div className='relative'>
            <Slider></Slider>
            <div className='absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-amber-900'>
                <h1 className='text-3xl lg:text-8xl font-bold text-center'>Warm Paws</h1>
                <p className='lg:text-2xl text-center'>Keeping Pets Cozy, One Paw at a Time</p>
            </div>
        </div>
        <div>
            <AllService data={data}></AllService>
        </div>
        <div>
            <WinterCareTips></WinterCareTips>
        </div>
        <div>
            <MeetOurVets></MeetOurVets>
        </div>
      </div>
    );
};

export default Home;