import React, { useEffect, useState } from "react";
import { Container, Row, Form, Col, Table, FormControl, Button } from "react-bootstrap";
import Navbar from "../components/navbar";
import axios from 'axios';

class Consultar extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        list: []
    }

    this.consultar();
}

consultar(){
    fetch('http://localhost:5000/products')
    .then(response => response.json())
    .then( (data) => {
        let state = this.state;
        state.list = data;
        this.setState(state)
    });
}

render () {
  return (
        <>
        <Navbar/>
        <Container>
            <Row className="justify-content-md-center">
                <h1>Consultar Envio</h1>
                <h4>Consulte por su Cédula o número de orden de compra</h4>
            </Row>
        </Container>
            <Form>
              <Row>
                <Col xs={6}>
                  <Form.Label>Cedula</Form.Label>
                   <Row>
                    <Col xs={10}>
                      <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                   </Col>
                   <Col xs={2}>               
                    <Button variant="outline-success">Search</Button>
                   </Col>
                  </Row>                
                </Col>
                <Col xs={6}>
                  <Form.Label>Código de envio</Form.Label>
                   <Row>
                    <Col xs={10}>
                      <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                   </Col>
                   <Col xs={2}>               
                    <Button variant="outline-success">Search</Button>
                   </Col>
                  </Row>                
                </Col>
              </Row>
            </Form>
            <Table striped bordered hover className="mt-5">
              <thead>
                  <tr>
                  <th>#</th>
                  <th>Código de envio</th>
                  <th>DNI de emisor</th>
                  <th>Nombre de emisor</th>
                  <th>Correo de emisor</th>
                  <th>Ciudad de enviío</th>
                  <th>DNI del recpetor</th>
                  <th>Nombre del recpetor</th>
                  <th>Correo del receptor</th>
                  <th>Ciudad del receptor</th>
                  </tr>
              </thead>
            </Table>       
        </> 
        )};
}
export default Consultar;