import React from 'react';
import Service from './Service';
import pic1 from '../../../assets/images/cavity.png';
import pic2 from '../../../assets/images/fluoride.png';
import pic3 from '../../../assets/images/whitening.png';

const Services = () => {
    const services=[
        {id:1,name:"Flouride Treatment",description:"",image:pic1},
        {id:1,name:"Cavity Filing",description:"",image:pic2},
        {id:1,name:"Teeth Whitening",description:"",image:pic3},
    ]
    return (
      <div className="my-28">
        <div className="text-center">
          <h3 className="text-primary text-xl font-bold uppercase ">Our Services</h3>
          <h1 className="text-4xl font-bold">Services We Provide</h1>
          <div className=' my-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {services.map(service=>
                <Service key={service.id} service={service}></Service>
            )}
          </div>
        </div>
      </div>
    );
};

export default Services;