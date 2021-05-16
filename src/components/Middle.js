import React from 'react'
import './style.css'
import phones from '../images/illustration-phones.svg'

function Middle() {
    return (
        <div className="middle-curve">
            <div className="mc">
                <div className="mcleft">
                    <img src={ phones } className="img1" alt="" />
                </div>
                <div className="mcright">
                    <h3>State of The Art infrastucture</h3>
                    <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                </div>
            </div>
        </div>
    )
}

export default Middle
