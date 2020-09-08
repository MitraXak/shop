import React from 'react'
import '../Form.scss'
import Logo from '../../logo/Logo.js'
function Nav(props)
{
    return(
        <nav className="in">
            <div className="inContainer">
                <div className="label">
                    <Logo className={props.classLogo} logo={props.label}/>
                </div>
            </div>
        </nav>
    )
}

export default Nav;