import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'
import axios from 'axios'

import AdminNav from '../common/AdminNav'

export default class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
      stories: [],
      bg: {}
    }
    this.logout = this.logout.bind(this)
    this.unsplashBg = this.unsplashBg.bind(this)
  }

  unsplashBg() {
    console.log(`unsplash ${process.env.UNSPLASH}`)
    axios
      .get(
        `https://api.unsplash.com/photos/random/?client_id=${process.env.UNSPLASH}&orientation=landscape`
      )
      .then(res => this.setState({ bg: res.data }))
  }
  componentDidMount() {
    if (Auth.isAuthenticated()) {
      axios
        .get('/api/story')
        .then(res => this.setState({ stories: res.data }))
        .catch(err => console.log(err))
    }
    this.unsplashBg()
  }

  logout() {
    Auth.logout()
    this.props.history.push('/')
  }

  handleDelete(e, id) {
    e.preventDefault()
    window.confirm(`Are you sure you wish to delete ${e.target.name}'s story?`)
      ? axios
        .delete(`/api/story/${id}`, {
          headers: { Authorization: `Bearer ${Auth.getToken()}` }
        })
        .then(window.location.reload())
      : console.log(false)
  }

  render() {
    if (!Auth.isAuthenticated())
      return <h1>You must be logged in to view this page</h1>
    if (!this.state.stories) return null
    if (!this.state.bg.urls) return null

    console.log('state', this.state.bg)

    return (
      <>
        <AdminNav />
        <div
          className='admin-dash'
          style={{ backgroundImage: `url(${this.state.bg.urls.full})` }}
        >
          <h1>Content Manager</h1>
          <h2>{`Welcome back, ${Auth.getName()}`}</h2>

          <button>
            {Auth.isAuthenticated() && (
              <Link to='/' onClick={this.logout}>
                <div className='nav-item'>Logout</div>
              </Link>
            )}
          </button>

          <div>
            <h3>Success Stories</h3>
            <Link to='/story'>Create New</Link>

            <table className='table'>
              <thead>
                <tr>
                  <th id='num'>#</th>
                  <th>Profile</th>
                  <th>Feature</th>
                  <th>Client</th>
                  <th>Created At</th>
                  <th>Control</th>
                  <th>database_id</th>
                </tr>
              </thead>

              <tbody>
                {this.state.stories.map((story, i) => (
                  <tr key={i + 1}>
                    <td>{i + 1}</td>
                    <td>
                      <img src={story.image} className='profile-icon'></img>
                    </td>
                    <td>
                      <input
                        type='checkbox'
                        checked={story.featured === true ? true : false}
                        disabled
                      />{' '}
                    </td>
                    <td>{story.client}</td>
                    <td>{story.created}</td>
                    <td>
                      <Link to={`/story/${story._id}`}>Edit</Link>
                      <a
                        name={story.client}
                        onClick={() => this.handleDelete(event, story._id)}
                      >
                        Delete
                      </a>
                    </td>
                    <td>{story._id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    )
  }
}
