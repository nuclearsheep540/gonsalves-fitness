import React from 'react'
import { Link } from 'react-router-dom'

export default class ClientIndex extends React.Component {
  constructor() {
    super()
    this.state = {}
    //binds
  }
  componentDidMount(){
    console.log(this.props)
  }
  //function
  render() {
    return (
      <div className='table animated fast clients'>
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
            {this.props.data.map((story, i) => (
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
                    onClick={() => this.props.handleDelete(event, story._id)}
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
    )
  }
}
