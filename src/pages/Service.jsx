import React from 'react';
import AllService from '../components/Services/AllService';
import { useLoaderData } from 'react-router';


const Service = () => {
    const data = useLoaderData()
    return (
        <div>
            <AllService data={data}></AllService>
        </div>
    );
};

export default Service;