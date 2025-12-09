import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Profile />
    </BrowserRouter>
  );
}

export default App;
