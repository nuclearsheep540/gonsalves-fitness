import React from 'react'

export default class User404 extends React.Component{
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
          <i className="fas fa-ghost fa-5x"></i>
          <h2>Oops!</h2>
          <p>We&apos;re unable to find that page!</p>
        </div>
      </div>
    )
  }
}