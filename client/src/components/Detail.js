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

export default class Detail extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      info: '',
      password: '',
      title : ''
    }
    
    this.handleInputChange = event => {
      const { name, value } = event.target
      this.setState({ [name]: value })
    }
    this.componentDidMount = ()=> {
      API.getAllClients().then((res) => this.setState({info: res}));
    }

    this.handleSubmit = event => {
      event.preventDefault()
    
    }


  }

      render(){
        return (
            <div style={({ paddingTop: '3rem' })}>
              <h1>{/*----> QUERY MUST BE BY INDIVIDUAL USER*/ }{console.log(this.state.info[0])}</h1>
      <Row className="justify-content-center">     
      <Form  onSubmit={e => this.handleSubmit(e)} className='text-center border p-3'>
            <Form.Row className='justify-content-center'>
              <Form.Group controlId='loginUsername'>
        <Form.Label>Estatus</Form.Label>
                <Form.Control size='lg' onChange={this.handleInputChange} autoComplete='username' type='text' name='username' />
              </Form.Group>
            </Form.Row>
            <Form.Row className='justify-content-center'>
              <Form.Group controlId='loginPassword'>
                <Form.Label>Días bloqueo</Form.Label>
                <Form.Control size='lg' onChange={this.handleInputChange}   />
              </Form.Group>
            </Form.Row>
            <Form.Row className='justify-content-center'>
              <Form.Group controlId='Fecha negociación'>
                <Form.Label>Fecha de negociación</Form.Label>
                <Form.Control size='lg' onChange={this.handleInputChange}   />
              </Form.Group>
            </Form.Row>
            <Form.Row className='justify-content-center'>
              <Form.Group controlId='comentarios'>
                <Form.Label>Comentarios</Form.Label>
                <Form.Control size='lg' onChange={this.handleInputChange}   />
              </Form.Group>
            </Form.Row>
            <Button  className='w-25 mx-auto mb-2' type='submit' size='block' variant='success'>
              Login
            </Button>
          </Form>
              </Row>
              
            </div>
        )
        }
}
