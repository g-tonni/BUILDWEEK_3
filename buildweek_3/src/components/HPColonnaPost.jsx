
import { Button, Card, Col, Dropdown, Row } from "react-bootstrap"
import { HiDotsHorizontal } from "react-icons/hi"
import { PiTagChevronBold, PiCodeBold } from "react-icons/pi"
import { FaRegStar, FaLink, FaRegCommentDots, FaRepeat } from "react-icons/fa6"
import { FiEdit2 } from "react-icons/fi"
import { MdDelete } from "react-icons/md"
import { IoEye } from "react-icons/io5"
import { AiOutlineLike } from "react-icons/ai"
import { BsFillSendFill } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { addNewPost } from "../redux/action/homePageActions"


const HPColonnaPost = function ({ userPosts, openModal }) {

    const dispatch = useDispatch()

    return (

        <>
            {
                userPosts.map((post) => {
                    return (
                        <>

                            < Card className="mt-3" key={post._id}>
                                <Row className="align-items-start mb-3">
                                    <Col>
                                        <div className="d-flex align-items-center justify-content-between mt-3 mx-4">
                                            <div className="d-flex">
                                                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" style={{ width: "60px", height: "60px" }} className="me-3 rounded-circle" />


                                                <div>
                                                    <h5 className="mb-0">{post.username}</h5>
                                                    <p className="text-dark mb-2" style={{ fontSize: "12px" }}> {new Date(post.createdAt).toLocaleDateString()}
                                                    </p>
                                                </div>
                                            </div>
                                            <div >
                                                {/* tre puntini */}
                                                <Dropdown>
                                                    <Dropdown.Toggle className="bg-transparent  border-0 text-dark rimuoviFreccia " id="dropdown-basic">
                                                        <HiDotsHorizontal />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item className="d-flex mb-2 fw-medium align-items-center" href="#/action-1">
                                                            <FaRegStar className="fs-4 me-2" />
                                                            Metti in primo piano nella parte superiore del profilo</Dropdown.Item>
                                                        <Dropdown.Item className="d-flex mb-2 fw-medium align-items-center" href="#/action-2">  <PiTagChevronBold className="fs-4 me-2" /> Salva</Dropdown.Item>
                                                        <Dropdown.Item className="d-flex mb-2 fw-medium align-items-center" href="#/action-3"><FaLink className="fs-4 me-2" /> Copia link al post</Dropdown.Item>
                                                        <Dropdown.Item className="d-flex mb-2 fw-medium align-items-center" href="#/action-1"><PiCodeBold className="fs-4 me-2" /> Incorpora questo post</Dropdown.Item>
                                                        <Dropdown.Item className="d-flex mb-2 fw-medium align-items-center"
                                                            href="#/action-2"
                                                            onClick={() => {
                                                                dispatch(addNewPost(post._id))
                                                                openModal(true)
                                                            }}><FiEdit2 className="fs-4 me-2" /> Modifica post</Dropdown.Item>
                                                        <Dropdown.Item className="d-flex mb-2 fw-medium align-items-center" href="#/action-3"><MdDelete className="fs-4 me-2" /> Elimina post</Dropdown.Item>
                                                        <Dropdown.Item className="d-flex mb-2 fw-medium align-items-center" href="#/action-1"><FaRegCommentDots className="fs-4 me-2" /> Chi può commentare questo post?</Dropdown.Item>
                                                        <Dropdown.Item className="d-flex mb-2 fw-medium align-items-center" href="#/action-2"><IoEye className="fs-4 me-2" /> Chi può vedere questo post?</Dropdown.Item>

                                                    </Dropdown.Menu>
                                                </Dropdown>

                                            </div>
                                        </div>


                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="ms-4 mb-0">
                                            {post.text
                                            }
                                        </p>

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
                        </>
                    )
                })
            }
        </>


    )

}

export default HPColonnaPost