import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const Producto = () => {
  return (
    <div className='producto_container'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://picsum.photos/200" />
        <Card.Body>
          <Card.Title className='product-card-title'>Nombre Producto</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className='product-card-price'><span>$1.000</span></ListGroup.Item>
          </ListGroup>
          <div className='product-card-buttons'>
            <Button
              variant="primary"
              >Ver Más <i>👀</i></Button>
            <Button variant="danger">Añadir <i>🛒</i></Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Producto