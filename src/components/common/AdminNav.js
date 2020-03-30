import React from 'react'

export default class AdminNav extends React.Component {
  constructor(){
    super()
    this.state = {

    }
    //binds
  }
  //funct
  render(){
    return (
      <div className='admin-nav'> 
        <ul>
          <a><li>Item 1</li></a>
          <a><li>Item 2</li></a>
        </ul>
      </div>
    )
  }
}