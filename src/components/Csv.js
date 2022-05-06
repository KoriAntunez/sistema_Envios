import React from 'react';
import '../App';
import { Button, Form,Row,Col,Container} from "react-bootstrap";
import axios from 'axios';

import Papa from "papaparse";
         

class Csv extends React.Component {
  constructor() {
    super();
    this.state = {
      csvfile: undefined
    };
    this.updateData = this.updateData.bind(this);
  }

  handleChange = event => {
    this.setState({
      csvfile: event.target.files[0]
    });
  };

  importCSV = () => {
    const { csvfile } = this.state;
    Papa.parse(csvfile, {
      complete: this.updateData,
   
      header: true
    });
  };
  

  updateData(result) {
    var data = result.data;
    console.log(data);
   
    axios.post('http://localhost:5000/api/envios/recibido',data).
    then(function(){alert("DATOS GUARDADOS")})

    alert("aceptado")
  
  }

 
  render() {
    console.log(this.state.csvfile);
    return (
      <div className="App">
  
        <Form.Control
          className="csv-input"
          type="file"
          accept=".csv"
          ref={input => {
            this.filesInput = input;
          }}
          name="file"
          onChange={this.handleChange}
        />
        <p />
        <Button variant="primary" onClick={this.importCSV}> Cargar archivo!</Button>
      </div>
    );
  }
}
export default Csv;
