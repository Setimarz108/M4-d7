import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function Registration() {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

  return (
      <>
    <div className="d-flex justify-content-center">
      <Form onSubmit={handleSubmit(onSubmit)} className="mt-5" style={{ width: "50%" }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label style={{color:"#EC5990", float:"left"}}>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
          
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label style={{color:"#EC5990", float:"left"}}>Surname</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
          <Form.Text className="text-muted">Surname</Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label style={{color:"#EC5990", float:"left"}}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label  style={{color:"#EC5990", float:"left"}}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
       
        <Button variant="primary" type="submit" style={{backgroundColor:"#EC5990"}}>
          Submit
        </Button>
      </Form>
    </div></>
  );
}
