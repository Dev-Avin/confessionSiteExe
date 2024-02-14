import React, {useEffect,useState}from 'react'
import {getDocs , collection} from 'firebase/firestore'
import {db} from '../firebase-config'
import '../modular_comps/CofessionModal.jsx'
import ConfessionModal from '../modular_comps/CofessionModal.jsx'

const mainPage = () => {


  const [postLists, setPostLists]=useState([]);
  const postCollectionRef=collection(db,"confessions");
  useEffect(()=>{
    const getPosts = async () =>{
      const data=await getDocs(postCollectionRef);
      setPostLists(data.docs.map((doc)=>({...doc.data(), id:doc.id})));

    };

    getPosts();
  })
  return (
       <div className='homePage'>
        {postLists.map((post)=>{
         <ConfessionModal confession={post}/>
        })}
       </div>
   
  )
}

export default mainPage