import React, { useEffect, useState } from "react";

import { useParams } from "react-router";

const Details = () => {
  const { detailsId } = useParams();
  const [services, setServices] = useState([]);
  const search = services.find((service) => service.serviceId == detailsId);
  console.log(search);
  useEffect(() => {
    const url = `https://k17h02.github.io/api/services.JSON`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="main">
      <div className="container py-5">
        <img
          src={search?.image}
          alt=""
          style={{ height: "200px", width: "300px" }}
        />
        <h2>{search?.serviceName}</h2>
        <p> {search?.details} </p>
      </div>
    </div>
  );
};

export default Details;
