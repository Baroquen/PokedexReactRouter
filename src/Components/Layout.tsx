import { FC } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

export const Layout: FC = () => {

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue'
  };  

  const activeLinkStyle = {
    margin: "1rem",
    color: 'blue',
  };  

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Nav>
            <NavLink style={({isActive}) => isActive ? activeLinkStyle : linkStyle } to="/">Home</NavLink>
            <NavLink style={({isActive}) => isActive ? activeLinkStyle : linkStyle } to="/history">Recently Viewed</NavLink>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
    </Container>
  );
};