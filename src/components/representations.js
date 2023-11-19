import React from 'react';
import '../../src/index.css';
import LaRocheLogo from "../assets/img/La-Roche-Posay-Logo.png"
function Representations() {
    return (
        <div className='holder'>      
            <h3>The Brends Best Sellers</h3>      
            <div className="representations">
                <div className="imgBox"><img src={LaRocheLogo} alt="Image1" /></div>
                <div className="imgBox"><img src={LaRocheLogo} alt="Image2" /></div>
                <div className="imgBox"><img src={LaRocheLogo} alt="Image3" /></div>
                <div className="imgBox"><img src={LaRocheLogo} alt="Image3" /></div>
            </div>
        </div>

    );
}

export default Representations;
