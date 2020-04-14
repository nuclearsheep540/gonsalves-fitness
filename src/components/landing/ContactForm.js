import React from 'react'

const ContactForm = ({ handleSubmit, handleChange, form }) => {
  return (
    <section id='contactform'>

      <img src='../assets/logo_bw.png' className='formlogo'></img>


      <form onSubmit={handleSubmit} className='contact-form'>
        <div>
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
          <input
            className='form-area'
            placeholder='example@email.com'
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <input
            className='form-area'
            placeholder='01234567890'
            type='number'
            name='number'
            value={form.number}
            onChange={handleChange}
            max='99999999999'
          ></input>
        </div>

        <div>
          <textarea
            className=''
            placeholder='Your message'
            type='textarea'
            name='message'
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <input type='checkbox' className='check'>
          </input>
          <small>By submitting this form you agree to us to using and storing the above information to our privacy policy.</small>
        </div>
        <div className='form-area'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
