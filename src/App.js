import './styles/App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import UserProfile from './pages/UserProfile';
import Service from './pages/Service';
import Register from './pages/Register';
import Login from './pages/Login';
import AddService from './pages/AddService';
import NavBar from './components/NavBar';

function App() {
  const home = "/";
  const services = "/services";
  const service = "/service/:id";
  const userprofile = "/user/:id";
  const about = "/about";
  const register = "/register";
  const login = "/register";
  const addService = "/addService"; // Pasiklaust del namingo patho

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path={home} element={<Home />} />
        <Route path={services} element={<Services />} />
        <Route path={about} element={<About />} />
        <Route path={userprofile} element={<UserProfile />} />
        <Route path={service} element={<Service />} />
        <Route path={register} element={<Register />} />
        <Route path={login} element={<Login />} />
        <Route path={addService} element={<AddService />} />
      </Routes>
    </div>
  );
}

export default App;