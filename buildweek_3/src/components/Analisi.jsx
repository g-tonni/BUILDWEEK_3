import { Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Analisi = () => {
  const params = useParams()

  return (
    <Card className={"mt-3" + (params.id === "me" ? "" : " d-none")}>
      <Row className="align-items-center mb-3">

        <Col >
          <h4 className="mt-3 mb-0 ms-4">Analisi</h4>

          <p className="text-muted ms-4">
            <i className="bi bi-eye"></i> Solo per te
          </p>
        </Col>
      </Row>

      <Row>

        <Col className="d-flex  pe-0" md={4} xs={12}
        >
          <i
            className="bi bi-people me-2 ms-4"
            style={{ fontSize: "22px" }}
          ></i>

          <div>
            <h6 className="mt-2 mb-1 ">0 visualizzazioni del profilo</h6>
            <p className="text-muted m-0">
              Aggiorna il tuo profilo per attrarre visitatori.
            </p>
          </div>
        </Col>


        <Col className="d-flex  " md={8}>
          <i
            className="bi bi-bar-chart me-2 ms-4"
            style={{ fontSize: "22px" }}
          ></i>

          <div>
            <h6 className="mt-2 mb-1">0 impressioni del post</h6>
            <p className="text-muted m-0">
              Crea un post per aumentare l'interesse. <br />
              Ultimi 7 giorni
            </p>
          </div>
        </Col>
      </Row>

      <hr className="mb-0 mt-4" />

      <Row>
        <Col className="text-center py-3">
          <a
            href="#"
            className="fw-semibold text-decoration-none text-black"
          >
            Mostra tutte le analisi <i className="bi bi-arrow-right"></i>
          </a>
        </Col>
      </Row>
    </Card>
  );
};

export default Analisi;