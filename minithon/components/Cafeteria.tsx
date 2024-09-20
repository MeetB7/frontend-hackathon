// components/Cafeteria.tsx
import React from 'react';

const Cafeteria = () => {
  return (
    <section className="bg-white text-black py-20 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-10">This is our Cafeteria</h2>
      <div className="flex space-x-4">
        <img src="/cafe.png" alt="Cafeteria Image" className="rounded-lg w-1/3" />
        <img src="/cafeteria2.jpg" alt="Cafeteria Image" className="rounded-lg w-1/3" />
      </div>
      <button className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-full">Click here</button>
    </section>
  );
};

export default Cafeteria;
