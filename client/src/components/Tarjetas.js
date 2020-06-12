import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'

class Tarjetas extends React.Component {

  handleClick(e){
    e.preventDefault();
    console.log("Card clicked");
  }

  render(){
    return (
      <div>
        <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
          <Row >
            <Card border="secondary" style={{ width: '30%', margin: "2rem", flex: 1}} onClick={this.handleClick} >              
              <Card.Body>
                <Card.Title>Autorizaciones de Crédito</Card.Title>               
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Aplicación Implementada</small>
              </Card.Footer>
            </Card>
            <Card border="primary"style={{ width: '30%', margin: "2rem", flex: 1}} >              
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
            </Row>                       
          </CardDeck>
          <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
          <Row >
            <Card style={{ width: '30%', margin: "2rem", flex: 1}}>              
              <Card.Body>
                <Card.Title>Punto de Venta</Card.Title>               
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Aplicación en Proceso</small>
              </Card.Footer>
            </Card>
            <Card border="success"style={{ width: '30%', margin: "2rem", flex: 1}}>              
              <Card.Body>
                <Card.Title>Administración de Tienda en Línea (Ecommerce)</Card.Title>
                <Card.Text>
                  Plataforma de Operaciones y Logística Shopify 
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Aplicación en Proceso</small>
              </Card.Footer>
            </Card>       
            <Card border="primary"style={{ width: '30%', margin: "2rem", flex: 1}}>              
              <Card.Body>
                <Card.Title>Tienda en Línea (Ecommerce)</Card.Title>
                <Card.Text>
                  Plataforma de Compras en Línea para Clientes Agroveterinaria de Sonora 
                </Card.Text>
              </Card.Body>
              <Button block size="lg" variant="success" href="#" disabled>Ir a Tienda</Button>
            </Card>                   
            </Row>                       
          </CardDeck>
          </div>
    );
  }
}

// const Tarjetas = () => (    
// <div>
//         <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
//           <Row >
//             <Card border="secondary" style={{ width: '30%', margin: "2rem", flex: 1}} >              
//               <Card.Body>
//                 <Card.Title>Autorizaciones de Crédito</Card.Title>               
//               </Card.Body>
//               <Card.Footer>
//                 <small className="text-muted">Aplicación Implementada</small>
//               </Card.Footer>
//             </Card>
//             <Card border="primary"style={{ width: '30%', margin: "2rem", flex: 1}} >              
//               <Card.Body>
//                 <Card.Title>Reportes de Monitoreo y Control</Card.Title>
//                 <Card.Text>
//                   Reportes realizados en Power BI para monitorear las operaciones de los distintos departamentos
//                 </Card.Text>
//               </Card.Body>
//               <Card.Footer>
//                 <small className="text-muted">Último reporte agregado: Crédito y Cobranza</small>
//               </Card.Footer>
//             </Card>             
//             </Row>                       
//           </CardDeck>
//           <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
//           <Row >
//             <Card style={{ width: '30%', margin: "2rem", flex: 1}}>              
//               <Card.Body>
//                 <Card.Title>Punto de Venta</Card.Title>               
//               </Card.Body>
//               <Card.Footer>
//                 <small className="text-muted">Aplicación en Proceso</small>
//               </Card.Footer>
//             </Card>
//             <Card border="success"style={{ width: '30%', margin: "2rem", flex: 1}}>              
//               <Card.Body>
//                 <Card.Title>Administración de Tienda en Línea (Ecommerce)</Card.Title>
//                 <Card.Text>
//                   Plataforma de Operaciones y Logística Shopify 
//                 </Card.Text>
//               </Card.Body>
//               <Card.Footer>
//                 <small className="text-muted">Aplicación en Proceso</small>
//               </Card.Footer>
//             </Card>       
//             <Card border="primary"style={{ width: '30%', margin: "2rem", flex: 1}}>              
//               <Card.Body>
//                 <Card.Title>Tienda en Línea (Ecommerce)</Card.Title>
//                 <Card.Text>
//                   Plataforma de Compras en Línea para Clientes Agroveterinaria de Sonora 
//                 </Card.Text>
//               </Card.Body>
//               <Button block size="lg" variant="success" href="#" disabled>Ir a Tienda</Button>
//             </Card>                   
//             </Row>                       
//           </CardDeck>
//           </div>
//         )

export default Tarjetas
