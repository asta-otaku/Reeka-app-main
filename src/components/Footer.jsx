import React from "react";
import { ReactComponent as Twitter } from "../assets/twitter_icon.svg";
import { ReactComponent as Instagram } from "../assets/instagram_icon.svg";
import { ReactComponent as Medium } from "../assets/medium_icon.svg";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <footer>
      <hr  className="my-5 h-[1px] bg-white"/>
      <div className="flex justify-between items-center mt-2.5 py-2.5 px-5">
        <p>Copyright &copy; {currentYear} Reeka</p>
        <div className="flex gap-5">
          <Twitter />
          <Instagram />
          <Medium />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
