import React from 'react'
import './Input.scss'
function Input()
{
    return(
        <div className="search">
            <input type="search" name="searching" placeholder="Найдем все.."/>
        </div>
    )
}

export default Input;