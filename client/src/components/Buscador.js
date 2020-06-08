import React from 'react'
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
    state = {
        buscador:[],
        title: "",
        toResults: false,
        results: []
      }


      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        console.log(value)
      };

      render(){
        return (
            <div>
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
      
            </div>

        )
        }

}
