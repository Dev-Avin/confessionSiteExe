
import React from 'react';
import './ConfessionPage.css';
import { motion } from 'framer-motion';
import ConfessionModal from '../modular_comps/CofessionModal';

const ConfessionArr = [
  {
    id: 1,
    title: 'Confession 1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et justo a nisi placerat ullamcorper nec non lorem.',
    age: 25,
    gender: 'Male',
    likes: 10
  },
  {
    id: 2,
    title: 'Confession 2',
    body: 'Vestibulum at ligula et nibh congue vulputate. Mauris lobortis metus at nisi consequat, in viverra quam convallis.',
    age: 30,
    gender: 'Female',
    likes: 5
  },
  {
    id: 3,
    title: 'Confession 3',
    body: 'Integer quis ligula nec sapien facilisis consectetur ac vel libero. Ut in urna at ex ullamcorper consectetur.',
    age: 20,
    gender: 'Non-binary',
    likes: 8
  }
];

const ConfessionPage = () => {
  return (
    <motion.div 
    className='homeContainer'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      style={{
        background: 'blue',
        height: '100vh',
        padding: '20px',
        color: 'white',
      }}
    >
     <div className='confessions'>
      {ConfessionArr.map(confession => (
        <ConfessionModal key={confession.id} confession={confession} />
      ))}
     </div>
    </motion.div>
  );
};

export default ConfessionPage;
