import React from 'react'

const ContactForm = ({ handleSubmit, handleChange, form }) => {
  return (

    <div className='contact-form'>
      <form onSubmit={handleSubmit} className='s16'>

        <div className='form-area'>
          <label name="name" type='text'>Name</label>
          <div className='row'>
            <input
              className='name-field'
              placeholder='First Name'
              type='text'
              name='firstname'
              value={form.firstname}
              onChange={handleChange}
            >
            </input>

            <label name="name" type='text'></label>
            <input
              className='name-field'
              placeholder='Last Name'
              type='text'
              name='lastname'
              value={form.lastname}
              onChange={handleChange}
            >
            </input>
          </div>
        </div>

        <div className='form-area'>
          <label name="email" type='text'>Email Address</label>
          <input
            className='form-area'
            placeholder='email@address.com'
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
          >
          </input>
        </div>

        <div className='form-area'>
          <label name="number" type='text'>Mobile Number</label>
          <input
            className='form-area'
            placeholder=''
            type='number'
            name='number'
            value={form.number}
            onChange={handleChange}
            max='99999999999'
          >
          </input>
        </div>

        <div className='form-area'>
          <label name="email" type='text'>Subject</label>
          <input
            className='form-area'
            placeholder=''
            type='text'
            name='subject'
            value={form.subject}
            onChange={handleChange}
          >
          </input>
        </div>

        <div className='form-area'>
          <label name="message" type='text'>Message</label>
          <textarea
            className='form-area'
            placeholder='Your message'
            type='textarea'
            name='message'
            value={form.message}
            onChange={handleChange}
          >
          </textarea>
        </div>

        <div className='form-area'>
          <button type='submit' className=''>Submit</button>
        </div>
      </form>

    </div>
  )

}

export default ContactForm