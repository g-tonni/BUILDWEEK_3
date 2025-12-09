import { Container } from 'react-bootstrap'

const SidebarContainer = function ({ title, subtitle, des, children }) {
  return (
    <div className="mb-2">
      <div className="bg-light p-4 border border-grigio rounded-top-4">
        <h6 className="mb-0 fw-bold">{title}</h6>
        <p
          className={'opacity-50 ' + (subtitle === 'Si' ? 'd-block' : 'd-none')}
          style={{ fontSize: '15px' }}
        >
          {des}
        </p>
        <Container fluid className="p-0">
          {children}
        </Container>
      </div>
      <button className="border border-top-0 rounded-bottom-4 py-2 bg-light w-100">
        Mostra Tutto
      </button>
    </div>
  )
}

export default SidebarContainer
