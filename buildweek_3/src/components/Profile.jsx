import { Container, Row, Col } from 'react-bootstrap'
import HeroSection from "./HeroSection"

import Navbar from './NavBar'
const Profile = function () {
  return (
    <Container>
      <Navbar />
      <Row>
        <Col xs={12} md={8}>
          <HeroSection /></Col>
        <Col xs={12} md={4}></Col>
      </Row>
    </Container>
  )
}

export default Profile
