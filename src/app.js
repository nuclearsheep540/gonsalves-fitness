import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Topnav from './components/common/Topnav'
import Navbar from './components/common/Navbar'
import Landing from './components/landing/Landing'
import Book from './components/booking/Book'
import Login from './components/secure/Login'
import Dash from './components/secure/Dashboard'
import StoryEdit from './components/stories/StoryEdit'
import StoryCreate from './components/stories/StoryCreate'
import StoryIndex from './components/stories/StoryIndex'
import AboutMe from './components/aboutPage/AboutMe'
import Footer from './components/common/Footer'

import ImageUpload from '../image-upload'


import './styles/main.scss'
import 'normalize.css'
import 'animate.css'

// need to create new routes for secure CMS
// routes need to path from /admin 



const App = () => (
  <BrowserRouter>
    {/* <Topnav />
    <Navbar /> */}

    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/booking' component={Book} />
      <Route exact path='/admin' component={Login} />
      <Route exact path='/admin/dashboard' component={Dash} />
      <Route path='/dash' component={Dash} />
      <Route path='/story/:id/' component={StoryEdit} />
      <Route path='/story' component={StoryCreate} />
      <Route path='/success' component={StoryIndex} />
      <Route path='/about' component={AboutMe} />

      <Route path='/uploadbase' component={ImageUpload} />
    </Switch>
    {window.location.href.includes('admin') ? (
      ''
    ) : (
      <Footer location={window.location.href} />
    )}
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)