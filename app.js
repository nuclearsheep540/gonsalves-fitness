import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './src/components/common/Landing'
import Navbar from './src/components/common/Navbar'
import Book from './src/components/booking/Book'

import './style.scss'
import 'normalize.css'


const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path ='/booking' component={Book} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)