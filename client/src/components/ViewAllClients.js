import React from 'react';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table'
import API from '../utils/API';

export default class ViewAllClients extends React.Component {
  state = {
    clients:[]
  }
  componentDidMount(){
    API.getAllClients().then((res) => this.setState({ clients: res}));
  }
  render(){
    return (
      <Row className="justify-content-center">
        <h1 className="text-center text-capitalize">Viewing All User Accounts</h1>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {console.log(this.state.clients)}
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