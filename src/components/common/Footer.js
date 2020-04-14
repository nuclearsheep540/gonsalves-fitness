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
      <div className='container-fluid'>
        <div className='row hero-video'>
          <div className='col-sm-12'>
            <footer>
              <p>External Booking Company</p>
              <p>Merchandise</p>
              <Link to='/admin'>
                <p>Admin Panel</p>
              </Link>
            </footer>
          </div>
        </div>
      </div>
    )
  }
}
