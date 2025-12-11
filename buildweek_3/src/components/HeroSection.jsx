import {
    Button,
    Container,
    Row,
    Col,
    Image,
    Carousel,
    Card,
    Alert,
} from 'react-bootstrap'
import { IoPersonAddSharp } from "react-icons/io5"
import { LuPencil } from 'react-icons/lu'
import { PiBuildingsDuotone } from 'react-icons/pi'
import { BiSolidBadgeCheck } from 'react-icons/bi'
import { FaPlus } from 'react-icons/fa6'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../redux/action'

const HeroSection = function (props) {
    const profiloUtente = useSelector((currState) => {
        return currState.profiles.profiloUtente
    })

    console.log('PROF', profiloUtente)

    const params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfile(params.id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id])

    return (
        <Container className="my-3 border rounded-3 bg-white">
            {profiloUtente ? (
                <>
                    <Row>
                        <Col xs={12} className="backGround position-relative">
                            {/* sfondo copertina in bg */}
                            <div className="position-absolute top-100 start-0 translate-middle-y ms-3">
                                <Image
                                    src={profiloUtente.image}
                                    alt="img profilo"
                                    style={{ width: '120px', height: '120px' }}
                                    roundedCircle
                                    className="shadow"
                                />
                                <Link onClick={() => {
                                    props.openModal(true)
                                }}>
                                    <FaPlus
                                        className="position-absolute bottom-0 end-0 bg-white rounded-circle p-1 border border-1 border-primary text-primary"
                                        size={24}
                                    /></Link>
                            </div>
                        </Col>
                        <Col xs={12} className=" my-3 d-flex w-100 justify-content-end">
                            {/* matita */}
                            <LuPencil className={"fs-5" + (params.id === "me" ? "" : " d-none")} />
                        </Col>
                        {/* foto profilo */}

                        <Row className="align-items-center mt-4">
                            <Col xs={9} className="d-flex flex-wrap justify-content-between">
                                <Row className="align-items-center w-100">
                                    <Col xs={12} lg={6}>
                                        <h4>
                                            {profiloUtente.name} {profiloUtente.surname}
                                        </h4>
                                    </Col>
                                    <Col xs={12} lg={6}>
                                        <Button
                                            variant="outline-primary"
                                            className={"rounded-pill fs-6 fw-medium border-primary border-dashed w-100" + (params.id === "me" ? "" : " d-none")}
                                        >
                                            <BiSolidBadgeCheck /> Aggiungi badge di verifica
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={3} className="text-center">
                                {/* icona */}
                                <PiBuildingsDuotone className="me-2" />
                                <span>Luogo di lavoro</span>
                            </Col>
                            <Col>
                                <p>{profiloUtente.title}</p>
                                <p>
                                    {profiloUtente.area} - <a>{profiloUtente.email}</a>
                                </p>
                            </Col>
                        </Row>

                        <Col xs={12} className="my-3">
                            <Row className="g-3">
                                {params.id === "me" ? (
                                    <>   <Col xs={3} md={12} lg={3}>

                                        <Button
                                            variant="primary"
                                            className="rounded-pill fw-medium w-100"
                                        >
                                            Disponibile per
                                        </Button>
                                    </Col>
                                        <Col xs={6} lg={3}>
                                            <Button
                                                variant="outline-primary"
                                                className="rounded-pill fw-medium w-100"
                                            >
                                                Aggiungi sezione
                                            </Button>
                                        </Col>
                                        <Col xs={3} lg={3}>
                                            <Button
                                                variant="outline-secondary"
                                                className="rounded-pill border-secondary fw-medium w-100 "
                                            >
                                                Risorse
                                            </Button>
                                        </Col>
                                        <Col xs={12} lg={3}>
                                            <Button
                                                variant="outline-primary"
                                                className="rounded-pill fw-medium  w-100"
                                            >
                                                Migliora profilo
                                            </Button>
                                        </Col>
                                    </>) : (
                                    <>
                                        <Col xs={3} md={12} lg={4}>

                                            <Button
                                                variant="primary"
                                                className="rounded-pill fw-medium w-100"
                                            >
                                                <IoPersonAddSharp className="me-2 fs-5" />
                                                Collegati
                                            </Button>
                                        </Col>
                                        <Col xs={6} lg={4}>
                                            <Button
                                                variant="outline-primary"
                                                className="rounded-pill fw-medium w-100"
                                            >
                                                Messaggio
                                            </Button>
                                        </Col>
                                        <Col xs={3} lg={4}>
                                            <Button
                                                variant="outline-secondary"
                                                className="rounded-pill border-secondary fw-medium w-100 "
                                            >
                                                Altro
                                            </Button>
                                        </Col>

                                    </>

                                )}

                            </Row>
                        </Col>
                        <Row>
                            <Col xs={12} className={(params.id === "me" ? "" : " d-none")}>
                                <Carousel indicators={false} controls={true} className="my-3">
                                    <Carousel.Item>
                                        <Row>
                                            <Col xs={6}>
                                                <Card className="bg-light rounded-3 border shadow-sm mx-auto  h-100">
                                                    <Card.Body>
                                                        <Card.Text>
                                                            <span className="fw-semibold">
                                                                Mostra ai recruiter che sei disponibile a
                                                                lavorare:
                                                            </span>
                                                            Sei tu che decidi chi può vedere questa
                                                            informazione.
                                                        </Card.Text>
                                                        <Card.Link
                                                            href="#"
                                                            className="text-decoration-none"
                                                        >
                                                            Inizia
                                                        </Card.Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            <Col xs={6}>
                                                <Card className="bg-light rounded-3 border shadow-sm mx-auto  h-100">
                                                    <Card.Body>
                                                        <Card.Text>
                                                            <span className="fw-semibold">
                                                                Fai sapere che stai facendo selezione
                                                            </span>{' '}
                                                            e attrai candidati qualificati.
                                                        </Card.Text>
                                                        <Card.Link
                                                            href="#"
                                                            className="text-decoration-none"
                                                        >
                                                            Inizia
                                                        </Card.Link>
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
                                                            <span className="fw-semibold">
                                                                Metti in risalto i tuoi servizi
                                                            </span>
                                                            <br /> in un'apposita sezione del tuo profilo,
                                                            così sarà più facile trovarti.
                                                        </Card.Text>
                                                        <Card.Link
                                                            href="#"
                                                            className="text-decoration-none"
                                                        >
                                                            Inizia
                                                        </Card.Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                        </Row>
                    </Row>
                </>
            ) : (
                <Alert>Errore</Alert>
            )}
        </Container>
    )
}

export default HeroSection
