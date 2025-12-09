import 'bootstrap/dist/css/bootstrap.min.css'
import Profile from './components/Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import NavBarL from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBarL />
      <Routes>

        <Route path="/profile/:id" element={<Profile />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
