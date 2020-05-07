import React from 'react'
import { Link } from 'react-router-dom'

const ContactForm = ({ handleSubmit, handleChange, form, status, handleprivacy, privacy }) => {
  return (
    <div className='contact-form'>
      <img src='../../assets/logo_bw.png' />
      <h2>Get In Touch</h2>
      <form onSubmit={handleSubmit} className={status}>
        
        <span>
          <input
            className='form-area half'
            placeholder='First Name'
            type='text'
            name='firstname'
            value={form.firstname}
            onChange={handleChange}
          />
          <input
            className='form-area half'
            placeholder='Last Name'
            type='text'
            name='lastname'
            value={form.lastname}
            onChange={handleChange}
          />
        </span>
              
        <input
          className='form-area full'
          placeholder='your-email@example.com'
          type='email'
          name='email'
          value={form.email}
          onChange={handleChange}
        ></input>
        
       
        <input
          className='form-area full'
          placeholder='07912345678'
          type='number'
          name='number'
          value={form.number}
          onChange={handleChange}
          max='9999999999'
        ></input>
                
        <textarea
          className=''
          placeholder='Your message'
          maxLength={500}
          type='textarea'
          name='message'
          value={form.message}
          onChange={handleChange}
        ></textarea>
        
        <div className='policy'>
          <small>By submitting this form you agree to Gonsalves Fitness using and storing your information according to our <Link to='/privacy'>privacy policy.</Link></small>
          <div className='check-area'>
            <input 
              className='check'
              type='checkbox'
              name='privacy'
              value={form.privacy}
              onChange={handleprivacy}
              placeholder='I agree'
            >
            </input> 
            <small>I Agree</small>
          </div>
        </div>
        <div className='form-area form-submit'>
          <button type='submit' className={privacy ? '' : 'disabled'}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
