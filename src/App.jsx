
import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';
import Animated from './Animated.jsx'
import About from '../components/About.jsx'
import './App.css'; 
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import MainTest from '../components/MainTest.jsx';
import BlockedUserPage from '../components/BlockedUserPage.jsx';
import NotFoundPage from '../components/NotFoundPage.jsx';


const App = () => {
    

  return (
      <>

    
      <div className='anime-container'>
      <Animated/>
      </div>
      <div className='sticker'>
        <div style={{ height: '85vh', width: '80vw', marginTop: '5vh', border: '10px solid white', borderRadius: '40px', position: 'relative', backgroundImage: `url('/rose.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Router>

  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/LoginPage" element={<LoginPage />} />
    <Route path="/confessionPage" element={<MainTest />} />
    <Route path="/about" element={<About />} />
    <Route path="/blocked" element={<BlockedUserPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
</Router>


</div>
</div>

    </>
    
)



     
  
}

export default App;
