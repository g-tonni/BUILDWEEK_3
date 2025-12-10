import Carousel from 'react-bootstrap/Carousel'
import ProfileRecommendations from './Card'
import ProfileRecommendationss from './Card2'
import ProfileRecommendations3 from './Card3'
import { useParams } from "react-router-dom"

function ConsigliatiCarousel() {
  const params = useParams()

  return (
    <>
      <Carousel data-bs-theme="dark" className={(params.id === "me" ? "" : " d-none")} >
        <Carousel.Item className=" justify-content-center">
          <ProfileRecommendations />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="  justify-content-center">
          <ProfileRecommendationss />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="  justify-content-center">
          <ProfileRecommendations3 />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default ConsigliatiCarousel
