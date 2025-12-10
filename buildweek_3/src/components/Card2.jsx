import { Card, Button, Row, Col } from 'react-bootstrap'

function ProfileRecommendationss() {
  return (
    <Row className="g-3">
      <Col md={12}>
        <Card
          className="h-100 p-3 bg-white border"
          style={{ backgroundColor: '#f5f5f5', color: '#333' }}
        >
          <Card.Body>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}></div>
            <Card.Title>
              Aggiungi una foto al tuo profilo per aiutare gli altri a
              riconoscerti
            </Card.Title>
            <Card.Text>
              Gli utenti con una foto del profilo ricevono fino a 2,3 volte più
              visualizzazioni del profilo.
            </Card.Text>
            <Button variant="primary" className="rounded-pill">
              Aggiungi foto
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}
export default ProfileRecommendationss
