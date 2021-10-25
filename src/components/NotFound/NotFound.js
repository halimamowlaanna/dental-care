import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2 className="text-danger text-center my-5">Page Not Found(404)</h2>
      <div className="container my-5 px-5">
        <img
          src="https://www.wpbeginner.com/wp-content/uploads/2013/04/wp404error.jpg"
          alt=""
          width="100%"
          height="400px"
        />
      </div>
    </div>
  );
};

export default NotFound;
