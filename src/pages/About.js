import React from 'react'
import pharmacy from "../assets/img/about-us-img.jpg";
import Services from '../components/Services'
import BestSellers from '../components/Brand.js';
import Banner from '../components/Banner.js';
import Sub from '../components/Subscribe.js';

function About() {

  const ServicesStyle = {
    marginTop: '200px',
    marginBottom: '100px'
  }

  const srvstyle = {
    textAlign: 'center',
    fontSize: '35px',
    fontFamily: 'Roboto, sans-serif',
    color: 'rgb(0, 128, 49)',
    marginBottom: '80px',
    marginTop: '-120px'
  }

  return (
    <><Banner img={pharmacy} h3={'Your Trusted Online Pharm Store  '}
      h6={'With a team of dedicated professionals, including experienced pharmacists and a skilled cadre of technicians, we are committed providing costumers the highest quality pharmaceutical products and services.'}
      title={'Contact'}
      link={'/contact-us'}  />
  
      <div className='hero-banner-about'>
        <div style={ServicesStyle}>
          <h2 style={srvstyle}>Our Services</h2>
          <Services />
        </div>

        <div className='bestSeller'>
          <BestSellers h3={'We also proudly stock an extensive selection of the most renowned and sought-after brands in the market that are'} />
        </div>
      <Sub/>
    </div></>
  );
}

export default About;