import React from 'react'
import Card from 'react-bootstrap/Card'

const TheCard = props => {
    return (
       <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.imgUrl} />
  <Card.Body>
    <Card.Title>{props.heading}</Card.Title>
    <Card.Text>
     {props.par}
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link style={{textAlign: 'left'}} href="#">Read More</Card.Link>
  </Card.Body>
</Card>
       </div>
    );
}

export default TheCard