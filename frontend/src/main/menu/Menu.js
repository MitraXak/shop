import React from 'react'
import './Menu.css'

function Menu()
{
    return (
        <header>
            <nav className="logo">
                <ul>
                    <li>
                        <a href="/">CrewShop</a>
                    </li>
                </ul>
            </nav>
            <nav className="menuMobile">
                <div className="button">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className="searching">
                    <input type="search" name="search"/>
                </div>
            </nav>
        </header>
    )
}

export default Menu;