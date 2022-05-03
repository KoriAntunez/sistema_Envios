import React from 'react'
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Registrar from "./pages/Registrar";
import Estado from "./pages/Estado";
import Consultar from './pages/Consultar';
import Cargar from './pages/Cargar';


function App() {
  return (
    <Container>

    <BrowserRouter>
      <Routes>
        <Route exact path="/registrar" element={<Registrar/>} />
        <Route path="/estado" element={<Estado/>} />
        <Route path="/consultar" element={<Consultar/>} />
        <Route path="/cargar" element={<Cargar/>} />
      </Routes>
    </BrowserRouter>
    </Container>

  );
}

export default App;
