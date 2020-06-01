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

const Buscador = () => (


    <form>
        <div className="row">
        <div className="col-1">
            <Button>
            <i class="fa fa-search" aria-hidden="true"></i>
            </Button>
          </div>
          <div class="col-4">
            <input type="text" className="form-control" placeholder="Buscar cliente"/>
          </div>
        </div>
    </form>

)

export default withRouter(Buscador)
