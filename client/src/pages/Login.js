import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserContext from '../UserContext'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.handleInputChange = event => {
      const { name, value } = event.target
      this.setState({ [name]: value })
    }
    this.handleSubmit = event => {
      event.preventDefault()
      if (this.isValidInput()) {
        this.context.postUserLogin({ username: this.state.username, password: this.state.password })
      }
    }
    this.isValidInput = () => {
      if (this.state.username.length < 4 || this.state.password.length < 5) {
        return false
      } else {
        return true
      }
    }
    this.state = {
      username: '',
      password: ''
    }
  }

  render () {
    return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs='10'>
          <img style={{ display: 'block', margin: 'auto', marginTop:'3rem', marginBottom:'3rem', height:'8rem'}}
          src='https://drive.google.com/uc?export=view&id=1P_32JglBGkWho8Z1EpjkY6Tdgj_71Omf'></img>
          
          <Form disabled={!this.isValidInput()} onSubmit={e => this.handleSubmit(e)} className='text-center'>
            <Form.Row className='justify-content-center'>
              <Form.Group controlId='loginUsername'>                
                <Form.Control size='lg' onChange={this.handleInputChange} autoComplete='username' type='text' name='username' placeholder='Usuario' />
              </Form.Group>
            </Form.Row>
            <Form.Row className='justify-content-center'>
              <Form.Group controlId='loginPassword'>                
                <Form.Control size='lg' onChange={this.handleInputChange} autoComplete='current-password' type='password' name='password' placeholder='Contraseña' />
              </Form.Group>
            </Form.Row>
            <Button style={{width: '8rem', display: 'block',  marginTop:'3rem', fontSize: '1rem'}} disabled={!this.isValidInput()} className='mx-auto mb-2' type='submit' size='lg' variant='primary'>
              Siguiente
            </Button>
          </Form>
        </Col>
      </Row>      
    </Container>      
    )
  }
}
Login.contextType = UserContext
export default Login
