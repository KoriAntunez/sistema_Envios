import React, { useEffect, useState } from "react";
import { Container, Row, Input, Col, Table } from "react-bootstrap";
import Navbar from "../components/navbar";
const { Column } = Table;
const { Search } = Input;





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
        </> 
        );
}
export default Consultar;