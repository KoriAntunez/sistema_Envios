import React, { useEffect, useState } from "react";
import { Container, Row, Form, Col, Table, FormControl, Button } from "react-bootstrap";
import Navbar from "../components/navbar";
const { Column } = Table;
const Consultar = () => {
    return(
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
                  <th>Nombre producto</th>
                  <th>Precio</th>
                  <th>Fecha Act</th>
                  </tr>
              </thead>
            </Table>       
        </> 
        );
}
export default Consultar;