import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-sand min-h-screen">
      <Navbar />
      <Hero />
      <Rooms />
      <Amenities />
      <Footer />
    </main>
  );
}

export default App;
