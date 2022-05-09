import React, { useEffect, useState } from "react";
import { Container, Row, Form, Col, Table, FormControl, Button } from "react-bootstrap";
import Navbar from "../components/navbar";
import appConfig from "../appConfig";
import axios from "axios";

class Consultar extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
        list: []
    }
    this.envios();
  }
  
  onChangecod_envio(event){
    let state = this.state
    state.cod_envio =  event.target.value
    this.setState(state)
  }

  onChangeDNI_recepcion(event){
    let state = this.state
    state.DNI_recepcion =  event.target.value
    this.setState(state)
  } 
  
envios(){
    fetch(appConfig.urlBackEnd+'/data')
    .then(response => response.json())
    .then( (data) => {
        let state = this.state;
        state.list = data;
        this.setState(state)
    });
  }


consulta(cod_envio,DNI_recepcion){
    axios.get(appConfig.urlBackEnd+'/cedula',[cod_envio,DNI_recepcion]).
    then( function (){
      alert([cod_envio,DNI_recepcion])
}).catch(function () {
      alert("Error inesperado !!!")
})

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
                  <Form.Label>DNI</Form.Label>
                   <Row>
                    <Col xs={10}>
                      <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        value= {this.state.DNI_recepcion}
                        onChange={this.onChangeDNI_recepcion.bind(this)}
                      />
                   </Col>
                   <Col xs={2}>               
                    <Button variant="outline-success" onClick={() => this.consulta(null,this.state.DNI_recepcion)}>Search</Button>
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
                        value= {this.state.cod_envio}
                        onChange={this.onChangecod_envio.bind(this)}
                      />
                   </Col>
                   <Col xs={2}>               
                    <Button variant="outline-success"  onClick={() => this.consulta(this.state.cod_envio,null)}>Search</Button>
                   </Col>
                  </Row>                
                </Col>
              </Row>
            </Form>

            <Table striped bordered hover className="mt-5">
              <thead>
                  <tr>
                  <th>Código de envio</th>
                  <th>DNI de emisor</th>
                  <th>Nombre de emisor</th>
                  <th>Correo de emisor</th>
                  <th>Ciudad de enviío</th>
                  <th>DNI del recpetor</th>
                  <th>Nombre del recpetor</th>
                  <th>Provincia del receptor</th>
                  <th>Ciudad del receptor</th>
                  </tr>
              </thead>
              <tbody>
                
                {
                    this.state.list.map((prodct) =>
                    <tr>
                        <td>{prodct.cod_envio}</td>
                        <td>{prodct.DNI_emisor}</td>
                        <td>{prodct.address_from_name}</td>
                        <td>{prodct.address_from_email}</td>
                        <td>{prodct.address_from_city}</td>
                        <td>{prodct.DNI_recepcion}</td>
                        <td>{prodct.address_to_name}</td>
                        <td>{prodct.address_to_province}</td>
                        <td>{prodct.address_to_city}</td>
                    </tr>
                  )
                }
                
            </tbody>
            </Table>       
        </> 
        )};
}
export default Consultar;