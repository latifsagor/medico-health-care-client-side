import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './ContactUs.css'
import useAuth from './../hooks/useAuth'

const ContactUs = () => {
  return (
    <div>
      <div className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-white">
              <h3>Contact Us</h3>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-6">
            <h2>Address</h2>
            <p>228/1, Shantiniketon, Tejgaon, Dhaka-1208.</p>
          </div>
          <div className="col-lg-6">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="outline-dark" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
