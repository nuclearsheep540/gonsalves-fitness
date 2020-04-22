import React from 'react'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'

export default class AdminNav extends React.Component {
  constructor(){
    super()
    this.state = {
      story: false,
      msg: false,
      settings: false

    }
    this.storyToggle = this.storyToggle.bind(this)
    this.msgToggle = this.msgToggle.bind(this)
    this.settingsToggle = this.settingsToggle.bind(this)
    this.showSettings = this.showSettings.bind(this)
  }
  componentDidMount(){
    console.log(window.history)
  }
  //SETTINGS
  showSettings(){
    setTimeout(()=>{
      const elem = document.querySelector('.settings')
      elem.classList.remove('fadeOutLeft')
      elem.style.display = 'block'
      elem.classList.add('fadeInLeft')
    },250)

    this.hideMsg()
    this.hideStory()
    this.setState({
      msg: false,
      story: false
    })
  }

  hideSettings() {
    const elem = document.querySelector('.settings')
    elem.classList.remove('fadeInLeft'),
    elem.classList.add('fadeOutLeft'),
    setTimeout(() => {
      elem.style.display = 'none'
    }, 250)
  }

  settingsToggle() {
    this.state.settings ? this.hideSettings() : this.showSettings()
    this.setState({ settings: !this.state.settings })
  }



  //MESSAGES
  showMsg() {
    setTimeout(()=>{
      const elem = document.querySelector('.msg')
      elem.classList.remove('fadeOutLeft'),
      elem.style.display = 'block',
      elem.classList.add('fadeInLeft')
    },250)

    this.hideSettings()
    this.hideStory()
    this.setState({
      settings: false,
      story: false
    })
  }

  hideMsg() {
    const elem = document.querySelector('.msg')
    elem.classList.remove('fadeInLeft'),
    elem.classList.add('fadeOutLeft'),
    setTimeout(() => {
      elem.style.display = 'none'
    }, 250)
  }

  msgToggle() {
    this.state.msg ? this.hideMsg() : this.showMsg()
    this.setState({ msg: !this.state.msg })
  }



  //CLIENT STORIES
  showStory() {
    setTimeout(()=>{
      const elem = document.querySelector('.clients')
      elem.classList.remove('fadeOutLeft'),
      elem.style.display = 'block',
      elem.classList.add('fadeInLeft')
    },250)

    this.hideSettings()
    this.hideMsg()
    this.setState({
      settings: false,
      msg: false
    })
  }

  hideStory() {
    const elem = document.querySelector('.clients')
    elem.classList.remove('fadeInLeft'),
    elem.classList.add('fadeOutLeft'),
    setTimeout(() => {
      elem.style.display = 'none'
    }, 250)
  }
  
  storyToggle() {
    this.state.story ? this.hideStory() : this.showStory()
    this.setState({ story: !this.state.story })
  }



  //AUTH
  logout(){
    event.preventDefault()
    Auth.logout()
    console.log('clearing tokens')
  }


  
  render(){
    return (
      <div className='admin-nav'>
        <ul>
          <a onClick={this.storyToggle}>
            <li>
              <img src='../../assets/stories.png' />
            </li>
          </a>
          <a onClick={this.msgToggle}>
            <li>
              <img src='../../assets/mail.png' />
            </li>
          </a>

          {Auth.isAuthenticated() && (
            <Link to='/admin' onClick={this.logout}>
              <li>
                <img id='logout' src='../../assets/logout.png' />
              </li>
            </Link>
          )}

          <a onClick={this.settingsToggle}>
            <li>
              <img src='../../assets/settings.png' />
            </li>
          </a>
          
        </ul>
      </div>
    )
  }
}