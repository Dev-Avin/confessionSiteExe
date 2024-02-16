import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./ConfessionModal.css";
import heartWhite from '../components/assets/heartwhite.png';
import heartRed from '../components/assets/heartred.png';

const ConfessionModal = ({ confession }) => {
  const [likes, setLikes] = useState(confession.likes);
  const [liked, setLiked] = useState(false);

  const liker = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <motion.div 
      className="confessionModal"
      initial={{ opacity: 0, y: -50 , scale:0 }} // Initial state, hidden and below
      whileInView={{ opacity: 1, y: 0  , scale:1}} // Animation when component becomes visible
      transition={{ duration: 0.5 }} // Duration of the animation
    >
      <h2 className="confessionHead">{confession.title}</h2>
      <p className="confessionPara">{confession.postText}</p>
      <div style={{
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
      }}>
        <button className="likeButton" onClick={liker}>
          <img src={liked ? heartRed : heartWhite} alt="heart" /> 
        </button>
      </div>
    </motion.div>
  );
};

export default ConfessionModal;
