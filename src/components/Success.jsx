import React from "react";
import { ReactComponent as SuccessModal } from "../assets/successModal.svg";

const Success = () => {
  return (
    <div>
      <SuccessModal />
      <button className="flex justify-center w-full" type="done">
        Done
      </button>
    </div>
  );
};

export default Success;
