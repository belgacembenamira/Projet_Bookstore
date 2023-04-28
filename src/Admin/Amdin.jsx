/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 28/04/2023 - 03:50:44
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React from 'react';
import {  Nav, Navbar, } from 'react-bootstrap';

function Admin() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/admin/listecommande">Commandes</Nav.Link>
            <Nav.Link href="/admin/user">Utilisateurs</Nav.Link>
          </Nav>
          {/* <NavDropdown title="Admin" id="basic-nav-dropdown">
            <NavDropdown.Item href="#profile">Profil</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#logout">Déconnexion</NavDropdown.Item>
          </NavDropdown> */}
        </Navbar.Collapse>
      </Navbar>
      {/* <Container className="mt-3">
        <Row>
          <Col>
            <h1>Commandes</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Utilisateurs</h1>
          </Col>
        </Row>
      </Container> */}
      <h1>hello admin</h1>
    </div>
  );
}

export default Admin;
