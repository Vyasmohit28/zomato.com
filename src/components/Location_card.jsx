import React from 'react'

const Location_card = (props) => {
  return (
   <>
   
   <div className="location-card d-flex justify-content-between align-items-center">
      <div>
        <h5 className="location-name">{props.loname}</h5>
        <p className="location-places">{props.loplace} places</p>
      </div>
      <span className="arrow-icon">&#8250;</span>
    </div>
   
   </>
  )
}

export default Location_card
