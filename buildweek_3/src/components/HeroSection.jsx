import { Button, Container, Row, Col } from "react-bootstrap"
import { LuPencil } from "react-icons/lu"
import { PiBuildingsDuotone } from "react-icons/pi"
import { BiSolidBadgeCheck } from "react-icons/bi"

const HeroSection = function () {
    return (

        <Container className="my-3 border rounded-3 border-tertiary">
            <Row>
                <Col xs={12} className="backGround">
                    {/* <img src= alt="un orso" /> */}
                </Col>
                <Col xs={12} className="d-flex w-100 justify-content-end">
                    {/* matita */}
                    <LuPencil className="fs-5" />

                </Col>
                <Row className="align-items-center">
                    <Col xs={9} className="d-flex flex-wrap justify-content-between">
                        <h4>Nome Cognome</h4>
                        <Button variant="outline-primary" className="rounded-pill fs-6 fw-medium border-primary border-dashed">
                            <BiSolidBadgeCheck />  Aggiungi badge di verifica
                        </Button>
                    </Col>
                    <Col xs={3} className="text-center">
                        {/* icona */}
                        <PiBuildingsDuotone className="me-2" />
                        <span>Luogo di lavoro</span>
                    </Col>
                    <Col>

                        <p>Posizione lavorativa corrente</p>
                        <p>Roma, Lazio, Italia - <a>Infomazioni di contatto</a></p>
                    </Col>
                </Row>
                <Col xs={12}>
                    <Row className="g-3">
                        <Col xs={3} lg={3}>
                            <Button variant="primary" className="rounded-pill fw-medium">
                                Disponibile per
                            </Button>
                        </Col>
                        <Col xs={6} lg={3}>
                            <Button variant="outline-primary" className="rounded-pill fw-medium ">
                                Aggiungi sezione del profilo
                            </Button>
                        </Col>
                        <Col xs={3} lg={3}>
                            <Button variant="outline-secondary" className="rounded-pill border-secondary fw-medium ">
                                Risorse
                            </Button>
                        </Col>
                        <Col xs={12} lg={3}>
                            <Button variant="outline-primary" className="rounded-pill fw-medium  w-100">
                                Migliora profilo
                            </Button>
                        </Col>
                    </Row>






                </Col>
            </Row>

        </Container>



    )

}

export default HeroSection