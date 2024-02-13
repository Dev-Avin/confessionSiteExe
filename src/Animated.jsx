import './Animated.css';
import { motion } from 'framer-motion';

const Animated = () => {
  return (
    <>
      <div className='blurr'>
        <motion.div
          id='ellipse1'
          className='fixed ellipse1'
          animate={{
            translateX: ['100vw', '80vw', '50vw', '40vw', '50vw', '70vw', '40vw', '100vw'],
            translateY: ['80vh', '60vh', '90vh', '100vh', '40vh', '60vh', '80vh', '60vh'],
            scale: [0.5, 1, 1, 1, 1, 1, 1, 0.5], 
          }}
          transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
        />
        <motion.div
          id='ellipse2'
          className='fixed ellipse2'
          animate={{
            translateX: ['100vw', '50vw', '0vw', '50vw', '100vw', '50vw', '50vw', '100vw'],
            translateY: ['40vh', '50vh', '60vh', '100vh', '60vh', '70vh', '80vh', '40vh'],
            scale: [0.5, 1, 1, 1, 1, 1, 1, 0.5],
          }}
          transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          id='ellipse3'
          className='fixed ellipse3'
          animate={{
            translateX: ['100vw', '0vw', '50vw', '100vw', '50vw', '0vw', '50vw', '100vw'],
            translateY: ['100vh', '20vh', '50vh', '3vh', '30vh', '20vh', '100vh', '100vh'],
            scale: [0.5, 1, 1, 1, 1, 1, 1, 0.5],
          }}
          transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          id='ellipse4'
          className='fixed ellipse4'
          animate={{
            translateX: ['0vw', '50vw', '100vw', '10vw', '100vw', '50vw', '80vw', '0vw'],
            translateY: ['0vh', '100vh', 'vh', '100vh', '80vh', '30vh', '40vh', '40vh'],
            scale: [0.5, 1, 1, 1, 1, 1, 1, 0.5], 
          }}
          transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
        />
        <motion.div
          id='ellipse5'
          className='fixed ellipse5'
          animate={{
            translateX: ['0vw', '0vw', '50vw', '100vw', '50vw', '0vw', '50vw', '1vw'],
            translateY: ['1vh', '69vh', '80vh', '100vh', '80vh', '25vh', '70vh', '1vh'],
            scale: [0.5, 1, 1, 1, 1, 1, 1, 0.5],
          }}
          transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          id='ellipse6'
          className='fixed ellipse6'
          animate={{
            translateX: ['100vw', '50vw', '0vw', '50vw', '100vw', '50vw', '0vw', '50vw'],
            translateY: ['20vh', '25vh', '30vh', '100vh', '30vh', '35vh', '40vh', '35vh'],
            scale: [0.5, 1, 1, 1, 1, 1, 1, 0.5],
          }}
          transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          id='ellipse7'
          className='fixed ellipse7'
          animate={{
            translateX: ['100vw', '0vw', '50vw', '100vw', '50vw', '0vw', '50vw', '100vw'],
            translateY: ['0vh', '30vh', '100vh', '50vh', '20vh', '30vh', '30vh', '0vh'],
            scale: [0.5, 1, 1, 1, 1, 1, 1, 0.5],
          }}
          transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          id='ellipse8'
          className='fixed ellipse8'
          animate={{
            translateX: ['0vw', '50vw', '0vw', '70vw', '100vw', '50vw', '0vw', '50vw'],
            translateY: ['00vh', '0vh', '-5vh', '-10vh', '5vh', '-7vh', '1vh', '00vh'],
            scale: [0.5, 1, 1, 1, 1, 1, 1, 0.5],
          }}
          transition={{ duration: 9, ease: 'easeInOut', repeat: Infinity }}
        />
      </div>
    </>
  );
};

export default Animated;
