import React from 'react'
import pharmacy from '../assets/img/aboutusimg.jpg'
import Services from '../components/Services'


function About() {

  const textContainerStyle = {
    marginLeft: '30px',
    textAlign: 'center',
    marginBottom: '10px'
  }

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    paddingBottom:'100px'
  }

  const textStyle = {
    fontSize: '22px',
    width: '580px',
    marginLeft: '80px',
    fontFamily: 'Roboto, sans-serif',
    textAlign:'left'
  };

  const text = {
    marginBottom: '30px',
    fontSize: '35px',
    color: 'rgb(0, 128, 49)'
  }

  const ServicesStyle = {
    marginTop: '100px',
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
    <div>
      <div style={containerStyle}>
        <img src={pharmacy} alt="Pharmacy" style={{ width: '600px', marginLeft: '60px', marginTop: '50px', height: 'auto', borderRadius:'10px' }} />
        <div style={textContainerStyle}>
          <p style={text}>About Us</p>
          <p style={textStyle}>Pharm Store, the place where we prioritize your well-being. Offering a diverse range of quality medications and personalized care, we are committed to enhancing your life through accessible and reliable healthcare solutions. Trust us for a healthier, happier tomorrow with compassionate service and professional advice.</p>
          <i class="bi bi-facebook"></i>
        </div>
      </div>
      {/* Include the Services component */}
      <div style={ServicesStyle}>
        <h2 style={srvstyle}>Our Services</h2>
        <Services />
      </div>

    </div>
  )
}

export default About