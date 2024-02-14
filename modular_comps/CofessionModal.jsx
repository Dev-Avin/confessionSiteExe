import React, { useState } from "react";
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
    <div className="confessionModal">
      <h2 className="confessionHead">{confession.title}</h2>
      <p className="confessionPara">{confession.body}</p>
      <div style={{
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
      }}>
        <button className="likeButton" onClick={liker}>
          <img src={liked ? heartRed : heartWhite} alt="heart" /> 
        </button>
        <p  className="confessionLikes">{likes}</p>
      </div>
    </div>
  );
};

export default ConfessionModal;
