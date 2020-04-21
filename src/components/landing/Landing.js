import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import ContactForm from './ContactForm'
import About from './About'
import Services from './Services'
import Feature from './Feature'
import HeroCover from './HeroCover'
import Footer from '../common/Footer'

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
        message: ''
      },
      privacy: false,
      formstatus: 'open'
    }

    //binds
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePrivacy = this.handlePrivacy.bind(this)
  }

  //functions
  handleSubmit(e) {
    // form has 3 states
    // open = ready for input
    // pending = data is processing
    // status = status response from backend
    this.setState({ formstatus: 'pending' })
    e.preventDefault()
    const obj = {
      privacy: this.state.privacy,
      to: 'gonsalvesfitness@gmail.com', //client's email address
      from: this.state.form.email, //reply-to customer address
      subject: `${this.state.form.firstname} has contacted you at Gonsalves-Fitness.com`,
      textBody: this.state.form.message,
      htmlBody: `
      <html>
      <div>
      <p>From: ${this.state.form.firstname}, ${this.state.form.lastname}</p>
      <p>Contact: ${this.state.form.number}</p>
      <p>Email: ${this.state.form.email}</p>
      <p>${this.state.form.message.replace('\n\n', '<br /> <br />')}</p>
      </div>
      </html>`,
      messageType: 'basic'
    }
    setTimeout(()=>{
      axios
        .post('api/contact', obj)
        .then(res => {
          console.log(res.status)
          this.setState({ formstatus: 'status' + res.status })
        })
        .catch(err => {
          console.log(err)
          this.setState({ formstatus: 'error' })
        })
    },500)
  }

  handleChange({ target: { name, value } }) {
    //from data from front end
    const form = { ...this.state.form, [name]: value }
    this.setState({ form })
  }
  handlePrivacy(){
    const privacy = event.target.checked
    this.setState({ privacy })
  }

  render() {
    console.log(this.state)
    return (
      <>
          <div className='container-fluid'>
            <div className='row hero-video'>
              <div className='col'>
                <HeroCover />
              </div>
            </div>
            <div className='row services'>
              <div className='col'>
                <Services />
              </div>
            </div>
            <div className='row feature'>
              <div className='col'>
                <About />
              </div>
              <div className='col'>
                <Feature />
              </div>
            </div>
            <div className='row contact'>
              <div className='col'>
                <ContactForm
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
                  form={this.state.form}
                  status={this.state.formstatus}
                  handleprivacy={this.handlePrivacy}
                  privacy={this.state.privacy}
                />
              </div>
            </div>
          </div>
          
        <div className='sticker'><Link to='/booking'>Book Now</Link></div>
          <Footer />
      </>
    )
  }
}
