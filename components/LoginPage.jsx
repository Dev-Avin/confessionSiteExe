import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../src/firebase-config';
import './LoginPage.css';
import account from './assets/account.png';
import instagram from './assets/instagram.png';
import eyes from './assets/eyes.png';
import Exe from './assets/exe.png';

const navArr = [
  {
    id: 2,
    title: 'See more',
    linkto: './confessionPage',
    url: eyes,
  },
  {
    id: 1,
    title: 'About',
    linkto: '/about',
    url: account,
  },
  {
    id: 1,
    title: 'Instagram',
    url: instagram,
    linkto: 'https://www.instagram.com/teamexenith/',
  },
];
import Account from '../modular_comps/Account.jsx';
import hamburgerIcon from './assets/hamburger.png';

// import Confession of the day
const confessionofDay = {
  title: 'Secret Crush',
  body: "I've had a secret crush on my best friend for years. Every time I see him, my heart skips a beat, but I've never had the courage to tell him.",
};

const LoginPage = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [imgSrc , setImgSrc] = useState(Exe);
  const postCollectionRef = collection(db, "confessions");
  const [confessionOfDay, setConfessionOfDay] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    const fetchConfessionOfDay = async () => {
      try {
        // Query confessions where confessionOfTheDay is true
        const q = query(collection(db, "confessions"), where("confession_ofday", "==", true));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          // There should be only one confession marked as confessionOfTheDay
          const confession = querySnapshot.docs[0].data();
          setConfessionOfDay(confession);
        } else {
          console.log("No confession of the day found");
        }
      } catch (error) {
        console.error("Error fetching confession of the day:", error);
      }
    };

    fetchConfessionOfDay();
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
              <h3 >{confessionOfDay.title}</h3>
              <p style={{ color: 'blue' }}>
                {confessionOfDay.postText}
              </p>
              <button className="confSubmit" onClick={() => navigate('/confessionPage')}>See More</button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;

