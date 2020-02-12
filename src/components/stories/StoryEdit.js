import React from 'react'
import StoryForm from './StoryForm'
import axios from 'axios'
import Auth from '../../lib/auth'

export default class StoryEdit extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {

      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const storyId = this.props.match.params.id
    axios.get(`/api/story/${storyId}`) //axios get is string
      .then(res => {
        this.setState({ data: res.data })
        console.log('axios mount',res.data)
      })
      .catch(err => console.log(err))
  }

  handleChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const data = { 
      ...this.state.data,
      [e.target.name]: value
    }
    this.setState({ data })
    console.log('update',data)
  }

  handleSubmit(e) {
    e.preventDefault()
    const storyId = this.state.data._id
    console.log(`axios: /api/story/${storyId}`, this.state.data)
    axios.put(`/api/story/${storyId}`, this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => console.log('axios put',res))
      .then(this.props.history.push('/dashboard'))
      .then(window.location.reload())
      .catch(err => console.log(err))
  }
  back() {
    window.history.back()
  }
  fileUpload(e){
    e.preventDefault()
    window.alert('Sorry, file upload is not available at the moment')
  }

  render() {
    if (!this.state.data) return null
    return (
      <div className='pad20'>

        <h1>Editing {this.state.data.client}&apos;s Story</h1>
        <small> id:{this.props.match.params.id} </small>
        <h5 className='button' onClick={this.back}>CANCEL</h5>

        <div className='two-up'>

          <div className='col-left'>
            <StoryForm
              data={this.state.data}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              fileupload={this.fileUpload}
            />
          </div>

          <div className='col-right'>
            <small>Profile</small>
            <img src={this.state.data.image} className='admin-story-edit'></img>

            <small>Before</small>
            <img src={this.state.data.before} className='admin-story-edit'></img>

            <small>After</small>
            <img src={this.state.data.after} className='admin-story-edit'></img>
          </div>

        </div>

      </div>
    )
  }
}
