import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import UserProfile from './pages/UserProfile';
import Service from './pages/Service';

function App() {
  const home = "/";
  const services = "/services";
  const service = "/service/:id";
  const userprofile = "/user/:id";
  const about = "/about";

  return (
    <div className="App">
      <Routes>
        <Route path={home} element={<Home />} />
        <Route path={services} element={<Services />} />
        <Route path={about} element={<About />} />
        <Route path={userprofile} element={<UserProfile />} />
        <Route path={service} element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;
