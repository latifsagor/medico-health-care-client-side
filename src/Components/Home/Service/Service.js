import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Service = ({ service }) => {
  const { name, description, img } = service
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-3">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="outline-dark">Read More</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Service
