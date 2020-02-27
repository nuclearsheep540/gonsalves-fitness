import React from 'react'

const ContactForm = ({ handleSubmit, handleChange, form }) => {
  return (
    <section>
      <form onSubmit={handleSubmit} className='contact-form'>
        <div>
          <label name='name' type='text'>
            Name
          </label>
          <span>
            <input
              className='form-area'
              placeholder='First Name'
              type='text'
              name='firstname'
              value={form.firstname}
              onChange={handleChange}
            />
            <input
              className='form-area'
              placeholder='Last Name'
              type='text'
              name='lastname'
              value={form.lastname}
              onChange={handleChange}
            />
          </span>
        </div>

        <div>
          <label name='email' type='text'>
            Email
          </label>
          <input
            className='form-area'
            placeholder=''
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <label name='number' type='text'>
            Mobile
          </label>
          <input
            className='form-area'
            placeholder=''
            type='number'
            name='number'
            value={form.number}
            onChange={handleChange}
            max='99999999999'
          ></input>
        </div>

        <div>
          <label name='message' type='text'>
            Message
          </label>
          <textarea
            className=''
            placeholder='Your message'
            type='textarea'
            name='message'
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className='form-area'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
