import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import ContactForm from './ContactForm'
import About from './About'
import Services from './Services'
import Feature from './Feature'

export default class Landing extends React.Component {
  constructor() {
    super()

    this.state = {
      form: {
        //data from the front end, collected from the form
        firstname: '',
        lastname: '',
        email: '',
        number: '',
        subject: '',
        message: ''
      },
      message: {
        //data required by the API to deliver an email
        to: 'gonsalvesfitness@gmail.com',
        from: 'hello@jackalmedia.co.uk',
        subject: '',
        textBody: 'This message was sent using the SocketLabs Node.js library!',
        htmlBody: '',
        messageType: 'basic'
      }
    }

    //binds
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  //functions
  handleSubmit(e) {
    e.preventDefault()
    const obj = {
      to: 'gonsalvesfitness@gmail.com', //client's email address
      from: this.state.form.email, //reply-to customer address
      subject: `${this.state.form.firstname} has contacted you at Gonsalves-Fitness.com`,
      textBody: this.state.form.message,
      htmlBody: `
      <html>
      From: 
      ${this.state.form.firstname}, ${this.state.form.lastname}<br />
      Contact: ${this.state.form.number}<br />
      Email: ${this.state.form.email}<br />
      <br />
      ${this.state.form.message.replace('\n\n', '<br /> <br />')}<br />
      </html>
      `,
      messageType: 'basic'
    }
    axios
      .post('api/contact', obj)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  handleChange({ target: { name, value } }) {
    //from data from front end
    const form = { ...this.state.form, [name]: value }
    this.setState({ form })
  }

  render() {
    console.log(this.state)
    return (
      <>
        <main>
          <Link to='/booking'>
            <div className='sticker'>Book Now</div>
          </Link>

          <div className='hero'>
            <div className='lefty'>
              <h2 className='hero'>
                BE<br></br>
                YOUR<br></br>
                BEST<br></br>
                YOU<br></br>
              </h2>
            </div>
          </div>

          <Services />

          <About />

          <Feature />
          
          <center>
            <img src='../assets/logo_bw.png' className='formlogo'></img>
          </center>
          
          <ContactForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            form={this.state.form}
          />
        </main>
      </>
    )
  }
}
