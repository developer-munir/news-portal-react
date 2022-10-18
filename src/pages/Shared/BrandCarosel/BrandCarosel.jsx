import React from "react";
import Carousel from "react-bootstrap/Carousel";
import brand1 from "../../../assests/brands/brand3.avif";
import brand2 from "../../../assests/brands/brand1.avif";
const BrandCarosel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={brand1}
            
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={brand2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarosel;
