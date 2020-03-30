import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'
import axios from 'axios'

import AdminNav from '../common/AdminNav'

export default class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
      date: new Date(),
      stories: [],
      bg: {
        'id': 'rzROdBDj1RE',
        'created_at': '2019-02-04T08:08:15-05:00',
        'updated_at': '2019-11-28T00:01:42-05:00',
        'promoted_at': null,
        'width': 4256,
        'height': 2832,
        'color': '#F5D0A6',
        'description': null,
        'alt_description': 'silhouette of a tree',
        'urls': {
          'raw': 'https://images.unsplash.com/photo-1549285682-f7e066f5211d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMjEyNn0',
          'full': 'https://images.unsplash.com/photo-1549285682-f7e066f5211d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMjEyNn0',
          'regular': 'https://images.unsplash.com/photo-1549285682-f7e066f5211d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMjEyNn0',
          'small': 'https://images.unsplash.com/photo-1549285682-f7e066f5211d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMjEyNn0',
          'thumb': 'https://images.unsplash.com/photo-1549285682-f7e066f5211d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMjEyNn0'
        },
        'links': {
          'self': 'https://api.unsplash.com/photos/rzROdBDj1RE',
          'html': 'https://unsplash.com/photos/rzROdBDj1RE',
          'download': 'https://unsplash.com/photos/rzROdBDj1RE/download',
          'download_location': 'https://api.unsplash.com/photos/rzROdBDj1RE/download'
        },
        'categories': [],
        'likes': 33,
        'liked_by_user': false,
        'current_user_collections': [],
        'user': {
          'id': 'jROFIZZ8ptI',
          'updated_at': '2020-01-07T21:50:26-05:00',
          'username': 'aron_jager',
          'name': 'Aron Jäger',
          'first_name': 'Aron',
          'last_name': 'Jäger',
          'twitter_username': null,
          'portfolio_url': null,
          'bio': null,
          'location': null,
          'links': {
            'self': 'https://api.unsplash.com/users/aron_jager',
            'html': 'https://unsplash.com/@aron_jager',
            'photos': 'https://api.unsplash.com/users/aron_jager/photos',
            'likes': 'https://api.unsplash.com/users/aron_jager/likes',
            'portfolio': 'https://api.unsplash.com/users/aron_jager/portfolio',
            'following': 'https://api.unsplash.com/users/aron_jager/following',
            'followers': 'https://api.unsplash.com/users/aron_jager/followers'
          },
          'profile_image': {
            'small': 'https://images.unsplash.com/profile-fb-1549284762-abb92e0ff957.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
            'medium': 'https://images.unsplash.com/profile-fb-1549284762-abb92e0ff957.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
            'large': 'https://images.unsplash.com/profile-fb-1549284762-abb92e0ff957.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128'
          },
          'instagram_username': 'aron_jager',
          'total_collections': 0,
          'total_likes': 0,
          'total_photos': 10,
          'accepted_tos': true
        },
        'exif': {
          'make': 'NIKON CORPORATION',
          'model': 'NIKON D3',
          'exposure_time': '30',
          'aperture': '4.0',
          'focal_length': '17.0',
          'iso': 800
        },
        'location': {
          'title': null,
          'name': null,
          'city': null,
          'country': null,
          'position': {
            'latitude': null,
            'longitude': null
          }
        },
        'views': 12662,
        'downloads': 156
      }
    }
    this.tick = this.tick.bind(this)
    this.logout = this.logout.bind(this)
    this.unsplashBg = this.unsplashBg.bind(this)
  }

  unsplashBg() {
    console.log(`unsplash ${process.env.UNSPLASH}`)
    // axios
    //   .get(
    //     `https://api.unsplash.com/photos/random/?client_id=${process.env.UNSPLASH}&orientation=landscape`
    //   )
    //   .then(res => this.setState({ bg: res.data }))
  }
  componentDidMount() {
    if (Auth.isAuthenticated()) {
      axios
        .get('/api/story')
        .then(res => this.setState({ stories: res.data }))
        .catch(err => console.log(err))
    }
    this.unsplashBg()
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
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
      <div
        id='admin-wrap'
        style={{ backgroundImage: `url(${this.state.bg.urls.regular})` }}
      >
        <AdminNav />

        <div className='admin-dash'>
          <div className='admin-top'>
            <div className='left'>
              <h1 id='admin-title'>Content Manager</h1>
              <h2 id='admin-greeting'>{`Welcome back, ${Auth.getName()}`}</h2>
            </div>
          </div>

          <div className='table animated'>
            <h2>Manage Clients</h2>
            <Link to='/story' id='admin-new-client'>
              Create new client
            </Link>
            <table>
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

          <div id='clock'>
            {this.state.date.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>

        </div>

        <footer id='admin-footer'>
          {this.state.bg.alt_description} by {this.state.bg.user.name}
        </footer>
      </div>
    )
  }
}
