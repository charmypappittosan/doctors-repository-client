import React from "react";
import treatment from "../../../assets/images/treatment.png";

const Section = () => {
  return (
    <div className="card lg:card-side bg-base-100 my-10 ">
      <figure style={{ height: "458px", width: "576px" }} className="lg:ml-20">
        <img src={treatment} alt="Album" />
      </figure>
      <div className="card-body lg:ml-10 my-20">
        <h2 className="card-title text-5xl font-thin">
          Excetional Dental Care, On Your Terms
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quasi
          aliquam consequuntur eveniet alias quia error temporibus fugiat autem!
          Ipsa quae perferendis sequi ut aspernatur inventore neque illum quasi
          quas!
        </p>
        <button
          style={{ height: "48px", width: "120px" }}
          className="btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Section;
