import { NavLink } from 'react-router-dom';

// Imports React Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar_layout">
      <Container className='navbar_container'>
        <div className='navbar_brand'>
          <Navbar.Brand as={NavLink} to={"/home"}>TronicStore</Navbar.Brand>
        </div>
        <div className='navbar_content'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/registro"}>
              <Button variant="primary">Registro</Button>
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/login"}>
              <Button variant="primary">Ingresar</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar