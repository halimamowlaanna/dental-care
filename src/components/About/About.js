import React, { useEffect, useState } from "react";
import "./About.css";
import Doctor from "./Doctor/Doctor";

const About = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("./doctors.JSON")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
      <div className="container row">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="col-12 col-sm-12 col-md-6 col-lg-6"
        >
          <img
            src="https://www.dallasesthetics.com/assets/images/home-doctors.jpg"
            alt=""
            width="100%"
            height="500px"
            className="pt-4"
          />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="p-5">
              <h2 className="text-center py-5">About Us</h2>
              <p>
                For over 4 decades, dental patients in University Park, Park
                Cities and surrounding Dallas areas have trusted restorative and
                cosmetic dentists Dr. Higginbottom, Dr. Derksen and Dr.
                Hildebrand to provide quality modern dentistry, combined with
                excellence in customer service and follow-up. Located in the
                Preston Sherry Plaza, our office is convenient for
                professionals, as well as patients in the local suburbs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-center mt-5 py-5">MEET OUR DENTISTS</h3>
      <div className="container">
        <div className=" row row-cols-1 row-cols-md-3 g-4">
          {doctors.map((doctor) => (
            <Doctor
              key={doctor.key}
              name={doctor.Name}
              image={doctor.image}
            ></Doctor>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
