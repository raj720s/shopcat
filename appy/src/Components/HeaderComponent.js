import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "./SearchBox";
import { useNavigate } from "react-router-dom";
function HeaderComponent() {
  let navigate = useNavigate();
  return (
    // <div>this is header</div>
    // <header>
    //   <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
    //     <Container>
    //       <LinkContainer to="/">
    //         <Navbar.Brand>Product Catalogue</Navbar.Brand>
    //       </LinkContainer>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       {/* <Navbar.Collapse id="basic-navbar-nav"> */}
    //       {/* passing a prop from the history of parent component into the child prop route is the react thing which can access  the history*/}
    //       {/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
    //       <SearchBox history={navigate} />
    //       <Nav className="ml-auto">
    //         <LinkContainer to="/cart">
    //           <Nav.Link>
    //             <i className="fas fa-shopping-cart"></i> Cart
    //           </Nav.Link>
    //         </LinkContainer>
    //       </Nav>
    //       {/* </Navbar.Collapse> */}
    //     </Container>
    //   </Navbar>
    // </header>
    <Navbar bg="light" expand="md">
      <Container fluid>
        <Navbar.Brand href="/">ProductyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          {/* <Form className="d-flex ml-auto">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          <SearchBox />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
