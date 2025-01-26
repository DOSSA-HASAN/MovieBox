import React, { useState } from 'react'
import "./navbar.scss"
import { Link } from "react-router-dom"

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <nav>
            <figure className="logo">
                <img src="/logo.png" alt="" />
                <h1 className="logo-text">MovieBox</h1>
            </figure>
            <div className="search-bar-cont">
                <input type="text" name="" id="" placeholder='What do you want to watch?' />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <article className='menu-cont' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <span></span>
                <span></span>
            </article>
            <div className={ isMobileMenuOpen ? "links-cont h-300" : "links-cont"}>
                <Link to={"/"}><p>Preferences</p></Link>
                <Link to={"/"}><p>Contact Us</p></Link>
                <Link to={"/"}><p>About Us</p></Link>
            </div>
        </nav>
    )
}

export default Navbar
