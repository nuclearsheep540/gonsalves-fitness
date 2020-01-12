import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'
import Axios from 'axios'

export default class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
      userLogged: '',
      stories: []
    }
    this.logout = this.logout.bind(this)
  }
  componentDidMount() {
    Auth.isAuthenticated()
    const userLogged = Auth.getName()

    Axios.get('/api/story')
      .then(res => this.setState({ stories: res.data }))
      .catch(err => console.log(err))

    this.setState({ userLogged })
  }

  logout() {
    Auth.logout()
    this.props.history.push('/')
  }

  render() {
    if (!Auth.isAuthenticated()) return (<h1>You must be logged in to view this page</h1>)
    if (this.state.userLogged === '') return null
    if (!this.state.stories) return null
    return (

      <div className='flex-container'>
        <h2>{`Welcome back, ${Auth.getName()}`}</h2>

        <h3>Success Stories</h3>
        <button>Create New</button>
        <div>
          <h4>Active Posts:</h4>

          <table className="table table-striped">
            <thead>
              <tr>
                <th id='num'>#</th>
                <th >Client</th>
                <th>Created At</th>
                <th>id</th>
              </tr>
            </thead>
            <tbody>
              {this.state.stories.map((story, i) => (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td>{story.client}</td>
                  <td>{story.createdAt}</td>
                  <td>{story._id}</td>
                </tr>
              )
              )}
            </tbody>
          </table>

        </div>
        <button>
          {Auth.isAuthenticated() && <Link to='/' onClick={this.logout}><div className='nav-item'>Logout</div></Link>}
        </button>
      </div>
    )
  }
}