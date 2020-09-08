import React from 'react'
import './Form.scss'
import Nav from './nav/Nav.js';
import Input from './input/Input.js';
import CloseBtn from '../close/Close.js';
import Button from './Button/Button.js';
function Login()
{
    
    return(
        <div className="loginClose">
            <Nav classLogo="logoForm" label="Войти"/>
            <CloseBtn close="loginShow" open="loginClose"/>
            <form>
                <Input type="text" name="login" id="inputLogin" label="Логин"/>
                <Input type="password" name="password" id="inputPassword" label="Пароль"/>
                <Button className="buttonForm" text="Войти"/>
            </form>
        </div>
    )
}

export default Login;