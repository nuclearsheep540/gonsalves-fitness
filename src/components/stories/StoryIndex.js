import React from 'react'
import Axios from 'axios'

export default class StoryIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      data: []
    }
    //binds
  }
  //function
  componentDidMount() {
    Axios.get('/api/published')
      .then(res => this.setState({ data: res.data }))
  }


  render() {
    if (!this.state.data) return null

    console.log('success stories loading... ',this.state.data)

    return (
      <div className=''>
        <section className='hero'>
          <div className='lefty'>
            <h2 className='hero'>
              DON'T JUST <br></br>
              TAKE IT <br></br>
              FROM ME <br></br>
              <br></br>
              SEE <br></br>
              MY <br></br>
              RESULTS <br></br>
            </h2>
          </div>
        </section>

        {this.state.data.map((story, i) => (
          <div key={i}>
            <div className='story-card' style={{
              backgroundImage: `url(${story.image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              position: 'relative',
              zIndex: '0'
            }}>
              <div className='two-up on-top'>
                <div className='col-left on-top pad20'>
                  <h2 className=''>{story.client}</h2>
                </div>

                <div className='col-right on-top pad20'>
                  <p className=''>{story.review}</p>
                </div>

                <div className='gradient'></div>
              </div>
            </div>
          </div>
        )
        )}

      </div>
    )
  }

}