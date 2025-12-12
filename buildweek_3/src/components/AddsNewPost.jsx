
import { Button, Card, Col, Dropdown, Row, Form } from "react-bootstrap"
import { IoLogoYoutube } from "react-icons/io"
import { AiFillPicture } from "react-icons/ai"
import { RiArticleFill } from "react-icons/ri"




const AddsNewPosts = function (props) {

    return (
        < Card className="mt-3">
            <Row className="align-items-start mb-3">
                <Col>
                    <div className="d-flex align-items-center justify-content-between mt-3 mx-4">

                        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" style={{ width: "60px", height: "60px" }} className="me-3 rounded-circle" />


                        <div className="flex-grow-1">
                            <Button variant="light"
                                className="text-start rounded-pill w-100"
                                onClick={() => props.openModal1(true)}>Crea un post</Button>
                        </div>


                    </div>


                </Col>
            </Row>

            <Row>

                <Col className="text-center py-3 d-flex justify-content-around">
                    <Button variant="outline-light" className="text-dark fs-5 fw-medium border-0 d-flex align-items-center"><IoLogoYoutube className="fs-3 me-2 text-success" /> Video</Button>
                    <Button variant="outline-light" className="text-dark fs-5 fw-medium border-0 d-flex align-items-center"><AiFillPicture className="fs-3 me-2 text-primary" />  Foto</Button>
                    <Button variant="outline-light" className="text-dark fs-5 fw-medium border-0 d-flex align-items-center"><RiArticleFill className="fs-3 me-2 text-danger" /> Scrivi un articolo</Button>

                </Col>
            </Row>
        </Card >

    )

}

export default AddsNewPosts