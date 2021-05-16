import React from 'react'
import './style.css'
import logo from '../images/logo.svg'

function Footer() {
    return (
        <div className="footer">
            <div className="f-content">
                <div className="flogo">
                    <img src={ logo } alt="" />
                </div>
                <div className="fproduct">
                    <h3>Product</h3>
                    <ul className="flist">
                        <li>Overview</li>
                        <li>Price</li>
                        <li>MarketPlace</li>
                        <li>Features</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div className="fcompany">
                    <h3>Company</h3>
                    <ul className="flist">
                        <li>About</li>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>Career</li>
                    </ul>
                </div>
                <div className="fconnect">
                    <h3>Connect</h3>
                    <ul className="flist">
                        <li>Contact</li>
                        <li>Newsletter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
