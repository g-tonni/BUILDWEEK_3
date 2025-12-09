import { Container, Row, Col } from 'react-bootstrap'
import HeroSection from './HeroSection'
import Sidebar from './Sidebar'
import Attivita from './Attivita'
import Analisi from './Analisi'
import Competenze from './Competenze'
<<<<<<< Updated upstream
import Interessi from './Interessi'
import Formazione from './Formazione'

=======
import Esperienza from './Esperienza'
>>>>>>> Stashed changes
const Profile = function () {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <HeroSection />
          <Analisi />
          <Attivita />
          <Esperienza/>
          <Competenze />
<<<<<<< Updated upstream
          <Attivita />
          <Interessi />
          <Formazione />
=======
>>>>>>> Stashed changes
        </Col>
        <Col xs={12} md={4} className="mt-3">
          <Sidebar />
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
