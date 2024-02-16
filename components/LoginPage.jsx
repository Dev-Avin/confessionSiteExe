import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db, auth } from "../src/firebase-config";
import './LoginPage.css';
// import heart from './assets/heart.png';
import account from './assets/account.png';
import instagram from './assets/instagram.png';
import message from './assets/message.png';
import eyes from './assets/eyes.png';
import acco from './assets/acco.png';
import Exe from './assets/exe.png';
import Nimbus from './assets/nimbus.png';


//import Confession of the day
var confessionofDay = {
  title: 'Secret Crush',
  body: "I've had a secret crush on my best friend for years. Every time I see him, my heart skips a beat, but I've never had the courage to tell him."
};

const navArr = [
  {
    id: 2,
    title: 'See more',
    linkto: './confessionPage',
    url: eyes,
  },
  {
    id: 1,
    title: 'Account',
    linkto: '/',
    url: account,
  },

  
 {
    id: 1,
    title: 'Instagram',
    url: instagram,
    linkto: 'https://www.instagram.com/teamexenith/',
  }, 

];



const LoginPage = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [imgSrc , setImgSrc] = useState(Exe);
  setInterval((imgSrc) => {
    if(imgSrc === Nimbus){
      setImgSrc(Exe);
    }
    if(imgSrc === Exe){
      setImgSrc(Nimbus);
    }
  } , 3000);
  const [UserName, setUserName] = useState('Anonymous');
  const postCollectionRef = collection(db, "confessions");
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
        console.log("Reached confession scroll threshold");
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const createPost = async () => {
    await addDoc(postCollectionRef, { title: title, postText: postText, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid } });
    setTitle("");
    setPostText("");
    navigate("/new");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="homeContainer"
    >
      <motion.div className='flexChild account' 
       initial={{ opacity: 0, y: -50 }} 
       animate={{ opacity: 1, y: 0 }} 
       transition={{ delay: 0.2 }}>
        <div style={{
          background: 'white',
          width: '80%',
          height: '80%',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignContent: 'center',
          flexDirection: 'column',
          borderRadius: '40px'
        }}>
          <h1 style={{ color: '#00327d', textShadow: 'rgba(0,0,0,0.4) 0.0.1em 0.1em' , textAlign: 'center' }}>TEAM .EXE</h1>
          <div className='flexCont'>
            <motion.img
             initial={ {opacity: 0, scale: 0} }
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
             style = {{width: '250px',aspectRatio:1.1}}
              src={imgSrc} alt="User"
            />
            {/* <div className='accountImg'>
              <img className='accountImge' src={acco} alt="User" />
            </div>
            <div>
              <p className='text'>{UserName}</p>
            </div> */}
          </div>

          <div className='iconTab'>
            {navArr.map(({ id, title,linkto , url }) => (
             <a href={linkto} key={id}><img src={url} alt={title} /></a>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div className='flexChild confess' style={{ color: '#00327d' }} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <h1>Anonymous Voices</h1>
        <p>You can confess here too, nobody will know!</p>
        <input className='confInput' placeholder='Title' onChange={(event) => { setTitle(event.target.value) }} />
        <textarea
          className='confInputMain'
          placeholder='Confess Your Feelings'
          onChange={(event) => { setPostText(event.target.value) }}
        />
        <button className='confSubmit' onClick={createPost}>Submit</button>
      </motion.div>
      <motion.div className='flexChild topConfession' initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
       
        <div className='whiteDiv'>
        <h2 style={{ color: '#00327d' }}>Confession Of The Day</h2>
          <div className='gradientDiv'>
            <div className='whiteDiv'>
            <h3>{confessionofDay.title}</h3>
            <p style={{ color: 'blue' }}>
              {confessionofDay.body}
            </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;
