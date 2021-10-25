import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import "./Faqs.css";

const Faqs = () => {
  return (
    <div className="faq">
      <div className="inner">
        <div>
          <label
            className="text-danger"
            htmlFor="qa"
            style={{ marginRight: "5px" }}
          >
            Ask Your Question!
          </label>
          <input type="text" name="" id="" />
          <input
            type="submit"
            value="Submit"
            style={{ background: "blue", color: "white" }}
          />
        </div>
        <br />
        <div>
          <h5>
            {" "}
            <span>
              <FaQuestionCircle />
            </span>{" "}
            Is your patients satisfied with your treatments
          </h5>
          <p>
            For sure our patients are more satisfied with our caring as well as
            our best treatments
          </p>
          <h5>
            {" "}
            <span>
              <FaQuestionCircle />
            </span>{" "}
            Is your clinic govt approved
          </h5>
          <p>Sure our clinic govt approved</p>
          <h5>
            {" "}
            <span>
              <FaQuestionCircle />
            </span>{" "}
            Is this clinic open in govt holidays
          </h5>
          <p>No.But our online service always open</p>
          <small className="text-primary">See more...</small>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
