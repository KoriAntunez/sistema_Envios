import React  from "react";
import { Container, Row } from "react-bootstrap";
import Navbar from "../components/navbar";

const Cargar = () => {
    return(
        <>
        <Navbar/>
        <Container>
            <Row className="justify-content-md-center">
                <h1>Cargar envios masivos</h1>
                <h4>Ingrese el archivo csv de sus envíos</h4>
            </Row>
        </Container>
        </> 
        );
}
export default Cargar;