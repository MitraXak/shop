import React from 'react'
import './Btn.scss'
const {Close} = require("../../globalFunctions/Close/Close.js");
function Btn()
{
    return(
        <div className="button" onClick = {() => Close("headMob", "showHead")}>
            <div className="btn">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default Btn;