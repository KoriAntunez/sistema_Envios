import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';


class Cambiar extends React.Component{


  constructor(props) {
    super(props);

    this.state = {
        list: []
    }

    this.consultar();
}

consultar(){
  fetch('http://localhost:5000/data')
  .then(response => response.json())
  .then( (data) => {
      let state = this.state;
      state.list = data;
      this.setState(state)
  });
}
/*
delete(id){ 
  let confirmation = window.confirm('¿Estas seguro de resevar?') ? true : false

  if (confirmation) {
      axios.delete('http://localhost:5000/reserva/'+id).
          then( () => {
              alert("RESERVADO")
              window.location.reload()
      }).catch(function () {
          alert("Error inesperado !!!")
      })
  }
}
*/

actualizar(id){ 
  let confirmation = window.confirm('¿Estas seguro de actualizar el estado?') ? true : false

  if (confirmation) {
      axios.put('http://localhost:5000/data/reserva/'+id).
          then( () => {
              alert("RESERVADO")
              window.location.reload()
      }).catch(function () {
          alert("Error inesperado !!!")
      })
  }
}



    render (){
        return ( <form>
    <Container >
      
      <Row>
      {
                    this.state.list.map((prodct) =>
                    <Card style={{width: "32rem" ,  margin:"0.5rem", borderColor:"blue", borderRadius:"1rem"}}>
                    <Card.Body>
                    <Card.Title ></Card.Title>
                    <Card.Text>
                   <Container fluid >
                     <Row><Col><h6>Codigo de envío: {prodct.cod_envio} </h6></Col></Row>
                      
                     <Row><Col><h6>DNI emisor : {prodct.DNI_emisor} </h6></Col></Row>
                     <Row><Col><h6>Emisor: {prodct.address_from_name} </h6></Col></Row>
                     <Row><Col><h6>DNI recepcionista : {prodct.DNI_recepcion} </h6></Col></Row>
                     <Row><Col><h6>Recepcionista: {prodct.address_to_name} </h6></Col></Row>
                     <Row><Col><h6>Estado: {prodct.status} </h6></Col></Row>
                  
                   </Container>
                   </Card.Text>
                   <Container><Row>
                       <Col xs={3}><h1 ><Button variant="primary" onClick={() => this.actualizar1(prodct.cod_envio)} >En proceso</Button></h1>   </Col>
                       <Col xs={3}> <h1 ><Button variant="primary" onClick={() => this.actualizar2(prodct.cod_envio)} >En camino</Button></h1></Col>
                       <Col xs={3} ><h1 ><Button variant="primary" onClick={() => this.actualizar3(prodct.cod_envio)} >Recibio paquete</Button></h1></Col>
                       <Col xs={3}> <h1 ><Button variant="danger" onClick={() => this.actualizar4(prodct.cod_envio)} >Cancelado</Button></h1></Col>
                   
                   </Row></Container>
                       

        

                   </Card.Body>
                 </Card>
                  )
                }
     </Row>
    </Container></form>);
    }
}
export default Cambiar;