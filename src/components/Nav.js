import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { ReactComponent as Logo } from 'C:/Users/apurc/Documents/codewell/navbar/src/Assets/Logo.svg';

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Products</Nav.Link>
              <Nav.Link href="#link">Challenges</Nav.Link>
              <Nav.Link href="#link">Resources</Nav.Link>
              <Nav.Link href="#link">Other Links</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
 
export default Header;