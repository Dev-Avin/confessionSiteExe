import React, { useState, useEffect } from 'react';
import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';
import ConfessionPage from '../components/ConfessionPage';
import { AnimatePresence } from 'framer-motion';
import Animated from './Animated.jsx'
import About from '../components/About.jsx'
import leftGirl from '/leftgirl-removebg-preview.png'; // Import the image
import './App.css'; // Import the CSS file
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

const App = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;

      const percentage = (scrollY / (fullHeight - windowHeight)) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <>

    <div className='scrollSpace'>
          {scrollPercentage >= 15 && scrollPercentage < 85 && (
            <div className='leftGirl' style={{ backgroundImage: `url(${leftGirl})` }}></div>
          )}
      <div className='anime-container'>
      <Animated/>
      </div>
      <div className='sticker'>
        <div style={{ height: '85vh', width: '80vw', marginTop: '5vh', border: '10px solid white', borderRadius: '40px', position: 'relative', backgroundImage: `url('/rose.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <AnimatePresence>
            {scrollPercentage >= 0 && scrollPercentage < 15 && <HomePage />}
            {scrollPercentage >= 15 && scrollPercentage < 60 && <LoginPage />}
            {scrollPercentage >= 60 && scrollPercentage < 85 && <ConfessionPage />}
            {scrollPercentage >= 85 && <About />}
            </AnimatePresence>
        </div>
      </div>
    </div>
   <Router>
    <Routes>

      
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/LoginPage" element={<LoginPage/>}></Route>
      <Route path="/confessionPage" element={<confessionPage/>}></Route>
      <Route path="/about" element={<About />}></Route>
     

    </Routes>
   </Router>



    </>
    




     
  );
};

export default App;
