import { Container, Row, Col } from 'react-bootstrap'
import ProfileSidebar from './SidebarSxHome.jsx'
import MiniFoot from './MiniFooter.jsx'
import GetJobs from './Jobs.jsx'
import JobsCategory from './JobCategory.jsx'

const JobP = function () {


  return (
    <Container>
      <Row>
        <Col xs={12} md={4} className="h-50">
          <ProfileSidebar />
          <div className="d-none d-lg-block">
            <MiniFoot />
          </div>


        </Col>


        <Col xs={12} md={8} className="mt-3">
          <JobsCategory />
          <GetJobs />
          <div className="d-lg-none">
            <MiniFoot />
          </div>
        </Col>

      </Row>
    </Container>
  )
}

export default JobP