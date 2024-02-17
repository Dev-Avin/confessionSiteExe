import React from 'react';
import { motion } from 'framer-motion';
import './Account.css';
import account from '../components/assets/account.png';
import instagram from '../components/assets/instagram.png';
import eyes from '../components/assets/eyes.png';
import Exe from '../components/assets/exe.png';

const navArr = [
  {
    id: 2,
    title: 'See more',
    linkto: './confessionPage',
    url: eyes,
  },
  {
    id: 1,
    title: 'Account',
    linkto: './about',
    url: account,
  },
  {
    id: 1,
    title: 'Instagram',
    url: instagram,
    linkto: 'https://www.instagram.com/teamexenith/',
  },
];

const Account = () => {
  const imgSrc = Exe;

  return (

      <motion.div
        className="flexChild account"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div
          style={{
            background: 'white',
            width: '80%',
            height: '80%',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignContent: 'center',
            flexDirection: 'column',
            borderRadius: '40px',
          }}
        >
          <h1 style={{ color: '#00327d', textShadow: 'rgba(0,0,0,0.4) 0.0.1em 0.1em', textAlign: 'center' }}>TEAM .EXE</h1>
          <div className="flexCont">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              style={{ width: '250px', aspectRatio: 1.1 }}
              src={imgSrc}
              alt="User"
            />
          </div>
          <div className="iconTab">
            {navArr.map(({ id, title, linkto, url }) => (
              <a href={linkto} key={id}><img src={url} alt={title} style={{width:'45px' , aspectRatio:1}}/></a>
            ))}
          </div>
        </div>
      </motion.div>

  );
};

export default Account;
