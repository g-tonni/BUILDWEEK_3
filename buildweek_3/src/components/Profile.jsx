import { Container, Row, Col } from 'react-bootstrap'
import NavBarL from './NavBar'
import Formazione from './Formazione'
const Profile = function () {
  return (
    <Container>
      <NavBarL/>
      
      <Row className="mt-5">
        <Col xs={12} md={8}>
        <Formazione/>
        </Col>
        <Col xs={12} md={4}></Col>
      </Row>
    </Container>
  )
}

export default Profile
