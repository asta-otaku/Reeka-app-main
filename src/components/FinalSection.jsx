import React, { useState } from "react";
import CustomButton from "./CustomButton";
import Modal from "./Modal";
import "../css/FinalSection.css";
import backgroundImage from "../assets/image.svg";

const FinalSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <div className="flex-container">
      <img src={backgroundImage} alt="Gradient" />
      <div className="content">
        <h1> Book a Demo</h1>
        <p className="content-ptag">
          All you need is an idea. We handle the rest.
        </p>
        <CustomButton
          buttonColour="white"
          textColour="black"
          onClick={toggleModal}
          className="custom-book-button"
        />
        <Modal isOpen={isModalOpen} close={toggleModal} />
      </div>
    </div>
  );
};

export default FinalSection;
