import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Appointmentlist from "./Appointmentlist";
import Modal from "./Modal";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment,setTreatment]=useState([]);
  const formatedDate=format(date,'PP');
  useEffect(() => {
    fetch(
      `https://doctors-portal-server-production-1e67.up.railway.app/available?date=${formatedDate}`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h4 className="text-center text-secondary text-xl">
        Available Appointment On :{format(date, "PP")}.
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
        {services.map((service) => (
          <Appointmentlist key={service._id} service={service} setTreatment={setTreatment}></Appointmentlist>
        ))}
      </div>
      <div>
        {
            treatment && <Modal treatment={treatment} setTreatment={setTreatment} date={date}></Modal>
        }
      </div>
    </div>
  );
};

export default AvailableAppointment;
