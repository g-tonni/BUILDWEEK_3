import { Container, Row, Col } from 'react-bootstrap'
import HeroSection from './HeroSection'
import Sidebar from './Sidebar'
import Attivita from './Attivita'
import Analisi from './Analisi'
import Competenze from './Competenze'
import Interessi from './Interessi'
import Formazione from './Formazione'
import Esperienza from './Esperienza'
import ConsigliatiCarousel from './ConsigliatiCarousel'



const Profile = function (props) {


  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <HeroSection openModal={props.openModal} />

          <ConsigliatiCarousel />
          <Analisi />
          <Attivita />
          <Esperienza />
          <Formazione />
          <Competenze />
          <Interessi />
        </Col>

        <Col xs={12} md={4} className="mt-3">
          <Sidebar />
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
