import { Container, Row, Col } from 'react-bootstrap'
import HeroSection from "./HeroSection"

const Profile = function () {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <HeroSection /></Col>
        <Col xs={12} md={4}></Col>
      </Row>
    </Container>
  )
}

export default Profile
