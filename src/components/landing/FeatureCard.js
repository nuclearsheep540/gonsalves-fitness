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
    this.autoCarousel()
  }

  autoCarousel() {
    console.log('card select check', card)
    const card = document.getElementsByClassName('feature-wrap')
    setInterval(() => {
      if (this.state.carIndex !== this.state.data.length - 1) {
        console.log('going up')
        const carIndex = this.state.carIndex + 1
        this.setState({ carIndex })
      } else {
        console.log('resetting')
        this.setState({ carIndex: 0 })
      }
    },3000)
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

        <div className='feature-wrap animated'>
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
