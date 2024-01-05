import React from 'react';
import '../../src/index.css';
import VichyLogo from "../assets/img/vichy-logo.png"
import RevoxLogo from "../assets/img/revox.jpeg"
import Vitabiotics from "../assets/img/thepurestt.png"
import thepurest from "../assets/img/cerave.png"

const Brand = ({ h3 }) => {
    return (
        <div className='holder'>      
            <h3>{h3}</h3>      
            <div className="representations">
                <div className="imgBox"><img src={VichyLogo} alt="Vichy" /></div>
                <div className="imgBox"><img src={Vitabiotics} alt="Vitabiotics" /></div>     
                <div className="imgBox"><img src={RevoxLogo} alt="Revox" /></div>           
                <div className="imgBox"><img src={thepurest} alt="Vitabiotics" /></div>
            </div>
        </div>

    );
}

export default Brand;
