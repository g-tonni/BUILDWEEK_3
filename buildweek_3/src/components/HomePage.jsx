import { Container, Row, Col } from "react-bootstrap"
import HPColonnaPost from "./HPColonnaPost"
import ProfileSidebar from "./SidebarSxHome"
import { useEffect, useState } from "react"
import AddsNewPosts from "./AddsNewPost"
import ModaleNewPost from "./ModaleNewPost"

import RightHome from "./RightHome"

const HomePage = function () {

    const [modalShow, setModalShow] = useState(false);
    const openModal = (value) => {
        setModalShow(value)

    }

    const aggiornaDopoLaPost = () => {
        getPostHomePage()

    }

    const url = "https://striveschool-api.herokuapp.com/api/posts/"

    const [userPosts, setUserPosts] = useState([])

    const getPostHomePage = () => {
        fetch(url, {
            headers: {
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM4M2Q1YjYwMWIzODAwMTU0Nzk1NzIiLCJpYXQiOjE3NjUyOTM0MDMsImV4cCI6MTc2NjUwMzAwM30.gvIHt1f99YwL5uN0bIJSuEL3vle2nXwlLPeXm0bNUzQ',
            },
        }

        )
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error("errore")
                }

            })
            .then((arrayOfPosts) => {
                setUserPosts(arrayOfPosts.slice(arrayOfPosts.length - 15, arrayOfPosts.length))
                console.log(arrayOfPosts)
            })
            .catch((err) => {

                console.log("errore fetch POST", err)
            })
    }

    useEffect(() => {
        getPostHomePage()
    }, [])


    
    return (

        <Container>
            <Row className="justify-content-end mt-3">
                <Col xs={12} md={4} lg={2}>
                    <ProfileSidebar />
                </Col>
                <Col xs={12} md={8} lg={7}>
                    <AddsNewPosts openModal={openModal} />

                    <ModaleNewPost show={modalShow}
                        aggiornaDopoLaPost={aggiornaDopoLaPost}
                        openModal={openModal}
                        onHide={() => setModalShow(false)} />

                    <HPColonnaPost
                        aggiornaDopoLaPost={aggiornaDopoLaPost}
                        openModal={openModal}
                        userPosts={userPosts} />
                </Col>
                <Col xs={12} md={8} lg={3} ><RightHome /></Col>

            </Row>

        </Container>

    )


}

export default HomePage