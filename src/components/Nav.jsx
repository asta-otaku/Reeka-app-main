import React, { useState } from "react";
import CustomButton from "./CustomButton";
import Modal from "./Modal";

const Nav = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <div>
      <div className="flex justify-between items-center w-full mx-auto p-3 md:p-5 fixed top-0 left-0 bg-white">
        <h1 className="font-modak text-[#E36B37] text-2xl md:text-[40px]">Reeka</h1>
        <CustomButton
          buttonColour="black"
          textColour="white"
          onClick={toggleModal}
        />
      </div>
      <Modal isOpen={isModalOpen} close={toggleModal} />
    </div>
  );
};

export default Nav;
