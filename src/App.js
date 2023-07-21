import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import Popup from './components/Popup';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // STATE MANAGEMENT
  const [displayPopup, setDisplayPopup] = useState(false);

  return (
    <div className="App">
      <Nav
        displayPopup={displayPopup}
        setDisplayPopup={setDisplayPopup} 
      />
      {displayPopup ? <Popup /> : ''}
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
