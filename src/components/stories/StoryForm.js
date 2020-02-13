import React from 'react'
import ImageUpload from '../../../image-upload'

const StoryForm = ({ handleImage, handleChange, handleSubmit, data }) => {
  return (
    <div className=''>
      <section className=''>
        <form onSubmit={handleSubmit}>
          <div className=''>

            
            <div className="half-width">
              <label name="exampleRecipientInput" type='text'>Client</label>
              <input
                className="input-area"
                placeholder="Name"
                name='client'
                value={data.client}
                onChange={handleChange}
              >
              </input>
            </div>

           

            <div className="half-width">
              <label name="exampleMessage">Profile</label>
              {console.log(data)}
             
              <ImageUpload 
                handleImage={handleImage}
                data={data} />

              <input
                id='profile-img'
                className="input-area"
                placeholder="image upload"
                name="image"
                value={data.image}
                onChange={handleChange}>
              </input>
            </div>

            <div className="half-width">
              <label name="exampleMessage">Before</label>
              <button id='before-btn'>Upload</button>
              <input
                id='before-img'
                className="input-area"
                placeholder="image upload"
                name="before"
                value={data.before}
                onChange={handleChange}>
              </input>
            </div>

            <div className="half-width">
              <label name="exampleMessage">After</label>
              <button id='after-btn'>Upload</button>
              <input
                id='after-img'
                className="input-area"
                placeholder="image upload"
                name="after"
                value={data.after}
                onChange={handleChange}>
              </input>
            </div>


            <div className="half-width">
              <label name="exampleMessage">Description</label>
              <textarea
                className="input-area"
                placeholder="Description"
                name="description"
                value={data.description}
                onChange={handleChange}>
              </textarea>
            </div>
            
            <div className="half-width">
              <label name="exampleMessage">Testimonial</label>
              <textarea
                className="input-area"
                placeholder="Testimonial"
                name="review"
                value={data.review}
                onChange={handleChange}>
              </textarea>
            </div>

            <div className="half-width">
              <label name="checkbox">Featured</label>
              <input
                value={data.featured}
                type='checkbox'
                className="input-area"
                name="featured"
                checked={data.featured}
                onChange={handleChange}>
              </input>
            </div>
            
            <button type="submit" className=''>Submit</button>

          </div>
        </form>
      </section>
    </div>
  )
}
export default StoryForm