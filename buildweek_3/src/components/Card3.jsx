import { Card, Button, Row, Col } from 'react-bootstrap'

function ProfileRecommendations3() {
  return (
    <Row className="g-3">
      <Col md={12}>
        <Card className="h-100 p-3 bg-white border" style={{ color: '#333' }}>
          <Card.Body>

            <Card.Title>
              In quale settore lavori?
            </Card.Title>
            <Card.Text>
              Gli utenti che aggiungono un settore ricevono fino a 2,5 volte più visualizzazioni del profilo.
            </Card.Text>
            <Button variant="outline-secondary" className="rounded-pill text-dark border-black">
              Aggiungi un riepilogo
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}
export default ProfileRecommendations3
