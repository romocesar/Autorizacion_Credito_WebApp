import React from 'react'
import RenderIfAId from '../components/RenderIfAId'
import UserContext from '../UserContext'
import Tarjetas from '../components/Tarjetas'
import Buscador from '../components/Buscador'
import ViewAllUsers from '../components/ViewAllUsers';
import ViewAllClients from '../components/ViewAllClients';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class AutCreditoApp extends React.Component {

  render () {

    return (
  
      <UserContext.Consumer>
        {({ user }) => (
          <div className='text-center' >    
            <Buscador ></Buscador>
          </div>
        )}
      </UserContext.Consumer>
    )
  }
}