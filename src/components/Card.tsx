import React from "react";

interface CardProps {
  backgroundImage: string;
  text: string;
  color?: string;
  textW: string;
}

const Card: React.FC<CardProps> = ({ backgroundImage, text, color, textW }) => {
  return (
    <div
      className={`w-full  max-w-[300px] h-[195px] bg-cover text-white px-5 pt-8 pb-5 rounded-xl
      `}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <p className={`text-[20px] ${color} cabinet font-semibold ${textW}`}>
        {text}
      </p>
    </div>
  );
};

export default Card;
