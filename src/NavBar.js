import React, { Component } from 'react';
import { Button, Navbar, Nav, FormControl, Form } from 'react-bootstrap';


class Bar extends Component {
  render(){
    return(
      <Navbar style={{backgroundColor: "black", fontColor:"white", fontSize: "25px"}}>
         <Navbar.Brand style={{color: "white",fontSize: "30px"}} href="#home">Charles</Navbar.Brand>
         <Nav className="mr-auto">
           <Nav.Link style={{color: "white", fontSize: "30px"}} href="https://www.nba.com">NBA</Nav.Link>
         <Nav.Link style={{color: "white", fontSize: "30px"}} href="https://gmail.com">Gmail</Nav.Link>
       <Nav.Link style={{color: "white", fontSize: "30px"}} href="https://google.com">Google</Nav.Link>
         </Nav>
         <Form inline>
           <FormControl type="text" placeholder="Search" className="mr-sm-2" />
           <Button variant="outline-info">Search</Button>
         </Form>
     </Navbar>
    )
  }
}

export default Bar;
