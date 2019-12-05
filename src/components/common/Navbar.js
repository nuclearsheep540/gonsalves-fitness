import React from 'react'
import { Link, withRouter } from 'react-router-dom'

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
    this.setState({ heroHeight: document.getElementById('1').offsetHeight })
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
      <nav className={scrollY > this.state.heroHeight ? 'fill-nav' : ''}>
        <a href={this.props.match.history === '/' ? '#1' : '/#1'}> Test 1 </a>
        <a href={this.props.match.history === '/' ? '#2' : '/#2'}> Test 2 </a>
        <a href={this.props.match.history === '/' ? '#3' : '/#3'}> Test 3 </a>
        <a href={this.props.match.history === '/' ? '#4' : '/#4'}> Test 4 </a>
        <Link to='/booking'> Test Booking </Link>
      </nav>
    )
  }
}

export default withRouter(Navbar)