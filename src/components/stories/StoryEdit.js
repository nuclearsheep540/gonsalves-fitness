import React from 'react'
import StoryForm from './StoryForm'
import Axios from 'Axios'
import Auth from '../../lib/auth'

export default class StoryEdit extends React.Component {
  constructor() {
    super()
    this.state = {
      picture: null,
      data: {

      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleImageUpdate = this.handleImageUpdate.bind(this)
    this.cancelEdit = this.cancelEdit.bind(this)
  }

  componentDidMount() {
    document.getElementById('profile-img').value && this.state.data.image ? this.setStateImage : null
    const storyId = this.props.source
    Axios.get(`/api/story/${storyId}`) //Axios get is string
      .then(res => {
        this.setState({ data: res.data })
        console.log('Axios mount',res.data)
      })
      .catch(err => console.log(err))
  }

  handleImageUpdate(source, url) {
    console.log('handleImageUpdate',event.target)
    console.log('handleimgupdate', url)
    console.log('handleImage target is ',source)
    this.setState({ 
      data: {
        ...this.state.data,
        [source]: url 
      }
    })
  }

  setStateImage(){
    const image = document.getElementById('profile-img').value
    const data = { 
      ...this.state.data, 
      image: image 
    }
    this.setState({
      data,
      picture: false
    })
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
    // console.log(`Axios: /api/story/${storyId}`, this.state.data)
    Axios.put(`/api/story/${storyId}`, this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => res.status === 202 && (
        this.cancelEdit(this.props.storyId)
        // window.location.reload()
      ))
      .catch(err => console.log(err))
  }

  cancelEdit(storyId){
    event.preventDefault()
    this.props.close('story-edit', storyId)
    this.setState({
      picture: null,
      data: {

      }
    })

  }


  render() {
    if (!this.state.data) return null
    console.log('story edit props',this.props)
    return (
      <>
        <div className='edittop'>
          <h1>Editing {this.state.data.client}&apos;s Story</h1>
          <small> id:{this.props.source} </small>
          <h5 className='button' onClick={()=>this.cancelEdit(this.props.source)}>
            CANCEL
          </h5>
        </div>

        <div className='editmain'>
          <div className='two-up'>
            <div className='col-left'>
              <StoryForm
                data={this.state.data}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                handleImage={this.handleImageUpdate}
              />
            </div>

            <div className='col-right'>
              <label>Profile</label>
              <img
                src={this.state.data.image}
                className='admin-story-edit'
              ></img>

              <label>Before</label>
              <img
                src={this.state.data.before}
                className='admin-story-edit'
              ></img>

              <label>After</label>
              <img
                src={this.state.data.after}
                className='admin-story-edit'
              ></img>
            </div>
          </div>
        </div>
      </>
    )
  }
}
