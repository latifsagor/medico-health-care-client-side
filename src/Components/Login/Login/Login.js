import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import useAuth from '../../hooks/useAuth'
import './Login.css'

const Login = () => {
  const {
    signInUsingGoogle,
    signInWithEmail,
    handleEmailChange,
    handlePasswordChange,
    error,
    toggleLogin,
    isLogin,
    signInWithEmailAndPassword,
  } = useAuth()

  // const handleRegistration = (e) => {
  //   console.log('Registration will be added')
  //   e.preventDefault()
  // }
  return (
    <div className="container py-4">
      <h3>Please {isLogin ? 'Login' : 'Register'}</h3>
      <div>
        <Form onSubmit={signInWithEmail}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailChange}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePasswordChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={toggleLogin}
              type="checkbox"
              label="Already Register?"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <div className="text-danger">{error}</div>
      <br />
      <Button onClick={signInUsingGoogle} variant="outline-danger">
        Google Sign In
      </Button>
    </div>
  )
}

export default Login

{
  /* <form action="" onSubmit={signInWithEmail}>
          <input
            onBlur={handleEmailChange}
            type="email"
            placeholder="Email"
            className="form-control"
          />
          <br />
          <input
            type="password"
            onBlur={handlePasswordChange}
            name=""
            id=""
            placeholder="Password"
            className="form-control"
          />
          <br />
          <input type="submit" value="Submit" />
        </form> */
}
