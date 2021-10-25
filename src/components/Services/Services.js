import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      "https://k17h02.github.io/api/services.JSON?fbclid=IwAR0_EjAgaieFSY3aoTbdAomj3_5awkKYcJ2sZCZ8k0We4tbw1hty_9GWJ18"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container py-5">
      <h2 className="text-center py-4 text-primary">Our Services</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {services.map((service) => (
          <Service
            key={service.key}
            name={service.serviceName}
            image={service.image}
            description={service.description}
            serviceId={service.serviceId}
          ></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
