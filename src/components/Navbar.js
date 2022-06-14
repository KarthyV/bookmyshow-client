import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { MyContext } from "../context";
import { useNavigate, Link } from "react-router-dom";

const Navibar = () => {
  const { user, setUser, admin } = useContext(MyContext);
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            Book<span className="rounded">my</span>show
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/movies">
              Movies
            </Nav.Link>
            {!user ? (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            ) : (
              ""
            )}
            {!user ? (
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
            ) : (
              ""
            )}
            {user && admin ? (
              <Nav.Link as={Link} to="/admin">
                Admin Access
              </Nav.Link>
            ) : (
              ""
            )}
            {user ? <Nav.Link onClick={logout}>Log Out</Nav.Link> : ""}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navibar;
