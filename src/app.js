import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './components/common/Landing'
import Navbar from './components/common/Navbar'
import Book from './components/booking/Book'
import Topnav from './components/common/Topnav'
import Login from './components/secure/Login'
import Dash from './components/secure/Dashboard'

import './style.scss'
import 'normalize.css'


const App = () => (
  <BrowserRouter>
    <Topnav />
    <Navbar />
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/booking' component={Book} />
      <Route exact path='/admin' component={Login} />
      <Route exact path='/dashboard' component={Dash} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)