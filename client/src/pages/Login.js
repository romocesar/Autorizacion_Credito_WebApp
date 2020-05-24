import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
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
      <Row className='justify-content-center'>
        <Col xs='10'>
          <img style={{ display: 'block',margin:'auto',height:'10rem'}}
          src='https://drive.google.com/uc?export=view&id=1P_32JglBGkWho8Z1EpjkY6Tdgj_71Omf'></img>
          <h1 className='text-center text-capitalize'>Welcome {this.state.username ? this.state.username : 'User'}</h1>
          <Form disabled={!this.isValidInput()} onSubmit={e => this.handleSubmit(e)} className='text-center border p-3'>
            <Form.Row className='justify-content-center'>
              <Form.Group controlId='loginUsername'>
                <Form.Label>Username</Form.Label>
                <Form.Control size='lg' onChange={this.handleInputChange} autoComplete='username' type='text' name='username' placeholder='Username' />
              </Form.Group>
            </Form.Row>
            <Form.Row className='justify-content-center'>
              <Form.Group controlId='loginPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control size='lg' onChange={this.handleInputChange} autoComplete='current-password' type='password' name='password' placeholder='Password' />
              </Form.Group>
            </Form.Row>
            <Button disabled={!this.isValidInput()} className='w-25 mx-auto mb-2' type='submit' size='block' variant='success'>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    )
  }
}
Login.contextType = UserContext
export default Login
