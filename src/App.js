import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home/Home/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFound from './Components/NotFound/NotFound'
import ServiceDetails from './Components/ServiceDetails/ServiceDetails/ServiceDetails'
import Login from './Components/Login/Login/Login'
import Header from './Components/Shared/Header/Header'
import AuthProvider from './Components/Contexts/AuthProvider'
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/serviceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
