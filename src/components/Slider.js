import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pharamcist2 from '../assets/img/pharm1.jpg';
import pharamcist3 from '../assets/img/pharm2.jpg';

function Slider() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pharamcist2}
          alt="Second slide"
          style={{ objectFit: 'cover', maxHeight: '490px' }}
        />
        <Carousel.Caption>
          <h5>Name Surname</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pharamcist3}
          alt="Third slide"
          style={{ objectFit: 'cover', maxHeight: '490px' }}
        />
        <Carousel.Caption>
          <h5>Name Surname</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider