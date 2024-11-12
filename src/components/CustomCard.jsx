import React from "react";

const CustomCard = ({ tag, heading, body }) => {
  return (
    <div className="flex flex-col items-start max-w-[380px]">
      <div className="inline-flex py-1 px-3 justify-center md:items-center rounded-full text-[#e36b37] bg-[#FFEAE0] text-xs md:text-[15px]">{tag}</div>
      <h2 className="text-[#091b38] w-full font-medium leading-6 md:leading-[1.5] text-[20px] md:text-[25px] my-2.5">{heading}</h2>
      <p className="text-[#3a3a3a] w-full font-light text-[13px] md:text-[15px] leading-6 md:leading-[2] mb-2.5">{body}</p>
    </div>
  );
};

export default CustomCard;
