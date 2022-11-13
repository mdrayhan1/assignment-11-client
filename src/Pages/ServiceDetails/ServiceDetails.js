import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const details = useLoaderData();
  const { img, name, price, des } = details;
  console.log(details);
  return (
    <div>
      <div className="mockup-window border bg-base-300">
        <h2>{name}</h2>
        <div className="justify-center px-4 py-16 bg-base-200">
          <img src={img} alt="" />
          <h2>{price}</h2>
          <h2>{des}</h2>
        </div>
      </div>
      <Link to="/addreview">
        <button>Add Review</button>
      </Link>
    </div>
  );
};

export default ServiceDetails;
