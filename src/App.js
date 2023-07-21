import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Popup from './components/Popup';

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
      <Main />
    </div>
  );
}

export default App;
