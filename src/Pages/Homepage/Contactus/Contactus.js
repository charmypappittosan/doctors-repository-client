import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import Primarybutton from '../Primarybuton/Primarybutton';

const Contactus = () => {
    return (
      <div style={{ background: `url(${appointment})` }} className="h-[400px]">
        <div className="my-12 text-center">
          <h3 className="text-primary font-bold text-xl">Contact Us</h3>
          <h4 className="text-2xl">Stay connected with us</h4>
        </div>
        <div className=''>
          <div style={{ margin: "5% auto 0px", width: "20%" }} className="">
            <input
              className="mb-4 w-60 rounded-md h-7  "
              type="email"
              placeholder="Email Address"
            />
            <br />
            <input
              className="mb-4 w-60 rounded-md h-7  "
              type="text"
              placeholder="Subject"
            />
            <br />
            <input
              className="mb-4 w-60 rounded-md  h-20 "
              type="text"
              placeholder="Message"
            />
            <br />
            {/* style={{ position: "relative", left: "45%" }}*/}
            <div className="text-center mx-auto">
              <Primarybutton type="submit">Submit</Primarybutton>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contactus;