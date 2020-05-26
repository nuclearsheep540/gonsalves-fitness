import React from 'react'
import Footer from '../common/Footer'
import TopNav from '../common/Topnav'
import ContactForm from '../landing/ContactForm'
import Axios from 'Axios'

export default class Book extends React.Component {
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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePrivacy = this.handlePrivacy.bind(this)
    this.handleCC = this.handleCC.bind(this)
  }
  componentDidMount() {
    document.querySelector('.hero').scrollIntoView()
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
    return (
      <>
        <TopNav />
        <div id='booking'>
          <div className='container-fluid'>
            <div className='row hero-video'>
              <div className='col'>
                <div className='hero'>
                  <div className='video'>
                    <div className='overlay'>
                      <img
                        src='../assets/logo_bw.png'
                        className='animated fadeIn logo'
                        id='hero-logo'
                      />
                    </div>
                    <img
                      className='hero'
                      src='https://simplygym.co.uk/wp-content/uploads/2018/05/AdobeStock_177818164-1024x683.jpeg'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <h2 style={{ textAlign: 'center' }}>Personal Training</h2>
              <div className='col pricing'>
                <div className='col1 gold'>
                  <h3 style={{ textAlign: 'center' }}>Single Sessions</h3>
                </div>
                <div className='col3'>
                  <div>
                    <i className='fas fa-user fa-4x'></i>
                    <h3>Solo</h3>
                    <ul>
                      <li>
                        <p>
                          <b>60 Minutes</b>
                          <br />
                          £45
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>30 Minutes</b>
                          <br />
                          £30
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <i className='fas fa-user-friends fa-4x'></i>
                    <h3>Duo</h3>
                    <ul>
                      <li>
                        <p>
                          <b>60 Minutes</b>
                          <br />
                          £35pp
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>30 Minutes</b>
                          <br />
                          £20pp
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <i className='fas fa-users fa-4x'></i>
                    <h3>Groups of 3+</h3>
                    <ul>
                      <li>
                        <p>
                          <b>60 Minutes</b>
                          <br />
                          £25pp
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>30 Minutes</b>
                          <br />
                          £10pp
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3></h3>
                  </div>
                </div>

                <div className='col1 gold'>
                  <h3 style={{ textAlign: 'center' }}>Block Packages</h3>
                </div>
                <div className='col3'>
                  <div>
                    <i className='fas fa-user fa-4x'></i>
                    <h3>Solo</h3>

                    <ul>
                      <li>
                        <p>
                          <b>10 Hourly Sessions</b>
                          <br />
                          £42.50 per session
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>20 Hourly Sessions</b>
                          <br />
                          £40 per sesion
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>30 Hourly Sessions</b>
                          <br />
                          £37.50 per sesion
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>40 Hourly Sessions</b>
                          <br />
                          £35 per sesion
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>50 Hourly Sessions</b>
                          <br />
                          £32.50 per sesion
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <i className='fas fa-user-friends fa-4x'></i>
                    <h3>Duo</h3>

                    <ul>
                      <li>
                        <p>
                          <b>10 Hourly Sessions</b>
                          <br />
                          £32.50pp per session
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>20 Hourly Sessions</b>
                          <br />
                          £30pp per sesion
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>30 Hourly Sessions</b>
                          <br />
                          £27.50pp per sesion
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>40 Hourly Sessions</b>
                          <br />
                          £25pp per sesion
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>50 Hourly Sessions</b>
                          <br />
                          £22.50pp per sesion
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <i className='fas fa-users fa-4x'></i>
                    <h3>Groups of 3+</h3>

                    <ul>
                      <li>
                        <p>
                          <b>10 Hourly Sessions</b>
                          <br />
                          £22.50pp per session
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>20 Hourly Sessions</b>
                          <br />
                          £20pp per sesion
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>30 Hourly Sessions</b>
                          <br />
                          £17.50pp per sesion
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>40 Hourly Sessions</b>
                          <br />
                          £15pp per session
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>50 Hourly Sessions</b>
                          <br />
                          £12.50pp per sesion
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='col1 gold'>
                  <h3 style={{ textAlign: 'center' }}>Monthly Packages</h3>
                </div>
                <div className='col3'>
                  <div>
                    <i className='fas fa-user fa-4x'></i>
                    <h3>Solo</h3>

                    <ul>
                      <li>
                        <p>
                          <b>1 Hourly session per week</b>
                          <br />
                          £35 per session
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>2 Hourly sessions per week</b>
                          <br />
                          £32.50 per session
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>3 Hourly sessions per week</b>
                          <br />
                          £30 per session
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>4 Hourly sessions per week</b>
                          <br />
                          £27.50 per session
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>5 Hourly sessions per week</b>
                          <br />
                          £25 per session
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <i className='fas fa-user-friends fa-4x'></i>
                    <h3>Duo</h3>

                    <ul>
                      <li>
                        <p>
                          <b>1 Hourly session per week</b>
                          <br />
                          £30pp per session
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>2 Hourly sessions per week</b>
                          <br />
                          £27.50pp per session
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>3 Hourly sessions per week</b>
                          <br />
                          £25pp per session
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>4 Hourly sessions per week</b>
                          <br />
                          £22.50pp per session
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>5 Hourly sessions per week</b>
                          <br />
                          £20pp per session
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <i className='fas fa-users fa-4x'></i>
                    <h3>Groups of 3+</h3>

                    <ul>
                      <li>
                        <p>
                          <b>1 Hourly session per week</b>
                          <br />
                          £25pp per session
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>2 Hourly sessions per week</b>
                          <br />
                          £22.50pp per session
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>3 Hourly sessions per week</b>
                          <br />
                          £20pp per session
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>4 Hourly sessions per week</b>
                          <br />
                          £17.50pp per session
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>5 Hourly sessions per week</b>
                          <br />
                          £15pp per session
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='col'>
                  <h3 style={{ textAlign: 'center' }}>
                    Monthly Packages Also Include:
                  </h3>
                  <ul>
                    <li>
                      <p>Monthly Fitness Assessment</p>
                    </li>
                    <li>
                      <p>Body Composition Analysis</p>
                    </li>
                    <li>
                      <p>Tailored Gym Programme</p>
                    </li>
                    <li>
                      <p>Bespoke Nutrition Guide (Macros + Calories)</p>
                    </li>
                    <li>
                      <p>SMART GOAL Setting</p>
                    </li>
                    <li>
                      <p>Update Photos</p>
                    </li>
                    <li>
                      <p>Contact with PT via Phone, Text, Email</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col pricing'>
                <div className='pthub'>
                  <div className='width-80'>
                    <object
                      data='https://www.mypthub.net/assets/img/logo-white.svg'
                      type='image/svg+xml'
                    />
                    <h2>Want to book a session?</h2>

                    <p>
                      If you want to discuss rates or a personal training plan,
                      please get in touch.
                    </p>

                    <p>
                      You can book me over at{' '}
                      <a
                        href='https://gonsalvesfitness.mypthub.net/3/auth/'
                        target='blank'
                      >
                        PT HUB
                      </a>{' '}
                      where you can check my availability and confirm bookings
                      with me.
                    </p>

                    <p>
                      Please note that all personal training sessions are face to face and conducted in Essex &amp; London regions.
                    </p>

                    <a
                      href='https://gonsalvesfitness.mypthub.net/3/auth/'
                      target='blank'
                    >
                      <button>Book a session</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col pricing'>
                <h2 style={{ textAlign: 'center' }}>Deep Tissue Massage</h2>

                <div className='col4'>
                  <div>
                    <i className='fas fa-battery-quarter fa-2x'></i>
                    <h3>30 mins</h3>
                    <ul>
                      <li>
                        <p>
                          <b>1x Session</b>
                          <br />
                          £40
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>5x Sessions</b>
                          <br />
                          £180
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>10x Session</b>
                          <br />
                          £340
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <i className='fas fa-battery-half fa-2x'></i>
                    <h3>60 mins</h3>
                    <ul>
                      <li>
                        <p>
                          <b>1x Session</b>
                          <br />
                          £60
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>5x Sessions</b>
                          <br />
                          £270
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>10x Session</b>
                          <br />
                          £510
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <i className='fas fa-battery-three-quarters fa-2x'></i>
                    <h3>90 mins</h3>
                    <ul>
                      <li>
                        <p>
                          <b>1x Session</b>
                          <br />
                          £90
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>5x Sessions</b>
                          <br />
                          £405
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>10x Session</b>
                          <br />
                          £765
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <i className='fas fa-battery-full fa-2x'></i>
                    <h3>120 mins</h3>
                    <ul>
                      <li>
                        <p>
                          <b>1x Session</b>
                          <br />
                          £110
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>5x Sessions</b>
                          <br />
                          £495
                        </p>
                      </li>

                      <li>
                        <p>
                          <b>10x Session</b>
                          <br />
                          £935
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col pricing'>
                <h2 style={{ textAlign: 'center' }}>Kinesiology Taping</h2>

                <div className='col1'>
                  <div>
                    <i className='fas fa-user-injured fa-5x'></i>
                    <h3>£5 Per body part</h3>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm 
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              form={this.state.form}
              status={this.state.formstatus}
              handleprivacy={this.handlePrivacy}
              privacy={this.state.privacy}
            />


          </div>
          <Footer />
        </div>
      </>
    )
  }
}
