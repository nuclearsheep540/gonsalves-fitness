import React from 'react'
import { Link, Switch } from 'react-router-dom'
import StoryEdit from '../stories/StoryEdit'
import StoryCreate from '../stories/StoryCreate'

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

  openEdit(element, storyId) {
    const id = storyId
    storyId && this.setState({ storyId: id })
    document.getElementById(element).classList.remove('hidden')
    document.getElementById(element).classList.remove('fadeOutDown')
    document.getElementById(element).classList.add('fadeInUp')
  }
  closeEdit(element, storyId) {
    // console.log('closing id ',storyId)
    this.props.api()
    document.getElementById(element).classList.remove('fadeInUp')
    document.getElementById(element).classList.add('fadeOutDown')
    setTimeout(()=>{
      document.getElementById(element).classList.add('hidden')
    },500)
    storyId && this.setState({ storyId: null })
  }

  //function
  render() {

    return (
      <>
        <div className='table animated faster clients'>
          <h1>Manage Content</h1>
          <p style={{cursor: 'pointer'}} onClick={() => { 
            this.openEdit('story-create') 
          } }>
            <i className="fas fa-plus fa-1x"></i> Create Content
          </p>
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
                    <a onClick={() => this.openEdit('story-edit', story._id)}>Edit</a>
                    <a
                      name={story.client}
                      onClick={() => this.props.handleDelete(event, story._id)}
                    >
                      Delete
                    </a>
                  </td>
                  <td>{story.created}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* edit page div, hidden until called */}
        <div className='iframecontainer hidden animated faster' id='story-edit'>
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

        {/* create new div, hidden until called */}

        <div className='iframecontainer hidden animated faster' id='story-create'>
          <div className='iframewrap'>
            <div id='editarea'>
              <StoryCreate 
                source={this.state.storyId}
                close={this.closeEdit}
              />
            </div>
          </div>
        </div>


      </>
    )
  }
}
