import React from 'react'
import Axios from 'axios'
import Auth from '../../lib/auth'

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
      <div className='table animated faster msg'>
        <h1>Message Centre</h1>
        <table>
          <thead>
            <tr>
              <th id='num'>#</th>
              <th>From</th>
              <th id='msg'>Message</th>
              <th>Delete</th>
              <th>Recieved At</th>
            </tr>
          </thead>

          <tbody id='msg'>
            {this.props.data.map((msg, i) => (
              <tr key={i + 1}>
                <td>{i + 1}</td>
                <td id='from' onClick={()=> this.showMsg(msg._id)}>{msg.from}</td>
                <td id='msg' onClick={()=> this.showMsg(msg._id)}>{msg.textBody.substring(0, (window.innerWidth / 100) * 5)}</td>
                <td><a onClick={() => {
                  this.props.handleDelete(msg._id, msg.from)
                }}><i className="fas fa-trash-alt fa-2x"></i></a></td>
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
