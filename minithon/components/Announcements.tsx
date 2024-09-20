// components/Announcements.tsx
import React from 'react';

const Announcements = () => {
  return (
    <section className="bg-[#1E1E1E] text-white py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Announcements and News Tab</h2>
      <div className="flex justify-center">
        <img src="/announcements.jpg" alt="Announcements" className="rounded-lg shadow-lg w-1/2" />
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-white text-black rounded-full">Click here</button>
      </div>
    </section>
  );
};

export default Announcements;
