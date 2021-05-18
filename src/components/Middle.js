import React from 'react'
import './style.css'
import phones from '../images/illustration-phones.svg'

function Middle() {
    return (
        <div className="middle-curve">
            <div className="mc">
                <img src={ phones } className="phones" alt="" style={{ width: '40%', marginLeft: '50px' }} />
                <div className="mcright">
                    <h3 className="rsm">State of The Art infrastucture</h3>
                    <p className="rsm2">With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                </div>
            </div>
        </div>
    )
}

export default Middle
