import '../../src/index.css';
import Button from '../components/button';
import '../../src/index.css'
import { Link } from 'react-router-dom';
import React from 'react';

const Banner = ({ img, h3, h6, title, p, link}) => {
    return (
        <div className="contentHolder">
            <div className="imgHolder">
                <img src={img} />
            </div>
            <div className="txtHolder">
                <h3>{h3}</h3>
                <h6>{h6}</h6>
                <p>{p}</p>
                <Link to={link}>
                    <Button title={title} />
                </Link>
            </div>
        </div>
    )
}

export default Banner;
