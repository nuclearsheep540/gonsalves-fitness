import React from 'react'
import Footer from '../common/Footer'

export default class Book extends React.Component {
  constructor() {
    super()
    this.state = {
      userLogged: ''
    }

  }

  render() {
    return (
      <>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col'>

            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}