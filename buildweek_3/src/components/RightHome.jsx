import { Card, Row, Col, Button, Container,  } from "react-bootstrap";
import { BiFontSize } from "react-icons/bi";
import { FaPlus } from 'react-icons/fa6'
const RightHome = function () {
  return (
    <>
      <Card className="mt-3 ">
        <Row className="align-items-center mb-3">
          <Col>
            <div className="d-flex align-items-center justify-content-between mt-3 mx-4">
              <h4 className="mb-0">LinkedIn Notizie</h4>
              <div className="d-flex align-items-center ">
                <i class="bi bi-info-square-fill "></i>
              </div>
            </div>

            <p className="text-secondary ms-4 mb-0 fw-semibold">
              Storie pricnipali
            </p>
          </Col>
        </Row>

        <div className="pe-3">
          <Row>
            <Col>
              <p className="fw-semibold ms-4 mb-0">
                In malattia con la televisita
              </p>
              <p className="ms-4 text-secondary">1 giorno fa</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="fw-semibold ms-4 mb-0">
                La cucina italiana è patrimonio Unesco
              </p>
              <p className="ms-4 text-secondary">17 ore fa</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="fw-semibold ms-4 mb-0">La Bei finanzia Scalapay</p>
              <p className="ms-4 text-secondary">1 giorno fa</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="fw-semibold ms-4 mb-0">
                L'Australia vieta i social ai minori di 18 anni
              </p>
              <p className="ms-4 text-secondary">1 giorno fa</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="fw-semibold ms-4 mb-0">
                Mediaset acquisisce Radio Norba
              </p>
              <p className="ms-4 text-secondary">1 giorno fa</p>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <p className="fw-semibold ms-4 mb-0 text-dark">
                Mostra altro <i class="bi bi-caret-down-fill"></i>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <p className="text-secondary ms-4 mb-0 fw-semibold mt-3">
                Rompicapo di LinkedIn in evidenza{" "}
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex align-items-center ps-4 pe-0">
              <img
                className=" border-secondary rounded-3"
                src="/img rompicapo.png"
                alt="rompicapoImg"
                style={{ width: "100%", maxWidth: "60px", height: "auto" }}
              />
              <div className="ms-3">
                <h6 className="mt-2 mb-1 ">Zip - un rompicapo veloce</h6>
                <p className="text-secondary m-0">
                  Risolvillo in 60 secondi o meno!
                </p>
                <p className="text-secondary mt-1">
                  <i class="bi bi-eye-slash-fill"></i> Solo tu puoi vedere il
                  punteggio
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Card>
      <Card>
        <Row>
          {" "}
          <Col className="d-flex align-items-center ps-4 pe-0">
            <Button
              variant="secondary"
              className=" rounded-3 fw-medium bg-warning border-warning text-secondary w-50 "
            >
              Suggerimento
            </Button>
            <div className="ms-3">
              <p className="text-secondary mt-1 pe-3">
                Prova LinkedIn sull'app per Windows
              </p>
            </div>
          </Col>
        </Row>
      </Card>




      <div className="card navhome-card mb-4">
      <Card >
           <div className="position-relative">

  <img
    src="../Screenshot_10-12-2025_91957_www.linkedin.com.jpeg"
    alt="sfondo"
    className="position-absolute top-0  start-0 w-100 h-100"
    
  />

 
  <Row className="position-relative z-3 p-3 text-white">
    <Col xs={6} className="d-flex align-items-center">
      <img
        src="https://i.pinimg.com/736x/f3/66/e3/f366e3dd92bdb676fba692e6b1952552.jpg"
        alt="orsoImg"
        className=" me-2 position-absolute top-50 left-200 "
        style={{width:'75px', height:'70px'}}
      />
      
    </Col>

    <Col xs={6} className="d-flex justify-content-end align-items-center">
      <span className="navhome-promoted border bg-light rounded-3 text-muted p-1">
        Promosso <i className="bi bi-three-dots ms-1"></i>
      </span>
    </Col>
  </Row>
</div>

<div className="px-3">


             <p className="fw-semibold mt-5 mb-0">
              Edison Next
              </p>
       
          <p className="mb-1 mt-3">Gentjana, immagina il futuro con Edison Next</p>
          <p className="navhome-sub mb-2">
            Le soluzioni migliori per la transizione energetica
          </p>
          <Button variant="outline-primary" className="rounded-pill fw-medium mt-2 mb-3" style={{width:'100%'}}>
              Segui
              </Button>
              </div>
       </Card>
      </div>
 
      <div className="navhome-footer text-center">
       
        <p className="mt-3">Informazioni · Accessibilità</p>
        <p>Centro assistenza · Privacy e condizioni ▾</p>
        <p>Opzioni per gli annunci pubblicitari</p>
        <p>Pubblicità · Servizi alle aziende ▾</p>
        <p>Scarica l’app LinkedIn · Altro</p>
        <img
            src="../LinkedIn-Logo.wine.png"
            alt="LinkedIn Logo"
            style={{ width: "100px", height: "75px" }}
            
            />   <span className="mt-2 mb-5 " style={{fontSize:'15px'}}>LinkedIn Corporation © {new Date().getFullYear()} </span>
      </div>
      
    </>
  );
};
export default RightHome;
