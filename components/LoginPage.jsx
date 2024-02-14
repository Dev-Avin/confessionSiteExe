import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './LoginPage.css';
import heart from './assets/heart.png';
import account from './assets/account.png';
import call from './assets/call.png';
import instagram from './assets/instagram.png';
import message from './assets/message.png';
import eyes from './assets/eyes.png';
import save from './assets/Save.png';
import acco from './assets/acco.png';
import {addDoc , collection} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
import {db,auth} from "../src/firebase-config"

//import Confessionof the day
var confessionofDay ={
 title:'Secret Crush',
 body:"I've had a secret crush on my best friend for years. Every time I see him, my heart skips a beat, but I've never had the courage to tell him."
}

const optionArray = [
  {
    id: 1,
    title: 'Account',
    linkto: '/',
    url:account,
  },
  {
    id: 2,
    title: 'See more',
    linkto: './confessionPage',
    url: eyes,
  },
  
  {
    id: 4,
    title: 'Liked',
    linkto: '#',
    url: heart,

  }
];

const navArr = [
  {
    id: 1,
    title: 'Instagram',
    url: instagram,
    linkto: 'https://www.instagram.com/teamexenith/',
  }, 
  {
    id: 2,
    title: 'Messages',
    url: message,
    linkto: ''
  }
 
];

const LoginPage = () => {

  const [title,setTitle]=useState("")
  const [postText,setPostText]=useState("")

  const postCollectionRef=collection(db,"confessions");
  let navigate= useNavigate();
  const createPost=async () =>{
        await addDoc(postCollectionRef, {title:title , postText:postText , author: {name: auth.currentUser.displayName , id:auth.currentUser.uid } })

        setTitle("")
        setPostText("")
        
        navigate("/LoginPage")
  }


  const [UserName, setUserName] = useState('Anon');

  
  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="homeContainer"
    >
      <motion.div className='flexChild account' initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <h1 style={{ color: '#00327d', textShadow: 'rgba(0,0,0,0.5) 0.1em 0.1em' }}>TEAM EXE</h1>
        <div className='flexCont'>
          <div className='accountImg'>
            <img className='accountImge' src={acco} alt="User" />
          </div>
          <div>
            <p className='text'>{UserName}</p>
          </div>
        </div>
        <div className='options'>
          {optionArray.map(({ id, title,linkto , url }) => (
            <div className='optInd' key={id}>
             <img src={url} alt={title} />
             <a href={linkto}><p>{title}</p></a>
             </div>
          ))}
        </div>
        <div className='iconTab'>
          {navArr.map(({ id, title, url }) => (
            <img key={id} src={url} alt={title} />
          ))}
        </div>
      </motion.div>
      <motion.div className='flexChild confess' style={{ color: '#00327d' }} initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <h1>Anonymous Voices</h1>
        <p>You can confess here too, nobody will know!</p>
        <input className='confInput' placeholder='Title' onChange={(event)=>{setTitle(event.target.value)}} />
        <textarea
          className='confInputMain'
          placeholder='Confess Your Feelings'
          onChange={(event)=>{setPostText(event.target.value)}}
        />
        <button className='confSubmit' onClick={createPost}>Submit</button>
      </motion.div>
      <motion.div className='flexChild topConfession' initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
        <h2 style={{ color: '#00327d' }}>Confession Of The Day</h2>
        <div className='whiteDiv'>
          <div className='gradientDiv'>
            <h3>{confessionofDay.title}</h3>
            <p style={{color:'blue'}}>
             {confessionofDay.body}

            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;
