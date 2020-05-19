import React from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
  constructor() {
    super()
    this.state = {}
    //binds
  }

  async scroll(){
    await (
      history.pushState('contact','/#contact','/#contact'),
      Promise.resolve()
    ).then(location.reload())
  }

  render() {
    return (
      <footer>
        <div className='container-fluid'>
          <div id='footer'>

            <Link to='/'>
              <p className='p14'>Home</p>
            </Link>

            <Link to='/booking'>
              <p className='p14'>Booking</p>
            </Link>

            <a href='/#contact' >
              <p className='p14'>Contact</p>
            </a>

            <Link to='/privacy'>
              <p className='p14'>Privacy Policy</p>
            </Link>
    
            <a href='https://www.facebook.com/GonsalvesFitness' target='blank'><p className='p14'>Facebook</p></a>
            <a href='https://www.instagram.com/gonsalvesfitness/' target='blank'><p className='p14'>Instagram</p></a>
          </div>
        </div>
      </footer>
    )
  }
}
