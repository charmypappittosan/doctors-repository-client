import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading";
  import {toast} from "react-toastify";


const Modal = ({ date, treatment, setTreatment }) => {
  const { _id,Name, slot } = treatment;
  const [user,loading]=useAuthState(auth);
  const formatDate=format(date,"PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
   
     const booking = {
       treatmentId: _id,
       treatment: Name,
       date: formatDate,
       slot,
       patient: user.email,
       patientName: user.displayName,
       phone: event.target.phone.value,
     };
      fetch(
        "https://doctors-portal-server-production-1e67.up.railway.app/booking",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(booking),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast(`Appointment is set, ${date} at ${slot}`);
          } else {
            toast(
              `You already have an appointment of ${Name}, ${formatDate} at ${slot}`
            );
          }
          setTreatment(null);
        });
     

  };
 
 
  if(loading){
    return <Loading></Loading>
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-accent">{Name}</h3>
          <label
            for="booking-modal"
            className="btn btn-accent btn-sm btn-circle absolute right-2 top-2 text-white"
          >
            ✕
          </label>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-4 justify-items-center my-8"
          >
            <input
              type="text"
              value={format(date, "PP")}
              readOnly
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slot ? 
                slot.map((s) => <option value={s}>{s}</option>)
               : (
                <p>nothing</p>
              )}
            </select>
            <input
              name="name"
              type="text"
              value={user?.displayName ||''}
              readOnly
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="email"
              type="email"
              value={user?.email ||''}
              readOnly
              className="input input-bordered w-full max-w-xs"
            />
            <input
            name="Submit"
              type="submit"
              value="Submit"
              className="btn btn-accent text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
