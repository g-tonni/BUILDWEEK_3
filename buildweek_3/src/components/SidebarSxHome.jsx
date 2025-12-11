import { Card, Image, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { BsBookmarkFill } from 'react-icons/bs';
import { FaEye } from 'react-icons/fa';
import '../css/Sidebar.css';

const ProfileSidebar = () => {
  const profiloUtente = useSelector((currState) => {
    return currState?.profiles?.profiloUtente;
  });

  if (!profiloUtente) {
    return null;
  }

  return (
    <div className="profile-sidebar">
      {/* Card Profilo Principale */}
      <Card className="mb-3 border-0 rounded-3 overflow-hidden">
        {/* Background header */}
        <div 
          style={{
            height: '60px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          }}
        />
        
        {/* Immagine profilo centrata */}
        <div className="text-center" style={{ marginTop: '-40px' }}>
          <Image
            src={profiloUtente.image}
            alt="Profile"
            roundedCircle
            style={{
              width: '80px',
              height: '80px',
              border: '3px solid white',
            }}
          />
        </div>

        <Card.Body className="text-center pt-2">
          <Card.Title className="mb-1 fs-6 fw-semibold">
            {profiloUtente.name} {profiloUtente.surname}
          </Card.Title>
          <Card.Text className="text-muted small mb-2">
            {profiloUtente.title}
          </Card.Text>
          {profiloUtente.area && (
            <Card.Text className="text-muted small mb-3">
              {profiloUtente.area}
            </Card.Text>
          )}
        </Card.Body>

        <hr className="my-0" />

        {/* Sezione statistiche */}
        <Card.Body className="py-2">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="text-muted small">Visitatori del profilo</span>
            <span className="text-primary fw-semibold small">127</span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-muted small">Impression del post</span>
            <span className="text-primary fw-semibold small">2.345</span>
          </div>
        </Card.Body>

        <hr className="my-0" />

        {/* Accesso esclusivo */}
        <Card.Body className="py-3">
          <div className="d-flex align-items-start">
            <BsBookmarkFill className="text-secondary me-2 mt-1" size={16} />
            <div>
              <p className="mb-1 small text-muted">
                Accedi a strumenti e informazioni in esclusiva
              </p>
              <p className="mb-0 small fw-semibold">
                <span className="text-warning">⭐</span> Prova Premium gratis
              </p>
            </div>
          </div>
        </Card.Body>

        <hr className="my-0" />

        {/* Elementi salvati */}
        <Card.Body className="py-2">
          <div className="d-flex align-items-center">
            <BsBookmarkFill className="text-secondary me-2" size={14} />
            <span className="small fw-semibold">I miei elementi</span>
          </div>
        </Card.Body>
      </Card>

      {/* Card 2 - Gruppi */}
      <Card className="mb-3 border-0 rounded-3">
        <Card.Body className="py-3">
          <div className="mb-3">
            <p className="small text-primary fw-semibold mb-2">Gruppi</p>
            <p className="small text-muted mb-2">Eventi</p>
            <p className="small text-muted mb-0">Hashtag seguiti</p>
          </div>
          <hr className="my-2" />
          <p className="small text-center text-muted fw-semibold mb-0">
            Scopri di più
          </p>
        </Card.Body>
      </Card>

      {/* Card 3 - Contenuti salvati */}
      <Card className="mb-3 border-0 rounded-3">
        <Card.Body className="py-3">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <p className="small fw-semibold mb-0">I miei contenuti</p>
            <BsBookmarkFill className="text-secondary" size={14} />
          </div>
          <p className="small text-muted mb-2">Articoli salvati: 12</p>
          <p className="small text-muted mb-0">Post salvati: 8</p>
        </Card.Body>
      </Card>

      {/* Card 4 - Risorse */}
      <Card className="mb-3 border-0 rounded-3">
        <Card.Body className="py-3">
          <p className="small fw-semibold mb-3">Risorse utili</p>
          <ListGroup variant="flush">
            <ListGroup.Item className="px-0 py-2 border-0 small text-muted d-flex align-items-center">
              <FaEye className="me-2 text-secondary" size={16} />
              Modalità creatore di contenuti
            </ListGroup.Item>
            <ListGroup.Item className="px-0 py-2 border-0 small text-muted d-flex align-items-center">
              <BsBookmarkFill className="me-2 text-secondary" size={14} />
              La mia rete
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfileSidebar;