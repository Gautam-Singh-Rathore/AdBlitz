import React from "react";
import Slider from "react-slick";
import c1 from "../../assets/1.png";
import c2 from "../../assets/2.png";
import c3 from "../../assets/3.png";
import c4 from "../../assets/4.png";

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container w-full h-[30vh] lg:h-[40vh] my-3 mb-7">
      <Slider {...settings} className="h-full bg-[#FFCF09] ">
        <div className="h-[30vh] lg:h-[40vh] w-full bg-[#F8FAC9]">
          <img src={c4} alt="" className="h-[30vh] lg:h-[40vh] m-auto" />
        </div>
        <div className="h-[30vh] lg:h-[40vh] w-full bg-[#FC9304]">
          <img src={c1} alt="" className="h-[30vh] lg:h-[40vh] m-auto" />
        </div>
        <div className="h-[30vh] lg:h-[40vh] w-full">
          <img src={c2} alt="" className="h-[30vh] lg:h-[40vh] m-auto" />
        </div>
        <div className="h-[30vh] lg:h-[40vh] w-full bg-[white]">
          <img src={c3} alt="" className="h-[30vh] lg:h-[40vh] m-auto" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
