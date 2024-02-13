import React, { useState } from "react";

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
      <p className="confessionID">@{confession.age},{confession.gender}</p>
      <button className="likeButton" onClick={liker}>
        {liked ? "Liked" : "Like"}
      </button>
      <p className="confessionLikes">{likes}</p>
    </div>
  );
};

export default ConfessionModal;
