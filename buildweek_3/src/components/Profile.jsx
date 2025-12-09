import { Container, Row, Col } from 'react-bootstrap'
import HeroSection from "./HeroSection"

import Sidebar from './Sidebar'
import Navbar from './NavBar'
import Analisi from './Analisi'
import Competenze from './Competenze'

const Profile = function () {
  return (
    <Container>
      <Navbar />
      <Row>
        <Col xs={12} md={8}>
          <Analisi />
          <Competenze />
        </Col>
        <Col xs={12} md={4}></Col>
      </Row>
    </Container>
  )
}

export default Profile
