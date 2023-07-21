// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import { ReactComponent as Logo } from 'C:/Users/apurc/Documents/codewell/navbar/src/Assets/Logo.svg';

const Nav = (props) => {
  return (
    <section className='nav--container'>
      <Logo />
      <ul className="nav--links-container">
        <li className="nav--link">Products</li>
        <li className="nav--link">Challenges</li>
        <li className="nav--link">Resources</li>
        <li className="nav--link">Other Links</li>
      </ul>
      <article className="nav--sign-in-container">
        <p>Sign in</p>
        <button className="nav--try-free-btn">Try for free</button>
      </article>
    </section>
  );
}
 
export default Nav;