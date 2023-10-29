import React from 'react'
import './Navbar.css'
import '../../App.css'


export const Navbar = () => {
    return (
        <nav className='container'>
            <div className='logo'>
                <img src="/images/logo.png" alt="logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>

    )
}
