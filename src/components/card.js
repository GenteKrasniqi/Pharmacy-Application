import React from 'react';
import '../../src/index.css';
import { Link } from "react-router-dom";
import Button from '../components/button.js';

function Card({ img, productTittle, price, discountPrcnt, discountedPrice, path }) {
    return (
        <Link to={path} className="card-link">
            <div className="card" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="Loading..." />
                <div className="card-body">
                    <h5 className="card-title">{productTittle}</h5>
                    {discountPrcnt > 0 ? (
                        <p className="card-text">
                            <span>{price.toFixed(2)}&#x20AC;</span><span>  {discountedPrice.toFixed(2)}&#x20AC;</span>
                            <p>Exclusive {discountPrcnt} % discount</p>
                        </p>
                    ) : (
                        <p>{price.toFixed(2)} &#x20AC;</p>
                    )}
                    <Link to={path}>
                    <Button title='View Product'></Button>
                    </Link>
                </div>
            </div>
        </Link>
    );
}

export default Card;
