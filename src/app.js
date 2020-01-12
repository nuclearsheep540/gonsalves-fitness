import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Auth from './lib/auth'

import Landing from './components/common/Landing'
import Navbar from './components/common/Navbar'
import Book from './components/booking/Book'
import Topnav from './components/common/Topnav'
import Login from './components/secure/Login'
import Dash from './components/secure/Dashboard'
import StoryEdit from './components/stories/StoryEdit'

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
      <Route path='/story/:id/' component={StoryEdit} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)