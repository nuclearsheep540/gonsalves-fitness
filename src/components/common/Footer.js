import React from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
  constructor() {
    super()
    this.state = {}
    //binds
  }
  //funct
  componentDidMount() {
    //
  }

  render() {
    if (this.props.location.includes('admin')) return null
    return (
      <footer>
        <div className='container-fluid'>
          <p>External Booking</p>
          <p>Merchandise</p>
          <Link to='/privacy'>
            <p>Privacy Policy</p>
          </Link>
          <Link to='/admin'>
            <p>Admin Panel</p>
          </Link>
        </div>
      </footer>
    )
  }
}
