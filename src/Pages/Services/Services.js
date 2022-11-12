import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceItem from "./ServiceItem";

const Services = () => {
  // Loading services
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services/home")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold text-red-400">See My Services</h2>
        <p className="text-accent p-2">
          Here you can see your desired services
        </p>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceItem key={service.id} service={service}></ServiceItem>
        ))}
      </div>
      <div className="flex items-center justify-center my-8">
        <Link to={"/allservices"}>
          <button className="btn btn-primary">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
