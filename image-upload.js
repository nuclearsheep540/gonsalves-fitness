//27/10 - jj comments, the method used here is taken from https://codeburst.io/image-uploading-using-react-and-node-to-get-the-images-up-c46ec11a7129
//everything else that is needed to run this is in the firebase-config.js
//do not forget to yarn when this is run for the first time.
// to check this go to URL 
// http://localhost:8000/uploadbase
import React, { Component } from 'react'
import { storage } from './firebase-config'

class ImageUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageUpLoading: false,
      firebaseImageURL: ''
    }
    this.uploadImage = this.uploadImage.bind(this)
  }
  uploadImage(source, e) {
    console.log('firebase uploadImage',e.target)
    console.log('firebase source button = ',this.props)
    this.setState({ imageUpLoading: true }) //this boolean controls the messages in teh rended after the onChange
    const client = this.props.client || 'no_client_name'
    const currentImageName = Date.now() + '_' + client.replace(/\s/g, '-').toLowerCase() + '_' + source
    const uploadImage = storage.ref(`images/${currentImageName}`).put(e.target.files[0]) 
    uploadImage.on('state_changed',
      () => { },
      (error) => {
        alert(error)
      },
      //this is the part that actually adds the image to firebase and returns the URL
      () => {
        storage.ref('images').child(currentImageName).getDownloadURL().then(url => {
          this.setState({
            firebaseImageURL: url, 
            imageUpLoading: false
          })
          // document.getElementById('profile-img').value = this.state.firebaseImageURL
          this.props.handleImage(source, this.state.firebaseImageURL) //updating form front end, function called via prop

        })
      })
  }
  render() {
    return (
      <div className='input-area'>
        <label>Profile</label>
        <input name='image' type="file" className="process__upload-btn" onChange={(e) => this.uploadImage('image', e)} />

        <label>Before</label>
        <input name='before' type="file" className="process__upload-btn" onChange={(e) => this.uploadImage('before', e)} />

        <label>After</label>
        <input name='after' type="file" className="process__upload-btn" onChange={(e) => this.uploadImage('after', e)} />
      </div>
    )
  }
}
export default ImageUpload