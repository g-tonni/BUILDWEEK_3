import { Card, Button, Row, Col } from "react-bootstrap";

function ProfileRecommendations() {
  return (
    <Row className="g-3">
      <Col md={12}>
        <Card
          className="h-100 p-3"
          style={{ backgroundColor: "#f5f5f5", color: "#333" }}>
          <Card.Body>
            <div style={{ fontSize: "40px", marginBottom: "10px" }}></div>
            <Card.Title>
              Scrivi un riepilogo per mettere in evidenza la tua personalità o
              la tua esperienza lavorativa
            </Card.Title>
            <Card.Text>
              Gli utenti che includono un riepilogo ricevono fino a 3,9 volte
              più visualizzazioni del profilo.
            </Card.Text>
            <Button variant="primary" className="rounded-pill">
              Aggiungi un riepilogo
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
export default ProfileRecommendations;
