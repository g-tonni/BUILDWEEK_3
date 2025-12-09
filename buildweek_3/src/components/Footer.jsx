import { Container, Row, Col, Form } from 'react-bootstrap'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { IoMdSettings } from 'react-icons/io'
import { MdOutlineSecurity } from 'react-icons/md'

const Footer = function () {
  return (
    <Container>
      <Row className="py-4">
        <Col xs={12} md={2}>
          <a
            href="#"
            className="d-block text-dark mb-2 text-decoration-none"
            style={{ fontSize: '14px' }}
          >
            Informazioni
          </a>
          <a
            href="#"
            className="d-block text-dark mb-2 text-decoration-none"
            style={{ fontSize: '14px' }}
          >
            Informativa sulla community professionale
          </a>
          <a
            href="#"
            className="d-block text-dark mb-2 text-decoration-none"
            style={{ fontSize: '14px' }}
          >
            Privacy e condizioni
          </a>
          <a
            href="#"
            className="d-block text-dark mb-2 text-decoration-none"
            style={{ fontSize: '14px' }}
          >
            Sales Solutions
          </a>
          <a
            href="#"
            className="d-block text-dark mb-2 text-decoration-none"
            style={{ fontSize: '14px' }}
          >
            Centro sicurezza
          </a>
        </Col>
        <Col xs={12} md={2}>
          <a
            href="#"
            className="d-block text-dark mb-2 text-decoration-none"
            style={{ fontSize: '14px' }}
          >
            Accessibilità
          </a>
          <a
            href="#"
            className="d-block text-dark mb-2 text-decoration-none"
            style={{ fontSize: '14px' }}
          >
            Carriera
          </a>
          <a
            href="#"
            className="d-block text-dark mb-2 text-decoration-none"
            style={{ fontSize: '14px' }}
          >
            Opzioni per gli annunci pubblicitari
          </a>
          <a
            href="#"
            className="d-block text-dark mb-2 text-decoration-none"
            style={{ fontSize: '14px' }}
          >
            Mobile
          </a>
        </Col>
        <Col xs={12} md={2}>
          <a
            href="#"
            className="d-block text-dark mb-2 text-decoration-none"
            style={{ fontSize: '14px' }}
          >
            Talent Solutions
          </a>
          <a
            href="#"
            className="d-block text-dark mb-2 text-decoration-none"
            style={{ fontSize: '14px' }}
          >
            Soluzioni di marketing
          </a>
          <a
            href="#"
            className="d-block text-dark mb-2 text-decoration-none"
            style={{ fontSize: '14px' }}
          >
            Pubblicità
          </a>
          <a
            href="#"
            className="d-block text-dark mb-2 text-decoration-none"
            style={{ fontSize: '14px' }}
          >
            Piccole imprese
          </a>
        </Col>
        <Col xs={12} md={3}>
          <Row>
            <Col xs={2} className="p-0 text-center">
              <AiFillQuestionCircle className="fs-3" />
            </Col>
            <Col xs={10} className="p-0">
              <a
                href="#"
                className="d-block text-dark mb-0 text-decoration-none"
                style={{ fontSize: '15px' }}
              >
                Domande?
              </a>
              <p style={{ fontSize: '12px' }} className="opacity-50">
                Visita il nostro Centro assistenza.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={2} className="p-0 text-center">
              <IoMdSettings className="fs-3" />
            </Col>
            <Col xs={10} className="p-0">
              <a
                href="#"
                className="d-block text-dark mb-0 text-decoration-none"
                style={{ fontSize: '15px' }}
              >
                Gestisci il tuo account e la tua privacy
              </a>
              <p style={{ fontSize: '12px' }} className="opacity-50">
                Vai alle impostazioni.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={2} className="p-0 text-center">
              <MdOutlineSecurity className="fs-3" />
            </Col>
            <Col xs={10} className="p-0">
              <a
                href="#"
                className="d-block text-dark mb-0 text-decoration-none"
                style={{ fontSize: '15px' }}
              >
                Trasparenza sui contenuti consigliati
              </a>
              <p style={{ fontSize: '12px' }} className="opacity-50">
                Scopri di più sui contenuti consigliati.
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={3}>
          <p style={{ fontSize: '12px' }} className="opacity-50 mb-1">
            Seleziona lingua
          </p>
          <Form.Select size="sm">
            <option>Italiano</option>
            <option>Inglese</option>
            <option>Francese</option>
            <option>Spagnolo</option>
          </Form.Select>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
