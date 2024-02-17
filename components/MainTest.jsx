import { useEffect, useState } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../src/firebase-config';
import ConfessionModal from '../modular_comps/CofessionModal';
import './MainTest.css';
import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';

const MainTest = () => {
  const [postLists, setPostLists] = useState([]);
  const postCollectionRef = collection(db, "confessions");
  
  useEffect(() => {
    const getPosts = async () => {
      try {
        // Construct a query to filter documents where switch is true
        const q = query(postCollectionRef, where("switch", "==", true));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setPostLists(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    getPosts();
  }, []); // Add an empty dependency array to ensure this effect runs only once

  return (
    <div className='confessionsContainer'>
    <div style={{ display: 'flex', justifyContent: 'center' , overflow: 'scroll' }}>
    <div className='confessionsNew'>
        <div className='spacer'/>
        {/* Render ConfessionModal components */}
        {postLists.map((post) => (
          <ConfessionModal key={post.id} confession={post} />
        ))}
        <motion.div className='redirector' 
         style={{ 
           height: '100px' ,
            width: '100%' ,
             background: 'white',
              borderRadius: '30px',
               position: 'relative' ,
                display: 'flex',
                 justifyContent: 'center' ,
                  alignItems: 'center' ,
                   }}
        whileTap={{ scale: 0.9 }}
       >
          <a href='../loginPage'><h1 style={{ color:'#00327d'}}>Wanna Confess ?</h1></a>
        </motion.div>
              
      </div>
    </div>
    </div>
  );
};

export default MainTest;
