import React from 'react';
import '../../src/index.css';

function Card({img,productTittle,productDesc,btn }) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={img} className="card-img-top" alt="Loading..." />
            <div className="card-body">
                <h5 className="card-title">{productTittle}</h5>
                <p className="card-text">{productDesc}</p>
                <a href={btn} className="btn btn-primary buttoncss">View Product</a>
            </div>
        </div>
    );
}
export default Card;