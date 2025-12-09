import { Card, Row, Col } from "react-bootstrap";

const Esperienza = ()=>{
    return (
    <Card className="mt-3 pb-3">
      <Row className="align-items-center mb-3">
        <Col>
          <div className="d-flex align-items-center justify-content-between mt-3 mx-4">
            <h4 className="mb-3">Esperienza</h4>
            <div className="d-flex align-items-center gap-3">
              <i class="bi bi-plus"    style={{ fontSize: "32px" }}></i>
              <i className="bi bi-pen"></i>
            </div>
          </div>

        <Col className="d-flex flex-row align-items-center pe-0" md={4} xs={12}>
  <img
    src="https://img5.juzaphoto.com/001/shared_files/uploads/3229249_l.jpg"
    alt="frfrr"
    className="img-fluid ms-4 "
    style={{ width: "50px", height: "50px" }}
  />

  <div className="ms-3">
    <h6 className="mt-2 mb-1">Assistente sociale</h6>
    <p className="text-muted m-0">Asilo Nido La Tartaruga</p>
  </div>
</Col>
        </Col>
      </Row>
    </Card>
  );
};


export default Esperienza