import React from "react";
import Carousel from "react-bootstrap/Carousel";

const frontPage = [
  {
    image: "/assets/images/Front image/1.jpg",
  },
  {
    image: "/assets/images/Front image/3.jpg",
  },
  {
    image: "/assets/images/Front image/2.jpg",
  },
  {
    image: "/assets/images/Front image/4.png",
  },
  {
    image: "/assets/images/Front image/5.png",
  },
];

const Basicslider = () => {
  return (
    <div className="container-fluid">
      <Carousel interval={3000}>
        {frontPage.map((x) => (
          <Carousel.Item>
            <div className="image-container">
              <img src={x.image} alt="First slide" />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Basicslider;
