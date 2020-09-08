import React from 'react'
import "./Input.scss"
function Input(props)
{
    return(
        <div className="input">
            <label for={props.id}>{props.label}</label>
            <input pattern={props.pattern} id={props.id} type={props.type} name={props.name} placeholder={props.placeholder}/>
        </div>
    )
}

export default Input;