import React from 'react'
import Auth from '../../lib/auth'

const TopDash = ({ date, msgs, stories }) => {
  return (
    <div className='admin-dash'>
      <div className='admin-top'>
        <div>
          <h1 id='admin-title'>Content Manager</h1>
          <h3 id='admin-greeting'>
            {`Welcome back, ${Auth.getName()}.`}
            <br />
            {`You have ${msgs} messages in your Inbox and ${stories} Clients.
            `}</h3>
          
          <br />
        </div>
        <div id='clock'>
          {date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>
      </div>
    </div>
  )
}

export default TopDash
