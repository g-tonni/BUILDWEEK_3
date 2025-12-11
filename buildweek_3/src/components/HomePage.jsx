import { Container, Row, Col } from "react-bootstrap"
import HPColonnaPost from "./HPColonnaPost"
import ProfileSidebar from "./SidebarSxHome"

const HomePage = function () {

    return (

        <Container>
            <Row className="justify-content-end mt-3">
                <Col xs={12} md={4} lg={2}>
                    <ProfileSidebar />
                </Col>
                <Col xs={12} md={8} lg={7}>
                    <HPColonnaPost />
                </Col>
                <Col xs={12} md={8} lg={3} ><p>DESTRA</p></Col>

            </Row>

        </Container>

    )


}

export default HomePage