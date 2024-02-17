import React from 'react';
import { motion } from 'framer-motion';
import './HomePage.css';
import { useState } from 'react';
import { auth, provider } from '../src/firebase-config'
import { signInWithPopup } from 'firebase/auth'


const HomePage = () => {

  const [isAuth, setIsAuth] = useState(false);
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      // After successful Google authentication
      window.location.href = '/LoginPage'; // Redirect to the home page

    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="homePageContainer"
    >
      <div className="HomeImage">
        <img src='/heartBoyLowQual-removebg-preview.png' alt="Heart Boy" />
        <motion.div
          className="animationContainer"
          whileInView={{
            scale: [0.5, 1, 0.5],
            opacity: [0.5, 1, 0.5],
            transition: {
              duration: 3,
              repeat: Infinity,
            }
          }}
        ></motion.div>
      </div>
      <div className="homeText">
        <h1 className='gradientText'>
          Confessions

        </h1>
        <br></br>
        <h2 style={{ color: '#00327d' }}>
          दिल खोल के बोल दो
        </h2>
        <h3 style={{ color: '#00327d' }}>
          <cite>
            Please follow the rules before confessing; Submission Rules:
            <ol>
              <li>It must be a confession.</li>
              <li>No names or personal information is to be shared.</li>
              <li>Foul language is not accepted.</li>
              <li>Be kind to everyone :)</li>
            </ol>
          </cite>
        </h3>

        <button className='enter' onClick={signInWithGoogle}>
          Sign In With Google
        </button>

      </div>

    </motion.div>
  );
};

export default HomePage;
