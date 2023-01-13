import React from "react";
import footer from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{ background: `url(${footer})`, backgroundSize: "cover" }}
      className=" my-10  text-black"
    >
      <div className="footer px-40 justify-between">
        <div>
          <span className="footer-title font-bold text-neutral">Services</span>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title font-bold text-neutral">
            Oral Health
          </span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teeth Whitening</a>
        </div>
      </div>
      <div className="footer-center p-4 text-base-content my-10">
        <p>Copyright © 2023 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
