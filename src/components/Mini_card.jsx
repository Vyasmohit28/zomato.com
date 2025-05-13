import React from 'react'

const Mini_card = (props) => {
  return (
    <>
    
    <div className="custom-card">
      <img src={props.imglink} className="card-img-top" alt="Food" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.para}</p>
      </div>
    </div>
    
    </>
  )
}

export default Mini_card
