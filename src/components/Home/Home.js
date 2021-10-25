import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Service from "../../components/Service/Service";
import { useHistory } from "react-router";

const Home = () => {
  const [services, setServices] = useState([]);
  const history = useHistory();
  const handleSeeMore = () => {
    history.push("../Services");
  };
  useEffect(() => {
    fetch("https://k17h02.github.io/api/home.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="container">
        <h2 className="text-center pt-5 text-primary">Our Services</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4 my-4">
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
      <div className="text-center">
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: "5px",
            padding: "5px",
            width: "100px",
          }}
          onClick={handleSeeMore}
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Home;
