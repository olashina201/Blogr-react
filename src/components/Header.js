import React, { useState } from 'react'
import './style2.css'
import logo from '../images/logo.svg'
import hamburger from "../images/icon-hamburger.svg"
import arrowLight from "../images/icon-arrow-light.svg"


function Header() {
    const [nav, setNav] = useState(false)

    return (
        <section className="intro">
            <header>
                <nav>
                <div className="logo-nav">
                    <div className="mobil-container">
                        <a href="#" className="company-logo"><img src={logo} alt="logo"/></a>
                        {/* <!-- hidden burger menu --> */}
                        <img id="burgerX" className="burger" src={hamburger} alt="" />
                    </div>
                    {/* <!-- container for mobil view --> */}
                    <div className="mobilUl-container">
                    <ul id="main-ul" className="main-ul">
                        <li className="main-li li1">
                            <a href="#">Product <img className="flip arrow" src={arrowLight} alt="down-arrow" /></a>
                            <ul id="dropUL-inactive" className="dropUL-inactive dropUl1">
                                <li><a className="sub-li" href="#">Overview</a></li>
                                <li><a className="sub-li" href="#">Pricing</a></li>
                                <li><a className="sub-li" href="#">Marketplace</a></li>
                                <li><a className="sub-li" href="#">Features</a></li>
                                <li><a className="sub-li" href="#">Intergrations</a></li>
                            </ul>
                        </li>
                        <li className="main-li li2">
                        <a href="#">Company
                            <img
                            className="flip arrow"
                            src={arrowLight}
                            alt="down-arrow"
                        /></a>
                        <ul id="dropUL-inactive" className="dropUL-inactive dropUl2">
                            <li><a className="sub-li" href="#">About</a></li>
                            <li><a className="sub-li" href="#">About</a></li>
                            <li><a className="sub-li" href="#">Blog</a></li>
                            <li><a className="sub-li" href="#">Careers</a></li>
                        </ul>
                        </li>
                        <li className="main-li li3">
                        <a href="#"
                            >Connect
                            <img
                            className="flip arrow"
                            src={arrowLight}
                            alt="down-arrow"
                        /></a>
                        <ul id="dropUL-inactive" className="dropUL-inactive dropUl3">
                            <li><a className="sub-li" href="#">Contact</a></li>
                            <li><a className="sub-li" href="#">Newsletter</a></li>
                            <li><a className="sub-li" href="#">LinkedIn</a></li>
                        </ul>
                        </li>
                    </ul>
                    <hr />
                    {/* <!-- Hidden login and sign up buttons for mobil --> */}
                    <div id="mobil-login" className="login">
                        <button className="inactive">Login</button>
                        <button className="active">Sign Up</button>
                    </div>
                    </div>
                </div>
                <div id="login" className="login">
                    <button className="inactive">Login</button>
                    <button className="active">Sign Up</button>
                </div>
                </nav>
            </header>
            <div className="intro-text">
                <h1>A modern publishing platform</h1>
                <p>Grow your audience and build your online brand</p>
                <div id="intro-links" className="intro-links">
                <button className="active">Start for Free</button>
                <button>Learn More</button>
                </div>
            </div>
        </section>
    )
}

export default Header
