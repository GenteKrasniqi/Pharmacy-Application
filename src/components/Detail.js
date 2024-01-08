import React from 'react'
import Subscribe from '../components/Subscribe';

const Detail = ({ name, img, scndImg, thirdImg, description, price, discount, availability, discountedPrice, expDate }) => {
    return (<>

        <section className="product-name">
            <h2>The product you are looking is {name}</h2>
            {discount > 0 ? (
                <h3>Buy this product today <span>{discount} %</span> discount !</h3>
            ) : (
                <h3></h3>
            )}
        </section>

        <div className='hero-banner'>
            <section className="detail-section">
                <div className="detail-image">
                        <img src={img} alt='Loading' />
                </div>
                <div className="detail-desctiption">
                    <p> <b>About {name} : </b><br /><br />{description}</p>
                    {availability > 0 ? (
                        <p id='positive'>• Product is available in Store.</p>
                    ) : (
                        <p><b>Avalibility : </b> Unfortunately, this product is sold out.</p>
                    )}
                    {discount > 0 ? (
                        <p><b> Exclusive Price : <span id='priceId'> {price.toFixed(2)} &#x20AC;</span>  </b> <span>{discountedPrice.toFixed(2)}  &#x20AC;</span> </p>

                    ) : (<p><b> Regural Price : {price} &#x20AC;</b></p>
                    )}
                    <p> <b>Expiration Date  :</b> {expDate}</p>
                    <p> <span>Note:</span> Please read the side effects or consult your physician before using this product. We appreciate your cooperation. We appreciate your cooperation.<br /><br />Certified product &#169;</p>
                </div>
                <div className='extra-images'>
                    <div className='imgDiv'>
                        <img src={scndImg} alt="Loading second image.." />
                    </div>

                    <div className='imgDiv'>
                        <img src={thirdImg} alt="Loading third image.." />
                    </div>
                </div>
            </section>
        <Subscribe></Subscribe>  
        </div>      
    </>
    )
}

export default Detail;
