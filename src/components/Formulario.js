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
      cod_envio:"",
      DNI_emisor:"",
      address_from_name:"",
      address_from_email:"",
      address_from_street1:"",
      address_from_city: "",
      address_from_province:"",
      address_from_postal_code:"",
      address_from_country_code:"",
      DNI_recepcion:"",
      address_to_name:"",
      address_to_email:"",
      address_to_street1: "",
      address_to_city:"",
      address_to_province:"",
      address_to_postal_code:"",
      address_to_country_code:"",
      parcel_length:"",
      parcel_width:"",
      parcel_height: "",
      parcel_dimensions_unit:"",
      parcel_weight:"",
      parcel_weight_unit: "",
      status:"",           
    }

  }

  onChangecod_envio(event){
    let state = this.state
    state.cod_envio =  event.target.value
    this.setState(state)
  }

  onChangeDNI_emisor(event){
    let state = this.state
    state.DNI_emisor =  event.target.value
    this.setState(state)
  }

  onChangeaddress_from_name(event){
    let state = this.state
    state.address_from_name =  event.target.value
    this.setState(state)
  }

  onChangeaddress_from_email(event){
    let state = this.state
    state.address_from_email =  event.target.value
    this.setState(state)
  } 
 
  onChangeaddress_from_street1(event){
    let state = this.state
    state.address_from_street1 =  event.target.value
    this.setState(state)
  } 
  onChangeaddress_from_city(event){
    let state = this.state
    state.address_from_city =  event.target.value
    this.setState(state)
  }

  onChangeaddress_from_province(event){
    let state = this.state
    state.address_from_province =  event.target.value
    this.setState(state)
  }

  onChangeaddress_from_postal_code(event){
    let state = this.state
    state.address_from_postal_code =  event.target.value
    this.setState(state)
  }
  onChangeaddress_from_country_code(event){
    let state = this.state
    state.address_from_country_code =  event.target.value
    this.setState(state)
  }

  onChangeDNI_recepcion(event){
    let state = this.state
    state.DNI_recepcion =  event.target.value
    this.setState(state)
  } 
 
  onChangeaddress_to_name(event){
    let state = this.state
    state.address_to_name =  event.target.value
    this.setState(state)
  } 
  onChangeaddress_to_email(event){
    let state = this.state
    state.address_to_email =  event.target.value
    this.setState(state)
  }

  onChangeaddress_to_street1(event){
    let state = this.state
    state.address_to_street1 =  event.target.value
    this.setState(state)
  }

  onChangeaddress_to_city(event){
    let state = this.state
    state.address_to_city =  event.target.value
    this.setState(state)
  }

  onChangeaddress_to_province(event){
    let state = this.state
    state.address_to_province =  event.target.value
    this.setState(state)
  } 

  onChangeaddress_to_postal_code(event){
    let state = this.state
    state.address_to_postal_code =  event.target.value
    this.setState(state)
  } 
 
  onChangeaddress_to_country_code(event){
    let state = this.state
    state.address_to_country_code =  event.target.value
    this.setState(state)
  } 
  onChangeparcel_length(event){
    let state = this.state
    state.parcel_length =  event.target.value
    this.setState(state)
  }

  onChangeparcel_width(event){
    let state = this.state
    state.parcel_width =  event.target.value
    this.setState(state)
  }

  onChangeparcel_height(event){
    let state = this.state
    state.parcel_height =  event.target.value
    this.setState(state)
  }

  onChangeparcel_dimensions_unit(event){
    let state = this.state
    state.parcel_dimensions_unit =  event.target.value
    this.setState(state)
  } 
 
  onChangeparcel_weight(event){
    let state = this.state
    state.parcel_weight =  event.target.value
    this.setState(state)
  } 
  onChangeparcel_weight_unit(event){
    let state = this.state
    state.parcel_weight_unit =  event.target.value
    this.setState(state)
  } 
 
  handleForm(event){
    event.preventDefault();

    let data={
      cod_envio:this.state.cod_envio,
      DNI_emisor:this.state.DNI_emisor,
      address_from_name:this.state.address_from_name,
      address_from_email:this.state.address_from_email,
      address_from_street1:this.state.address_from_street1,
      address_from_city: this.state.address_from_city,
      address_from_province:this.state.address_from_province,
      address_from_postal_code:this.state.address_from_postal_code,
      address_from_country_code:this.state.address_from_city,
      DNI_recepcion:this.state.DNI_recepcion,
      address_to_name:this.state.address_to_name,
      address_to_email:this.address_from_email,
      address_to_street1: this.address_to_street1,
      address_to_city:this.state.address_to_city,
      address_to_province:this.state.address_to_province,
      address_to_postal_code:this.state.address_to_postal_code,
      address_to_country_code:this.state.address_from_country_code,
      parcel_length:this.state.parcel_length,
      parcel_width:this.state.parcel_width,
      parcel_height: this.state.parcel_height,
      parcel_dimensions_unit: this.state.parcel_dimensions_unit,
      parcel_weight:this.state.parcel_weight,
      parcel_weight_unit: this.state.parcel_weight,
      status:"Cliente ha recibido paquete",  
    }
    console.log(data)
    
    axios.post(appConfig.urlBackEnd+"/data/registro",[data]).
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
            <Col xs={6}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Código de envio</Form.Label>
                <Form.Control required  value= {this.state.cod_envio}   onChange={this.onChangecod_envio.bind(this)} type="name" name="cod_envio" placeholder="Ingrese nombre codigo de envío" />
              </Form.Group>          
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Cedula de Emisor</Form.Label>
                <Form.Control required value= {this.state.DNI_emisor} onChange={this.onChangeDNI_emisor.bind(this)} type="number" name="DNI_emisor" placeholder="Ingrese DNI emisor" />
              </Form.Group> 
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre de emisor</Form.Label>
                <Form.Control required value= {this.state.address_from_name} onChange={this.onChangeaddress_from_name.bind(this)} type="name" name="address_from_name" placeholder="Ingrese el nombre del emisor" />
              </Form.Group>          
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Correo de emisor</Form.Label>
                <Form.Control required value= {this.state.address_from_email} onChange={this.onChangeaddress_from_email.bind(this)} type="mail" name="address_from_email" placeholder="Ingrese correo del emisor" />
              </Form.Group> 
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Direccion de emisor</Form.Label>
                <Form.Control required value= {this.state.address_from_street1} onChange={this.onChangeaddress_from_street1.bind(this)} type="name" name="address_from_street1" placeholder="Ingrese dirección del emisor" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Ciudad de emisor</Form.Label>
                <Form.Control required value= {this.state.address_from_city} onChange={this.onChangeaddress_from_city.bind(this)} type="name" name="address_from_city" placeholder="Ingrese ciudad de emisor" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Provincia de emisor</Form.Label>
                <Form.Control required value= {this.state.address_from_province} onChange={this.onChangeaddress_from_province.bind(this)} type="name" name="address_from_province" placeholder="Ingrese provincia de emisor" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Codigo postal emisor</Form.Label>
                <Form.Control required value= {this.state.address_from_postal_code} onChange={this.onChangeaddress_from_postal_code.bind(this)} type="name" name="address_from_postal_code" placeholder="Ingrese codigo postal de emisor" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Código de dirección de emisor</Form.Label>
                <Form.Control required value= {this.state.address_from_country_code} onChange={this.onChangeaddress_from_country_code.bind(this)} type="name" name="address_from_country_code" placeholder="Ingrese codigo de dirección del emisor" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Cedula Recepción</Form.Label>
                <Form.Control required value= {this.state.DNI_recepcion} onChange={this.onChangeDNI_recepcion.bind(this)} type="number" name="DNI_recepcion" placeholder="Ingrese cedula de recepción" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre de recepcionista</Form.Label>
                <Form.Control required value= {this.state.address_to_name} onChange={this.onChangeaddress_to_name.bind(this)} type="name" name="address_to_name" placeholder="Ingrese nombre de recepcionista" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>correo recepcionista</Form.Label>
                <Form.Control required value= {this.state.address_to_email} onChange={this.onChangeaddress_to_email.bind(this)} type="name" name="address_to_email" placeholder="Ingrese correo de recepcionista" />
              </Form.Group> 
            </Col>
              

              <Col xs={6}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Direccion de recepcionista </Form.Label>
                <Form.Control required  value= {this.state.address_to_street1}   onChange={this.onChangeaddress_to_street1.bind(this)} type="name" name="address_to_street1" placeholder="Ingrese dirección de recepcionista" />
              </Form.Group>          
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Ciudad recepcionista</Form.Label>
                <Form.Control required value= {this.state.address_to_city} onChange={this.onChangeaddress_to_city.bind(this)} type="name" name="address_to_city" placeholder="Ingrese dirección cuidad recepcionista"/>
              </Form.Group> 
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Provincia de recepcionista</Form.Label>
                <Form.Control required value= {this.state.address_to_province} onChange={this.onChangeaddress_to_province.bind(this)} type="name" name="address_to_province" placeholder="Ingrese provincia de recepcionista" />
              </Form.Group>          
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Codigo postal de recepcionista</Form.Label>
                <Form.Control required value= {this.state.address_to_postal_code} onChange={this.onChangeaddress_to_postal_code.bind(this)} type="name" name="address_to_postal_code" placeholder="Ingrese código postal de recepcionista" />
              </Form.Group> 
    
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Código de país de recepcionista</Form.Label>
                <Form.Control required value= {this.state.address_to_country_code} onChange={this.onChangeaddress_to_country_code.bind(this)} type="name" name="address_to_country_code" placeholder="Ingrese código de país de recepcionista" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Paquete tamaño</Form.Label>
                <Form.Control required value= {this.state.parcel_length} onChange={this.onChangeparcel_length.bind(this)} type="number" name="parcel_length" placeholder="Ingrese tamaño de paquete" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Paquete ancho</Form.Label>
                <Form.Control required value= {this.state.parcel_width} onChange={this.onChangeparcel_width.bind(this)} type="number" name="parcel_width" placeholder="Ingrese ancho del paquete" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Paquete altura</Form.Label>
                <Form.Control required value= {this.state.parcel_height} onChange={this.onChangeparcel_height.bind(this)} type="number" name="parcel_height" placeholder="Ingrese altura del paquete" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Paquete dimension unidad</Form.Label>
                <Form.Control required value= {this.state.parcel_dimensions_unit} onChange={this.onChangeparcel_dimensions_unit.bind(this)} type="number" name="parcel_dimensions_unit" placeholder="Ingrese la unidad de dimensión" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Paquete peso</Form.Label>
                <Form.Control required value= {this.state.parcel_weight} onChange={this.onChangeparcel_weight.bind(this)} type="number" name="parcel_weight" placeholder="Ingrese el peso del paquete" />
              </Form.Group> 

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Unidad de peso</Form.Label>
                <Form.Control required value= {this.state.parcel_weight_unit} onChange={this.onChangeparcel_weight_unit.bind(this)} type="name" name="parcel_weight_unit" placeholder="Ingrese la unidad de peso" />
              </Form.Group> 

              </Col>
         </Row>
              <Col className="App m-5">
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