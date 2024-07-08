import React, { CSSProperties, useRef } from "react";
import Slider from "react-slick";
import Card from "../Card";
import { HeadingCarousel, Next } from "../../assets/svgs/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import carousel1 from "../../assets/carouselBg1.png";
import carousel2 from "../../assets/carouselBg2.png";
import carousel3 from "../../assets/carouselBg3.png";
import carousel4 from "../../assets/carouselBg4.png";
import carousel5 from "../../assets/carouselBg5.png";
import carousel6 from "../../assets/carouselBg6.png";
import carousel7 from "../../assets/carouselBg7.png";
import carousel8 from "../../assets/carouselBg8.png";

const data = [
  {
    text: "Access to more financial tools",
    bg: carousel1,
    textW: "max-w-[162px]",
  },
  {
    text: "More investment opportunities",
    bg: carousel2,
    textW: "max-w-[175px]",
  },
  {
    text: "More Savings",
    bg: carousel3,
    textW: "max-w-[106px]",
  },

  {
    text: "Join a passionate wealth building community",
    bg: carousel4,
    textW: "max-w-[185px]",
  },
  {
    text: "Free financial advice from vetted financial coaches",
    bg: carousel5,
    textW: "max-w-[217px]",
  },
  {
    text: "Build wealth without compromising your belief",
    color: "text-[#019A34]",
    bg: carousel6,
    textW: "max-w-[224px]",
  },
  {
    text: "Pro budgeting guide",
    bg: carousel7,
    textW: "max-w-[151px]",
  },
  {
    text: "Get your unique San ID",
    bg: carousel8,
    textW: "max-w-[175px]",
  },
];

const Features: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sliderRef = useRef<any | null>(null);

  const arrowStyles: CSSProperties = {
    position: "absolute",
    zIndex: 2,
    width: 30,
    height: 30,
    cursor: "pointer",
  };

  const settings = {
    infinite: true,
    dots: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <button
        type="button"
        style={{
          ...arrowStyles,
          left: 15,
        }}
      >
        {/* <div className="next-icon font-light  bg-[#EAEAEA] p-5 absolute -top-40 left-2 rounded-full">
          {Prev}
        </div> */}
      </button>
    ),
    nextArrow: (
      <button type="button" style={{ ...arrowStyles, right: 15 }}>
        <div className="next-icon font-light  bg-[#EAEAEA] p-2 sm:p-5 absolute -top-36 xs:-top-48 right-2 rounded-full">
          {Next}
        </div>
      </button>
    ),
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full relative  text-black backdrop-blur-lg flex flex-col justify-center items-center">
      <div className="maxContainer w-full px-[5%] pt-12 sm:pt-16 md:pt-20  pb-24 flex flex-col  ">
        <div className="w-full">
          <div className="relative mb-16 ss:mb-20">{HeadingCarousel}</div>

          <Slider ref={sliderRef} {...settings}>
            {data.map((item, index) => (
              <div
                key={index}
                className="slide-item"
                style={{ padding: "0 10px" }}
              >
                <Card
                  backgroundImage={item.bg}
                  text={item.text}
                  color={item.color}
                  textW={item.textW}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Features;
