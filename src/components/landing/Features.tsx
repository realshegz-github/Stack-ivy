import React from "react";
import Slider from "react-slick";
import Card from "../Card";
import { HeadingCarousel } from "../../assets/svgs/icons";
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

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const SampleNextArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
};
const Features = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <section className="w-full relative  text-black backdrop-blur-lg flex flex-col justify-center items-center">
      <div className="maxContainer w-full px-[5%] pt-12 sm:pt-16 md:pt-20  pb-24 flex flex-col  ">
        <div className="w-full">
          <div className="relative mb-24">{HeadingCarousel}</div>

          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index} className="slide-item">
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
