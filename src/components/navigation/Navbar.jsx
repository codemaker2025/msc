import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function NavbarComponent() {
  const { auth, globalLogout } = useAuth();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-lg">
      <div className="container">
        <Navbar.Brand href="#">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Link to="/test" className="nav-link text-white hover:text-yellow-300">
                Home
              </Link>
            </Nav.Item>
            
            {auth && (
              <Nav.Item>
                <Button
                  variant="danger"
                  onClick={globalLogout}
                  className="p-2"
                >
                  Logout
                </Button>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
