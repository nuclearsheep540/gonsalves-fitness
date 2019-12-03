import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './components/common/Landing'
import Navbar from './components/common/Navbar'

import './style.scss'
import 'normalize.css'


const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Landing} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)