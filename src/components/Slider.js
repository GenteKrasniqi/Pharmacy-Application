import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pharamcist2 from '../assets/img/pharm2.jpg';
import pharamcist3 from '../assets/img/pharm3.jpg';
import pharamcist5 from '../assets/img/pharm5.jpg';
import pharamcist6 from '../assets/img/pharm6.jpg';
function Slider() {
  return (
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={pharamcist6}
        alt="Third slide"
        style={{ objectFit: 'cover', maxHeight: '490px' }}
      />
      <Carousel.Caption>
        <p>Years of Experience: 5</p>
      </Carousel.Caption>
    </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pharamcist5}
          alt="Third slide"
          style={{ objectFit: 'cover', maxHeight: '490px' }}
        />
        <Carousel.Caption>
        <p>Years of Experience: 4</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pharamcist2}
          alt="Third slide"
          style={{ objectFit: 'cover', maxHeight: '490px' }}
        />
        <Carousel.Caption>
        <p>Years of Experience: 7</p>
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
        <p>Years of Experience: 12</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider