import '../index.css';




import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

    

export default function ColorSchemesExample() {
  return <Navbar className = "opacity" bg="dark">
    <Container>
      <Navbar.Brand href="http://localhost:3000/p">
        <img
          src="https://risibank.fr/cache/medias/0/17/1737/173777/full.png"
          width="165"
          height="125"
          className="d-inline-block align-top nav-margin-one"
        />
      </Navbar.Brand>
      <Navbar.Brand href="http://localhost:3000/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
          width="200"
          height="75"
          className="d-inline-block align-top nav-margin-two"
        />
      </Navbar.Brand>
      <Navbar.Brand href="http://localhost:3000/m">
        <img
          src="http://firenews.ionicbucket.com/img/adminpanel-icon.png"
          width="200"
          height="75"
          className="d-inline-block align-top nav-margin-three"
        />
      </Navbar.Brand>
    </Container>
  </Navbar>

};
  





