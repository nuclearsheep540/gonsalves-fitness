import React from 'react'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'

export default class AdminNav extends React.Component {
  constructor(){
    super()
    this.state = {
      table: true

    }
    this.storyTable = this.storyTable.bind(this)
  }
  storyTable() {
    const stories = document.querySelector('.table')
    this.state.table ? ( 
      stories.classList.remove('fadeOut'),
      stories.style.visibility = 'visible',
      stories.classList.add('fadeIn')
    ) : ( 
      stories.classList.remove('fadeIn'),
      stories.classList.add('fadeOut'),
      setTimeout(() => {
        stories.style.visibility = 'hidden'
      }, 900)
    )
    this.setState({ table: !this.state.table })
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
          <a>
            <li>
              <img src='../../assets/publish.png' />
            </li>
          </a>

          {Auth.isAuthenticated() && (
            <Link to='/' onClick={this.logout}>
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