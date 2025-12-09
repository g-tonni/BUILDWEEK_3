import { Card, Row, Col } from "react-bootstrap";
const Attivita = () => {
    return (
          <Card className="mt-3">
      <Row className="align-items-center mb-3">
        <Col >
        <div className="d-flex align-items-center justify-content-between mt-3  mx-4">
  <h4 className="mb-0">Attività</h4>
  <div className="d-flex align-items-center gap-3">
    <span className="text-primary border rounded-4 border-primary px-2 py-1 fw-bold">Crea un post</span>
    <i className="bi bi-pen"></i>
  </div>
</div>

 <p className="text-primary ms-4 mb-0">
           0 follower
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <p className=" fw-semibold ms-4 mb-0 fw-semibold">Non hai ancora pubblicato nulla</p>

          <p className="  ms-4  "> I posti che condividi appariranno qui</p>
        </Col>
      </Row>

      <hr className="mb-0 my-0" />

      <Row>
        <Col className="text-center py-3">
          <a href="#" className="fw-semibold text-decoration-none text-black ">
            Mostra tutte le attività  <i className="bi bi-arrow-right"></i>
          </a>
        </Col>
      </Row>
    </Card>
    )
}
export default Attivita 