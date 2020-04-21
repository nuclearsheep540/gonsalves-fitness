import React from 'react'
import { Link } from 'react-router-dom'

export default class MsgIndex extends React.Component {
  constructor() {
    super()
    this.state = {}
    //binds
  }
  componentDidMount() {
    console.log('msg props', this.props)
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
              <tr key={i + 1}>
                <td>{i + 1}</td>
                <td id='from'>{msg.from}</td>

                <td id='msg'>
                  <Link to={`/contact/${msg._id}`}>{msg.textBody}</Link>
                </td>

                <td>{msg.createdAt.toLocaleString('en-us')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
