import { Card, Button, Row, Col } from 'react-bootstrap'

function ProfileRecommendations() {
  return (

    <>
      <Card className="h-100  bg-white border" style={{ color: '#333' }}>
        <Card.Body>

          <Card.Title className="d-flex align-items-center">
            <div className="me-2">
              <img src="/public/doc.jpeg" />
            </div>
            Scrivi un riepilogo per mettere in evidenza la tua personalità o
            la tua esperienza lavorativa
          </Card.Title>
          <Card.Text>
            Gli utenti che includono un riepilogo ricevono fino a 3,9 volte
            più visualizzazioni del profilo.
          </Card.Text>
          <Button variant="outline-light" className="rounded-pill text-dark border-black">
            Aggiungi un riepilogo
          </Button>
        </Card.Body>
      </Card>
    </>

  )
}
export default ProfileRecommendations
