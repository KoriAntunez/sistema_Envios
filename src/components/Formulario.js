import React from 'react';
import '../App';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import appConfig from "../appConfig";


export class Formulario extends React.Component {

  //Llama el constructor de la clase padre
  //pasa como parametros las propiedades
  constructor(props){
    //Inicializar el constructor
    super(props);

    //Instanciar State
    this.state= {
      inmueble:"",
      cantidad_visitantes:"",
      fecha:"",
      hora_inicio:"",
      hora_fin:"",
      estado: ""
    }

  }

  onChangeInmueble(event){
    let state = this.state
    state.inmueble =  event.target.value
    this.setState(state)
  }

  onChangeCantidad(event){
    let state = this.state
    state.cantidad_visitantes =  event.target.value
    this.setState(state)
  }

  onChangeFecha(event){
    let state = this.state
    state.fecha =  event.target.value
    this.setState(state)
  }

  onChangeHoraInicio(event){
    let state = this.state
    state.hora_inicio =  event.target.value
    this.setState(state)
  } 
 
  onChangeHoraFin(event){
    let state = this.state
    state.hora_fin =  event.target.value
    this.setState(state)
  } 

  handleForm(event){
    event.preventDefault();

    let data={
      inmueble: this.state.inmueble,
      cantidad_visitantes: this.state.cantidad_visitantes,
      fecha: this.state.fecha,
      hora_inicio:this.state.hora_inicio,
      hora_fin:this.state.hora_fin,
      estado: "disponible"
    }
    console.log(data)
    
    axios.post(appConfig.urlBackEnd+"/api/espacio/add",data).
        then( function (){
          alert("Registro exitoso!!!")
    }).catch(function () {
          alert("Error inesperado !!!")
    })

  }
  render() {
    return(
        <Container>
    
        <Row className="justify-content-md-center">
          <Col xs lg="10">
          <h1>Registar envío</h1>

            <Form onSubmit={this.handleForm.bind(this)}>
            <Row>
            <Col xs XS="5">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Código de envio</Form.Label>
                <Form.Control required  value= {this.state.inmueble}   onChange={this.onChangeInmueble.bind(this)} type="name" name="inmueble" placeholder="Ingrese nombre de Inmueble" />
              </Form.Group>          
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Cedula de Emisor</Form.Label>
                <Form.Control required value= {this.state.cantidad_visitantes} onChange={this.onChangeCantidad.bind(this)} type="number" name="cantidad_visitantes" placeholder="Ingrese la cantidad de visitantes" />
              </Form.Group> 
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre de emisor</Form.Label>
                <Form.Control required value= {this.state.fecha} onChange={this.onChangeFecha.bind(this)} type="name" name="fecha" placeholder="dd/mm/yyyy" />
              </Form.Group>          
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Correo de emisor</Form.Label>
                <Form.Control required value= {this.state.hora_inicio} onChange={this.onChangeHoraInicio.bind(this)} type="mail" name="hora_inicio" placeholder="Ingrese hora de inicio" />
              </Form.Group> 
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Direccion de emisor</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="name" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Ciudad de emisor</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="name" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Provincia de emisor</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="name" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Codigo postal emisor</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="name" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Código de dirección de emisor</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="name" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Cedula Recepción</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="number" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre de recepcionista</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="name" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>correo recepcionista</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="name" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 
            </Col>
              

              <Col xs XS="5">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Direccion de recepcionista </Form.Label>
                <Form.Control required  value= {this.state.inmueble}   onChange={this.onChangeInmueble.bind(this)} type="name" name="inmueble" placeholder="Ingrese nombre de Inmueble" />
              </Form.Group>          
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Ciudad recepcionista</Form.Label>
                <Form.Control required value= {this.state.ciudad_recepcion} onChange={this.onChangeCantidad.bind(this)} type="name" name="ciudad_recepcion" />
              </Form.Group> 
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Provincia de recepcionista</Form.Label>
                <Form.Control required value= {this.state.fecha} onChange={this.onChangeFecha.bind(this)} type="name" name="fecha" placeholder="dd/mm/yyyy" />
              </Form.Group>          
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Codigo postal de recepcionista</Form.Label>
                <Form.Control required value= {this.state.hora_inicio} onChange={this.onChangeHoraInicio.bind(this)} type="name" name="hora_inicio" placeholder="Ingrese hora de inicio" />
              </Form.Group> 
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Código de país de recepcionista</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="name" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Paquete tamaño</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="number" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Paquete ancho</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="number" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Paquete altura</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="number" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Paquete dimension unidad</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="number" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Paquete peso</Form.Label>
                <Form.Control required value= {this.state.peso} onChange={this.onChangeHoraFin.bind(this)} type="number" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Unidad de peso</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="name" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Estado</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="status" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              </Col>
         </Row>
              <Col className="App">
              <Button type="submit">
                  Guardar
              </Button>
              </Col>

    
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }

}

export default Formulario;