import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const CardComponent = props => {
    return(
        <Card style={{ width: '23rem', display: 'inline', outline: "none"}}>
            {props.img}
  <Card.Body>
    <Card.Text>
    <h6>{props.heading}</h6>
<p>{props.par}</p>
</Card.Text>
    <Button variant="primary">{props.btnTxt}</Button>
  </Card.Body>
</Card>
    );
}

export default CardComponent