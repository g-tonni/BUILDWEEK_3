import { Button, Container, Row, Col, Image, Carousel, Card } from "react-bootstrap"
import { LuPencil } from "react-icons/lu"
import { PiBuildingsDuotone } from "react-icons/pi"
import { BiSolidBadgeCheck } from "react-icons/bi"
import { FaPlus } from "react-icons/fa6"
import { Link } from "react-router-dom"

const HeroSection = function () {
    return (

        <Container className="my-3 border rounded-3 bg-white">
            <Row>
                <Col xs={12} className="backGround position-relative">
                    {/* sfondo copertina in bg */}
                    <div className="position-absolute top-100 start-0 translate-middle-y ms-3">
                        <Image
                            src="https://placebear.com/100/100"
                            alt="img profilo"
                            roundedCircle
                            className="shadow"
                        />
                        <FaPlus
                            className="position-absolute bottom-0 end-0 bg-white rounded-circle p-1 border"
                            size={24}
                        />
                    </div>
                </Col>
                <Col xs={12} className=" my-3 d-flex w-100 justify-content-end">
                    {/* matita */}
                    <LuPencil className="fs-5" />

                </Col>
                {/* foto profilo */}


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
                <Col xs={12} className="my-3">
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
                <Row>
                    <Col xs={12}>
                        <Carousel indicators={false} controls={true} className="my-3">

                            <Carousel.Item>
                                <Row>
                                    <Col xs={6}>
                                        <Card className="bg-light rounded-3 border shadow-sm mx-auto  h-100">
                                            <Card.Body>

                                                <Card.Text>
                                                    <p className="mb-2 ">
                                                        <span className="fw-semibold">Mostra ai recruiter che sei disponibile a lavorare:</span>
                                                        Sei tu che decidi chi può vedere questa informazione.</p>
                                                </Card.Text>
                                                <Card.Link href="#">Inizia</Card.Link>

                                            </Card.Body>
                                        </Card>

                                    </Col>

                                    <Col xs={6}>
                                        <Card className="bg-light rounded-3 border shadow-sm mx-auto  h-100">
                                            <Card.Body>

                                                <Card.Text>
                                                    <p className="mb-2"><span className="fw-semibold">Fai sapere che stai facendo selezione</span> e attrai candidati qualificati.</p>
                                                </Card.Text>
                                                <Card.Link href="#">Inizia</Card.Link>

                                            </Card.Body>
                                        </Card>

                                    </Col>

                                </Row>

                            </Carousel.Item>
                            <Carousel.Item>
                                <Row>
                                    <Col xs={6}>
                                        <Card className="bg-light rounded-3 border shadow-sm mx-auto  h-100">
                                            <Card.Body>

                                                <Card.Text>
                                                    <p className="mb-2"><span className="fw-semibold">Metti in risalto i tuoi servizi</span>
                                                        <br /> in un'apposita sezione del tuo profilo, così sarà più facile trovarti.</p>
                                                </Card.Text>
                                                <Card.Link href="#">Inizia</Card.Link>

                                            </Card.Body>
                                        </Card>

                                    </Col>
                                </Row>
                            </Carousel.Item>
                        </Carousel>
                    </Col>




                </Row>
            </Row >


        </Container >



    )

}

export default HeroSection