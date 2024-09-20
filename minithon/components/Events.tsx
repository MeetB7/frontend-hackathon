// components/Events.tsx
import React from 'react';
import { Button } from './ui/button';

const Events = () => {
  return (
    <section className="bg-blue02 text-white py-20 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Check Out for Upcoming Events</h2>
        {/* <Button className="mt-4 px-6 py-2 bg-white text-black rounded-full">Click Here</Button> */}
        <button className="mt-4 px-6 py-2 bg-white text-black rounded-full">Click here</button> 
      </div>
      <div className="flex justify-center">
        <img src="/sport.png" alt="Upcoming Events" className="rounded-lg shadow-lg w-1/2" />
      </div>
    </section>
  );
};

export default Events;
