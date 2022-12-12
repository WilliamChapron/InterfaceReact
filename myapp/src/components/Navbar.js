
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Manage from '../pages/Manage';

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";





    

export default function ColorSchemesExample() {
  const styles = {
    a: {
      margin: "0px 0px 0px -250px"
    },
    b: {
      margin: "0px 0px 0px 30px"
    },
    c: {
      margin: "0px 0px 0px 30px"
    },
    d: {
      fontSize: "35px",
      color: "red",
    }
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="http://localhost:3000/" style={{...styles.a,...styles.d}}>Accueil</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="http://localhost:3000/m" style={{...styles.b,...styles.d}}>Gestion</Nav.Link>
            <Nav.Link href="http://localhost:3000/p" style={{...styles.c,...styles.d}}>Pokedex</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}