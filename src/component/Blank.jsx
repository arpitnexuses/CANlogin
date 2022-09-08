import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Logout from '../Auth0/Logout'
import "../App.css";

function Blank() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [contactnumber, setContactnumber] = useState('');
  const [businessname, setBusinessname] = useState('');
  const [businesswebsite, setBusinesswebsite] = useState('');

  const onSubmit = () => {
    axios.post('https://sheet.best/api/sheets/de0ad8c6-7967-469a-937b-3a12358d27d2', {
      firstname, lastname, email, contactnumber, businessname, businesswebsite
  })

  }
  return (
    <>
      <h1 className="head" >Welcome</h1>
      <div id="form">
        <Form className="form">
          <Form.Group className="mb-3" id="center" >
            <Form.Label>First Name</Form.Label>
            <Form.Control id="input" type="text" placeholder="Enter First Name" onChange={(e) => setFirstname(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" id="center" >
            <Form.Label>Last Name</Form.Label>
            <Form.Control id="input" type="text" placeholder="Enter Last Name" onChange = {(e) => setLastname(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" id="center" >
            <Form.Label>Email Address</Form.Label>
            <Form.Control id="input" type="email" placeholder="Enter Email" onChange = {(e) => setEmail(e.target.value)}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" id="center" >
            <Form.Label>Contact Number</Form.Label>
            <Form.Control id="input" type="number" placeholder="Enter Contact Number" onChange = {(e) => setContactnumber(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" id="center" >
            <Form.Label>Business Name</Form.Label>
            <Form.Control id="input" type="text" placeholder="Enter Business Name" onChange = {(e) => setBusinessname(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Business Website</Form.Label>
            <Form.Control id="input" type="text" placeholder="Enter Business Website" onChange = {(e) => setBusinesswebsite(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <div id="btn">
            <Button type="submit" onClick={onSubmit}>
              Submit
            </Button>
            <div id="btn2">
              <Logout />
            </div>
          </div>

        </Form>
      </div>
    </>
  )
}
export default Blank