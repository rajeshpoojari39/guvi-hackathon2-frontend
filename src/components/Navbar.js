import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import movie from "../movie.svg";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand>
            <img
              alt=''
              src={movie}
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{" "}
            Movies
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link as={NavLink} to='/'>
              Home
            </Nav.Link>
            {/* <Nav.Link as={NavLink} to='/addTheater'>
              Add Theater
            </Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
