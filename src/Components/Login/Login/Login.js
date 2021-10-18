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
  } = useAuth()

  // const handleRegistration = (e) => {
  //   console.log('Registration will be added')
  //   e.preventDefault()
  // }
  return (
    <div className="container">
      <h3>Please Login</h3>
      <div>
        <form action="" onSubmit={signInWithEmail}>
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
        </form>
      </div>

      <div className="text-danger">{error}</div>
      <br />
      <Button onClick={signInUsingGoogle} variant="outline-warning">
        Google Sign In
      </Button>
    </div>
  )
}

export default Login
