import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import Topnav from './components/common/Topnav'
// import Navbar from './components/common/Navbar'
import Landing from './components/landing/Landing'
import Book from './components/booking/Book'
import Login from './components/secure/Login'
import Dash from './components/secure/Dashboard'
import StoryEdit from './components/stories/StoryEdit'
import StoryCreate from './components/stories/StoryCreate'
import StoryIndex from './components/stories/StoryIndex'
import AboutMe from './components/aboutPage/AboutMe'
import Privacy from './components/common/Privacy'
import User401 from './components/common/User401'
import User404 from './components/common/User404'


import ImageUpload from '../image-upload'


import './styles/main.scss'
import 'normalize.css'
import 'animate.css'
import 'react-fontawesome'

import SecureRoute from './components/common/SecureRoute'
import Auth from './lib/auth'

// need to create new routes for secure CMS
// routes need to path from /admin 
// need secure route for edit path


const App = () => (
  <BrowserRouter>
    {/* <Topnav /> */}
    {/* <Navbar /> */}

    <Switch>

      <Route path='/401' component={User401} />
      <Route exact path='/' component={Landing} />
      <Route path='/booking' component={Book} />
      <Route path='/about' component={AboutMe} />
      <Route path='/privacy' component={Privacy} />
      <Route path='/success' component={StoryIndex} />

      <Route exact path='/admin' component={Auth.isAuthenticated() ? Dash : Login} />
      <SecureRoute exact path='/admin/dash' component={Dash} />
      <SecureRoute exact path='/admin/dashboard' component={Dash} />
      <SecureRoute path='/story/:id/' component={StoryEdit} />
      <SecureRoute path='/story' component={StoryCreate} />


      <Route path='/uploadbase' component={ImageUpload} />

      <Route path='/*' component={User404} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)