import './App.css';
import { useState } from 'react';
import Header from './components/Nav';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Netflix } from 'C:/Users/apurc/Documents/codewell/navbar/src/Assets/Netflix Logo.svg';

function App() {
  // STATE MANAGEMENT
  const [displayPopup, setDisplayPopup] = useState(false);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
