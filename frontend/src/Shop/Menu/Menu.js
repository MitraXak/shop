import React from 'react'
import './Menu.scss'
import Logo from './logo/Logo.js'
import Btn from './btn/Btn.js'
import Input from './input/Input.js'
import Panel from './infoPanel/Info.js' 
function Menu()
{

    
    return(
        <header className="menu">
            <Logo logo="CrewShop" className="logo"/>
            <nav className="mobileMenu">
                <Btn />
                <Input />
            </nav>

            <Panel />

        </header>
    )
}

export default Menu;