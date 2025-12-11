import { Container, Row, Col } from "react-bootstrap"
import HPColonnaPost from "./HPColonnaPost"


const HomePage = function () {
    return (

        <Container>
            <Row className="justify-content-end mt-3">
                <Col xs={12} md={4} lg={2}>
                    <p>SINISTRA</p>
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