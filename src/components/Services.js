import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import consultant from '../assets/img/onlinecons.jpg';
import info from '../assets/img/services2.jpg'
import subs from '../assets/img/subs.jpg'
import Button from './button';
import { Link } from 'react-router-dom';

function Services() {
  const p1 = {
    fontSize: '22px',
    marginTop: '20px'
  }

  return (
    <Container>
      <Row md={4} className="justify-content-around" style={{ textAlign: 'center' }}>
        <Col xs={4} className="mb-4">
          <img src={consultant} alt="Service 1" style={{ maxWidth: '300px', height: '300px'}} />
          <p style={p1}>Online Consultations</p>
          <p>Offer online consultations with licensed healthcare professionals, allowing users to discuss their health concerns and obtain prescriptions remotely.</p>
          <Link to="/contact-us">
            <Button title={'Go'}></Button>
          </Link>
        </Col>
        <Col xs={4} className="mb-4">
          <img src={info} alt="Service 2" style={{ maxWidth: '300px', height: '300px', objectFit:'cover'  }} />
          <p style={p1}>Medication Information</p>
          <p>Empowers patients with knowledge about their medications, fostering medication adherence and responsible healthcare choices.</p>
          <Link to="/products">
            <Button title={'Go'}></Button>
          </Link>
        </Col>
        <Col xs={4} className="mb-4">
          <img src={subs} alt="Service 3" style={{ minWidth: '280px', height: '300px' }} />
          <p style={p1}>Medication Recommendations</p>
          <p > Provide detailed information about medications, including their uses, potential side effects, dosage instructions, and interactions.</p>
          <Link to="/products">
            <Button title={'Go'}></Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;