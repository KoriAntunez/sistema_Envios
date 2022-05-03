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
                <Form.Label>Inmueble</Form.Label>
                <Form.Control required  value= {this.state.inmueble}   onChange={this.onChangeInmueble.bind(this)} type="name" name="inmueble" placeholder="Ingrese nombre de Inmueble" />
              </Form.Group>          
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Cantidad máxima de visitantes</Form.Label>
                <Form.Control required value= {this.state.cantidad_visitantes} onChange={this.onChangeCantidad.bind(this)} type="number" name="cantidad_visitantes" placeholder="Ingrese la cantidad de visitantes" />
              </Form.Group> 
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Fecha de visita</Form.Label>
                <Form.Control required value= {this.state.fecha} onChange={this.onChangeFecha.bind(this)} type="date" name="fecha" placeholder="dd/mm/yyyy" />
              </Form.Group>          
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Hora de inicio</Form.Label>
                <Form.Control required value= {this.state.hora_inicio} onChange={this.onChangeHoraInicio.bind(this)} type="time" name="hora_inicio" placeholder="Ingrese hora de inicio" />
              </Form.Group> 
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Hora de fin</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="time" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Hora de fin</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="time" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Hora de fin</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="time" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Hora de fin</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="time" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Hora de fin</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="time" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Hora de fin</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="time" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Hora de fin</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="time" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Hora de fin</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="time" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 
            </Col>
              

              <Col xs XS="5">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Inmueble</Form.Label>
                <Form.Control required  value= {this.state.inmueble}   onChange={this.onChangeInmueble.bind(this)} type="name" name="inmueble" placeholder="Ingrese nombre de Inmueble" />
              </Form.Group>          
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Cantidad máxima de visitantes</Form.Label>
                <Form.Control required value= {this.state.cantidad_visitantes} onChange={this.onChangeCantidad.bind(this)} type="number" name="cantidad_visitantes" placeholder="Ingrese la cantidad de visitantes" />
              </Form.Group> 
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Fecha de visita</Form.Label>
                <Form.Control required value= {this.state.fecha} onChange={this.onChangeFecha.bind(this)} type="date" name="fecha" placeholder="dd/mm/yyyy" />
              </Form.Group>          
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Hora de inicio</Form.Label>
                <Form.Control required value= {this.state.hora_inicio} onChange={this.onChangeHoraInicio.bind(this)} type="time" name="hora_inicio" placeholder="Ingrese hora de inicio" />
              </Form.Group> 
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Hora de fin</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="time" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Hora de fin</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="time" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Hora de fin</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="time" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Hora de fin</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="time" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Hora de fin</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="time" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Hora de fin</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="time" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Hora de fin</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="time" name="hora_fin" placeholder="Ingrese hora de fin" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Hora de fin</Form.Label>
                <Form.Control required value= {this.state.fin} onChange={this.onChangeHoraFin.bind(this)} type="time" name="hora_fin" placeholder="Ingrese hora de fin" />
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