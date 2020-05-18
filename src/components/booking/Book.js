import React from 'react'
import Footer from '../common/Footer'

export default class Book extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div id='booking'>
        <div className='hero'>
          <div className='video'>
            <div className='overlay'>
              <img className='logo' src='../../assets/logo_bw.png' id='hero-logo' />
              <img
                className='hero'
                src='https://media.istockphoto.com/photos/closeup-of-dumbbell-on-the-floor-in-gym-copy-space-picture-id1162162438'
              />

            </div>

            <h2>BOOKING</h2>

          </div>
        </div>

        <div className='col pricing'></div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col pricing'>
              <h2 style={{ textAlign: 'center' }}>Personal Training</h2>

              <h3 style={{ textAlign: 'center' }}>Single Sessions</h3>
              <div className='col3'>
                <div>
                  <i className='fas fa-user fa-4x'></i>
                  <h3>Solo</h3>
                  <p>60 Minute Session £45</p>
                  <p>30 Minute Session £30</p>
                </div>

                <div>
                  <i className='fas fa-user-friends fa-4x'></i>
                  <h3>Duo</h3>
                  <p>60 Minute Session £35pp</p>
                  <p>30 Minute Session £20pp</p>
                </div>

                <div>
                  <i className='fas fa-users fa-4x'></i>
                  <h3>Groups of 3+</h3>
                  <p>60 Minute Session £25pp</p>
                  <p>30 Minute Session £10pp</p>
                </div>

                <div>
                  <h3></h3>
                </div>
              </div>

              <h3 style={{ textAlign: 'center' }}>Block Packages</h3>
              <div className='col3'>
                <div>
                  <i className='fas fa-user fa-4x'></i>
                  <h3>Solo</h3>

                  <ul>
                    <li>
                      <p>
                        <b>5 Sessions</b>
                        <br />
                        £45 per session
                      </p>
                    </li>
                    <li>
                      <p>
                        <b>10 Sessions</b>
                        <br />
                        £42.50 per session
                      </p>
                    </li>
                    <li>
                      <p>
                        <b>20 Sessions</b>
                        <br />
                        £40.50 per sesion
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
                        <b>5 Sessions</b>
                        <br />
                        £35pp per session
                      </p>
                    </li>
                    <li>
                      <p>
                        <b>10 Sessions</b>
                        <br />
                        £32.50pp per session
                      </p>
                    </li>
                    <li>
                      <p>
                        <b>20 Sessions</b>
                        <br />
                        £30pp per sesion
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
                        <b>5 Sessions</b>
                        <br />
                        £25pp per session
                      </p>
                    </li>
                    <li>
                      <p>
                        <b>10 Sessions</b>
                        <br />
                        £22.50pp per session
                      </p>
                    </li>
                    <li>
                      <p>
                        <b>20 Sessions</b>
                        <br />
                        £20pp per sesion
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3>
                    Consecutive 10x session blocks = £2.50 discount per session
                  </h3>
                </div>
              </div>

              <h3 style={{ textAlign: 'center' }}>Monthly Packages</h3>
              <div className='col3'>
                <div>
                  <i className='fas fa-user fa-4x'></i>
                  <h3>Solo</h3>

                  <ul>
                    <li>
                      <p>
                        <b>1x Hour session per week</b>
                        <br />
                        £35 per session
                      </p>
                    </li>

                    <li>
                      <p>
                        <b>2x Hour sessions per week</b>
                        <br />
                        £32.50 per session
                      </p>
                    </li>

                    <li>
                      <p>
                        <b>3x Hour sessions per week</b>
                        <br />
                        £30 per session
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
                        <b>1x Hour session per week</b>
                        <br />
                        £30pp per session
                      </p>
                    </li>

                    <li>
                      <p>
                        <b>2x Hour sessions per week</b>
                        <br />
                        £27.50pp per session
                      </p>
                    </li>

                    <li>
                      <p>
                        <b>3x Hour sessions per week</b>
                        <br />
                        £25pp per session
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
                        <b>1x Hour session per week</b>
                        <br />
                        £25pp per session
                      </p>
                    </li>

                    <li>
                      <p>
                        <b>2x Hour sessions per week</b>
                        <br />
                        £22.50pp per session
                      </p>
                    </li>

                    <li>
                      <p>
                        <b>3x Hour sessions per week</b>
                        <br />
                        £20pp per session
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3>
                    Consecutive session per week = £2.50 discount per session
                  </h3>
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

          <div className='row'>
            <div className='col pricing'>
              <h3>Every Packages Includes:</h3>
              <ul>
                <li>
                  <p>Monthly Fitness Assessment</p>
                </li>
                <li>
                  <p>Body Composition Analys</p>
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

          <div className='row'>
            <div className='col pricing'>
              <h2>Want to book a session?</h2>
              <p>
                If you want to discuss rates or a personal training plan, please
                get in touch
              </p>

              <p>
                You can book me over at *website* where you can check my
                availability and confirm bookings with me.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
