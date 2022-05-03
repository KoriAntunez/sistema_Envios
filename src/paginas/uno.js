import React from 'react';
import Container from 'react-bootstrap/Container';
import Menu from './../principal/menu.js';
import Form from 'react-bootstrap/Form';

import {useState} from 'react';
import {saveAs} from 'file-saver'
class Cargar extends React.Component{

   function (){ 
        const [myValue , setMyValue]=useState('')
        const createFile =() =>{
            const blob =new Blob([myValue],{type:'text/plain;charset=utf-8'});
            saveAs(blob,'s')
            
        }
        
        
        
        const readFile=(e) =>{
        console.log(e)
    }
        return (
       
        <form>
            <Container > <Menu/>
            <Form.Group controlId="formFile" className="mb-3">
    <Form.Label></Form.Label>
    <Form.Control type="file" />
     </Form.Group>
     <Form.Group controlId="formFile" className="mb-3">
     <h1 className="text-center"><button className='btn btn-primary' onClick={createFile}>Enviar Archivos</button></h1>
     </Form.Group>
     
          </Container>
       
          </form>);
    }
}
export default Cargar;