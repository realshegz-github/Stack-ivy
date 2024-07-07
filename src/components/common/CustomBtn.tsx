import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  borderRadius?: string;
  border?: string;
  width?: string;
  font?: string;
  px?: string;
  py?: string;
  color?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type?: any;
  background?: string;
  hoverColor?: string;
  hoverBackground?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  borderRadius = "rounded-full",
  type = "button",
  border = "border-0",
  color = "text-secondary",
  px = "px-4",
  py = "py-3",
  width = "w-full",
  font = "font-medium",
  background = "bg-white",
  hoverColor = "hover:text-white",
  hoverBackground = "hover:bg-opacity-5",
  onClick,
}) => {
  return (
    <button
      className={`${borderRadius} ${border} ${px} ${py} ${background} ${color} ${hoverColor} ${hoverBackground} ${width}  ${font} flex justify-center items-center text-[14px] transition duration-300 ease-in-out transform hover:scale-105`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
