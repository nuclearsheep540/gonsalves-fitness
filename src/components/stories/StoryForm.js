import React from 'react'

const StoryForm = ({ fileupload, handleChange, handleSubmit, data }) => {
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
              <button id='upload' onClick={fileupload}>Upload</button>
              <input
                id='upload'
                className="input-area"
                placeholder="image upload"
                name="image"
                value={data.image}
                onChange={handleChange}>
              </input>
            </div>

            <div className="half-width">
              <label name="exampleMessage">Before</label>
              <button id='upload' onClick={fileupload}>Upload</button>
              <input
                id='upload'
                className="input-area"
                placeholder="image upload"
                name="before"
                value={data.before}
                onChange={handleChange}>
              </input>
            </div>

            <div className="half-width">
              <label name="exampleMessage">After</label>
              <button id='upload' onClick={fileupload}>Upload</button>
              <input
                id='upload'
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
            
            <button type="submit" className=''>Submit</button>

          </div>
        </form>
      </section>
    </div>
  )
}
export default StoryForm