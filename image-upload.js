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
  uploadImage(e) {
    this.setState({ imageUpLoading: true }) //this boolean controls the messages in teh rended after the onChange
    const currentImageName = 'firebase-image-' + Date.now()
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
          document.getElementById('profile-img').value = this.state.firebaseImageURL
          this.props.handleImage(this.state.firebaseImageURL) 

        })
      })
  }
  render() {
    return (
      <>
      {console.log('image', this.props)}
        
        <input name='image' type="file" className="process__upload-btn" onChange={(e) => this.uploadImage(e)} />
        {this.state.imageUpLoading &&
          <p>Your image is uploading...this might take a second</p>
        }
        { this.state.firebaseImageURL &&
          <p>Your image uploaded</p>
        }
      </>
    )
  }
}
export default ImageUpload