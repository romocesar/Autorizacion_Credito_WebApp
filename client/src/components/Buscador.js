import React from 'react'
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Badge from 'react-bootstrap/Badge'
import UserContext from '../UserContext'
import RenderIfAId from './RenderIfAId'
import API from '../utils/API';
import ViewAllClients from './ViewAllClients';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

export default class Buscador2 extends React.Component {
  constructor (props) {
    super(props)
    this.handleInputChange = event => {
      const { name, value } = event.target
      this.setState({ [name]: value })
    }
    this.handleSubmit = event => {
      event.preventDefault()
      API.getClientBySearch(this.state.search ? this.state.search : '').then((res) => this.setState({ clients: res}));
    }

    this.state = {
      search: '',
      password: '',
      title : ''
    }
  }



      render(){
        return (
            <div style={({ paddingTop: '3rem' })}>
    <Row className='justify-content-center'>
        <Col xs='10'>

          <Form onSubmit={e => this.handleSubmit(e)} className='text-center border p-3'>
            <Form.Row className='justify-content-center'>
              <Form.Group controlId='loginPassword'>
                <Form.Label>Buscar Cliente</Form.Label>
                <Form.Control size='lg' onChange={this.handleInputChange} autoComplete='current-password' name='search' placeholder='Buscar' />
              </Form.Group>
            </Form.Row>
            <Button className='w-25 mx-auto mb-2' type='submit' size='block' variant='success'>
              Buscar
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center">

                
                <Table striped bordered hover variant="light">
                {this.state.clients ? 
                  <thead className="justify-content-center">
                  <h3 className="text-center text-capitalize">Resultados</h3>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Type</th>
                   </tr>
                  </thead> : ''}
                  <tbody>
                    { this.state.clients ? this.state.clients.map(client => (
                        <tr key={client.id}>
                          <td>{client.client_name}</td>
                          <td>{client.second_name}</td>
                          <td><button onClick={`/${client.client_name}`}>Ver</button></td>
                        </tr>
                      )): ''}
                    
                  </tbody>
                </Table>
              </Row>
              
            </div>

        )
        }

}
