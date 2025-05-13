import React from 'react'

const Download_section = () => {
  return (
   <>
   <div className="download-container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-end">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png"  
            alt="Zomato App Preview"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">Get the Zomato app</h2>
          <p>We will send you a link, open it on your phone to download the app</p>
          
          <div className="d-flex align-items-center mb-3">
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="contactMethod"
                id="emailOption"
                checked
              />
              <label className="form-check-label" htmlFor="emailOption">
                Email
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="contactMethod"
                id="phoneOption"
              />
              <label className="form-check-label" htmlFor="phoneOption">
                Phone
              </label>
            </div>
          </div>
          
          <div className="input-group mb-3 gap-2">
            <input type="text" className="form-control email-box" placeholder="Email" />
            <button className="btn btn-danger">Share App Link</button>
          </div>
          
          <p>Download app from</p>
          <div className="d-flex gap-2">
            <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="Google Play" width="140" />
            <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="App Store" width="140" />
          </div>
        </div>
      </div>
    </div>
   
   </>
  )
}

export default Download_section
