import { Row, Col } from 'react-bootstrap'

const SidebarProfile = function ({ children, image, name, des, line }) {
  return (
    <Row className=" mt-3 px-3">
      <Col xs={3} md={4} xl={2} className="p-0 pe-3">
        <img src={image} alt="Profilo" className="w-100 rounded-circle" />
      </Col>
      <Col xs={9} md={8} xl={10} className="p-0">
        <p className="fw-bold mb-1" style={{ fontSize: '18px' }}>
          {name}
        </p>
        <p style={{ fontSize: '15px' }} className="text-truncate-2">
          {des}
        </p>
        <button className="bg-light rounded-pill py-1 px-3 d-flex align-items-center">
          {children}
        </button>
      </Col>
      <hr className={'mt-4 mb-0 ' + (line === 'Si' ? 'd-block' : 'd-none')} />
    </Row>
  )
}

export default SidebarProfile
