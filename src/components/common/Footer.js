import React from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
  constructor() {
    super()
    this.state = {
  
    }
    //binds
  }
  //funct
  componentDidMount(){
    //
  }

  render() {
    if (this.props.location.includes('admin')) return null
    return (
      <footer>
        <p>External Booking Company</p>
        <p>Merchandise</p>
        <Link to='/admin'><p>Admin Panel</p></Link>
      </footer>
    )
  }
}
