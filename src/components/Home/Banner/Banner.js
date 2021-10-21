import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.fortishealthcare.com/speciality_banner/mobile/Dental-Care.jpg"
            alt="First slide"
            height="500px"
          />
          <Carousel.Caption>
            <h1 className="text-danger">Dental Care</h1>
            <h3>Healthy teeth Healthy Life</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.pasadenahealthcenter.com/site/wp-content/uploads/2018/02/Dentist-Check-Up.jpg"
            alt="Second slide"
            height="500px"
          />

          <Carousel.Caption>
            <h1 className="text-danger">Dental Care</h1>
            <h3>Healthy teeth Healthy Life</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/female-patient-at-ental-clinic-picture-id1296011740?b=1&k=20&m=1296011740&s=170667a&w=0&h=pI1qQPBg9QWcm1no918GPDYt1kr8XvIlBqZ9MI0QdoI="
            alt="Third slide"
            height="500px"
          />

          <Carousel.Caption>
            <h1 className="text-danger">Dental Care</h1>
            <h3>Healthy teeth Healthy Life</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
