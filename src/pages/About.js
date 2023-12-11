import React from 'react'
import pharmacy from "../assets/img/bgimgpharm.jpg";
import Services from '../components/Services'
import Button from '../components/button';
import BestSellers from '../components/Brand.js';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner.js'

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
    <><Banner img={pharmacy} h3={'About Us'}
      h6={'Pharm Store, the place where we prioritize your well-being. Offering a diverse range of quality medications and personalized care, we are committed to enhancing your life through accessible and reliable healthcare solutions. Trust us for a healthier, happier tomorrow with compassionate service and professional advice. '}
      altAttr={"About-Text"}
      title={'Contact'} />
      <div className='hero-banner-about'>
        <div style={ServicesStyle}>
          <h2 style={srvstyle}>Our Services</h2>
          <Services />
        </div>

        <div className='bestSeller'>
          <BestSellers h3={'We also proudly stock an extensive selection of the most renowned and sought-after brands in the market that are'} />
        </div>

      </div></>
  )
}

export default About