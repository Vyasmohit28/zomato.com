import React from 'react'

function Searchbtn() {
  return (
   <>
    <div className="container d-flex justify-content-center align-items-center search-container">
      <div className="search-box d-flex align-items-center">
        {/* Location Icon */}
        <span className="location-icon">
          <i className="bi bi-geo-alt-fill"></i>
        </span>

        {/* Location Dropdown */}
        <select className="form-select location-dropdown">
          <option>Surat</option>
          <option>Ahmedabad</option>
          <option>Vadodara</option>
        </select>

        {/* Dropdown Arrow */}
        <span className="dropdown-arrow">
          <i className="bi bi-chevron-down"></i>
        </span>

        {/* Search Input */}
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search for restaurant, cuisine or a dish"
        />

        {/* Search Icon */}
        <span className="search-icon">
          <i className="bi bi-search"></i>
        </span>
      </div>
    </div>
   
   </>
  )
}

export default Searchbtn
