import React from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
  constructor() {
    super()
    this.state = {}
    //binds
  }
  //funct
  scrollContact(){
    setTimeout(() => {
      window.history.pushState('contact','/#contact')
    }, 100)
  }

  render() {
    return (
      <footer>
        <div className='container-fluid'>
          <div id='footer'>

            <Link to='/privacy'>
              <p className='p14'>Privacy Policy</p>
            </Link>
            <p className='p14'>Booking</p>
            <Link to='/#contact' onClick={this.scrollContact}>
              <p className='p14'>Contact</p>
            </Link>
    
            <a href='https://www.facebook.com/GonsalvesFitness' target='blank'><p className='p14'>Facebook</p></a>
            <a href='https://www.instagram.com/gonsalvesfitness/' target='blank'><p className='p14'>Instagram</p></a>
          </div>
        </div>
      </footer>
    )
  }
}
