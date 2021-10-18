import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Service = ({ service }) => {
  const { name, description, img, id } = service
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-3">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={`/serviceDetails/${id}`}>
            <Button variant="outline-dark">
              Read more about {name.toLowerCase()}
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Service
