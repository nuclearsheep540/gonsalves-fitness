import React from 'react'
import Axios from 'Axios'
import { Link } from 'react-router-dom'

import ContactForm from './ContactForm'
import About from './About'
import Services from './Services'
import Feature from './Feature'
import HeroCover from './HeroCover'
import Footer from '../common/Footer'
import TopNav from '../common/Topnav'

export default class Landing extends React.Component {
  constructor() {
    super()

    this.state = {
      mobile: '',
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
    this.handleCC = this.handleCC.bind(this)
  }
  //functions
  componentDidMount(){
    document.querySelector('.hero').scrollIntoView()
    this.setState({ mobile: window.innerWidth < 950 ? true : false })
  }

  handleCC(){
    event.preventDefault()
    const obj = {
      privacy: this.state.privacy,
      to: this.state.form.email, //customer's email address
      from: 'gonsalvesfitness@gmail.com', //reply-to client address
      subject: `${this.state.form.firstname} has contacted you at gonsalvesfitness.co.uk`,
      textBody: this.state.form.message,
      htmlBody: `
      <html>
      <center>
      <img src='https://firebasestorage.googleapis.com/v0/b/rhyse-pt.appspot.com/o/images%2FGF%20LOGO%20BLACK%20(1)%20copy.png?alt=media&token=cda8a4ad-affc-43d8-b7c2-200b79530d3a' width='300' />
      </center>
      <body style="background-color: #f5f5f5">
      <div style="background-color: #ffffff; border: 10px solid #f5f5f5; border-bottom-right-radius: 20px; border-bottom-left-radius: 20px; padding: 8px">
      <p>From: ${this.state.form.firstname} ${this.state.form.lastname},</p>
      <p>Email: ${this.state.form.email}</p>
      <p>Contact: ${this.state.form.number}</p>
      <br />
      <p>${this.state.form.message.replace('\n\n', '<br /> <br />')}</p>
      </div>
      </body>
      </html>`,
      messageType: 'basic'
    }
    Axios.post('api/contact', obj)
      .then((res) => {
        console.log(res.status)
      })
      .catch((err) => {
        console.log(err)
        this.setState({ formstatus: 'error' })
      })


  }
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
      subject: `${this.state.form.firstname} has contacted you at gonsalvesfitness.co.uk`,
      textBody: this.state.form.message,
      htmlBody: `
      <html>
      <center>
      <img src='https://firebasestorage.googleapis.com/v0/b/rhyse-pt.appspot.com/o/images%2FGF%20LOGO%20BLACK%20(1)%20copy.png?alt=media&token=cda8a4ad-affc-43d8-b7c2-200b79530d3a' width='300' />
      </center>
      <body style="background-color: #f5f5f5">
      <div style="background-color: #ffffff; border: 10px solid #f5f5f5; border-bottom-right-radius: 20px; border-bottom-left-radius: 20px; padding: 8px">
      <h3>This is an email confirming we've received your message below:</h3>
      <p>From: ${this.state.form.firstname} ${this.state.form.lastname},</p>
      <p>Email: ${this.state.form.email}</p>
      <p>Contact: ${this.state.form.number}</p>
      <br />
      <p>${this.state.form.message.replace('\n\n', '<br /> <br />')}</p>
      </div>
      </body>
      </html>`,
      messageType: 'basic'
    }
    setTimeout(()=>{
      Axios
        .post('api/contact', obj)
        .then(res => {
          console.log(res.status)
          this.setState({ formstatus: 'status' + res.status })
          document.getElementsByClassName('formresult')[0].classList.add('fadeIn')
        })
        .catch(err => {
          console.log(err)
          this.setState({ formstatus: 'error' })
        })
    },1000)
    this.handleCC()
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
          <TopNav />
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
              <div id='contact'>

                <ContactForm
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
                  form={this.state.form}
                  status={this.state.formstatus}
                  handleprivacy={this.handlePrivacy}
                  privacy={this.state.privacy}
                />
                
                
                <div className={this.state.formstatus !== 'open' &
                this.state.formstatus !== 'pending' ? 'hidden' : 'formresult' }>
                </div>

                {this.state.formstatus === 'status201' &&
                  <div className='formresult animated' id='formsent'>
                    <h2>Message Sent</h2>
                    <br />
                    <p>A copy of your message has been sent to {this.state.form.email}</p>
                    <p>I hope to get back to you as soon as possible!</p>
                    <br />
                  </div>
                }
                
                {this.state.formstatus === 'error' &&
                <div className='formresult' id='formerror'>
                  <h2>Error. Please check form is complete</h2>
                </div>
                }

              </div>
            </div>
          </div>
          
        <div className='sticker'><Link to='/booking'>Book Now</Link></div>
          <Footer />
      </>
    )
  }
}
