import React from "react";
import Carousel from "react-bootstrap/Carousel";

const digiErudite = [
  {
    image:
      "/assets/images/Digierudite/Digiapricus Private Limited_page-0016.jpg",
  },
  {
    image:
      "/assets/images/Digierudite/Digiapricus Private Limited_page-0017.jpg",
  },
  {
    image:
      "/assets/images/Digierudite/Digiapricus Private Limited_page-0018.jpg",
  },
  {
    image:
      "/assets/images/Digierudite/Digiapricus Private Limited_page-0019.jpg",
  },
];

const DigiEruditeSlider = () => {
  return (
    <>
      <Carousel style={{margin: "100px 0px 60px 0px"}}>
        {digiErudite.map((x) => (
          <Carousel.Item>
            <img src={x.image} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default DigiEruditeSlider;
