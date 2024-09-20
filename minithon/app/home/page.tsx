// pages/index.tsx
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Events from '@/components/Events';
import Cafeteria from '@/components/Cafeteria';
import Announcements from '@/components/Announcements';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Events />
      <Cafeteria />
      <Announcements />
    </div>
  );
};

export default HomePage;
