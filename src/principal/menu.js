import Nav from 'react-bootstrap/Nav';
import React from 'react';
import Container from 'react-bootstrap/Container';  
import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';


class Menu extends React.Component{
render(){
return(


                
              

 
    <Container>
        <Row>
            
            <Col sm={10}>  
           <Nav>
            <Nav.Item>
            <Nav.Link href="/1">NOMBRE 1</Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link href="/2">NOMBRE 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/3">NOMBRE 3 </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/4">NOMBRE 4</Nav.Link>
            </Nav.Item>
            </Nav>
            </Col>
            <Col sm={2}>  
            <Nav>
            <Nav.Item>
            <Nav.Link href="/1">LOGO</Nav.Link>
            </Nav.Item>

            </Nav>
            
            </Col>
        </Row>

    </Container>
 
    


 );


}}
export default Menu;