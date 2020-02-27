import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './components/landing/Landing'
import Navbar from './components/common/Navbar'
import Book from './components/booking/Book'
import Topnav from './components/common/Topnav'
import Login from './components/secure/Login'
import Dash from './components/secure/Dashboard'
import StoryEdit from './components/stories/StoryEdit'
import StoryCreate from './components/stories/StoryCreate'
import StoryIndex from './components/stories/StoryIndex'
import Footer from './components/common/Footer'

import ImageUpload from '../image-upload'

import './styles/main.scss'
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
      <Route path='/dash' component={Dash} />
      <Route path='/story/:id/' component={StoryEdit} />
      <Route path='/story' component={StoryCreate} />
      <Route path='/success' component={StoryIndex} />

      <Route path='/uploadbase' component={ImageUpload} />
      
    </Switch>
    <Footer />
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)