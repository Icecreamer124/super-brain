import React from 'react';
import { useState } from 'react';

const Navbar = () => {
  return (
    <header>
        <div className="logo-container">
            <div className='logo' >
                <img src="/WhatsApp Image 2024-03-14 at 23.31.jpg" alt="Super Brain Logo"/>
            </div>
            <div className='logo-txt gradient-text' >Super Brain</div>
        </div>
        <div>
            <a className='header-cta' href="/">Get Started</a>
        </div>
    </header>
  )
};

export default Navbar;