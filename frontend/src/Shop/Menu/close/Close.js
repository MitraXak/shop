import React from 'react';
import './Close.scss'
const {Close} = require("../../globalFunctions/Close/Close.js");
function CloseBtn(props)
{
    
    return(
        <div className="close" onClick={() => Close(props.close, props.open)}>
                <div className="containerClose">
                <div className="lineleft"></div>
                <div className="lineright"></div>
            </div>
        </div>
    )
}

export default CloseBtn;