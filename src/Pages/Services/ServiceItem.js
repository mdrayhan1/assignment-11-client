import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = ({ service }) => {
  const { name, img, price, des } = service;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="services " />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-2xl text-orange-600 font-semibold">Price: {price}</p>
        <p className="text-2xl text-orange-900	 font-semibold">
          Description: {des}
        </p>
        <div className="card-actions justify-between">
          <Link to={"/servicedetails"}>
            <button className="btn btn-primary">Detailes</button>
          </Link>
          <Link to={"/allservices"}>
            <button className="btn btn-primary">See All</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
