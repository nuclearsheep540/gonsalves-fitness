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
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    const nav = document.getElementById('#navbar')
    if (nav) {
      this.setState({
        heroHeight: document.getElementById('#navbar').offsetHeight()
      })
      window.addEventListener('scroll', this.handleScroll)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    this.setState({
      transform: scrollY
    })
    console.log(this.state.transform)
  }

  render() {
    if (window.location.href.includes('admin')) return null
    return (
      <nav className='top-nav' id='navbar'>
        <Link to='/'><p>Home</p></Link>
        <Link to='/booking'><p>Booking</p></Link>
        <Link to='/privacy'><p>Privacy Policy</p></Link>
        <Link to='/admin'> </Link>
      </nav>
    )
  }
}

export default withRouter(TopNav)
