import React from 'react'
import Axios from 'axios'

export default class MsgIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      showMsg: {}
    }
    //binds
  }
  componentDidMount() {
    console.log('msg props', this.props)
  }
  msgClick(){
    console.log('msg clicked')
  }
  //function, for every tr inside tbody#msg, add click event, when clicked...
  // nav to msg/_id of tr.id

  showMsg(id){
    console.log('msg event id =', id)
    Axios.get(`/api/contact/${id}`)
      .then(res => this.setState({ showMsg: res.data }))
      .then(console.log(this.state.showMsg))
  }

  //function
  render() {
    return (
      <div className='table animated fast msg'>
        <h2>Message Centre</h2>
        <table>
          <thead>
            <tr>
              <th id='num'>#</th>
              <th>From</th>
              <th id='msg'>Message</th>
              <th>Recieved At</th>
            </tr>
          </thead>

          <tbody id='msg'>
            {this.props.data.map((msg, i) => (
              <tr key={i + 1} onClick={()=> this.showMsg(msg._id)}>
                <td>{i + 1}</td>
                <td id='from'>{msg.from}</td>
                <td id='msg'>{msg.textBody}</td>
                <td>{msg.createdAt.toLocaleString('en-us')}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {this.state.showMsg && 
        <div className='show-msg'> 
          <h1>Message</h1>
          <div className={this.state.showMsg ? 'msg-body' : 'hidden'} dangerouslySetInnerHTML={{ __html: this.state.showMsg.htmlBody }} />
        </div>
        }
      </div>
    )
  }
}