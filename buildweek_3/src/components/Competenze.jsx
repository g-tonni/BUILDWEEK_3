import { Card, Row, Col } from "react-bootstrap";
const Competenze = () => {
  return (
    
    <Card className="mt-3">
      <Row className="align-items-center mb-3">
        <Col >
          <h4 className="mt-3 mb-0 ms-4">Competenze</h4>

        </Col>
      </Row>

      <Row>
        <Col>
          <p className=" fw-semibold ms-4 mb-3">Soft skill</p>
<hr className="mx-4 my-0" />
          <p className=" fw-semibold ms-4 my-3 ">Competenze tecniche</p>
        </Col>
      </Row>

      <hr className="mb-0 my-0" />

      <Row>
        <Col className="text-center py-3">
          <a href="#" className="fw-semibold text-decoration-none text-black ">
            Mostra tutte le competenze (9) <i className="bi bi-arrow-right"></i>
          </a>
        </Col>
      </Row>
    </Card>
  );
};
export default Competenze;
