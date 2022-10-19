/*
 * @Author: Jinqi Li
 * @Date: 2022-10-19 01:03:25
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-10-19 01:35:20
 * @FilePath: /NewBrightLaw/use-visa/components/NavMenu.js
 */
import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Form,
  Button,
} from "react-bootstrap";

export default function NavMenu() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">NewBright Law Group</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ justifyContent: "flex-end" }}
        >
          <Nav className="me-auto" style={{ marginRight: "1em" }}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              style={{ backgroundColor: "#364d79", borderColor: "#364d79" }}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
