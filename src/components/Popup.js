import { ReactComponent as Spense } from 'C:/Users/apurc/Documents/codewell/navbar/src/Assets/Spense_Icon.svg';
import { ReactComponent as Fiber } from 'C:/Users/apurc/Documents/codewell/navbar/src/Assets/Fiber_Icon.svg';
import { ReactComponent as Gradie } from 'C:/Users/apurc/Documents/codewell/navbar/src/Assets/Gradie_Icon.svg';

const Popup = () => {
  return (
    <div className='popup--container'>
      <div className="popup--product">
        <Spense className="popup--logo" />
        <h3 className='popup--title'>Spense</h3>
        <p className='popup--description'>Spense is a landing page for writers. Great for practicing absolute positioning and flex layouts.</p>
      </div>
      <div className="popup--product">
        <Fiber className="popup--logo" />
        <h3 className='popup--title'>Fiber Landing Page</h3>
        <p className='popup--description'>An online portfolio generator. Great to practice flex/grid layouts, and absolute positioning.</p>
      </div>
      <div className="popup--product">
        <Gradie className="popup--logo" />
        <h3 className='popup--title'>Gradie Sign Up Page</h3>
        <p className='popup--description'>Gradie is a simple sign up page, great to practice centering layouts.</p>
      </div>
    </div>
  );
}
 
export default Popup;