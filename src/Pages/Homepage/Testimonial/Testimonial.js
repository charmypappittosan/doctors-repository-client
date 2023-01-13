import React from 'react';
import qoute from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import TestimoalCard from './TestimoalCard';

const Testimonial = () => {
    const reviews=[
        {id:1,name:'Winson Herry',description:"",location:"california", image:people1},
        {id:2,name:'Maria Jahan',description:"",location:"california", image:people2},
        {id:3,name:'Perry Perry',description:"",location:"california", image:people3},
    ]
    return (
      <section>
        <div className="flex justify-between">
          <div>
            <h3 className="text-primary font-bold text-xl">Testimonial</h3>
            <h4 className="text-4xl">What Our Patients Says</h4>
          </div>
          <div>
            <img className="h-[192px] w-[156px]" src={qoute} alt="" />
          </div>
        </div>

        <div className="grid gap-16 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
          {reviews.map((review) => (
            <TestimoalCard key={review.id} review={review}></TestimoalCard>
          ))}
        </div>
      </section>
    );
};

export default Testimonial;