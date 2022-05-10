import React, {useState, useEffect} from 'react'
import appConfig from "../appConfig";
import Navbar from "../components/navbar";
import { Container, Row } from "react-bootstrap";
const Consultar = () => {
  //setear los hooks useState
  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

  //función para traer los datos de la API
  const URL = appConfig.urlBackEnd+'/data'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    //console.log(data)
    setUsers(data)
  }   
   //función de búsqueda
  const searcher = (e) => {
      setSearch(e.target.value)  
      console.log(e.target.value) 
  }
  
   //metodo de filtrado 1 
    let results = []
   if(!search)
   {
       results = users
   }
   else {
        results = users.filter( (dato) =>
        dato.cod_envio.toLowerCase().includes(search.toLocaleLowerCase())
    )
    
   } 
   
   


   useEffect( ()=> {
    showData()
  }, [])
  
  //renderizamos la vista
  return (
      
    <div>
        <Navbar/>
        <Container>
            <Row className="justify-content-md-center">
                <h1>Consultar Envio</h1>
                <h4>Consulte por código de envio</h4>
            </Row>
        </Container>
        <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control'/>
        <table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr >
                <th>Código de envio</th>
                  <th>DNI de emisor</th>
                  <th>Nombre de emisor</th>
                  <th>Correo de emisor</th>
                  <th>Ciudad de envío</th>
                  <th>DNI del recpetor</th>
                  <th>Nombre del recpetor</th>
                  <th>Provincia del receptor</th>
                  <th>Ciudad del receptor</th>
                </tr>
            </thead>
            <tbody>
                { results.map( (user) => (
                    <tr key={user.id}>
                        <td>{user.cod_envio}</td>
                        <td>{user.DNI_emisor}</td>
                        <td>{user.address_from_name}</td>
                        <td>{user.address_from_email}</td>
                        <td>{user.address_from_city}</td>
                        <td>{user.DNI_recepcion}</td>
                        <td>{user.address_to_name}</td>
                        <td>{user.address_to_province}</td>
                        <td>{user.address_to_city}</td>
                    </tr>                    
                ))}
            </tbody>
        </table>
    </div>
  )
}
export default Consultar