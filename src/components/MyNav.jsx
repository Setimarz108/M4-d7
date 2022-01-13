import React from "react";
import {
  Nav,
  FormControl,
  Button,
  
  Form,
  Navbar,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function MyNav() {
  const location = useLocation();
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Strive-Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
             
             <Link to="/"><div className={`nav-link${location.pathname === '/' ? ' active' : ''}`} >Home</div></Link>
            
                <Link to="/Registration">
              <div className={location.pathname === '/detail' ? 'nav-link active' : 'nav-link'}> Registration</div></Link>
           
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
