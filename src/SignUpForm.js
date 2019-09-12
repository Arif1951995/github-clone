import React from 'react'
import FormComponent from './FormComponent'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'




const SignUpForm = () => {
    return (
        <div className="SignUpForm">
            <h1>
            Get started for free — join the millions of developers already using GitHub to share their code, work together, and build amazing things.
Username
            </h1>
          <div>
          <Form>
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control size="lg" placeholder="Email" type="email"  />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" type="password" />
    </Col>
    <Col>
    <Button variant="success">Sign Up</Button>
    </Col>
  </Row>
</Form>
          </div>
           
        </div>
    );
}

export default SignUpForm