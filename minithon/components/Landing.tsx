import React from "react";
import Image from "next/image";

const Landing: React.FC = () => {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/bg1.png')" }}
      >
        <div className="flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">
            India's Top University For
          <br/>
          <span className=" font-extrabold text-white text-6xl">
            ENGINEERING 
          </span>
          </h1>
        </div>
      </div>
        <div  className="bg-blue02 h-screen">
        <Image src="/Rectangle.png" width={200} height={200} alt="rec" className=" absolute right-0"/>
            <div className=" ml-10"></div>
            <Image src="/lib1.png" width={300} height={300} alt="Library" className="rounded-lg"/>
        </div>



      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/bg1.png')" }}
      >
        <div className="flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">
            
          </h1>
        </div>
      </div>
    </>
  );
};

export default Landing;
