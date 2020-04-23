import React from 'react'
import { Link, Switch } from 'react-router-dom'
import StoryEdit from '../stories/StoryEdit'

export default class ClientIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      storyId: null,
    }
    this.openEdit = this.openEdit.bind(this)
    this.closeEdit = this.closeEdit.bind(this)
  }
  componentDidMount() {
    console.log(this.props)
  }

  openEdit(storyId) {
    const id = storyId
    this.setState({ storyId: id })
    document.getElementsByClassName('iframecontainer')[0].classList.remove('hidden')
    document.getElementsByClassName('iframecontainer')[0].classList.remove('fadeOutDown')
    document.getElementsByClassName('iframecontainer')[0].classList.add('fadeInUp')
  }
  closeEdit(storyId) {
    this.props.api()
    console.log('closing id ',storyId)
    document.getElementsByClassName('iframecontainer')[0].classList.remove('fadeInUp')
    document.getElementsByClassName('iframecontainer')[0].classList.add('fadeOutDown')
    setTimeout(()=>{
      document.getElementsByClassName('iframecontainer')[0].classList.add('hidden')
    },500)
    this.setState({ storyId: null })
  }

  //function
  render() {

    return (
      <>
        <div className='table animated faster clients'>
          <h1>Manage Content</h1>
          <Link to='/story' id='admin-new-client'>
            Create new client
          </Link>
          <table>
            <thead>
              <tr>
                <th id='num'>#</th>
                <th>Profile</th>
                <th>Published</th>
                <th>Featured</th>
                <th>Client</th>
                <th>Control</th>
                <th>Created At</th>
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
                      className='dash-check'
                      type='checkbox'
                      checked={story.published === true ? true : false}
                      disabled
                    />{' '}
                  </td>
                  <td>
                    <input
                      className='dash-check'
                      type='checkbox'
                      checked={story.featured === true ? true : false}
                      disabled
                    />{' '}
                  </td>
                  <td>{story.client}</td>
                  <td>
                    {/* <Link to={`/story/${story._id}`}>Edit</Link> */}
                    <a onClick={() => this.openEdit(story._id)}>Edit</a>
                    <a
                      name={story.client}
                      onClick={() => this.props.handleDelete(event, story._id)}
                    >
                      Delete
                    </a>
                  </td>
                  <td>{story.created}</td>
                  <td>{story._id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='iframecontainer hidden animated faster'>
          <div className='iframewrap'>
            <div id='editarea'>
              {this.state.storyId !== null &&
              <StoryEdit 
                source={this.state.storyId}
                close={this.closeEdit}
              />}
            </div>
          </div>
        </div>
      </>
    )
  }
}
