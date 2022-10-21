import React, { useContext } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Leftsidenav from '../Leftsidenav/Leftsidenav';
import { FaUserPlus } from "react-icons/fa";
import { Image } from 'react-bootstrap';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert('Logout successfully');
      })
      .catch(error => {
        console.error(error);
  })
  }
  console.log(user);
    return (
      <div className="mb-4">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to="/">News Portal</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">
                  {user?.uid ? (
                    <>
                      <span className="me-2">{user?.displayName}</span>
                      <Link onClick={handleLogOut} className="me-2">
                        Logout
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link className="me-2" to='/login'>Login</Link>
                      <Link className="me-2" to='/register'>Register</Link>
                    </>
                  )}
                </Nav.Link>
                <Nav.Link eventKey={2} href="#profile">
                  {user?.photoURL ? (
                    <Image
                      src={user.photoURL}
                      roundedCircle
                      style={{ height: "30px" }}
                    ></Image>
                  ) : (
                    <FaUserPlus></FaUserPlus>
                  )}
                </Nav.Link>
              </Nav>
              <div className="d-lg-none">
                <Leftsidenav></Leftsidenav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;