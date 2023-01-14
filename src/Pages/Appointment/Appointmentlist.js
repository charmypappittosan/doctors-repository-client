import React from "react";
import { useNavigate } from "react-router-dom";

const Appointmentlist = ({ service, setTreatment }) => {
  const { _id, Name, slot } = service;
  const navigate = useNavigate();
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{Name}</h2>
        <p>
          {slot.length > 0 ? (
            <span>{slot[0]}</span>
          ) : (
            <span className="text-red-500">Try Another Day</span>
          )}
        </p>
        <p>
          {slot.length} {slot.length > 1 ? "Slots" : "Slot"} Available
        </p>
        <div className="card-actions  justify-center uppercase">
          <label
            onClick={() => setTreatment(service)}
            for="booking-modal"
            disabled={slot.length === 0}
            className="btn bg-gradient-to-r from-secondary to-primary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Appointmentlist;
