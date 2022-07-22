import React, { useState } from 'react'

const Form = (props) => {
   const [boxColor, setBoxColor] = useState("");
   const [boxSize, setBoxSize] = useState("");

   const createBox = (e) => {
      e.preventDefault();
      props.onNewBox( { size: boxSize, color: boxColor} );
      console.log(boxColor, boxSize);
      setBoxColor("");
      setBoxSize("");
   }

   return (
      <div className="container">
         <div className="col-4 mx-auto my-4">
            <form onSubmit={ createBox }>
               <div className="input-group mb-3">
                  <span className="input-group-text">Color:</span>
                  <input type="text" name="boxColor" id="boxColor" className="form-control" onChange={ (e) => setBoxColor(e.target.value) } value={ boxColor } />
               </div>
               <div className="input-group mb-3">
                  <span className="input-group-text">Size:</span>
                  <input type="number" name="boxSize" id="boxSize" min="100" max="1000" className="form-control" onChange={ (e) => setBoxSize(e.target.value) } value={ boxSize } />
               </div>
               <div>
                  <input type="submit" value="Add" className="col-3 btn btn-primary" />
               </div>
            </form>
         </div>
      </div>
   )
}

export default Form