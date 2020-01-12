import React from 'react'
import { withRouter } from 'react-router-dom'

class Navbar extends React.Component {
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
    this.setState({ heroHeight: document.getElementById('s1').offsetHeight })
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    this.setState({
      transform: scrollY
    })
  }

  render() {
    if (this.state.heroHeight === 0) return null  
    return (
      <nav className={scrollY > this.state.heroHeight ? 'fill-nav animated fadeIn' : 'animated fadeOutUp no-nav'}>
        <a href={this.props.match.history === '/' ? '#s1' : '/#s1'}> About </a>
        <a href={this.props.match.history === '/' ? '#s2' : '/#s2'}> Services </a>
        <a href={this.props.match.history === '/' ? '#s3' : '/#s3'}> Prices </a>
        <a href={this.props.match.history === '/' ? '#s4' : '/#s4'}> Contact </a>
        {/* <Link to='/booking'> Test Booking </Link> */}
      </nav>
    )
  }
}

export default withRouter(Navbar)