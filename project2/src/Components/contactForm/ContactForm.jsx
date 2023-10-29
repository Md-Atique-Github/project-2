import React, { useState } from 'react'
import './ContactForm.css'
import { MdOutlineMessage } from "react-icons/md"
import Button from '../buttons/Button'
import { MdOutlineMailOutline } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa";


const ContactForm = () => {

    const [name, setName] = useState("Atique");
    const [email , setEmail] = useState("Atique@gmail.com");
    const [text , setText] = useState("Hello World");

    
 

    const onSubmit = (event) => {

        setName (event.target[0].value);
        setEmail(event.target[1].value);
        setText (event.target[2].value);
        event.preventDefault();

    }

    return (
        <section className='contactcont'>
            <div className='contact-info'>
                <div className='top-btn'>
                    <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize='24px' />} />
                    <Button

                        text="VIA CALL"
                        icon={<FaPhoneAlt />}
                    />
                </div>
                <Button
                    isOutline={true}
                    className="outline-btn" text="VIA EMAIL FORM" icon={<MdOutlineMailOutline fontSize='24px' />} />

                <form onSubmit={onSubmit}>
                    <div className="form-control">
                        <label htmlFor='name'> Name </label>
                        <input type='text' name='name'></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor='email'> Email </label>
                        <input type='email' name='email'></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor='text'> Text </label>
                        <textarea name='text' rows='6'></textarea>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <Button
                            text="SUBMIT" />
                    </div>
                    <div>{name + "   " + email + "   " + text}</div>
                    
                </form>

            </div>
            <div className='girl-image'>
                <img src='/images/girlpic.svg' alt='Girl pic' />
            </div>
        </section>
    )
}

export default ContactForm