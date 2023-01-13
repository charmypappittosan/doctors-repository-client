import React from "react";
import logo1 from "../../../assets/icons/clock.svg";
import logo2 from "../../../assets/icons/phone.svg";
import logo3 from "../../../assets/icons/marker.svg";

const Information = () => {
  return (
    <div>
      <div className="flex flex-col w-full lg:flex-row gap-5 text-white">
        <div
          style={{ height: "190px", width: "450px" }}
          className="grid flex-grow card bg-primary rounded-box place-items-center bg-gradient-to-r from-secondary to-primary "
        >
          <div className="flex m-3 ">
            <img
              style={{ height: "86px", width: "86px" }}
              className="mt-5"
              src={logo1}
              alt=""
            />
            <div className="ml-3 mt-3">
              <p className="font-semibold text-xl ">Opening Hours</p>
              <p className=" text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora!
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ height: "190px", width: "450px" }}
          className="grid flex-grow card bg-accent rounded-box place-items-center"
        >
          <div className="flex m-3 ">
            <img
              style={{ height: "86px", width: "86px" }}
              className="mt-5"
              src={logo3}
              alt=""
            />
            <div className="ml-3 mt-3">
              <p className="font-semibold text-xl">Visit our location</p>
              <p className=" text-sm mt-2">Brooklyn,NY 10036, United States</p>
            </div>
          </div>
        </div>
        <div
          style={{ height: "190px", width: "450px" }}
          className="grid flex-grow card bg-primary rounded-box place-items-center bg-gradient-to-r from-secondary to-primary"
        >
          <div className="flex m-3 ">
            <img
              style={{ height: "86px", width: "86px" }}
              className="mt-5"
              src={logo2}
              alt=""
            />
            <div className="ml-3 mt-3">
              <p className="font-semibold text-xl ">Contact us now</p>
              <p className=" text-sm mt-2">01569855</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
