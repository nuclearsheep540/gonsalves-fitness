import React from 'react'

const Footer = () => {
  console.log(
    window.location
  )

  if (!window.location.href.includes('admin')) {
    return (
      <footer>
        <p>things</p>
        <p>things</p>
        <p>and morethings</p>
      </footer>
    )
  } else {
    return (
      ''
    )
  }
}
export default Footer
