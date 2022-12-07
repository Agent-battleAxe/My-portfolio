import React from 'react';

import { About, Skills,Work,Testimonials,Footer,Header } from './container';



import { Navbar } from './components';
import './App.scss'

const App = () => {
  return (
    <div className='app'>
    <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer/>
    </div>
  );
}

export default App;