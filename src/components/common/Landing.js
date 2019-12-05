import React from 'react'
import ContactForm from './ContactForm'
import axios from 'axios'

export default class Landing extends React.Component {
  constructor() {
    super()

    this.state = {
      form: {
        firstname: '',
        lastname: '',
        email: '',
        number: '',
        subject: '',
        message: ''
      },
      message: {
        to: 'matt.davey540@me.com',
        from: 'hello@jackalmedia.co.uk',
        subject: '',
        textBody: 'This message was sent using the SocketLabs Node.js library!',
        htmlBody: '<html>This message was sent using the SocketLabs Node.js library!</html>',
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
    this.setState({ ...this.state.message.subject, ...this.state.form.subject })
    axios.post('api/contact', this.sendData.message)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  handleChange({ target: { name, value } }) {
    const form = { ...this.state.form, [name]: value }
    this.setState({ form })
  }


  render() {
    console.log(this.state)
    return (
      <main>

        <section className='hero' id='1'>
          <h1 className='middle-center central'>GONSALVES FITNESS</h1>
        </section>

        <div className='flex-wrap middle-center'>
          <section className='flex-container s16'>
            <h2>About</h2>
          </section>

          <section className='flex-container'>
            <img className='sect' src='https://i.imgur.com/8452IOt.png' />
          </section>

          <section className='flex-container s16' id='2'>

            <div>

              <h3>Personal Training</h3>

              <h3>Massage & Soft Tissue Therapy</h3>
            </div>

          </section>

          <section className='flex-container'>
            <img className='sect' src='https://i.imgur.com/8452IOt.png' />
          </section>

          <section className='flex-container s16' id='3'>

            <div>
              <h3>Block Sessions</h3>

              <ul>1 Person
                <li>5x £225 (£45 a session)</li>
                <li>10x £425 (£42.50 a session)</li>
                <li>20x £800 (£40 a session)</li>
                <li>30x £1125 (£37.50 a session)</li>
              </ul>

              <ul>2 Persons
                <li>5x £175pp (£35 a session)</li>
                <li>10x £325pp (£32.50 a session)</li>
                <li>20x £600pp (£30 a session)</li>
                <li>30x £825pp (£27.50 a session)</li>
              </ul>
            </div>

            <div>
              <h3>Monthly Packages</h3>
              <ul>
                <li>1x 1 Hour Session per Week £140 (£35 a session)</li>
                <li>2x 1 Hour Session per Week £260 (£32.50 a session)</li>
                <li>3x 1 Hour Session per Week £360 (£30 a session)</li>
                <li>4x 1 Hour Session per Week £440 (£27.50 a session)</li>
                <li>5x 1 Hour Session per Week £500 (£25 a session)</li>
              </ul>

              <ul>
                <li>1x 1 Hour Session per Week £120 (£30 a session)</li>
                <li>2x 1 Hour Session per Week £220 (£27.50 a session)</li>
                <li>3x 1 Hour Session per Week £300 (£25 a session)</li>
                <li>4x 1 Hour Session per Week £360 (£22.50 a session)</li>
                <li>5x 1 Hour Session per Week £400 (£20 a session)</li>
              </ul>
            </div>

            <div>
              <h3>Every Packages Includes:</h3>
              <ul>
                <li>Monthly Fitness Assessment</li>
                <li>Body Composition Analys</li>
                <li>Tailored Gym Programme</li>
                <li>Bespoke Nutrition Guide (Macros + Calories)</li>
                <li>SMART GOAL Setting</li>
                <li>Update Photos</li>
                <li>Contact with PT via Phone, Text, Email</li>
              </ul>
            </div>

          </section>

          <section className='flex-container'>
            <img className='sect' src='https://i.imgur.com/8452IOt.png' />
          </section>

          <section className='flex-container s16' id='4'>
            <ContactForm
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              form={this.state.form}
            />
          </section>
        </div>
        <footer className='centered'>
          <p className='middle-center central'>things</p>
          <p className='middle-center central'>things</p>
          <p className='middle-center central'>and morethings</p>
        </footer>
      </main>
    )
  }

}