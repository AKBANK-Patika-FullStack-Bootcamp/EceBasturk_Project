import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Offcanvas, Form, FormControl, Button } from "react-bootstrap";
import Message from '../images/message.png';

const MainHeaderAdmin = () => {
    return (

        <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/home">APARTMAN YÖNETİM SİSTEMİ</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/apartment">APARTMAN İŞLEMLERİ</Nav.Link>
            <Nav.Link href="/user">DAİRE SAKİNİ İŞLEMLERİ</Nav.Link>
            <NavDropdown title="FATURA İŞLEMLERİ" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/water">SU</NavDropdown.Item>
              <NavDropdown.Item href="/due">AİDAT</NavDropdown.Item>
              <NavDropdown.Item href="/electricity">ELEKTRİK</NavDropdown.Item>
            </NavDropdown>
          </Nav>
 
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
};
export default MainHeaderAdmin;