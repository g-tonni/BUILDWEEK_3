import { Container, Row, Col } from 'react-bootstrap'
<<<<<<< Updated upstream
import Navbar from './NavBar'
=======
import Analisi from './Analisi'
import Competenze from './Competenze'
>>>>>>> Stashed changes
const Profile = function () {
  return (
    <Container>
      <Navbar/>
      <Row>
        <Col xs={12} md={8}>
        <Analisi/>
        <Competenze/>
        </Col>
        <Col xs={12} md={4}></Col>
      </Row>
    </Container>
  )
}

export default Profile
