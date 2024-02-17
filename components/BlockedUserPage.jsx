import { motion } from 'framer-motion';
import './BlockedUserPage.css';

const BlockedUserPage = () => {
  return (
<motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="blockContainer"
    >
      <div className="blockedUserContent">
       <h1>
       <p>You have been blocked from accessing this page.</p>
        <p>Please contact the administrator for further assistance.</p>
       </h1>
      </div>
    </motion.div>
  );
};

export default BlockedUserPage;
