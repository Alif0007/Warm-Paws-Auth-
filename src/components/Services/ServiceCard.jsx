import React from 'react';
import { Link } from 'react-router';
Link

const ServiceCard = ({service}) => {
    const { serviceId, serviceName, image, rating, price } = service;
    return (
        <div>
             <div className="card bg-base-100 shadow-xl hover:scale-[1.02] duration-200 border h-full cursor-pointer">
      <figure>
        <img
          src={image}
          alt={serviceName}
          className="h-48 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-xl font-bold text-primary">
          {serviceName}
        </h2>

        <div className="flex items-center justify-between">
          <p className="font-semibold text-sm">
            ⭐ <span className="text-warning">{rating}</span>
          </p>
          <p className="text-accent font-bold">${price}</p>
        </div>
        </div>
        <div className="card-actions flex  justify-center mb-5">
          <Link to={`/service/${serviceId}`}>
            <button className="btn btn-primary btn-sm">View Details</button>
          </Link>
        </div>
      
    </div>   
        </div>
    );
};

export default ServiceCard;