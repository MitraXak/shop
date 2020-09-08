import React from 'react'
import './Logo.scss'
function Logo(props)
{
    return(
        <nav className={props.className}>
            <div className="containerLogo">
                <a href="/">{props.logo}</a>
            </div>
        </nav>
    )
}

export default Logo;