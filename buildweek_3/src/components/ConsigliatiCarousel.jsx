import Carousel from 'react-bootstrap/Carousel'
import ProfileRecommendations from './Card'
import ProfileRecommendationss from './Card2'
import ProfileRecommendations3 from './Card3'
import { useParams } from "react-router-dom"
import { Row, Col, Container } from "react-bootstrap"
import { IoEye } from "react-icons/io5"

function ConsigliatiCarousel() {
  const params = useParams()

  return (
    <Container className={"bg-white border rounded-3" + (params.id === "me" ? "" : " d-none")}>
      <Row className='h-100'>
        <Col xs={12} className="m-3 ">
          <h4>Consigliato per te</h4>
          <div className="d-flex align-items-center">
            <IoEye className="fs-5 text-secondary me-2" /> <span className="fs-6 text-secondary" > Solo per te</span>
          </div>
        </Col>
        <Col xs={12} className='h-100'>

          <Carousel indicators={false} controls={true} className="my-3">
            <Carousel.Item>
              <Row className='h-100'>
                <Col xs={6} className='h-100'>
                  <ProfileRecommendations />
                </Col>

                <Col xs={6} className='h-100'>
                  <ProfileRecommendationss />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className='h-100'>
                <Col xs={6} className='h-100'>
                  <ProfileRecommendations3 />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}

export default ConsigliatiCarousel
