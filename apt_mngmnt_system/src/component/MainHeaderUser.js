import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Offcanvas, Form, FormControl, Button } from "react-bootstrap";

const MainHeaderUser= () => {
    return (

        <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/resident">APARTMAN YÖNETİM SİSTEMİ</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
 
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
};
export default MainHeaderUser;