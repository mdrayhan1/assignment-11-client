import React from 'react';

const AllServicesItem = ({service}) => {
    const { name, img, price, des } = service;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="services " />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-2xl text-orange-600 font-semibold">Price: {price}</p>
        <p className="text-2xl text-orange-300 font-semibold">
          Description: {des}
        </p>
      </div>
    </div>
  );
};

export default AllServicesItem;