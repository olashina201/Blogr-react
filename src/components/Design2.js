import React from 'react'
import './style.css'
import laptopdesk from '../images/illustration-laptop-desktop.svg'

function Design2() {
    return (
        <div className="design2">
            <img src={ laptopdesk } className="dleft" alt="" />
            <div className="dright">
                <div className="dright-1">
                    <h3 className="dsm1">Free, Open, Simple</h3>
                    <p className="dsm2">Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                </div>
                <br />
                <div className="dright-2">
                    <h3 className="dsm1">Powerful tooling</h3>
                    <p className="dsm2">Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
                </div>
            </div>
        </div>
    )
}

export default Design2
