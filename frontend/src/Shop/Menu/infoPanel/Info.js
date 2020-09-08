import React from 'react'
import './Info.scss'
import CloseBtn from '../close/Close.js'
import Login from '../form/Login.js'
import Register from '../form/Register.js'
const {Close} = require("../../globalFunctions/Close/Close.js");

function Panel()
{

    return(
        <div>
            <nav className="headMob">
                <div className="user"></div>
                <div className="forms">
                    <div className="login">
                        <a href="#" onClick={() => Close("loginClose", "loginShow")}>Войти</a>
                    </div>
                    <div className="register">
                        <a href="#" onClick={() => Close("registerClose", "registerShow")}>Зарегистрироваться</a>
                    </div>
                </div>
                <CloseBtn close="showHead" open="headMob"/>
            </nav>
            <Login />
            <Register />
        </div>

    )
}

export default Panel;