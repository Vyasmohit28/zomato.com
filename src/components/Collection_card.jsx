import React from 'react'

const Collection_card = (props) => {
  return (
   <>
     <div className="collection-box">
        <img src={props.climg} alt="" />
        <div className="clpara">{props.clpara}</div>
        <div className="clplace">{props.places} > </div>
     </div>
   </>
  )
}

export default Collection_card
