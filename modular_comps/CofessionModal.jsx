import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./ConfessionModal.css";
import heartWhite from '../components/assets/heartwhite.png';
import heartRed from '../components/assets/heartred.png';


const ConfessionModal = ({ confession }) => {
  const [likes, setLikes] = useState(confession.likes || 0);
  const [liked, setLiked] = useState(false);

  const liker = () => {
    // Increment likes count if liked, decrement if unliked
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
  };

  return (
    <motion.div 
      className="confessionModal"
      initial={{ opacity: 0, y: -50 , scale:0 }} 
      // Initial state, hidden and below
      whileInView={{ opacity: 1, y: 0  , scale:1 }
    } // Animation when component becomes visible
      transition={{ duration: 0.5 , }} 
    >
      <h2 className="confessionHead">{confession.title}</h2>
      <p className="confessionPara">{confession.postText}</p>
      <div style={{
        display:'flex',
        width:'50%',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        flexDirection:'row',
      }}>
        <button className="likeButton" style={{background: liked ? 'white' : 'white'}} onClick={liker}>
          <img src={liked ? heartRed : heartWhite} alt="heart" /> 
        </button>
        <p className="likeCount" style={{color: liked ? 'red' : 'red' ,paddingBottom:'10px'}}>{likes}</p>
      </div>
    </motion.div>
  );

  
};

export default ConfessionModal;
