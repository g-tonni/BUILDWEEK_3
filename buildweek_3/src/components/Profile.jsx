import { Container, Row, Col } from 'react-bootstrap'
import HeroSection from "./HeroSection"

import Sidebar from './Sidebar'

import Analisi from './Analisi'
import Competenze from './Competenze'

const Profile = function () {
  return (
    <Container>

      <Row style={{ marginTop: "5em" }}>
        <Col xs={12} md={8}>
          <HeroSection />
          <Analisi />
          <Competenze />
        </Col>
        <Col xs={12} md={4}>
          <Sidebar />
        </Col>
      </Row>

    </Container>
  )
}

export default Profile
