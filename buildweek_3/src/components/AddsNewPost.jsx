import { useEffect, useState } from "react"
import { Button, Card, Col, Dropdown, Row, Form } from "react-bootstrap"
import { HiDotsHorizontal } from "react-icons/hi"
import { PiTagChevronBold, PiCodeBold } from "react-icons/pi"
import { FaRegStar, FaLink, FaRegCommentDots, FaRepeat } from "react-icons/fa6"
import { FiEdit2 } from "react-icons/fi"
import { MdDelete } from "react-icons/md"
import { IoEye } from "react-icons/io5"
import { AiOutlineLike } from "react-icons/ai"
import { BsFillSendFill } from "react-icons/bs"

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
                                onClick={() => props.openModal(true)}>Crea un post</Button>
                        </div>


                    </div>


                </Col>
            </Row>

            <Row>

                <Col className="text-center py-3 d-flex justify-content-around">
                    <Button variant="outline-light" className="text-dark fw-medium border-0 d-flex align-items-center"><AiOutlineLike className="fs-4 me-2" /> Consiglia</Button>
                    <Button variant="outline-light" className="text-dark fw-medium border-0 d-flex align-items-center"><FaRegCommentDots className="fs-5 me-2" />  Commenta</Button>
                    <Button variant="outline-light" className="text-dark fw-medium border-0 d-flex align-items-center"><FaRepeat className="fs-5 me-2" /> Diffondi il post</Button>
                    <Button variant="outline-light" className="text-dark fw-medium border-0 d-flex align-items-center"><BsFillSendFill className="fs-6 me-2" /> Invia</Button>
                </Col>
            </Row>
        </Card >

    )

}

export default AddsNewPosts