import React from 'react'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'

export default class AdminNav extends React.Component {
  constructor(){
    super()
    this.state = {
      table: true,
      msg: false

    }
    this.storyTable = this.storyTable.bind(this)
    this.msgTable = this.msgTable.bind(this)
  }

  showStory() {
    const stories = document.querySelector('.table')
    stories.classList.remove('fadeOut'),
    stories.style.visibility = 'visible',
    stories.classList.add('fadeIn')
  }

  hideStory() {
    const stories = document.querySelector('.clients')
    stories.classList.remove('fadeIn'),
    stories.classList.add('fadeOut'),
    setTimeout(() => {
      stories.style.visibility = 'hidden'
    }, 900)
  }
  
  storyTable() {
    this.state.table ? this.showStory() : this.hideStory()
    this.setState({ table: !this.state.table })
  }

  msgTable() {
    console.log('showing messages')
    this.setState({ msg: !this.state.msg })
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