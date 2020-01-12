import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class TopNav extends React.Component {
  constructor() {
    super()
    this.state = {
      userLogged: '',
      heroHeight: 0,
      transform: null
    }

  }

  render() {
    return (
      <nav className='top-nav'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <img src='../assets/logo_bw.png' className='central top-logo'></img>
        <Link to='/booking'> Booking </Link>
        <Link to='/success'>Success Stories</Link>
      </nav>
    )
  }
}

export default withRouter(TopNav)