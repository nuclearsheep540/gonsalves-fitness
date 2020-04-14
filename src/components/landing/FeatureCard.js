import React from 'react'
import Axios from 'axios'

export default class FeatureCard extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      carIndex: 0
    }
    this.autoCarousel = this.autoCarousel.bind(this)
  }


  componentDidMount() {
    Axios.get('/api/story').then(res =>
      this.setState({ data: res.data.filter(elem => elem.featured === true) })
    )
    setInterval(() => {
      setTimeout(()=>{
        //car updates
        this.autoCarousel()
        //car in
        this.carIn()
      },500)
      //wait
      //car out
      this.carOut()
      // repeat --
    },5000)
  }

  carIn(){
    document.getElementsByClassName('feature-wrap')[0].classList.remove('fadeOut')
    document.getElementsByClassName('feature-wrap')[0].classList.add('fadeIn')
  }
  carOut(){
    document.getElementsByClassName('feature-wrap')[0].classList.remove('fadeIn')
    document.getElementsByClassName('feature-wrap')[0].classList.add('fadeOut')
  }

  autoCarousel() {
    console.log('card select check', card)
    const card = document.getElementsByClassName('feature-wrap')
    if (this.state.carIndex !== this.state.data.length - 1) {
      console.log('going up')
      const carIndex = this.state.carIndex + 1
      this.setState({ carIndex })
    } else {
      console.log('resetting')
      this.setState({ carIndex: 0 })
    }
  }

  //func
  render() {
    if (!this.state.data) return null
    console.log('front-end', this.state.data)
    console.log('max =', this.state.data.length)
    console.log('index =', this.state.carIndex)
    return (
      <div>
        {/* {this.state.data.map((story, i) => (
          <div className='feature-wrap' key={i}>
            <p className='feature-review'>{story.review}</p>
            <p className='feature-client'>- {story.client}</p>
          </div>
        ))} */}

        <div className='feature-wrap animated fast'>
          <p className='feature-review'>
            {this.state.data.map(elem => elem.review)[this.state.carIndex]}
          </p>
          <p className='feature-client'>
            - {this.state.data.map(elem => elem.client)[this.state.carIndex]}
          </p>
        </div>
      </div>
    )
  }
}
