// import React, { useState, useEffect } from 'react';
import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';
import ConfessionPage from '../components/ConfessionPage';

// import { AnimatePresence } from 'framer-motion';
import Animated from './Animated.jsx'
import About from '../components/About.jsx'
// import leftGirl from '/leftgirl-removebg-preview.png'; // Import the image
import './App.css'; // Import the CSS file
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
// import MainPage from '../components/mainPage.jsx';
import MainTest from '../components/MainTest.jsx';


const App = () => {
    

  return (
      <>

    
      <div className='anime-container'>
      <Animated/>
      </div>
      <div className='sticker'>
        <div style={{ height: '85vh', width: '80vw', marginTop: '5vh', border: '10px solid white', borderRadius: '40px', position: 'relative', backgroundImage: `url('/rose.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Router>
       <Routes>

      
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/LoginPage" element={<LoginPage/>}></Route>
      <Route path="/confessionPage" element={<ConfessionPage/>}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path='/new' element = {<MainTest/>}></Route>


    </Routes>
   </Router>

</div>
</div>

    </>
    
)



     
  
}

export default App;
