import React from 'react'
import './Button.scss'

function Button(props)
{

    return(
        <div>
            <input type="button" className={props.className} value={props.text} />
        </div>
    )
}

export default Button;