import React from 'react';
import { useParams } from 'react-router-dom';

const ParamsComponent = (props) => {

    const {word, color, bgCol} = useParams();

    return (
        <div>
            <h2 class="my-5">
            {
                isNaN(word)?
                <p style={
                    color?
                    {color: color, backgroundColor: bgCol}
                    :null
                }>
                    The word is: {word}
                </p>
                :
                <p>
                    The number is: {word}
                </p>
            }
            </h2>
        </div>
    )
}

export default ParamsComponent;