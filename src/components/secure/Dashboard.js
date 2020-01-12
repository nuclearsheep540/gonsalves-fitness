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

  handleDelete(e, id){
    e.preventDefault()
    window.confirm(`Are you sure you wish to delete ${e.target.name}'s story?`) ?
      Axios.delete(`/api/story/${id}`, { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
        .then(window.location.reload())
      : console.log(false)
  }

  render() {
    if (!Auth.isAuthenticated()) return (<h1>You must be logged in to view this page</h1>)
    if (!this.state.stories) return null

    return (

      <div className='flex-container pad20'>
        <h1>Content Manager</h1>
        <h2>{`Welcome back, ${Auth.getName()}`}</h2>

        <button>
          {Auth.isAuthenticated() && <Link to='/' onClick={this.logout}><div className='nav-item'>Logout</div></Link>}
        </button>


        <div>
          <h3>Success Stories</h3>
          <Link to='/story'>Create New</Link>

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
                  <td><Link to={`/story/${story._id}`}>Edit</Link><a name={story.client} onClick={()=> this.handleDelete(event, story._id)}>Delete</a></td>
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