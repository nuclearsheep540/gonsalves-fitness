import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'

export default class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
      userLogged: ''
    }
    this.logout = this.logout.bind(this)
  }
  componentDidMount(){
    Auth.isAuthenticated()
    const userLogged = Auth.getName()
    this.setState({ userLogged })
  }

  logout() {
    Auth.logout()
    this.props.history.push('/')
  }

  render() {
    if (this.state.userLogged === '') return null
    return (
      
      <div className='flex-container'>
        <h2>{`Welcome back, ${Auth.getName()}`}</h2> 
        <button>
          {Auth.isAuthenticated() && <Link to='/' onClick={this.logout}><div className='nav-item'>Logout</div></Link>}
        </button>
      </div>
    )
  }
}