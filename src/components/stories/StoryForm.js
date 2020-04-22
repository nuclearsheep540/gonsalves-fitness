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

        <div className='half-width'>
          {/* <label name='exampleMessage'>Profile</label> */}
          {console.log(data)}

          <input
            id='profile-img'
            className='stealth'
            placeholder='image upload'
            name='image'
            value={data.image}
            onChange={handleChange}
          ></input>
        </div>

        <div className='half-width'>
          {/* <label name='exampleMessage'>Before</label> */}
        
          <input
            id='before-img'
            className='stealth'
            placeholder='image upload'
            name='before'
            value={data.before}
            onChange={handleChange}
          ></input>
        </div>

        <div className='half-width'>
          {/* <label name='exampleMessage'>After</label> */}
         
          <input
            id='after-img'
            className='stealth'
            placeholder='image upload'
            name='after'
            value={data.after}
            onChange={handleChange}
          ></input>
        </div>

        <div className='half-width'>
          <label name='exampleMessage'>Description</label>
          <textarea
            className='input-area'
            placeholder='Description'
            name='description'
            value={data.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className='half-width'>
          <label name='exampleMessage'>Testimonial</label>
          <textarea
            className='input-area'
            placeholder='Testimonial'
            name='review'
            value={data.review}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className='half-width'>
          <label name='checkbox'>Publish</label>
          <input
            value={data.featured}
            type='checkbox'
            className='input-area'
            name='published'
            checked={data.published}
            onChange={handleChange}
          ></input>
          <label name='checkbox'>Featured</label>
          <input
            value={data.featured}
            type='checkbox'
            className='input-area'
            name='featured'
            checked={data.featured}
            onChange={handleChange}
          ></input>


        </div>

        <button type='submit' className=''>
          Submit
        </button>
      </form>
    </section>
  )
}
export default StoryForm
