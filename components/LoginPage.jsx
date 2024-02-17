import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../src/firebase-config';
import './LoginPage.css';
import Account from '../modular_comps/Account.jsx';
import hamburgerIcon from './assets/hamburger.png';

// import Confession of the day
const confessionofDay = {
  title: 'Secret Crush',
  body: "I've had a secret crush on my best friend for years. Every time I see him, my heart skips a beat, but I've never had the courage to tell him.",
};

const LoginPage = () => {
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [showAccountOverlay, setShowAccountOverlay] = useState(false);
  const postCollectionRef = collection(db, 'confessions');
  let navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
      // Adjust these values based on your layout and requirements
      const confessionScrollThreshold = 70;

      if (scrollPercentage > confessionScrollThreshold) {
        // Here you can perform any action you want when the scroll percentage reaches a certain threshold
        console.log('Reached confession scroll threshold');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const createPost = async () => {
    // Check if title and postText fields are empty
    if (!title.trim() || !postText.trim()) {
      alert('Please fill in both the title and text fields.');
      return; // Prevent further execution
    }

    // If both fields are filled, proceed with adding the post to the database
    await addDoc(postCollectionRef, { title: title, postText: postText, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid } });
    setTitle('');
    setPostText('');
    navigate('/confessionPage');
  };

  const toggleAccountOverlay = () => {
    setShowAccountOverlay(!showAccountOverlay);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="homeContainer"
    >
    <div className='accountContainer'>
      <Account/>
    </div>
      <motion.div className="flexChild confess" style={{ color: '#00327d' }} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <h1>Anonymous Voices</h1>
        <p>You can confess here too, nobody will know!</p>
        <input className="confInput" placeholder="Title" onChange={(event) => { setTitle(event.target.value) }} />
        <textarea
          className="confInputMain"
          placeholder="Confess Your Feelings"
          onChange={(event) => { setPostText(event.target.value) }}
        />
        <button className="confSubmit" onClick={createPost}>Submit</button>
      </motion.div>
      <motion.div className="flexChild topConfession" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
        <div className="whiteDiv">
          <h2 style={{ color: '#00327d' }}>Confession Of The Day</h2>
          <div className="gradientDiv">
            <div className="whiteDiv">
              <h3>{confessionofDay.title}</h3>
              <p style={{ color: 'blue' }}>
                {confessionofDay.body}
              </p>
              <button className="confSubmit" onClick={() => navigate('../confessionPage')}>See More</button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;
