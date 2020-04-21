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

  //MESSAGES
  showMsg() {
    const msg = document.querySelector('.msg')
    msg.classList.remove('fadeOut'),
    msg.style.display = 'block',
    msg.classList.add('fadeIn')
  }

  hideMsg() {
    const msg = document.querySelector('.msg')
    msg.classList.remove('fadeIn'),
    msg.classList.add('fadeOut'),
    setTimeout(() => {
      msg.style.display = 'none'
    }, 700)
  }

  msgTable() {
    this.state.msg ? this.showMsg() : this.hideMsg()
    this.setState({ msg: !this.state.msg })
  }

  //CLIENT STORIES
  showStory() {
    const stories = document.querySelector('.clients')
    stories.classList.remove('fadeOut'),
    stories.style.display = 'block',
    stories.classList.add('fadeIn')
  }

  hideStory() {
    const stories = document.querySelector('.clients')
    stories.classList.remove('fadeIn'),
    stories.classList.add('fadeOut'),
    setTimeout(() => {
      stories.style.display = 'none'
    }, 700)
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
            <Link to ='/admin' onClick={this.logout}>
              <li>
                <img id='logout' src='../../assets/logout.png' />
              </li>
            </Link>
          )}
        </ul>
        
      </div>
    )
  }
}