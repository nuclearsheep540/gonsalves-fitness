import React from 'react'
import VideoCover from 'react-video-cover'

export default class HeroCover extends React.Component {
  constructor() {
    super()
    this.state = {
      mobile: '',
      videoOptions: {},
      transition: false
    }
    this.heroVideo = this.heroVideo.bind(this)
  }
  async componentDidMount() {
    await this.setState({ mobile: window.innerWidth < 950 ? true : false })
    this.heroVideo()

    setTimeout(() => {
      // overlay 40% alphwa on video
      document.querySelector('.overlay').style.backgroundColor =
        'rgba(0, 0, 0, 0.3)'
      this.setState({ transition: true })
    }, 1000)
  }

  heroVideo(){
    const videoOptions = {
      src: '../../assets/rhyse-pt-clean.mov',
      autoPlay: this.state.mobile ? false : true,
      loop: true,
      muted: true
    }
    this.setState({ videoOptions })
  }

  render() {
    return (
      <div className='hero'>
        <div className='video'>
          <div className='overlay'>
            {this.state.transition && (
              <img src='../assets/logo_bw.png' className='animated fadeIn logo' id='hero-logo' />
            )}
          </div>
          <VideoCover onClick={null} id='hero-vid' videoOptions={this.state.videoOptions} />
        </div>
      </div>
    )
  }
}
