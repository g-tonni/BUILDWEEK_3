import { useEffect, useState } from 'react'
import SidebarContainer from './SidebarContainer'
import SidebarProfile from './SidebarProfile'
import { IoMdPersonAdd } from 'react-icons/io'
import { MdAdd } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProfiles } from '../redux/action'
import { Link } from "react-router-dom"

const Sidebar = function () {
  const profili = useSelector((currState) => {
    return currState.profiles.profili
  })

  const prof1 = profili.slice(0, 5)
  const prof2 = profili.slice(5, 10)

  console.log('PRIMI PROF', profili)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProfiles())
  }, [])

  return (
    <>
      {profili !== null ? (
        <>
          <SidebarContainer title="Altri profili per te" subtitle="No">
            {prof1.map((profilo) => {
              return (
                <Link
                  className="text-decoration-none text-dark"
                  to={`/profile/${profilo._id}`}>
                  <SidebarProfile
                    key={profilo._id}
                    des={profilo.title}
                    name={`${profilo.name} ${profilo.surname} `}
                    image={profilo.image}
                    line="Si"
                  >
                    <IoMdPersonAdd className="me-2" />
                    Collegati
                  </SidebarProfile>
                </Link>
              )
            })}
          </SidebarContainer>

          <SidebarContainer
            title="Persone che potresti conoscere"
            subtitle="Si"
            des="Dalla scuola o università di Sara"
          >
            {prof2.map((profilo) => {
              return (
                <Link
                  className="text-decoration-none text-dark"
                  to={`/profile/${profilo._id}`}>
                  <SidebarProfile
                    key={profilo._id}
                    des={profilo.title}
                    name={`${profilo.name} ${profilo.surname} `}
                    image={profilo.image}
                    line="Si"
                  >
                    <IoMdPersonAdd className="me-2" />
                    Collegati
                  </SidebarProfile>
                </Link>
              )
            })}
          </SidebarContainer>

          <SidebarContainer
            title="Potrebbe interessarti"
            subtitle="Si"
            des="Pagine per te"
          >
            <SidebarProfile
              des="Servizi IT e consulenza ITServizi IT e consulenza IT 159.283 follower"
              name="Zucchetti"
              image="https://media.licdn.com/dms/image/v2/D4D0BAQGHN1g4e06lcg/company-logo_100_100/company-logo_100_100/0/1715241379105/zucchetti_logo?e=1766620800&v=beta&t=xiz7eLjcnpZpS3eXJp7v1GqR80bMUmfp373J1dz1deo"
              line="Si"
            >
              <MdAdd className="me-2" />
              Segui
            </SidebarProfile>

            <SidebarProfile
              des="Consulenza e servizi aziendaliConsulenza e servizi aziendali 55.370 follower"
              name="Ingegneria Italia"
              image="https://media.licdn.com/dms/image/v2/C4E0BAQG72kQeUcadPw/company-logo_100_100/company-logo_100_100/0/1648115511894/ingegneria_italia_logo?e=1766620800&v=beta&t=6v3gwUfKZBuT4txOU7u2x6UxHaJ8MueuO3ZcAHgMjos"
              line="No"
            >
              <MdAdd className="me-2" />
              Segui
            </SidebarProfile>
          </SidebarContainer>
        </>
      ) : (
        <div>ERRORE</div>
      )}
    </>
  )
}

export default Sidebar
