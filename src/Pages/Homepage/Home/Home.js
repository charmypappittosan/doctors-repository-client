import React from 'react';
import Banner from '../Banner/Banner';
import Contactus from '../Contactus/Contactus';
import Footer from '../Footer/Footer';
import HomeAppointment from '../HomeAppointment/HomeAppointment';
import Information from '../Information/Information';
import Section from '../Section/Section';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Information></Information>
        <Services></Services>
        <Section></Section>
        <HomeAppointment></HomeAppointment>
        <Testimonial></Testimonial>
        <Contactus></Contactus>
        <Footer></Footer>
       
      </div>
    );
};

export default Home;