import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";
// import Details from "../Details/Details";

const Service = (props) => {
  const { serviceId, name, image, description, details } = props;

  return (
    <div className="col">
      <div className="card text-center custom-card">
        <div>
          <img height="200px" src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
        <div>
          <Link to={`/details/${serviceId}`} className="lg-btn view">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
