import React from 'react'
import './Form.scss'
import Nav from './nav/Nav.js';
import Input from './input/Input.js';
import CloseBtn from '../close/Close.js';
import Button from './Button/Button.js';
function Register()
{
    return(
        <div className="registerClose">
            <Nav classLogo="logoForm" label="Регистрация"/>
            <CloseBtn close="registerShow" open="registerClose"/>
            <form>
                <Input type="text" name="register" id="inputLogin" label="Логин"/>
                <Input type="password" name="password" id="inputPassword" label="Пароль"/>
                <Input type="password" name="password" id="inputPasswordSecond" label="Пароль"/>
                <Input type="email" name="email" id="email" label="Email"/>
                <Input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone" id="phone" label="Телефон"/>
                <Button className="buttonForm" text="Регистрация"/>
            </form>
        </div>
    )
}

export default Register;