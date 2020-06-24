import React from 'react';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table'
import API from '../utils/API';
import Buscador from '../components/Buscador';

export default class ViewAllClients extends React.Component {
  state = {
    clients:[]
  }
  componentDidMount(){
    API.getClientBySearch().then((res) => this.setState({ clients: res}));
  }
  render(){
    return (
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
    );
  }
}