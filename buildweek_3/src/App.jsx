import 'bootstrap/dist/css/bootstrap.min.css'
import Profile from './components/Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import NavBarL from './components/NavBar'
import store from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBarL />
        <Routes>
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
