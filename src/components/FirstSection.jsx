import React, { useState } from "react";
import CustomButton from "./CustomButton";
import Modal from "./Modal";
import Dashboard from "../assets/dashboard.svg";

const FirstSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);
  return (
    <div style={{
        backgroundImage: `url(lines.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} className="flex flex-col items-center justify-center text-center py-5 md:pt-[60px] bg-white md:px-4">
      <h1 className="text-[#E36B37] text-center max-w-[250px] md:max-w-xl w-full text-2xl font-medium md:text-[40px] md:leading-[1.15]">
        Rental Management <span style={{ color: "black" }}>That Elevates</span>{" "}
        Your Business
      </h1>
      <p className="text-[10px] md:text-xs my-4 max-w-xs text-[#3a3a3a] md:leading-[1.2]">
        Automate, Optimize, and Grow Your Kenyan <br />
        Short Term Rental Operations with Ease
      </p>
      <CustomButton
        buttonColour="black"
        textColour="white"
        onClick={toggleModal}
        icon
      />
      <Modal isOpen={isModalOpen} close={toggleModal} />
      <img src={Dashboard} alt="Dashboard" className="mt-4 md:mt-0" />
    </div>
  );
};

export default FirstSection;
