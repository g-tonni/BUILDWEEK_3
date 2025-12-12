import 'bootstrap/dist/css/bootstrap.min.css'
import Profile from './components/Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import NavBarL from './components/NavBar'
import store from './redux/store'
import { Provider } from 'react-redux'
import HomePage from "./components/HomePage"
import ModaleImmagine from "./components/ModaleImmagine"
import { useState } from "react"
import JobP from './components/JobPage'

function App() {
  const [modalShow, setModalShow] = useState(false)



  const openModal = (value) => {
    setModalShow(value)
  }
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBarL />
        <ModaleImmagine show={modalShow}
          onHide={() => setModalShow(false)} />
        <Routes>
          <Route path="/" element={<HomePage openModal={openModal} />} />

          <Route path='/jobs' element={<JobP />} />
          <Route path="/profile/:id" element={<Profile openModal={openModal} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
