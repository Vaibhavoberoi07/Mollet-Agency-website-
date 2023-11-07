import './App.css';
import React from 'react';
import SideBar from './components/SideBar';
import Hero from './components/Hero';
import About from './components/About'
import Services from './components/Services';
import Work from './components/Work';
import Clients from './components/Clients';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div className='flex'>
        <SideBar />
        <Hero />
      </div>
      <About />
      <Services />
      <Work />
      <Clients />
      <Footer />


    </>


  );
}

export default App;
