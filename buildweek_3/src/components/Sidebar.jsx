import SidebarContainer from './SidebarContainer'
import SidebarProfile from './SidebarProfile'
import { IoMdPersonAdd } from 'react-icons/io'
import { MdAdd } from 'react-icons/md'

const Sidebar = function () {
  return (
    <>
      <SidebarContainer title="Altri profili per te" subtitle="No">
        <SidebarProfile
          des="Gestore Family-POE presso Banco DesioGestore Family-POE presso Banco Desio"
          name="Fabio Schiavo"
          image="https://media.licdn.com/dms/image/v2/D4D03AQGpL2sbDFqScg/profile-displayphoto-scale_100_100/B4DZm.32T6GwAc-/0/1759843937658?e=1766620800&v=beta&t=ZcPvFDpaI_Vv82cOJE3j_g1XE_qW9C-EBFGvq-R5DKc"
          line="Si"
        >
          <IoMdPersonAdd className="me-2" />
          Collegati
        </SidebarProfile>

        <SidebarProfile
          des="Responsabile di filiale presso Banco di Desio e della Brianza S.p.A.Responsabile di filiale presso Banco di Desio e della Brianza S.p.A."
          name="Domenica Peonia"
          image="https://media.licdn.com/dms/image/v2/D4D03AQHEgZjz8oa41w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1696689171976?e=1766620800&v=beta&t=e0Bs_aRrzZzIOqN6kPvPuzYplqqbQUTEMFgCkIKCYQQ"
          line="Si"
        >
          <IoMdPersonAdd className="me-2" />
          Collegati
        </SidebarProfile>

        <SidebarProfile
          des="Gestore Family Poe at Banco DesioGestore Family Poe at Banco Desio"
          name="Andrea Rendina"
          image="https://media.licdn.com/dms/image/v2/D4D03AQEg00IPB2gXhA/profile-displayphoto-shrink_100_100/B4DZYY02YZGkAY-/0/1744173235958?e=1766620800&v=beta&t=shAKBFasocqv4YxnJJf_iAzRZGbNMPz3bPHNBb1s4vI"
          line="Si"
        >
          <IoMdPersonAdd className="me-2" />
          Collegati
        </SidebarProfile>

        <SidebarProfile
          des="Senior Private Banker certificato AIPB presso Banco DesioSenior Private Banker certificato AIPB presso Banco Desio"
          name="Gian Piero Luigi Tamagno"
          image="https://media.licdn.com/dms/image/v2/C5603AQFGWwdsvtKmVg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1556283848034?e=1766620800&v=beta&t=obJtazQOuYVw3PSLkMpgdnnAhL34uN4EdR5qR4Z9NDQ"
          line="Si"
        >
          <IoMdPersonAdd className="me-2" />
          Collegati
        </SidebarProfile>

        <SidebarProfile
          des="Responsabile di Filiale presso Banco DesioResponsabile di Filiale presso Banco Desio"
          name="Cristian Sala"
          image="https://media.licdn.com/dms/image/v2/C4E03AQHl__rBZyoZXw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1653936132623?e=1766620800&v=beta&t=ArDqK5Q5TTVfFRlxZxsmg0ww2PKAoBA6H_P1zWMoU1I"
          line="No"
        >
          <IoMdPersonAdd className="me-2" />
          Collegati
        </SidebarProfile>
      </SidebarContainer>

      <SidebarContainer
        title="Persone che potresti conoscere"
        subtitle="Si"
        des="Dalla scuola o università di Sara"
      >
        <SidebarProfile
          des="CyberSecurity Analyst | SOC Analyst L1CyberSecurity Analyst | SOC Analyst L1"
          name="Giuseppe Federico"
          image="https://media.licdn.com/dms/image/v2/D4D03AQHExcIIFzRKhA/profile-displayphoto-shrink_100_100/B4DZR0QdmSG4AU-/0/1737117260601?e=1766620800&v=beta&t=cPRxqnPzbwPdROf89vtDPI4XbivdvqGf1pA_lWMR2nw"
          line="Si"
        >
          <IoMdPersonAdd className="me-2" />
          Collegati
        </SidebarProfile>

        <SidebarProfile
          des="Junior Developer @MSC Technology | React · TypeScript · .NET · gRPC · GraphQL"
          name="Hachim Ennaji"
          image="https://media.licdn.com/dms/image/v2/D4D03AQGcnC2w7K5H8w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1726998027529?e=1766620800&v=beta&t=FUc1W7Kg3vyL1c1i_191PODc8OTV5RA_yO9JFOEH1n8"
          line="Si"
        >
          <IoMdPersonAdd className="me-2" />
          Collegati
        </SidebarProfile>

        <SidebarProfile
          des="Junior Full Stack Web Developer | Passione per la programmazione e lo sviluppo di applicazioni moderne | Open to WorkJunior Full Stack Web Developer | Passione per la programmazione e lo sviluppo di applicazioni moderne | Open to Work"
          name="Francesco Gagliardi"
          image="https://media.licdn.com/dms/image/v2/D4E35AQFgow03-z-inw/profile-framedphoto-shrink_100_100/B4EZjI4jsDGwAk-/0/1755716926783?e=1765879200&v=beta&t=Rox2VLNUFcwQt4jAw3Zj7lnad6XSWUB47VTvFkbct10"
          line="Si"
        >
          <IoMdPersonAdd className="me-2" />
          Collegati
        </SidebarProfile>

        <SidebarProfile
          des="Frontend Developer presso Docsity - Epicode AmbassadorFrontend Developer presso Docsity - Epicode Ambassador"
          name="Stefano Proietti"
          image="https://media.licdn.com/dms/image/v2/D4D03AQHL-b1Hz6EKAQ/profile-displayphoto-shrink_100_100/B4DZTwkvbdGkAU-/0/1739202952243?e=1766620800&v=beta&t=GLq0irxXhdxHIfy83oxlRZM30KjdeQqISAh3lXMSzOA"
          line="Si"
        >
          <IoMdPersonAdd className="me-2" />
          Collegati
        </SidebarProfile>

        <SidebarProfile
          des="ComptiaSecurity+ CE | Junior SOC Analyst | Junior Cyber SecurityComptiaSecurity+ CE | Junior SOC Analyst | Junior Cyber Security"
          name="Giovanni Sammaritano"
          image="https://media.licdn.com/dms/image/v2/D4D35AQEYZvbLCyFAhg/profile-framedphoto-shrink_100_100/B4DZbOUyT4IAAk-/0/1747218277992?e=1765879200&v=beta&t=S4LPqZMnJTuwatZcoJSP6dSZkNwJXFlIK7CJgCD8IOY"
          line="No"
        >
          <IoMdPersonAdd className="me-2" />
          Collegati
        </SidebarProfile>
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
