import React from 'react'
import ContactForm from './ContactForm'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Landing extends React.Component {
  constructor() {
    super()

    this.state = {
      form: { //data from the front end, collected from the form
        firstname: '',
        lastname: '',
        email: '',
        number: '',
        subject: '',
        message: ''
      },
      message: { //data required by the API to deliver an email
        to: 'matt.davey540@me.com',
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
    console.log(this.sendData)

    const obj = {
      to: 'matt.davey540@me.com', //client's email address
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
      ${this.state.form.message.replace('\n\n', '<br /> <br />').replace('\n', '<br />')}<br />
      </html>
      `,
      messageType: 'basic'
    }

    axios.post('api/contact', obj)
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
            <div className='sticker'>
              Book Now
            </div>
          </Link>

          <section className='hero'>
            <div className='lefty'>
              <h2 className='hero'>
                THIS IS <br></br>
                INFORMATIVE <br></br>
                DATA <br></br>
                <br></br>
                ABOUT ME <br></br>
                AND MY <br></br>
                SERVICES <br></br>
              </h2>
            </div>
          </section>

          <div className='flex-wrap middle-center'>
            <section className='flex-container s16' id='s2'>
              <div>
                <h3>Personal Training</h3>
                <h3>Massage & Soft Tissue Therapy</h3>

                <div className='gridbox'>
                  <li className='gridcell'>
                    <img className='grid-icon' src='https://cdn4.iconfinder.com/data/icons/oakcons-2/16/Image-512.png'></img>
                    <h3>Service 1</h3>
                    <p>Blah blah blah, blah, blah-blah-blah. Blah blah blah, blah, blah-blah-blah.</p>
                  </li>
                  <li className='gridcell'>
                    <img className='grid-icon' src='https://cdn4.iconfinder.com/data/icons/oakcons-2/16/Image-512.png'></img>
                    <h3>Service 2</h3>
                    <p>Blah blah blah, blah, blah-blah-blah. Blah blah blah, blah, blah-blah-blah.</p>
                  </li>
                  <li className='gridcell'>
                    <img className='grid-icon' src='https://cdn4.iconfinder.com/data/icons/oakcons-2/16/Image-512.png'></img>
                    <h3>Service 3</h3>
                    <p>Blah blah blah, blah, blah-blah-blah.Blah blah blah, blah, blah-blah-blah.</p>
                  </li>
                  <li className='gridcell'>
                    <img className='grid-icon' src='https://cdn4.iconfinder.com/data/icons/oakcons-2/16/Image-512.png'></img>
                    <h3>Service 4</h3>
                    <p>Blah blah blah, blah, blah-blah-blah. Blah blah blah, blah, blah-blah-blah.</p>
                  </li>
                </div>
              </div>
            </section>
          </div>

          {/* <section id='b'></section> */}
          <div className='' id='s1'>
            <section className='flex-container s16'>
              <div className='right'>
                <h3>About</h3>
                <p>
                I am Rhyse and I set up Gonsalves Fitness to provide health and fitness services to those looking to better themselves, achieve their goals and reach their potential.</p>
                
                <p>I have helped many achieve these things in a variety of ways; from losing weight, preparing for their wedding day, recovery from injuries and improvement in daily quality of life.</p>
                
                <p>I have also worked with semi-professional and professional athletes to aid and contribute to their abilities in competing for success in their sport.
                </p>
                <button>Learn More</button>
              </div>
            </section>
          </div>



          <div className='flex-wrap middle-center'>

            <section className='flex-container s16' id='s3'>

              <h3>Results</h3>
              <div className=''>

                <div>
                 "
                 Quote, testimonal from client
                 "
                </div>
                
                <div className=''>
                  Image of before and after
                </div>

                {/* build login page for rhyse, user authentication */}
                {/* clickthrough to success stories, build small-scale CMS for ryhse to self-publish */}
                
              </div>

            </section>

            <section id='c'></section>

            <section className='flex-container s16' id='s4'>

              <center><img src='../assets/logo_bw.png' className='formlogo'></img></center>
              <ContactForm
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                form={this.state.form}
              />
            </section>
          </div>
          <footer>
            <p>things</p>
            <p>things</p>
            <p>and morethings</p>
          </footer>
        </main>
      </>
    )
  }

}