import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'
import Axios from 'axios'

export default class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
      stories: []
    }
    this.logout = this.logout.bind(this)
  }
  componentDidMount() {
    if (Auth.isAuthenticated()){
      Axios.get('/api/story')
        .then(res => this.setState({ stories: res.data }))
        .catch(err => console.log(err))
    }
  }

  logout() {
    Auth.logout()
    this.props.history.push('/')
  }

  render() {
    if (!Auth.isAuthenticated()) return (<h1>You must be logged in to view this page</h1>)
    if (!this.state.stories) return null

    return (

      <div className='flex-container'>
        <h1>Content Manager</h1>
        <h2>{`Welcome back, ${Auth.getName()}`}</h2>

        <button>
          {Auth.isAuthenticated() && <Link to='/' onClick={this.logout}><div className='nav-item'>Logout</div></Link>}
        </button>


        <div id='stories'>
          <h3>Success Stories</h3>
          <button>Create New</button>

          <table className="table">
            <thead>
              <tr>
                <th id='num'>#</th>
                <th>Profile</th>
                <th >Client</th>
                <th>Created At</th>
                <th>Control</th>
                <th>database_id</th>
              </tr>
            </thead>

            <tbody>
              {this.state.stories.map((story, i) => (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td><img src={story.image} className='profile-icon'></img></td>
                  <td>{story.client}</td>
                  <td>{story.created}</td>
                  <td><Link to={`/story/${story._id}`}>View/Edit</Link></td>
                  <td>{story._id}</td>
                </tr>
              )
              )}
            </tbody>
          </table>

        </div>
      </div>
    )
  }
}