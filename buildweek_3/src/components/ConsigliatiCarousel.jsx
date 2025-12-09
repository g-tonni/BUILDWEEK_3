import Carousel from 'react-bootstrap/Carousel'
import ProfileRecommendations from './Card'
import ProfileRecommendationss from './Card2'
import ProfileRecommendations3 from './Card3'

function ConsigliatiCarousel() {
  return (
    <>
      <Carousel data-bs-theme="dark">
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
