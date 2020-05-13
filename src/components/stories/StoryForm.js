import React from 'react'
import ImageUpload from '../../../image-upload'

// need to add publish option in form, publish for success page, featured for landing page
const StoryForm = ({ handleImage, handleChange, handleSubmit, data }) => {
  return (
    <section className='middle-center'>
      <form onSubmit={handleSubmit}>
        <div className='half-width'>
          <label name='exampleRecipientInput' type='text'>
            Client
          </label>
          <input
            className='input-area'
            placeholder='Name'
            name='client'
            value={data.client}
            onChange={handleChange}
          ></input>
        </div>

        <br />
        <ImageUpload handleImage={handleImage} data={data} client={data.client} />

        <input
          id='profile-img'
          className='stealth'
          placeholder='image upload'
          name='image'
          value={data.image}
          onChange={handleChange}
        />
        
        <input
          id='before-img'
          className='stealth'
          placeholder='image upload'
          name='before'
          value={data.before}
          onChange={handleChange}
        />

        <input
          id='after-img'
          className='stealth'
          placeholder='image upload'
          name='after'
          value={data.after}
          onChange={handleChange}
        />

        <label name='exampleMessage'>Description</label>
        <textarea
          className='input-area'
          placeholder='Max 1000 Characters'
          name='description'
          value={data.description}
          onChange={handleChange}
          max={1000}
        />

        <label name='exampleMessage'>Testimonial</label>
        <textarea
          className='input-area'
          placeholder='Max 120 Characters'
          name='review'
          value={data.review}
          onChange={handleChange}
          max={120}
        />

        <div className='input-area'>
          <label name='checkbox'>Publish</label>
          <input
            value={data.featured}
            type='checkbox'
            className='input-area'
            name='published'
            checked={data.published}
            onChange={handleChange}
          />

          <label name='checkbox'>Featured</label>
          <input
            value={data.featured}
            type='checkbox'
            className='input-area'
            name='featured'
            checked={data.featured}
            onChange={handleChange}
          />
          <button type='submit' className=''>
          Submit
          </button>

        </div>
         



      </form>
    </section>
  )
}
export default StoryForm
