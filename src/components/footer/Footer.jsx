import React from 'react'
import "./footer.scss"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='footer-section'>
            <div className="socials-cont">
                <img src="/facebook.png" alt="" />
                <img src="/instagram.png" alt="" />
                <img src="/twitter.png" alt="" />
                <img src="/youtube.png" alt="" />
            </div>
            <div className="extra-links-cont">
                <Link><p>Conditions of Use</p></Link>
                <Link><p>Privacy & Policy</p></Link>
                <Link><p>Press Room</p></Link>
            </div>
            <p>&copy; 2021 MovieBox by Adriana Eka Prayudha  </p>
        </footer>
    )
}

export default Footer
