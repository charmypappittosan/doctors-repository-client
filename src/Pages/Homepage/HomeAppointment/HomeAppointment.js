import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import Primarybutton from '../Primarybuton/Primarybutton';

const HomeAppointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
            }} className='flex items-center justify-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-white text-3xl'>Make an Appointment today</h2>
                <p className='text-white mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eum voluptatum odit possimus laborum consectetur. Mollitia omnis doloribus voluptas voluptatum tenetur maxime, minima ipsa, magni illo eaque consectetur dicta repudiandae earum, labore sed? Tempore rem quis impedit magnam tempora quia.</p>
                <Primarybutton>Get Started</Primarybutton>

            </div>
        </section>
    );
};

export default HomeAppointment;