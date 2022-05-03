import React  from "react";
import {Row } from "react-bootstrap";
import Formulario from "../components/Formulario.js";
import Navbar from "../components/navbar";

const Registrar = () => {
        return( 
            <>
            <Navbar/>
            <Row>
            <Formulario/>
            </Row>
            </>
        );
}
export default Registrar;