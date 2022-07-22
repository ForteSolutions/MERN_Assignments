import React, {useState} from 'react';

const ColorPicker = (props) => {
    const [color, setColor] = useState("");
    
    const {colorList, setColorList} = props;

    const submitHandler = (e) => {
        e.preventDefault();
        setColorList([...colorList, color]);
        
    }
    return(
        <div>
            <form onSubmit={ submitHandler }>
                <div>
                    <label>Color</label>
                    <input type="color" value={color} onChange={ (e) => setColor(e.target.value)} />
                </div>
                <input type="submit" value="Color Picked!" />
            </form>
        </div>
    )
}

export default ColorPicker;