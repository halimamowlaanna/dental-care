import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="container">
      <h2 className="text-center text-primary py-5">Select Service and Date</h2>
      <div className="row">
        <div className="col-12  col-sm-6  col-md-4">
          <h3 className="text-center  py-4">Select service</h3>
          <select
            className="form-select form-select-sm mb-3"
            aria-label=".form-select-sm example"
          >
            <option selected>Select Service</option>
            <option value="1">ROOT CANAL TREATMENT</option>
            <option value="2">COSMETIC CROWNS AND BRIDGES</option>
            <option value="3">GUM PLASTIC SURGERY</option>
            <option value="3">DENTAL IMPLANTS</option>
            <option value="3">ZOOM! WHITENING</option>
            <option value="3">BONE AND SOFT TISSUE GRAFTS</option>
          </select>
        </div>
        <div className="col-12  col-sm-6  col-md-4">
          <h3 className="text-center  py-4">Select Doctor</h3>
          <select
            className="form-select form-select-sm mb-3"
            aria-label=".form-select-sm example"
          >
            <option selected>Select Service</option>
            <option value="1">Dr.Frank Higginbottom</option>
            <option value="2">Dr. Richard Derksen</option>
            <option value="3">Dr. Sloan Hildebrand</option>
          </select>
        </div>
        <div className="col-12  col-sm-6  col-md-4">
          <div>
            <h3 className="text-center  py-4">Select Date</h3>
            <div className="px-4">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <button>Check available time</button>
      <div style={{ textAlign: "center" }} className="py-5">
        <button className="btn-regular">Confirm Appointment</button>
      </div>
    </div>
  );
};

export default Appointment;
