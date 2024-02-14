import React, {useEffect,useState}from 'react'
import {getDocs , collection} from 'firebase/firestore'
import {db} from '../firebase-config'


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
            // use post.title and post.textArea to access the posts and display them

            //delete functionality can also be added but i dont think so it is needed 
        })}
       </div>
   
  )
}

export default mainPage