import React from 'react'
import './Button.css'
import { Button as ReactstrapButton } from 'reactstrap'
// import {MdOutlineMessage} from "react-icons/md"


const Button = ({ isOutline, icon, text, ...rest }) => {
    return (
        <>
            <ReactstrapButton {...rest} className={isOutline ? 'outline-btn' : 'btn-1' }> {icon}{text}</ReactstrapButton>
        </>
    );
}

export default Button;
