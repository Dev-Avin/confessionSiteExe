import { motion } from 'framer-motion';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
        <motion.div 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="notContainer"
            >
      <h1 className="notFoundTitle">404 - Page Not Found</h1>
      <div className="notFoundContent">
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;
