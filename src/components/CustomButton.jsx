import React from "react";
import { ReactComponent as ArrowRight } from "../assets/arrow_right.svg";

const CustomButton = ({ buttonColour, textColour, icon, onClick }) => {
  const buttonText = "Book Demo";

  return (
    <button
      className={icon ? "flex w-fit items-center text-xs md:text-sm rounded-[14px] px-5 border-none gap-2" : "flex justify-center w-fit px-5 border-none rounded-[14px] md:mx-5 text-xs md:text-sm"}
      style={{ backgroundColor: buttonColour, color: textColour }}
      onClick={onClick}
    >
      {buttonText}
      {icon && <ArrowRight />}
    </button>
  );
};

export default CustomButton;
