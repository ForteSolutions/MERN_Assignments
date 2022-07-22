import React, { useState } from 'react'

const Boxes = (props) => {
   return (
      <div className="d-flex justify-content-start align-items-center">
      { props.colorBoxes.map( (box, i) => (
         <div style={{width: box.size + 'px', height: box.size + 'px', backgroundColor: box.color, margin: 20 + 'px'}} key={i}></div>)
      )}
      </div>
   )
}

export default Boxes