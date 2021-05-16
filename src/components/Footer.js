import React from 'react'
import './style.css'
import logo from '../images/logo.svg'

function Footer() {
    return (
        <div className="footer">
            <footer>
                <nav>
                    <div class="logo-nav">
                        <a href="#"><img src="./assets/images/logo.svg" alt="company-logo"/></a>
                    </div>
                    <ul class="footer-ul">
                        <li>
                            <a href="#">Product </a>
                            <ul class="ul">
                                <li><a href="#">Overview</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Marketplace</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Intergrations</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Company </a>
                            <ul class="ul">
                                <li><a href="#">About</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Connect </a>
                            <ul class="ul">
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Newsletter</a></li>
                                <li><a href="#">LinkedIn</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </footer>

            <div class="attribution">
                Challenge by
                <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="#">Brian Farmer</a>.
            </div>
        </div>
    )
}

export default Footer
