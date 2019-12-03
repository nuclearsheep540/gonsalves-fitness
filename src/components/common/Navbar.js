import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      userLogged: ''
    }

  }

  render() {
    return (
      <nav className=''>
        <a href='#1'> Test 1 </a>
        <a href='#2'> Test 2 </a>
        <a href='#3'> Test 3 </a>
        <a href='#4'> Test 4 </a>
        <p>|</p>
        <Link to='#'> Test Booking </Link>
      </nav>
    )
  }
}

export default withRouter(Navbar)