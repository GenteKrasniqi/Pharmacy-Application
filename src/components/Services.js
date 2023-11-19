import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import consultant from '../assets/img/onlinecons.jpg';
import info from '../assets/img/info.jpg'
import subs from '../assets/img/subs.jpg'

function Services() {

  const p1 = {
    fontSize: '22px',
    marginTop:'20px'
  }

  const p2 = {

  }

  return (
    <Container>
       <Row md={4}  className="justify-content-around">
        <Col xs={4} className="mb-4">
          <img src={consultant} alt="Service 1" style={{ maxWidth: '300px', height: '300px' }} />
          <p style={p1}>Online Consultations</p>
          <p >Offer online consultations with licensed healthcare professionals, allowing users to discuss their health concerns, receive advice, and obtain prescriptions remotely. Enables patients to seek guidance and prescriptions without visiting a physical clinic</p>
        </Col>
        <Col xs={4} className="mb-4">
          <img src={info} alt="Service 2" style={{ maxWidth: '300px', height: '300px' }} />
          <p style={p1}>Medication Information</p>
          <p style={p2}> Empowers patients with knowledge about their medications, fostering medication adherence and responsible healthcare choices. Helps users understand the purpose and potential effects of their prescribed drugs.</p>
        </Col>
        <Col xs={4} className="mb-4">
          <img src={subs} alt="Service 3" style={{ minWidth: '280px', height: '300px' }} />
          <p style={p1}>Medication Recommendations</p>
          <p style={p2}> Provide detailed information about medications, including their uses, potential side effects, dosage instructions, and interactions. Include educational materials to help users understand the purpose of each medication and how to take them properly.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;