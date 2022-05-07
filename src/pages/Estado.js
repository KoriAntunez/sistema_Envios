import React  from "react";
import Cambiar from "../components/card";
import { Container, Row } from "react-bootstrap";
import Navbar from "../components/navbar";

const Estado = () => {
    return(
        <>
        <Navbar/>
        <Container>
            <Row className="justify-content-md-center">
                <h1>Cambiar de estado a envios</h1>
                <h4>Cambie de estado de sus peidos haciendo click en el estado que desee</h4>
                <Cambiar/>
            </Row>
            
        </Container>
        </> 
        );
}
export default Estado;