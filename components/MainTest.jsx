import { useEffect, useState } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../src/firebase-config';
import ConfessionModal from '../modular_comps/CofessionModal';
import './MainTest.css';

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
      <div style={{ display: 'flex', justifyContent: 'center', overflow: 'scroll' }}>
        <div className='confessionsNew'>
          <div className='spacer'/>
          {/* Render ConfessionModal components */}
          {postLists.map((post) => (
            <ConfessionModal key={post.id} confession={post} />
          ))}
          <div className='spacer'/>
        </div>
      </div>
    </div>
  );
};

export default MainTest;
