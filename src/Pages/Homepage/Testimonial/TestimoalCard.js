import React from "react";

const TestimoalCard = ({ review }) => {
  const { name, image, description, location } = review;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          nostrum libero impedit amet iure voluptates ipsam labore distinctio,
          reprehenderit totam ratione illum dolorem? Ut eum est nesciunt
          aspernatur assumenda sequi!
        </p>
      </div>
      <div className="grid grid-cols-2 my-7">
        <div className="ml-7">
          <h2 className="card-title">{name}</h2>
          <p>{location}</p>
        </div>

        <div className="w-[75px] h-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={image} />
        </div>
      </div>
    </div>
  );
};

export default TestimoalCard;
