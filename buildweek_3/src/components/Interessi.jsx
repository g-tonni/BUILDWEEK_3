import { Container, Row, Col } from 'react-bootstrap'
import SidebarProfile from './SidebarProfile'
import { IoMdPersonAdd } from 'react-icons/io'
import { MdAdd } from 'react-icons/md'
import { useState } from 'react'

const Interessi = function () {
  const [sezione, setSezione] = useState('Top Voices')

  return (
    <Container fluid className="mt-3 bg-white rounded-3 border">
      <Row>
        <Col className="p-4 pb-3">
          <h4 className="mb-0">Interessi</h4>
        </Col>
      </Row>

      <Row>
        <Col>
          <div>
            <button
              className={
                'border-0 border-success bg-transparent ms-2 pb-3 ' +
                (sezione === 'Top Voices' ? 'text-success border-bottom' : '')
              }
              onClick={() => {
                setSezione('Top Voices')
              }}
            >
              Top Voices
            </button>
            <button
              className={
                'border-0 border-success bg-transparent ms-2 pb-3 ' +
                (sezione === 'Aziende' ? 'text-success border-bottom' : '')
              }
              onClick={() => {
                setSezione('Aziende')
              }}
            >
              Aziende
            </button>
            <button
              className={
                'border-0 border-success bg-transparent ms-2 pb-3 ' +
                (sezione === 'Gruppi' ? 'text-success border-bottom' : '')
              }
              onClick={() => {
                setSezione('Gruppi')
              }}
            >
              Gruppi
            </button>
            <button
              className={
                'border-0 border-success bg-transparent ms-2 pb-3 ' +
                (sezione === 'Newsletter' ? 'text-success border-bottom' : '')
              }
              onClick={() => {
                setSezione('Newsletter')
              }}
            >
              Newsletter
            </button>
            <button
              className={
                'border-0 border-success bg-transparent ms-2 pb-3 ' +
                (sezione === 'Scuole o Università'
                  ? 'text-success border-bottom'
                  : '')
              }
              onClick={() => {
                setSezione('Scuole o Università')
              }}
            >
              Scuole o Università
            </button>
          </div>
          <hr className="mt-0" />
          <Row>
            <Col xs={6}>
              {sezione === 'Top Voices' && (
                <SidebarProfile
                  des="Executive Chairman at LinkedIn / Founding Partner Next Play VenturesExecutive Chairman at LinkedIn / Founding Partner Next Play Ventures"
                  name="Jeff Weiner"
                  image="https://media.licdn.com/dms/image/v2/C4D03AQFM3Y2r-OEStw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1515623805035?e=1766620800&v=beta&t=5ZNqfTBYkPhaSFFK2OEdfYOMecBKT3dmRRAPgdmt8Hw"
                  line="No"
                >
                  <IoMdPersonAdd className="me-2" />
                  Collegati
                </SidebarProfile>
              )}
              {sezione === 'Aziende' && (
                <SidebarProfile
                  des="14.175.771 follower"
                  name="Accenture"
                  image="https://media.licdn.com/dms/image/v2/D4D0BAQEgtOEcxlXMog/company-logo_100_100/B4DZfqEQWkHAAY-/0/1751978673981/accenture_logo?e=1766620800&v=beta&t=goHAfoNPMZ5zsfgcm0F726ZjhORI5p6mRy2Im5F6mZM"
                  line="No"
                >
                  <MdAdd className="me-2" />
                  Segui
                </SidebarProfile>
              )}
              {sezione === 'Gruppi' && (
                <SidebarProfile
                  des="2.032.203 utenti"
                  name="🧑🏽‍💻Power BI: Business Intelligence Dashboards, Analysis for Analysts & Chief Operating Officers"
                  image="https://media.licdn.com/dms/image/v2/C4D07AQFpa3q3JBBuUw/group-logo_image-shrink_48x48/group-logo_image-shrink_48x48/0/1641725275905?e=1765886400&v=beta&t=UzlbZOdXJOpBEAA2vcgs-ImQocOOFu-dPmsKaeRMrao"
                  line="No"
                >
                  <MdAdd className="me-2" />
                  Iscriviti
                </SidebarProfile>
              )}
              {sezione === 'Newsletter' && (
                <SidebarProfile
                  des="Explore new ideas through original video series — from TED"
                  name="TED Originals"
                  image="https://media.licdn.com/dms/image/v2/D4E12AQEzA2wNKM6yDQ/series-logo_image-shrink_100_100/B4EZldfUUnGoAU-/0/1758210115193?e=1766620800&v=beta&t=B8dXupakAV9uHs9JiaSj8BmAhkt63iMCBlP3ITz_q_E"
                  line="No"
                >
                  <MdAdd className="me-2" />
                  Iscriviti
                </SidebarProfile>
              )}
              {sezione === 'Scuole o Università' && (
                <SidebarProfile
                  des="19.934 follower"
                  name="RCS Academy"
                  image="https://media.licdn.com/dms/image/v2/D4E12AQEzA2wNKM6yDQ/series-logo_image-shrink_100_100/B4EZldfUUnGoAU-/0/1758210115193?e=1766620800&v=beta&t=B8dXupakAV9uHs9JiaSj8BmAhkt63iMCBlP3ITz_q_E"
                  line="No"
                >
                  <MdAdd className="me-2" />
                  Segui
                </SidebarProfile>
              )}
            </Col>
            <Col xs={6}>
              {sezione === 'Top Voices' && (
                <SidebarProfile
                  des="Executive Empowerment Coach, Decades of Working with Individuals at Tech Companies and Start-ups, Fostering Career Growth, Award-winning Self-help Author, Radio and Podcast GuestExecutive Empowerment Coach, Decades of Working with Individuals at Tech Companies and Start-ups, Fostering Career Growth, Award-winning Self-help Author, Radio and Podcast Guest"
                  name="Judith Sherven, PhD"
                  image="https://media.licdn.com/dms/image/v2/D5603AQGUOGC5avlF8A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1727740014077?e=1766620800&v=beta&t=iLCb5CLhlWxFz_L669kIxpKiZ01MhQgK-flQ7hWi_Fs"
                  line="No"
                >
                  <IoMdPersonAdd className="me-2" />
                  Collegati
                </SidebarProfile>
              )}
              {sezione === 'Aziende' && (
                <SidebarProfile
                  des="20.503.068 follower"
                  name="Deloitte"
                  image="https://media.licdn.com/dms/image/v2/C560BAQGNtpblgQpJoQ/company-logo_100_100/company-logo_100_100/0/1662120928214/deloitte_logo?e=1766620800&v=beta&t=ZvwTiW4775kJWhQzWfCcZPpIVymdVLh1GtgfclhvIGQ"
                  line="No"
                >
                  <MdAdd className="me-2" />
                  Segui
                </SidebarProfile>
              )}
              {sezione === 'Gruppi' && (
                <SidebarProfile
                  des="3.124 utenti"
                  name="Formazione, Coaching e Training, Comunicazione, Potenziale Umano, Risorse Umane, Management"
                  image="https://media.licdn.com/dms/image/v2/C4E07AQGY-Yn46SXShA/group-logo_image-shrink_48x48/group-logo_image-shrink_48x48/0/1631376118530?e=1765886400&v=beta&t=HGpPzteDSd41akO9uC91A1VxhE9xSV4NYVlmsa4ztS0"
                  line="No"
                >
                  <MdAdd className="me-2" />
                  Iscriviti
                </SidebarProfile>
              )}
              {sezione === 'Newsletter' && (
                <SidebarProfile
                  des="La nuova e speciale newsletter di Banca Sella dedicata all’educazione finanziaria femminile"
                  name="Percorsi - Borsa Rosa"
                  image="https://media.licdn.com/dms/image/v2/D4D12AQGat-LOCauO2A/series-logo_image-shrink_100_100/B4DZcbYiAhIEAk-/0/1748511105981?e=1766620800&v=beta&t=HwcdbIK-dHpJaqPfZ44TxxwMztijuNKH-pS6jJeKbBc"
                  line="No"
                >
                  <MdAdd className="me-2" />
                  Iscriviti
                </SidebarProfile>
              )}
              {sezione === 'Scuole o Università' && (
                <SidebarProfile
                  des="140.339 follower"
                  name="Talent Garden"
                  image="https://media.licdn.com/dms/image/v2/C4E0BAQHLIyeDPcT6tw/company-logo_100_100/company-logo_100_100/0/1655285829893/talent_garden_innovation_school_logo?e=1766620800&v=beta&t=Y4hPCmZCkBDTNk_yPv56jrrEMAL2rlGDFfEnMEnuKsA"
                  line="No"
                >
                  <MdAdd className="me-2" />
                  Segui
                </SidebarProfile>
              )}
            </Col>
          </Row>
        </Col>
      </Row>

      <hr className="mb-0 my-0 mt-4" />

      <Row>
        <Col className="text-center py-3">
          <a href="#" className="fw-semibold text-decoration-none text-black ">
            Mostra tutte le Top Voice <i className="bi bi-arrow-right"></i>
          </a>
        </Col>
      </Row>
    </Container>
  )
}

export default Interessi
