import React from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



const FormComponent = props => {
    return (
        <Form className="FormComponent" style={{ backgroundColor: 'white', height: '80vh',marginTop: "5%", textAlign: "left", width: "40%",  padding: "5%"}}>
            <Form.Group controlId="formBasicText">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
          
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Form.Text className="text-muted">
          Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter. Learn more.


          </Form.Text>
        </Form.Group>
       
        <Button style={{padding: 20, fontSize: '1.5em'}}  variant="success" type="submit" block>
          Submit
        </Button>
      </Form>
    );
}



export default FormComponent