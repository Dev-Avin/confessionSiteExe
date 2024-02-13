import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Comment.css';

const Comment = ({ commentArr }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="openButton" onClick={handleOpen}>Open Comment</button>
      <motion.div 
        className={`commentModal ${isOpen ? 'open' : 'closed'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <button className="closeButton" onClick={handleClose}>Close</button>
        <textarea className='addComment' placeholder='Add a comment'></textarea>
        <button className='submit'>Submit</button>
        <div className='commentContainer'>
          {/* Dummy */}
          <div className='comment' id='comment-1'>
            <div className='ctitle'>Title</div>
            <div className='cbody'>Body</div>
          </div>

          {commentArr.map((comment, id) => (
            <div className='comment' id={`comment-${id}`} key={id}>
              <div className='ctitle'>{comment.title}</div>
              <div className='cbody'>{comment.body}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Comment;
