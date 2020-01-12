import React from 'react'
import StoryForm from './StoryForm'
import axios from 'axios'
import Auth from '../../lib/auth'

const time = new Date

export default class StoryCreate extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        client: '',
        image: '',
        before: '',
        after: '',
        description: '',
        review: '',
        created: time.toDateString()
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
  }

  componentDidMount() {

  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('axios:', this.state.data)
    axios.post('/api/story', this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => console.log(res))
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

        <h1>{this.state.data.client}&apos;s Story</h1>
        <small> id:{this.props.match.params.id || 'created upon submit'} </small>
        <h5 className='button' onClick={this.back}>Cancel</h5>

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
