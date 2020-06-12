import React from 'react'
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import UserContext from '../UserContext'
import RenderIfAId from './RenderIfAId'
import API from '../utils/API';
import ViewAllClients from '../components/ViewAllClients';

export default class Buscador extends React.Component {
  constructor (props) {
    super(props)
    this.handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
      console.log(value)
    }

    this.state = {
        buscador:[],
        title: "",
        toResults: false,
        results: [],
        clients:[]
      }    
    }
    componentDidUpdate(){
      API.getClientBySearch(this.state.title ? this.state.title : '').then((res) => this.setState({ clients: res}));
    }

      render(){
        return (
            <div style={({ paddingTop: '3rem' })}>
              <form>
                <div className=" row justify-content-md-center">
                  <div className='col-1'>
                  <Button>
                  <i class="fa fa-search" aria-hidden="true"></i>
                  </Button>
                  </div>
                  <div className='col-3'>
                  <input type="text" className="form-control" placeholder="Buscar cliente" onChange={this.handleInputChange} value={this.state.title} name="title"/>
                  </div>
                  </div>
              </form>      
              <Row className="justify-content-center">
                <h1 className="text-center text-capitalize">Clientes</h1>
                <Table striped bordered hover variant="light">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.clients.map(client => (
                        <tr key={client.id}>
                          <td>{client.client_name}</td>
                          <td>{client.second_name}</td>
                          <td>{client.estatus}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </Table>
              </Row>
            </div>

        )
        }

}
