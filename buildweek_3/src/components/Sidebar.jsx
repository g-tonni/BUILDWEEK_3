import { useEffect, useState } from "react"
import SidebarContainer from './SidebarContainer'
import SidebarProfile from './SidebarProfile'
import { IoMdPersonAdd } from 'react-icons/io'
import { MdAdd } from 'react-icons/md'

const Sidebar = function () {

  const [sez1, setSez1] = useState([])
  const [sez2, setSez2] = useState([])

  const getProfile = () => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM4M2Q1YjYwMWIzODAwMTU0Nzk1NzIiLCJpYXQiOjE3NjUyOTM0MDMsImV4cCI6MTc2NjUwMzAwM30.gvIHt1f99YwL5uN0bIJSuEL3vle2nXwlLPeXm0bNUzQ"
      }
    }
    )

      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("errore")
        }
      })
      .then((profile) => {
        console.log("tutti i profili", profile.slice(profile.length - 10, profile.length))
        setSez1(profile.slice(profile.length - 5, profile.length))
        setSez2(profile.slice(profile.length - 10, profile.length - 5))
      })

      .catch((err) => {
        console.log("errore", err)
      })

  }

  useEffect(() => {

    getProfile()



  }, [])


  return (

    <>
      <SidebarContainer title="Altri profili per te" subtitle="No">
        {sez1.map((profilo) => {
          return (< SidebarProfile key={profilo._id}
            des={profilo.title}
            name={`${profilo.name} ${profilo.surname} `}
            image={profilo.image}
            line="Si"
          >
            <IoMdPersonAdd className="me-2" />
            Collegati
          </SidebarProfile>)
        })
        }

      </SidebarContainer >

      <SidebarContainer
        title="Persone che potresti conoscere"
        subtitle="Si"
        des="Dalla scuola o università di Sara"
      >
        {sez2.map((profilo) => {
          return (< SidebarProfile key={profilo._id}
            des={profilo.title}
            name={`${profilo.name} ${profilo.surname} `}
            image={profilo.image}
            line="Si"
          >
            <IoMdPersonAdd className="me-2" />
            Collegati
          </SidebarProfile>)
        })
        }


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
  )
}

export default Sidebar
