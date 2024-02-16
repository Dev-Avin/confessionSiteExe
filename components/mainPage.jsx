import  { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase-config';
// import ConfessionModal from '../modular_comps/CofessionModal.jsx';

const MainPage = () => {
  const [postLists, setPostLists] = useState([]);
  const postCollectionRef = collection(db, "confessions");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []); // Add an empty dependency array to ensure this effect runs only once

  // Log the post object to the console
  console.log(postLists);

  return (
    <div className='homePage'>
      {/* Render ConfessionModal components */}
      {/* {postLists.map((post) => (
        <ConfessionModal key={post.id} confession={post} />
      ))} */}
    </div>
  );
};

export default MainPage;
