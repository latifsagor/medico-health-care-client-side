import React from 'react'
import { Button } from 'react-bootstrap'
import useAuth from '../../hooks/useAuth'

const Login = () => {
  const { signInUsingGoogle } = useAuth()
  return (
    <div>
      <h3>Please Login</h3>
      <Button onClick={signInUsingGoogle} variant="outline-warning">
        Google Sign In
      </Button>
    </div>
  )
}

export default Login
