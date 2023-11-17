import React from 'react'
import pharmacy from '../assets/img/pharamcy.jpg'
import Services from '../components/Services'




function About() {

  const textContainerStyle ={
    marginLeft:'30px',
    textAlign: 'center', // Center-align text
    marginBottom: '10px', // Adjusted margin for spacing between image and text
  }

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '35px',
  }

  const textStyle = {
    fontSize: '25px',
    width:'580px',
    marginLeft: '80px',
    fontFamily: 'Roboto, sans-serif',
    // whiteSpace: 'nowrap'
  };

  const text ={
    marginBottom: '30px',
    fontSize: '35px',
  }


  const ServicesStyle ={
    marginTop: '210px',
    // order: 3,
  }

  const srvstyle = {
    fontSize: '40px',
    marginLeft:'40px',
    marginBottom:'80px',
    marginTop:'-120px'
  }
  


  return (
    <div>
    <div style={containerStyle}>
    <img src={pharmacy} alt="Pharmacy"  style={{ width: '550px',marginLeft:'60px' ,height: 'auto' }}/>
    <div style={textContainerStyle}>
    <p style={text}>About us</p>
    <p style={textStyle}>"Welcome to our pharmacy, where we prioritize your well-being. Offering a diverse range of quality medications and personalized care, we are committed to enhancing your life through accessible and reliable healthcare solutions. Trust us for a healthier, happier tomorrow with compassionate service and professional advice."</p>
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