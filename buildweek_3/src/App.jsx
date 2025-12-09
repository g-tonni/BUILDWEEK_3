import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import NavBarL from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBarL />
      <Profile />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
