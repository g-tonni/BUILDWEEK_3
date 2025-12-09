import { Container, Row, Col } from 'react-bootstrap'
<<<<<<< Updated upstream
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
=======
import Navbar from './NavBar'
import Analisi from './Analisi'
import Competenze from './Competenze'
import Attivita from './Attivita'
const Profile = function () {
  return (
    <Container>
      <Navbar />
      <Row>
        <Col xs={12} md={8}>
        
          <Analisi />
          <Competenze />
          <Attivita/>
>>>>>>> Stashed changes
        </Col>
      </Row>

    </Container>
  )
}

export default Profile