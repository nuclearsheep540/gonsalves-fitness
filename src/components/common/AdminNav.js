import React from 'react'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'

export default class AdminNav extends React.Component {
  constructor(){
    super()
    this.state = {
      table: true,
      msg: true

    }
    this.storyTable = this.storyTable.bind(this)
    this.msgTable = this.msgTable.bind(this)
  }
  componentDidMount(){
    console.log(window.history)
  }

  //MESSAGES
  showMsg() {
    const msg = document.querySelector('.msg')
    msg.classList.remove('fadeOutLeft'),
    msg.style.display = 'block',
    msg.classList.add('fadeInLeft')
  }

  hideMsg() {
    const msg = document.querySelector('.msg')
    msg.classList.remove('fadeInLeft'),
    msg.classList.add('fadeOutLeft'),
    setTimeout(() => {
      msg.style.display = 'none'
    }, 500)
  }

  msgTable() {
    this.state.msg ? this.showMsg() : this.hideMsg()
    this.setState({ msg: !this.state.msg })
  }

  //CLIENT STORIES
  showStory() {
    const stories = document.querySelector('.clients')
    stories.classList.remove('fadeOutLeft'),
    stories.style.display = 'block',
    stories.classList.add('fadeInLeft')
  }

  hideStory() {
    const stories = document.querySelector('.clients')
    stories.classList.remove('fadeInLeft'),
    stories.classList.add('fadeOutLeft'),
    setTimeout(() => {
      stories.style.display = 'none'
    }, 500)
  }
  
  storyTable() {
    this.state.table ? this.showStory() : this.hideStory()
    this.setState({ table: !this.state.table })
  }

  logout(){
    event.preventDefault()
    Auth.logout()
    console.log('clearing tokens')
  }

  settings(){
    console.log('settings')
  }

  render(){
    return (
      <div className='admin-nav'>
        <ul>
          <a onClick={this.storyTable}>
            <li>
              <img src='../../assets/stories.png' />
            </li>
          </a>
          <a onClick={this.msgTable}>
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

          <a onClick={this.settings}>
            <li>
              <img src='../../assets/settings.png' />
            </li>
          </a>
          
        </ul>
      </div>
    )
  }
}