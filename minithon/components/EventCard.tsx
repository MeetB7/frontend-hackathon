import React from "react";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  buttonLabel: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  location,
  imageUrl,
  buttonLabel,
}) => {
  return (
    <div className="bg-black text-black rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">Date: {date}</p>
        <p className="text-gray-600">Time: {time}</p>
        <p className="text-gray-600">Location: {location}</p>
      </div>
      <div className="px-4 pb-4">
        <button className="w-full py-2 bg-blue-500 text-white rounded-full transition-all duration-300 hover:bg-blue-600 transform hover:scale-105">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
