import React from 'react';
import '../App';
import { Card, Button, Col, Row } from "react-bootstrap";
import axios from 'axios';
import appConfig from "../appConfig";

export class Espacio extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            list: []
        }
        this.consultar();
    }

    consultar(){
        fetch(appConfig.urlBackEnd+"/api/espacio/disponible")
        .then(response => response.json())
        .then( (data) => {
            let state = this.state;
            state.list = data;
            this.setState(state)
        });
    }

    resevar(id){ 
        let confirmation = window.confirm('Esta seguro de reservar este espacio') ? true : false

        if (confirmation) {
            axios.put(appConfig.urlBackEnd+"/api/espacio/actualizar/"+id).
                then( () => {
                    alert("Espacio Reservado!!")
                    window.location.reload()
            }).catch(function () {
                alert("Error inesperado !!!")
            })
        }
    }

    render() {
        return(
                <Row>
                {this.state.list.map((espacio)=>
                <Col xs={4}>
                <Card border="info" style={{ width: '24rem', height: '16rem', margin:"20px"} }>
                    <Card.Body>
                    <Row className="justify-content-md-left m-4"> 
                        <Col xs={12}>
                            <Card.Text>Inmueble: {espacio.inmueble}</Card.Text>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-left m-4"> 
                        <Col xs={12}>
                            <Card.Text>Fecha:{espacio.fecha}</Card.Text>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-left m-4"> 
                        <Col xs={6} lg={6} className="">
                            <Card.Text>Hora inicio: {espacio.hora_inicio}</Card.Text>
                        </Col>
                        <Col xs={6} lg={6} className="">
                            <Card.Text>Hora fin:{espacio.hora_fin}</Card.Text>
                        </Col>
                    </Row>
                    <Row className="m-4">
                        <Col xs={12}> 
                            <Button onClick={() => this.resevar(espacio._id)}  variant="primary">Reservar</Button>
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>
                </Col>
             )}
            </Row>
    );
    }
}
export default Espacio;