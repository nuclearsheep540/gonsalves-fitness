import React from 'react'
import Auth from '../../lib/auth'

const TopDash = ({ date }) => {
  return (
    <div className='admin-dash'>
      <div className='admin-top'>
        <div>
          <h1 id='admin-title'>Content Manager</h1>
          <h2 id='admin-greeting'>{`Welcome back, ${Auth.getName()}`}</h2>
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
