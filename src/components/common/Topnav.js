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

  componentDidMount(){
    const nav = document.getElementById('#navbar')
    if (nav) {
      this.setState({ heroHeight: document.getElementById('#navbar').offsetHeight() })
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
    return (
      <nav className='top-nav' id='navbar'>
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