import React from 'react'

const ContactForm = () => {
  return (
    <div className="container">
  <h1 className="display-4 text-center">Contact Us</h1>
  <form className="row g-3">
    <div className="col-12">
      <div className="form-inline">
        <label htmlFor="name" className="form-label">Name:</label>
        <input type="text" id="name" name="name" className="form-control" required/>
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" id="email" name="email" className="form-control" required/>
        <label htmlFor="contact" className="form-label">Contact Number:</label>
        <input type="number" id="contact" name="contact" className="form-control" required/>
      </div>
    </div>
    <div className="col-12 text-center">
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  </form>
</div>
  )
}

export default ContactForm
