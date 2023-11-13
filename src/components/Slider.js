import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pharamcist1 from '../assets/img/pharamcist/pharmacist1.jpg';
import pharamcist2 from '../assets/img/pharamcist/pharmacist2.jpg';
import pharamcist3 from '../assets/img/pharamcist/pharmacist3.jpg';

function Slider() {
  return (
    <Carousel data-bs-theme="dark" style={{ width: '760px', height: '500px', marginLeft:'50px', marginTop:'25px' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pharamcist1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pharamcist2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pharamcist3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider