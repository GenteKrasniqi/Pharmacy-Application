import React from 'react';
import Banner from "../components/Banner.js";
import BannerImage from '../assets/video/giphy.gif';
import Slider from '../components/Slider.js';
import Representations from '../components/Brand.js';
import Button from '../components/button';
import Faq from '../components/Faq.js';
import Sub from '../components/Subscribe.js'
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div>
            <Banner img={BannerImage}
                h3={'Great Service. Lower Prices. Free Delivery.'}
                h6={'Pharm Store is an independently pharmacy located in Kosovo. Our pharmacy is staffed by highly trained pharmacists and pharmacy technicians. Get to know us !'}
                title={'Explore Products'}
                link={'/products'} />

            <div className='hero-banner'>
                <Representations h3={'The Brends Best Sellers'} />
                <div className='slider-container'>
                    <div className='slider-holder'>
                        <Slider />
                    </div>
                    <div className="slider-text">
                        <h4>Meet the Pharm Store's Qualified Pharmacists </h4> <br></br>
                        <p>At Pharm Store, we take pride in our team of highly skilled and passionate professionals who are dedicated to providing exceptional service. Our diverse team brings a wealth of expertise and a commitment to excellence in every aspect of our work. Get to know the faces behind the service and discover the people who make Pharm Store stand out.</p>
                        <div className='inner-text'>
                            <Link to="/contact-us">
                                <Button title={'Contact'} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='faqandsub'>

                <Faq />
                <Sub />
            </div>
        </div>
    );
}

export default Home;
