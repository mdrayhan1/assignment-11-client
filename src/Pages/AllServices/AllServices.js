import React, { useEffect, useState } from "react";
import AllServicesItem from "../AllServicesItem/AllServicesItem";

const AllServices = () => {

  // Loading services
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://web-server-cyan.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold text-red-400">See My All Services</h2>
        <p className="text-accent p-2">Here you can see your desired services</p>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <AllServicesItem key={service.id} service={service}></AllServicesItem>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
