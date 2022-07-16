import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Imgslider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
      <BD>
          <h1>CAROUSEL made by DHRUV</h1>
    <Carousel {...settings}>
      <Wrap>
      <img src={require('./slider-scale.jpg')} />
      </Wrap>
      <Wrap> <img src={require('./slider-scales.jpg')} />
      </Wrap>
      <Wrap> <img src={require('./slider-badging.jpg')} />
      </Wrap>
    </Carousel>
    </BD>
  );
}

export default Imgslider;



const BD = styled.div`

height:100vh;
weight:100vw;
overflow:hidden;
background-color: grey;

`








const Carousel = styled(Slider)`
  padding-top: 20vh;
  margin: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`

const Wrap = styled.div`
  img {
    border: 4px solid transparent;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }
`;

