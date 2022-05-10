import React from 'react';
import '../App';
import {  Nav, Col,Row } from "react-bootstrap";
import imagen from "./imagen/imagen.png"

export class Navbar extends React.Component {
    render() {
        return(
         
            <Nav variant="tabs" defaultActiveKey="1" className="justify-content-center" justify> 
                <Nav.Item>
                    <Nav.Link href="/registrar">Registrar envio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  eventKey="link-1" href="/cargar">Cargar envios</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  eventKey="link-1" href="/consultar">Consultar envio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  eventKey="link-1" href="/estado">Estado envio</Nav.Link>
                </Nav.Item>
                <Nav.Item className="justify-content-end" >
                    <Nav.Link ><img style={{width: "5rem"}} src={imagen}/></Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }
}
export default Navbar;
