import { ReactComponent as Logo } from 'C:/Users/apurc/Documents/codewell/navbar/src/Assets/Logo.svg';

const Nav = (props) => {
  // DESTRUCTURING
  const { setDisplayPopup, displayPopup } = props;

  // TOGGLE THE POPUP DISPLAY
  const togglePopup = () => {
    setDisplayPopup(!displayPopup);
  };

  return (
    <section className='nav--container'>
      <Logo />
      <ul className="nav--links-container">
        <li
          className="nav--link"
          onClick={togglePopup}
        >
          Products
        </li>
        <li className="nav--link">Challenges</li>
        <li className="nav--link">Resources</li>
        <li className="nav--link">Other Links</li>
      </ul>
      <article className="nav--sign-in-container">
        <p>Sign in</p>
        <button className="try-free-btn">Try for free</button>
      </article>
    </section>
  );
}
 
export default Nav;