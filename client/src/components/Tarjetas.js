import React from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/Card'

const Tarjetas = () => (    

        <CardColumns>
            <Card style={{ width: '80%', margin: "2rem" }}>              
              <Card.Body>
                <Card.Title>Autorizaciones de Crédito</Card.Title>               
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Aplicación Implementada</small>
              </Card.Footer>
            </Card>
            <Card border="primary"style={{ width: '80%', margin: "2rem" }}>              
              <Card.Body>
                <Card.Title>Reportes de Monitoreo y Control</Card.Title>
                <Card.Text>
                  Reportes realizados en Power BI para monitorear las operaciones de los distintos departamentos
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Último reporte agregado: Crédito y Cobranza</small>
              </Card.Footer>
            </Card>            
          </CardColumns>
        )

export default Tarjetas
