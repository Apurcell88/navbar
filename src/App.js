import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import Popup from './components/Popup';
import LandingPage from './components/LandingPage';

import 'bootstrap/dist/css/bootstrap.min.css';

import { ReactComponent as Menu } from 'C:/Users/apurc/Documents/codewell/navbar/src/Assets/Capterra Logo.svg';

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
    </div>
  );
}

export default App;
