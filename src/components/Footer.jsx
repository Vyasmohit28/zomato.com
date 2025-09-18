import React from 'react'

const Footer = () => {
  return (
    <>
    
    <footer className="footer bg-light py-5">
      <div className="footer-container">
        <div className="row">
          {/* Logo Section */}
          <div className="col-md-3 text-md-start text-center mb-4 mb-md-0">
            <h2 className="logo">zomato</h2>
          </div>

          <div className="col-md-2">
            <h6 className="fw-bold">ABOUT ZOMATO</h6>
            <ul className="list-unstyled">
              <li><a href="#">Who We Are</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Work With Us</a></li>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Report Fraud</a></li>
              <li><a href="#">Press Kit</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          {/* Zomaverse */}
          <div className="col-md-2">
            <h6 className="fw-bold">ZOMAVERSE</h6>
            <ul className="list-unstyled">
              <li><a href="#">Zomato</a></li>
              <li><a href="#">Blinkit</a></li>
              <li><a href="#">District</a></li>
              <li><a href="#">Feeding India</a></li>
              <li><a href="#">Hyperpure</a></li>
              <li><a href="#">Zomato Live</a></li>
              <li><a href="#">Zomaland</a></li>
              <li><a href="#">Weather Union</a></li>
            </ul>
          </div>

          {/* For Restaurants 
          <div className="col-md-2">
            <h6 className="fw-bold">FOR RESTAURANTS</h6>
            <ul className="list-unstyled">
              <li><a href="#">Partner With Us</a></li>
              <li><a href="#">Apps For You</a></li>
            </ul>
          </div>

          {/* Learn More */}
          <div className="col-md-2">
            <h6 className="fw-bold">LEARN MORE</h6>
            <ul className="list-unstyled">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>

         

        {/* Country & Language Dropdowns */}
        <div className="d-flex language-box gap-4 mt-4 text-md-end text-center">
          <div className="">
            <select className="form-select d-inline w-auto">
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>Australia</option>
            </select>
          </div>
          <div className="">
            <select className="form-select d-inline w-auto">
              <option>English</option>
              <option>Hindi</option>
              <option>Spanish</option>
            </select>
          </div>
        </div>

         {/* Social Links & App Stores */}
         <div className="col-md-3 text-md-end text-center  language-box">
            <div className="app-store mt-3">
              <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="App Store" className="store-img" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="store-img" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p className="text-muted">
            By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy, and Content Policies. <br />
            All trademarks are properties of their respective owners. 2008-2025 &copy; Zomato™ Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>


    </>
  )
}

export default Footer
