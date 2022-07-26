import React, { useContext }  from 'react'

import userContext from '../contexts/UserContext';

const Form = () => {

    const {name,setName} = useContext(userContext);

    const inputHandler = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <form>
                <div className="form-group row">
                    <label className="col-2 col-form-label-lg"> Your Name: </label>
                    <div className="col-1">
                        <input type="text" className="form-control-lg" onChange={inputHandler} value={name}/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form