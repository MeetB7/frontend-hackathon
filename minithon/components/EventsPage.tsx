import EventCard from "./EventCard";
import React from "react";

const EventsPage = () => {
  const eventsData = [
    {
      title: "Football Event",
      date: "15th Aug",
      time: "5:00 PM",
      location: "Field 1",
      imageUrl: "https://via.placeholder.com/300x150",
      buttonLabel: "Register",
    },
    {
      title: "Hackathon",
      date: "20th Aug",
      time: "10:00 AM",
      location: "Building A, Room 301",
      imageUrl: "https://via.placeholder.com/300x150",
      buttonLabel: "Join Now",
    },
    {
      title: "Art Exhibition",
      date: "22nd Aug",
      time: "3:00 PM",
      location: "Art Gallery",
      imageUrl: "https://via.placeholder.com/300x150",
      buttonLabel: "Get Ticket",
    },
    {
      title: "Music Concert",
      date: "25th Aug",
      time: "8:00 PM",
      location: "Auditorium",
      imageUrl: "https://via.placeholder.com/300x150",
      buttonLabel: "Buy Ticket",
    },
    {
      title: "Tech Meetup",
      date: "30th Aug",
      time: "6:00 PM",
      location: "Conference Hall",
      imageUrl: "https://via.placeholder.com/300x150",
      buttonLabel: "Register",
    },
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('/images/bg1.webp')] text-white">
      {/* Header */}
      <div className="text-center pt-12">
        <h1 className="text-5xl font-bold">
          UPCOMING &amp; <span className="text-blue-500">ONGOING</span> EVENTS
        </h1>
      </div>
      {/* Search and Filters */}
      <div className="mt-12 flex flex-col items-center gap-4">
        {/* Search Bar */}
        <div className="relative w-3/4 md:w-1/2 lg:w-1/3">
          <input
            type="text"
            className="w-full py-3 pl-5 pr-10 bg-black rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300"
            placeholder="Search an event..."
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform duration-300 hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l5.29-5.29a7 7 0 111.42-1.42L20 10m-7 7V3"
              />
            </svg>
          </button>
        </div>

        {/* Filter Dropdown */}
        <div className="relative w-3/4 md:w-1/2 lg:w-1/3">
          <select className="w-full py-3 pl-5 pr-10 bg-gray-700 rounded-full text-white focus:outline-none transition-transform duration-300 hover:scale-105">
            <option>All events</option>
            <option>Ongoing</option>
            <option>Upcoming</option>
          </select>
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform duration-300 hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7l-4-4m0 0l-4 4m4-4v18"
              />
            </svg>
          </button>
        </div>

        {/* Ongoing and Upcoming Buttons */}
        <div className="flex gap-4">
          <button className="py-2 px-6 bg-blue-500 text-white rounded-full transition-all transform hover:bg-blue-600 hover:scale-105 duration-300">
            PAST
          </button>
          <button className="py-2 px-6 bg-gray-600 text-white rounded-full transition-all transform hover:bg-gray-700 hover:scale-105 duration-300">
            UPCOMING
          </button>
        </div>
      </div>
      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6">
        {eventsData.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            date={event.date}
            time={event.time}
            location={event.location}
            imageUrl={event.imageUrl}
            buttonLabel={event.buttonLabel}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
