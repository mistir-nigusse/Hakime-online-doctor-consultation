import React from 'react';
import About from './components/pages/About/About';
import Adpage from './components/pages/Ad/Adpage';
import Blog from './components/pages/Blog/Blog';
import Doctors from './components/pages/Doctors/Doctors';
import Hero from './components/pages/Hero/Hero';
import Navbar from './components/pages/Navbar';

const App=() =>{
  return (
   <div>
     <Navbar/>
     <Hero />
     <Doctors />
     <About />
     <Blog />
     <Adpage />
   </div>
  );
}

export default App;
