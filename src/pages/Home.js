import React from 'react';
import Banner from "../components/banner";
import BannerImage from "../assets/img/banner.jpg";
import Slider from '../components/Slider';
import Representations from '../components/representations';
import Button from '../components/button';
import '../../src/index.css'

function Home() {
    return (
        <div>
            <Banner img={BannerImage} h3={'Great Service. Lower Prices. Free Delivery.'}
                h6={'Great Service. Lower Prices. Free Delivery. Your Go-to Place for Prescriptions! We are an independently owned pharmacy located in Prishtina, Kosovo. Our pharmacy is staffed by highly trained pharmacists and pharmacy technicians. '}
                altAttr={"Text"}
                title={'View Products'} />


            <div className='hero-banner'>
                <Representations />
                <div className='slider-container'>
                    <div className='slider-holder'>
                        <Slider />
                    </div>

                    <div className="slider-text">
                        <h4>Meet Our Qualified and Well Known Pharmacists </h4> <br></br>
                        <p>At Pharm Store, we take pride in our team of highly skilled and passionate professionals who are dedicated to providing exceptional service. Our diverse team brings a wealth of expertise and a commitment to excellence in every aspect of our work. Get to know the faces behind the service and discover the people who make Pharm Store stand out.</p>
                        <div className='inner-text'>
                            <p>If you need help please do not hesitate to contact our online Pharmacist </p>
                            <Button title={'Contact Pharmacists'} />
                        </div>
                    </div>
                </div>
            </div>

   

        </div>
    );
}

export default Home;
