import React from "react";
import "./Footer.css";
import {
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer mt-5 ">
      <div className="row container-fluid row-style">
        <div className="col-12  col-sm-6  col-md-4 px-5">
          <h6 className="py-3">DENTAL CARE</h6>
          <p>
            Since 1980, The Dental Care has been proud to combine modern
            techniques and high-tech equipment. Dr. Sarker and his team deliver
            a personalized and comfortable dental care experience unlike any
            other Mason dentist.
          </p>
        </div>
        <div className="col-12  col-sm-6  col-md-4 px-5">
          <h6 className="py-3">CONTACT INFORMATION</h6>
          <p>
            {" "}
            <span>
              <FaMapMarkerAlt />
            </span>{" "}
            House#42, Road#6, Block#G Badda, Dhaka-1212.
          </p>
          <p>
            {" "}
            <span>
              <FaPhoneAlt />
            </span>{" "}
            01711697697, 01711052828
          </p>
          <p>
            {" "}
            <span>
              <FaMailBulk />
            </span>{" "}
            info@thedentalcare.com.bd
          </p>
          <p>
            {" "}
            <span>
              <FaClock />
            </span>{" "}
            Consulting Hours: 9 am to 9 pm (Except Friday)
          </p>
        </div>

        <div className="col-12  col-sm-6  col-md-4 px-5">
          <h6 className="py-3">FIND US ON</h6>
          <img
            src="./images/dc.png"
            alt=""
            style={{ height: "100px", width: "200px" }}
            className="img-fluid"
          />
          <div className="py-5">
            <p>
              <span>
                <FaFacebookF />{" "}
              </span>
              <span>
                <FaInstagram />{" "}
              </span>
              <span>
                <FaTwitter />{" "}
              </span>
              <span>
                <FaLinkedin />{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
      <p className="text-center">
        Copyright © 2021 | Dental Care | All Rights Reserved{" "}
      </p>
    </div>
  );
};

export default Footer;
