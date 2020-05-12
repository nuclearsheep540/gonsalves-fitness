import React from 'react'

export default class User401 extends React.Component{
  constructor(){
    super()
    this.state = {

    }
    //binds
  }
  //fnct

  render(){
    const style = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '10%'
    }
    return (
      <div style={{      
        backgroundColor: 'lightgrey',
        width: '100vw',
        height: '100vh'
      }}>
        <div style={style}>
          <i className='fas fa-door-closed fa-8x'></i>
          <h2>Oops!</h2>
          <p>Looks like you need to be logged in to see this page.</p>
        </div>
      </div>
    )
  }
}