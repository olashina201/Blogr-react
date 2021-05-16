import React from 'react'
import logo from '../images/logo.svg'
import './style.css'

function Header() {
    return (
        <div className="header">
            <div className="up-curve">
                <div className="navbar">
                    <div className="logo">
                        <img src={ logo } alt="" />
                    </div>
                    <div className="nav-items">
                        <ul>
                            <li><a className="list" href="#">Product</a></li>
                            <li><a className="list" href="#">Company</a></li>
                            <li><a className="list" href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="auth" >
                        <a href="#" className="login">login</a>
                        <button className="btn signup">Signup</button>
                    </div>
                </div>
                <div className="navtext">
                    <h2>A modern publishing platform</h2>
                    <p className="grow">Grow your audience and build your online brand</p>
                    <div className="btns">
                        <button className="btn start">start for free</button>
                        <button className="btn learn">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
